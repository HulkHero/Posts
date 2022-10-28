import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Axios from "axios";
import NoteContext from "../context/noteContext";
import {useState ,useEffect,useContext} from "react";
import "./fri.css"
import FriendItem from './frienditem';
export default function AlignItemsList() {

  const a = useContext(NoteContext)
    const [data, setData] = useState([]);
   
    useEffect(() => {
      if(a.id){
    Axios.get(`http://localhost:5000/showFriends/${a.id}`).then((res) => {
      console.log(res);
     setData(res.data.friends);
    }) } 
    
    }, [])
    

  return (
    <> 

    <List sx={{ width: '100%', maxWidth: 360, backgroundColor:"#f0f2f5" }}>
     <ListItem> <div>
        <Typography component="h6" variant='h6' >
            Friends
        </Typography>
    </div>
    </ListItem>
    <Divider variant='middle '></Divider>
    {data && data.map((element)=>{
     return(
      <>
       <FriendItem props={element} id={a.id} ></FriendItem>
     </>)
    })}
    </List>
    
    </>
  );
}
