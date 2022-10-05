import React from 'react'
import { Card,CardHeader,Avatar,CardMedia,CardContent,Typography,CardActions,IconButton, Container, } from '@mui/material';
import {red} from"@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useContext } from 'react';
import NoteContext from '../context/noteContext';
import {useState,useEffect} from "react"
const Cards = (props) => {
  const a= useContext(NoteContext)
    console.log("a.id",a.id)
  const [like, setLike] = useState(false)
  const [num, setnum] = useState(props.likes.length)
 // const base64= btoa(String.fromCharCode(...new Uint8Array(props.image)));
  var date = new Date(props.date);
  var options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
};
let likess
var result = date.toLocaleDateString('en', options);


  useEffect(() => {
    if (props.likes?.includes(a.id)){
      setLike(true)
    }
      
  }, [])

  // useEffect(() => {
  //   Axios.get(`http://localhost:5000/likes/${props.id}/${a.id}`).then((response)=>{
          
      
  //   })


  // }, [num])
  
  

  return (
   
    <Card elevation={3} sx={{  maxWidth:"80%",minWidth:"80%",alignSelf:"center",mb:2,mt:2,borderRadius:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {props.name[0]}
          </Avatar>
        }
        action={
          props.isMyPosts==true? 
          <IconButton onClick={()=>{props.onDelete(props.id)}}>
           <DeleteIcon  ></DeleteIcon>
          </IconButton>:
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        }
        title={props.name}
        subheader={result}
      />
      <Typography variant="h5" component="h5" sx={{paddingLeft:"6px"}}>{props.heading}</Typography>
      <Container sx={{display: "flex", justifyContent:"center"}}>
      <CardMedia
        component="img"
        
        image={props.image}
        alt="Paella dish"
        sx={{maxHeight:"300px",maxWidth:"400px",mt:2,position:"center",justifyContent:"center",objectFit:"scale-down"}}
      />
      </Container>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.caption}
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton onClick={()=>{ if(like==true){props.ondislike(props.id);setnum(props.likes.length--);
        setLike(false)

       }else{
          
          props.onlike(props.id);
          setLike(true)
          setnum(props.likes.length++)
        }}} >
         {  like==true? <FavoriteIcon sx={{color:'#ab0909'}} />  :<FavoriteBorderIcon></FavoriteBorderIcon>    
         }
        </IconButton>
        <Typography variant="body1" color="text.primary" sx={{alignSelf:"center"}}>{props.displayLikes? props.displayLikes :props.likes.length}</Typography>
        </CardActions>
        

        </Card>
        

  )
}

export default Cards

// <IconButton onClick={()=>{setLike(!like);  if(like==true){props.ondislike(props.id);setnum(props.likes.length++)
// }else{
   
//    props.onlike(props.id);
//    setnum(props.likes.length--)
//  }}} >
//   {  like==true? <FavoriteIcon color="error" />  :<FavoriteBorderIcon></FavoriteBorderIcon>    
//   }