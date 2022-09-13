import React from 'react'
import {AppBar,Tabs,Tab,Box,Drawer,Grid,Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
 import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../Theme';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const NavBar = () => {
  const [drawer, setDrawer] = React.useState(false)
    const [line, setLine] = useState(0)
  return (
    
    <AppBar position="fixed">
    <div >
      <Box sx={{display:{xs:'none',sm:"block"}}}>
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
        <Tab label="My Posts " sx={{color:"#FFFFFF"}} component={Link} to="/myPosts" >
        </Tab>
        <Tab label="Contact" sx={{color:"#FFFFFF"}}><Button sx={{color:"#FFFFFF"}}>
   
          Contact
        </Button>
        </Tab>
        </Tabs>
       
    <Button  sx={{ml:'auto',textColor:"#FFFFFF",color:"#FFFFFF"}}><Link to="signin" style={{textDecoration:"none",textColor:"#FFFFFF",color:"#FFFFFF"}} >Login </Link> </Button>
              </Toolbar>

    </Box>

    <Box sx={{display:{xs:"block",sm:"none"}}}>
      <Toolbar sx={{display:"flex",justifyContent:"center"}}>
              <Button onClick={()=>{setDrawer(!drawer)}} sx={{ mr:"auto", color:"#fff",width:"50px" }} ><MenuRoundedIcon></MenuRoundedIcon></Button>
              <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: "auto",
              pr:"4rem",
             alignSelf: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {"<Hulk>"}
          </Typography>
              </Toolbar>        
              <Drawer 
            anchor="left"
            open={drawer}
            onClose={()=>{setDrawer(false)}}
            onOpen={()=>(setDrawer(true))}
          >
            <Grid container  sx={{Width:"50%",height:"100%", Display:"flex",flexDirection:"column", backgroundColor:"primary.main"}} >
            <Link to="/signin" style={{textDecoration:"none",textColor:"#FFFFFF",color:"#FFFFFF",minWidth:"50%"}}><Button  sx={{textColor:"#FFFFFF",color:"#FFFFFF"}}>
              Login
            </Button>
            </Link>
               <Link  style={{textDecoration:'none'}}   to="/"> <Button onClick={()=>setDrawer(false)} sx={{ color:"#fff" }}>Posts</Button></Link>
               <Link style={{textDecoration:'none'}}  to="/myPosts"> <Button onClick={()=>setDrawer(false)} sx={{ color:"#fff" }}>{"My Posts  " }  </Button></Link>
               <Link style={{textDecoration:'none'}}  to="/addposts"> <Button onClick={()=>setDrawer(false)}  sx={{ color:"#fff" }}>Add Post</Button></Link>
               <Link style={{textDecoration:'none'}}  to="contact"> <Button onClick={()=>setDrawer(false)}  sx={{ color:"#fff" }}>Contact</Button></Link>

            </Grid>
            
          </Drawer>

            </Box>


      
       




    </div>
    </AppBar>
 
 

  )
}

export default NavBar;