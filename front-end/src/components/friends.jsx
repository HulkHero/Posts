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
export default function AlignItemsList() {

  const a = useContext(NoteContext)
    const [data, setData] = useState([]);

    useEffect(() => {
    Axios.get(`http://localhost:5000/showFriends/${a.id}`).then((res) => {
      console.log(res);
     setData(res.data.friends);
    })  
    
    }, [])
    

  return (
    <> 

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     <ListItem> <div>
        <Typography component="h5" variant='h5' >
            Friends
        </Typography>
    </div>
    </ListItem>
    <Divider variant='middle '></Divider>
    {data && data.map((element)=>{
      

      
     return(
      <>
       <ListItem alignItems="center">
      
        <ListItemAvatar>
          <Avatar >
            {element.name[0]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={element.name}
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
     </>)
    })}
    </List>
    </>
  );
}
