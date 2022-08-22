import React from 'react'
import {Paper,Button} from "@mui/material"
import { useState ,useEffect} from 'react'
import Cards from './Cards';
import Axios from "axios";


const CardContainer = () => {
 // var data;
 
 const [data,setData]=useState([])
   
  
    useEffect(() => {
       Axios.get("http://localhost:5000/").then((response) => {
        console.log("response:data", response.data)
         setData(response.data)
        })
     
        
    },[])
  return (
    <>
   
    <Paper evaluation={2} style={{minWidth: "100%",display:"flex:",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100%",backgroundColor:"#cde8cc"}} spacing={2}>
          
    {data && data.map((element)=>{
           const base64= btoa(new Uint8Array(element.image.data.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
        }, ''));
        console.log("base64",base64)
        const img=`data:image/png;base64,${base64}`
       return (
        <>
        <div style={{display: 'flex',flexDirection: 'column',alignItems:"center"}}>
         <Cards key={element._id} name={element.creatername} date={element.date} image={img}  heading={element.heading} caption={element.caption}></Cards>
        </div>
        </>
      )
       
    })}


    </Paper>
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