import React from 'react'
import {Grid } from "@mui/material"
import MyPosts from './MyPosts'
import MyProfile from './MyProfile'
const Profile = () => {
  return (<>
    <Grid container sx={{display:"flex",justifyContent:"space-around",mt:"40px",backgrountColor:"whitesmoke"}}>
        <Grid item xs={12} sm={3}  sx={{display:"flex",justifyContent:"center"}}>
            <div style={{position:{xs:"fixed",sm:"relative" }}}>
         <MyProfile></MyProfile>
         </div>        
        </Grid>
        <Grid item xs={12} sm={6} >
        <MyPosts></MyPosts>
        </Grid>
        <Grid item xs={0} sm={3} >
         {"right bar"}
        </Grid>
    </Grid>
   
    </> 
  )
}

export default Profile