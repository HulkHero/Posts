import React from 'react'
import {AppBar,Tabs,Tab,Box,Drawer,Grid,Typography, Tooltip} from '@mui/material'
import {Link} from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
 import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../Theme';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';

const NavBar = () => {
  const [drawer, setDrawer] = React.useState(false)
    const [line, setLine] = useState(0)
  return (
     <div style={{marginBottom:"4rem"}}>
    <AppBar position="fixed" sx={{marginBottom:"4rem",mb:"50px"}}>
     
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
        <Tabs textColor="secondary" fontSize="large" sx={{marginLeft:"auto"}} indicatorColor="secondary" value={line} onChange={(e,value)=>{ setLine(value)}}>
        <Tab sx={{'& .MuiSvgIcon-root':{
          fontSize:"xx large",
        },
        color:"#FFFFFF"}} icon={line===0? <Tooltip title="Home"><HomeIcon/></Tooltip> :< Tooltip title="Home"><HomeOutlinedIcon/></Tooltip>} to="/posts" component={Link}  >
        
          
       
        </Tab>
        <Tab sx={{'& .MuiSvgIcon-root':{
          fontSize:"xx large",
        },
        color:"#FFFFFF"}} icon={line===1? <Tooltip title="New Post"><PostAddIcon></PostAddIcon></Tooltip>: <Tooltip title="New Post"><PostAddOutlinedIcon></PostAddOutlinedIcon></Tooltip>} to="/addposts" component={Link} >
        
        </Tab>
        <Tab  sx={{'& .MuiSvgIcon-root':{
          fontSize:"xx large",
        },
        color:"#FFFFFF"}} icon={line===2? <Tooltip title="Profile"><PersonIcon/></Tooltip>:<Tooltip title="Profile"><PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon></Tooltip>} to="/myPosts" component={Link}  >
        </Tab>
        <Tab sx={{'& .MuiSvgIcon-root':{
          fontSize:"xx large",
        },
        "& :hover":{
          color:"#FFFFFF",
        },
        color:"#FFFFFF"}}  icon={line===3? <Tooltip title="Add Friends"><PersonAddAlt1Icon/></Tooltip>:<Tooltip title="Add Friends"><PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon></Tooltip>}  component={Link} to="/addFriends" ><Button sx={{color:"#FFFFFF"}}>
   
          Add Friends
        </Button>
        </Tab>
        </Tabs>
       
    <Button  sx={{ml:'auto',textColor:"#FFFFFF",color:"#FFFFFF"}}><Link to="/posts" style={{textDecoration:"none",textColor:"#FFFFFF",color:"#FFFFFF"}} >Login </Link> </Button>
              </Toolbar>

    </Box>

    <Box sx={{display:{xs:"block",sm:"none"}}}>
      <Toolbar sx={{display:"flex",justifyContent:"center"}}>
              <Button onClick={()=>{setDrawer(!drawer)}} sx={{ mr:"auto", color:"#fff",width:"50px" }} ><MenuRoundedIcon></MenuRoundedIcon></Button>
              <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Posts"
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
            <Link to="/" style={{textDecoration:"none",textColor:"#FFFFFF",color:"#FFFFFF",minWidth:"50%"}}><Button  sx={{textColor:"#FFFFFF",color:"#FFFFFF"}}>
              Login
            </Button>
            </Link>
               <Link  style={{textDecoration:'none'}}   to="/posts"> <Button onClick={()=>setDrawer(false)} sx={{ color:"#fff" }}>Posts</Button></Link>
               <Link style={{textDecoration:'none'}}  to="/myPosts"> <Button onClick={()=>setDrawer(false)} sx={{ color:"#fff" }}>{"My Posts  " }  </Button></Link>
               <Link style={{textDecoration:'none'}}  to="/addposts"> <Button onClick={()=>setDrawer(false)}  sx={{ color:"#fff" }}>Add Post</Button></Link>
               <Link style={{textDecoration:'none'}}  to="/addFriends"> <Button onClick={()=>setDrawer(false)}  sx={{ color:"#fff" }}>Add Friends</Button></Link>

            </Grid>
            
          </Drawer>

            </Box>


      
       




            
    </AppBar>
    </div>
 
 

  )
}

export default NavBar;