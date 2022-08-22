import React from 'react'
import { Card,CardHeader,Avatar,CardMedia,CardContent,Typography,CardActions,IconButton, } from '@mui/material';
import {red} from"@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Cards = (props) => {

 // const base64= btoa(String.fromCharCode(...new Uint8Array(props.image)));
  var date = new Date(props.date);
  var options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
};

var result = date.toLocaleDateString('en', options);
  return (
   
    <Card elevation={3} sx={{  maxWidth:"80%",minWidth:"80%",alignSelf:"center",mb:5,mt:2}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {props.name[0]}
          </Avatar>
        }
        action={
          <IconButton onClick={()=>{props.onDelete(props.id)}}>
           <DeleteIcon  ></DeleteIcon>
          </IconButton>
        }
        title={props.name}
        subheader={result}
      />
      <Typography variant="h5" component="h5" sx={{paddingLeft:"6px"}}>{props.heading}</Typography>
      <CardMedia
        component="img"
        
        image={props.image}
        alt="Paella dish"
        sx={{maxHeight:"300px",maxWidth:"400px",mt:2}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.caption}
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton >
          <FavoriteIcon />
        </IconButton>
        </CardActions>

        </Card>
        

  )
}

export default Cards