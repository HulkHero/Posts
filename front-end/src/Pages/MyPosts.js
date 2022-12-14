import React from 'react'

import {Paper,Button} from "@mui/material"
import { useState ,useEffect,useContext} from 'react'
import Cards from '../components/Cards';
import Axios from "axios";
import NoteContext from '../context/noteContext'

const MyPosts = () => {
    const a = useContext(NoteContext)
    const [lik,setLik]=useState()
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

    const [data, setData] = useState([]);
     
    useEffect(() => {
        console.log("id in my posts",a.id)
       const id=a.id
      Axios.get(`http://localhost:5000/myPosts/${id}`,{headers:{
        'Authorization':a.token
       }}).then((response) => {
        if(response.status==400){
          alert("you are not authorized")
        }
        else{
          setData(response.data);
          console.log("return my posts",response.data)

        }
      
        
     

      }).catch(response => {
        alert(response.status, "you are not authorized")
      })
      
    }, [ a.id])

    const onDelete=(id)=>{

      console.log("delete my posts",id)
       Axios.delete(`http://localhost:5000/deletePost/${id}/${a.id}`).then((response)=>{
        alert("post deleted")
       
        setData(data.filter((val)=>{
          return val._id != id; 
       }))}

       )
    }
    const ondislike=(id)=>{
      
      Axios.put(`http://localhost:5000/dislikePost/${id}/${a.id}`).then((response) => {
        setLik(response.data.likes.length);   
      })

   }
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


  return (
    <>
   
    <Paper evaluation={2} style={{minWidth: "100%",display:"flex:",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100%",backgroundColor:"whitesmoke"}} spacing={2}>
          
    {data && data.map((element)=>{
           const base64= btoa(new Uint8Array(element.image.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, ''));
      
        const img=`data:image/png;base64,${base64}`
       return (
        <>
        <div style={{display: 'flex',flexDirection: 'column',alignItems:"center"}}>
         <Cards key={element._id} id={element._id} ondislike={ondislike} userId={a.id} likes={element.likes}  name={element.creatername} date={element.date} image={img}  heading={element.heading} caption={element.caption} onlike={onlike}  displayLike={lik} onDelete={onDelete} isMyPosts={true} ></Cards>
        </div>
        </>
      )
       
    })}


    </Paper>
    </>
  )
}

export default MyPosts;