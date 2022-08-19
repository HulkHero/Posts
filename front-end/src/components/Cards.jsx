import React from 'react'
import { Card,CardHeader,Avatar,CardMedia,CardContent,Typography,CardActions,IconButton, } from '@mui/material';
import {red} from"@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Cards = (props) => {
  return (
    <Card sx={{ }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {props.name[0]}
          </Avatar>
        }
        action={
          <IconButton >
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.date}
      />
      <Typography variant="h4" component="h4">{props.heading}</Typography>
      <CardMedia
        component="img"
        height="194"
        image=""
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.caption}
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton >
          <FavoriteIcon />
        </IconButton>
        </CardActions>

        </Card>

  )
}

export default Cards