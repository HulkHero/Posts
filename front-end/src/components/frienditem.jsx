import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React,{useState,useEffect} from 'react'
import Axios from "axios"
const FriendItem = (props) => {
     const [show, setShow] = useState(false);
     const [text, setText] = useState("");
     console.log("props",props.id)
     useEffect(()=>{
        if(show){
            console.log("inside useEFFEct friend ")
            Axios.get(`http://localhost:5000/getStatus/${props.id}/${props.props._id}`).then((response)=>{
                
                console.log(response)
                setText(response.data[0].Status)
              
            }).catch((error)=>{
                console.log(error)
            })
            
        }
     },[show])

  return (
    <>
    <ListItem alignItems="center">
      
      <ListItemAvatar>
        <Avatar >
          {props.props.name[0]}
        </Avatar>
      </ListItemAvatar>
      <div >
      <ListItemText onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}
        primary={props.props.name}
        sx={{":hover":{
            cursor:"pointer"
        }}}
      >
      </ListItemText>
       {show? <div style={{position:"absolute",minWidth:"150px",zIndex:"10000",backgroundColor:"white",marginLeft:"10px",padding:"10px"}} >Status: {text}</div>
       :" "
  }
  </div>
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
  )
}

export default FriendItem