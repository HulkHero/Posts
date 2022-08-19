import { Grid,Box, } from '@mui/material'
import React from 'react'
import CardContainer from '../components/CardContainer'

const Home = () => {
  return (
    <Box  sx={{bgcolor:"primary",}}>
        <Grid container xs={12} sx={{display: 'flex',justifyContent: 'space-around',color:"black"}} >
          <Grid item xs={3}>hello</Grid>
          <Grid item xs={6}><CardContainer></CardContainer></Grid>
          <Grid item xs={3} >Right Bar</Grid>
           



        </Grid>

    </Box>
  )
}

export default Home