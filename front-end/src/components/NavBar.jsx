import React from 'react'
import {AppBar,Tabs,Tab,Box,Drawer,Grid,Typography, Tooltip} from '@mui/material'
import {Link} from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
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
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius:"50px",
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover,&:focus': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    //  transform:"scaleX(1.1)"
    "@keyframes fade":{
      "0%":{
        marginRight:"20px",
        paddingRight:"0px"

      },
      "100%":{
        marginRight:"0px",
        paddingRight:"20px"
      }
     
    },
    animation:"fade 0.6s linear normal forwards",
    animationIterationCount:"1",
  },
  marginRight: "20px",
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      // '&:focus': {
      //   width: '20ch',
      // },
    },
    [theme.breakpoints.down('md')]: {
      width: '8ch',
      // '&:focus': {
      //   width: '20ch',
      // },
    },
  },
  "&:visited":{
    transform:"scaleX(1.1)",
  }
}));
const NavBar = () => {
  const [drawer, setDrawer] = React.useState(false)
    const [line, setLine] = useState(0)
  return (
     <div style={{marginBottom:"3rem"}}>
    <AppBar position="fixed" sx={{marginBottom:"2rem",mb:"50px"}}>
     
      <Box sx={{display:{xs:'none',sm:"block",minHeight:"50px"}}}>
      <Toolbar sx={{display: 'flex',minHeight:"50px", "&.MuiToolbar-root":{minHeight:"50px"}}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        <Tabs textColor="secondary" fontSize="large"   sx={{
          marginLeft:"auto",
          marginRight:"auto",
    "& button": { borderRadius: 4 },
    "& button:hover": { backgroundColor: "blue" },
    "& button:focus": { backgroundColor: "yellow" },
    "& button:active": { backgroundColor: "green" }
  }} indicatorColor="secondary" value={line} onChange={(e,value)=>{ setLine(value)}}>
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
        //  "& :hover":{
        //    backgroundColor:"#FFFFFF",
        //  },
        "&.MuiButtonBase-root":{
          '& :hover':{
            minWidth:"50px",
            
            padding:"0px",
            margin:"0px",
            backgroundColor:"#003767b3",
            textColor:"#3767b3",
              
          },
        },
        color:"#FFFFFF"}}  icon={line===3? <Tooltip title="Add Friends"><PersonAddAlt1Icon/></Tooltip>:<Tooltip title="Add Friends"><PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon></Tooltip>}  component={Link} to="/addFriends" ><Button sx={{color:"#FFFFFF"}}>
   
          Add Friends
        </Button>
        </Tab>
        </Tabs>
       
    <Button  sx={{ml:'auto',color:"#FFFFFF"}}><Link to="/" style={{textDecoration:"none",color:"#FFFFFF"}} >Login </Link> </Button>
              </Toolbar>

    </Box>

    <Box sx={{display:{xs:"block",sm:"none",minHeight:"50px"}}}>
      <Toolbar sx={{display:"flex",justifyContent:"center",minHeight:"50px"}}>
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