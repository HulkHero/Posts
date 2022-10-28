import React from 'react'
import {Grid } from "@mui/material"
import MyPosts from './MyPosts'
import MyProfile from './MyProfile'
const Profile = () => {
  return (<>
    <Grid container sx={{display:"flex",justifyContent:"space-around",mt:"40px"}}>
        <Grid item xs={3}  sx={{display:"flex",justifyContent:"center"}}>
            <div style={{position:"fixed" }}>
         <MyProfile></MyProfile>
         </div>        
        </Grid>
        <Grid item xs={6} >
        <MyPosts></MyPosts>
        </Grid>
        <Grid item xs={3} >
         {"right bar"}
        </Grid>
    </Grid>
   
    </> 
  )
}

export default Profile