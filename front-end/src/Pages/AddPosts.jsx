import React from 'react'
import Axios from 'axios'
import { useState,useContext,useRef,useEffect } from 'react';
import { Button, TextField ,Grid} from '@mui/material';
import NoteContext from "../context/noteContext"
const AddPosts = () => {
  const a = useContext(NoteContext)
  const [file, setFile] = useState();
  const [user, setUser] = useState({
    heading:"",
    caption:"",
    _id:a.id,
    
  });
  
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      console.log(pickedFile);
      setIsValid(true);
      //setUser({...user,image:pickedFile});
      console.log("file",file)
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };



  const handleChange = (e) => {
    setUser((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

 const onSubmit=(e)=>{
  e.preventDefault();
  console.log("user",user.image)
     Axios.post("http://localhost:5000/addStory",{heading:user.heading,caption:user.caption,id:user._id}).then((response)=>{
      console.log(response)
     })

  }
  return (
    <Grid container  sx={{display: 'flex',justifyContent: 'center', mt:"20px"} }>
      <form onSubmit={(e)=>onSubmit(e)}>
      <Grid item xs={12}><TextField type="heading" value={user.heading} name="heading" id="outlined-basic"  onChange={(e)=>handleChange(e)}></TextField></Grid> 
          <Grid item xs={12}>
          <input
        
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div style={{maxWidth:"300px",maxHeight:"300px"}}>
          {previewUrl && <img src={previewUrl} style={{maxWidth:"300px",maxHeight:"300px"}} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
         <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
         </Button>
          </Grid>

      <Grid item xs={12}><TextField type="caption" value={user.caption} name="caption" id="outlined-basic" onChange={(e)=>handleChange(e)}></TextField></Grid>
      <Grid item xs={12}><Button variant="outlined" type="submit" >Post</Button></Grid>
      </form>


    </Grid>
  )
}

export default AddPosts;