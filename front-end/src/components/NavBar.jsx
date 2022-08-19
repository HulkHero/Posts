import React from 'react'
import {AppBar,Tabs,Tab} from '@mui/material'
import {Link} from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
 import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const [line, setLine] = useState(0)
  return (
    
    <AppBar position="sticky">
    <div >
      <Toolbar sx={{display: 'flex',}}>
      
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Tabs textColor="secondary"  indicatorColor="secondary" value={line} onChange={(e,value)=>{ setLine(value)}}>
        <Tab label="Posts" to="/" component={Link} sx={{color:"#FFFFFF"}} >
        
          
       
        </Tab>
        <Tab label="New Posts " to="/addposts" component={Link} sx={{color:"#FFFFFF"}}>
        
        </Tab>
        <Tab label="My Posts " sx={{color:"#FFFFFF"}} ><Button variant="h6" component="div" sx={{color:"#FFFFFF"}} >
          My Posts
        </Button>
        </Tab>
        <Tab label="Contact" sx={{color:"#FFFFFF"}}><Button sx={{color:"#FFFFFF"}}>
   
          Contact
        </Button>
        </Tab>
        </Tabs>
       
    <Button  sx={{ml:'auto',textColor:"#FFFFFF",color:"#FFFFFF"}}><Link to="signin" style={{textDecoration:"none",textColor:"#FFFFFF",color:"#FFFFFF"}} >Login </Link> </Button>
      
      </Toolbar>
    </div>
    </AppBar>
 
 

  )
}

export default NavBar;