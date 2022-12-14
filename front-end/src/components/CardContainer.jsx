import React from 'react'
import {Paper,Button,Box} from "@mui/material"
import { useState ,useEffect} from 'react'
import Cards from './Cards';
import Axios from "axios";
import axios from 'axios';
import { useContext } from 'react';
import NoteContext from '../context/noteContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularProgress from '@mui/material/CircularProgress'
const CardContainer = () => {
  useEffect(() => {
    console.log(window.scrollY)
 
   },[window.scrollY])
 // var data;
 const a= useContext(NoteContext)
 const [data,setData]=useState([])
 const [lik,setLik]=useState()
 const [skip,setSkip]=useState(0)
 const [hasMore,setHasMore]=useState(true)
// var skip=0;
 var limit=2;
 if (a.token)
 {}
 else{
   const getToken=sessionStorage.getItem("token");
  
     const getid=sessionStorage.getItem("id");
     const getcreatername=sessionStorage.getItem("creatername");
   if(getToken!==null){
     a.setToken(getToken)
     a.setId(getid)
     a.setcreatername(getcreatername)
   }
 }
 console.log(window)
   
  
    useEffect(() => {
      Axios.get(`http://localhost:5000/batchData/${skip}/${limit}`).then((response)=>{
       console.log("response")
      
        console.log("response",response)
         setSkip(2)
        setData(response.data)
     

    })
      

    },[a.id])

    const onlike=(id)=>{
      if (a.id){
        Axios.put(`http://localhost:5000/likePost/${id}/${a.id}`).then((response) => {
         
          console.log("response:dislike", response)
          setLik(response.data.likes.length);
          console.log(lik)
      
        })

      }
      else{ console.log("login first")}
     

    }
    const ondislike=(id)=>{
      
      Axios.put(`http://localhost:5000/dislikePost/${id}/${a.id}`).then((response) => {
        setLik(response.data.likes.length);
           
        // setData(data.map((val)=>{
         
        //   if (val.likes.length>=0 && data.length>0)
        //   {
        //   return(
        //     val._id==id && val.likes?  val.likes=val.likes.filter(item=>item !==  a.id): val
        //   )}
        // }))
        
     
      })

   }

   
   console.log("rendering")

   const fetchMoreData=async()=>{
    setSkip(skip+2);
    console.log("inside fetchMoreData")
    
    
    console.log("skip",skip)
    console.log("limit",limit)
    await Axios.get(`http://localhost:5000/batchData/${skip}/${limit}`).then((response)=>{
       
      
        console.log("response",response)
       
        
        setData(data.concat(response.data))
      

    }).catch(response=>{
      console.log("response error",response)
      if (response.response.status ==300){
        console.log("300")
        setHasMore(false)
      }
    })
   }

  return (
    <>
   {
    <Paper evaluation={0} sx={{minWidth: "100%",display:"flex:",flexDirection:"column",alignItems:"center",border:"0px",boxShadow:"none",justifyContent:"center",minHeight:"100%",backgroundColor:"#f0f2f5"}} spacing={2}>
    <InfiniteScroll
     dataLength={data.length}
     next={fetchMoreData}
     hasMore={hasMore}
     loader={ 
      <div style={{ display: 'flex',justifyContent:"center" }}>
      <Box sx={{ display: 'flex',justifyContent:"center" }}>
      <h4 >Loading...</h4>
    </Box>
    </div>
    }
    //  <h4>loading...</h4>
     endMessage={
      <p style={{ textAlign: "center" }}>
        <b>Khatam!!!</b>
      </p>
    }
    >      
    { data.map((element)=>{
           const base64= btoa(new Uint8Array(element.image.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, ''));
       
        const img=`data:image/png;base64,${base64}`
       return (
        <>
        <div style={{display: 'flex',flexDirection: 'column',alignItems:"center"}}>
         <Cards key={element._id} ondislike={ondislike} userId={a.id} likes={element.likes} id={element._id} name={element.creatername} date={element.date} image={img}  heading={element.heading} caption={element.caption} onlike={onlike} displayLike={lik} isMyPosts={false}></Cards>
        </div>
        </>
      )
       
    })}

</InfiniteScroll>
    </Paper>
}
    </>
  )
}

export default CardContainer

/*
 <>
   
    <Paper evaluation={2} style={{minWidth: "100%",display:"flex:",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#cde8cc"}} spacing={2}>
          
    {data && data.map((element)=>{

       return (
        <div style={{display: 'flex',flexDirection: 'column',alignItems:"center"}}>
       

        {element.Posts.map((posts)=>{
        
      const base64= btoa(new Uint8Array(posts.image.data.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
    }, ''));
        
        //const base64= btoa(String.fromCharCode(...new Uint8Array(posts.image.data.data)));
       //const base64= btoa(String.fromCharCode(...new Uint8Array(posts.image.data.data)));
        console.log("base64",base64)
         const img=`data:image/png;base64,${base64}`
       
          return(
            <>
         
            <Cards key={element._id} name={element.name} date={posts.date} image={img}  heading={posts.heading} caption={posts.caption}></Cards>
            </>
            )

        })}
        </div>
      )
       
    })}


    </Paper>
    </>*/

    // const cancelToken=Axios.CancelToken.source()
    // Axios.get("http://localhost:5000/",{cancelToken:cancelToken.token}).then((response) => {
    //  console.log("response:data", response)
    //   setData(response.data)
    //  }).catch((error) => {
    //      if(axios.isCancel(error)){
    //        console.log("error:cancel",error)
    //      }
    //  })

    //  return(()=>{
    //    cancelToken.cancel()

    //  }
    //  )