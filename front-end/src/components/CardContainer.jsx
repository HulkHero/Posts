import React from 'react'
import {Paper,Button} from "@mui/material"
import { useState ,useEffect} from 'react'
import Cards from './Cards';
import Axios from "axios";


const CardContainer = () => {

  const [data,setData]=useState([])
    const [post, setPost] = useState([
        {
            names:"",
            date:"",
            heading:"",
            caption:"",


        }
    ])
     const getData= async()=>{
     

     }
    useEffect(() => {
       Axios.get("http://localhost:5000/").then((response) => {
        console.log("response:data", response.data)
      //  setPost([...post,{
       // names:response.data.name,
        // date:response.data.Posts.date,
        // heading:response.data.Posts.heading,
         //caption:response.data.Posts.caption 
         setData(response.data)
         console.log("data",data)
        })
     
        
    },[])
    
  console.log("data outside",data)

  return (
    <>
   
    <Paper evaluation={1} spacing={2}>
          
    {data && data.map((element)=>{
       return (
        <div>
       

        {element.Posts.map((posts)=>{
         console.log(posts)
          return(
            <>
        
            <Cards key={element._id} name={element.name} date={posts.date} heading={posts.heading} caption={posts.caption}></Cards>
            </>
            )

        })}
        </div>
      )
       
    })}


    </Paper>
    </>
  )
}

export default CardContainer