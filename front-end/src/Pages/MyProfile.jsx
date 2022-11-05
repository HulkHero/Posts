import { IconButton,TextField,Grid,styled,Button } from '@mui/material'
import React from 'react'
import DefaultImg from "./defaultProfileImg.jpg"
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import {useState,useEffect,useContext,useRef} from "react"
import NoteContext from "../context/noteContext"
import Axios from "axios"
const CssTextField = styled(TextField)({
  maxWidth:"600px",
  marginTop:"20px",
   ".MuiFormLabel-root":{
    textColor:"black",
    color:"black",
  
   },

   "& .MuiInputBase-input":{
    color:"black",
  
    minWidth:"250px",

   },

  '& label.Mui-focused': {
    color: '#0097a7',
   
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#0097a7',
    },
    '&:hover fieldset': {
      borderColor: '#0097a7',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0097a7',

     
    },
  },
});

const MyProfile = () => {
  const a = useContext(NoteContext)
  const [file, setFile] = useState();
  const [defaultText, setDefaultText] = useState("Status");
  const [user, setUser] = useState({
      status:"",
      createrId:a.id,
  });
  const [openSnack, setOpenSnack] = useState(false)
  
  const [previewUrl, setPreviewUrl] = useState(null);
  const [data, setData] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
      console.log("filereade")
    };
    fileReader.readAsDataURL(file);
  }, [file]);

useEffect( ()=>{
   
  Axios.get(`http://localhost:5000/getProfile/${a.id}`).then((response)=>{
    setData(response.data);
    console.log("got proile",response.data);
    
    
  }).catch(err =>{
    console.log(err)
  })


},[])

  const pickedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      console.log(pickedFile);
      setIsValid(true);
      setUser({...user,image:pickedFile});
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
    setDefaultText(e.target.value)
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    console.log("user",file)
    const formData= new FormData();
    formData.append("status",user.status)
    formData.append("createrId",user.createrId)
    formData.append("avatar",file);
    console.log(formData)
    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1])
    }
    
    if(a.token){
      console.log("sent")
      Axios.post("http://localhost:5000/avatar",formData,{headers:{'content-type': 'multipart/form-data'}}).then((response)=>{
        console.log(response)
        setOpenSnack(true)   
       })
  
  
    }
    else{
      console.log("login first")
    }  }
    useEffect(()=>{
      if(data){
    
        setDefaultText(data[0].Status)
        console.log(data[0],"status")
        const base64= btoa(new Uint8Array(data[0].avatar.data.data).reduce(function (data, byte) {
          return data + String.fromCharCode(byte);
      }, ''));
      const img=`data:image/png;base64,${base64}`
      setPreviewUrl(img)}

    },[data])
  
  

   
    

  return (<>
    
    <form onSubmit={(e)=>onSubmit(e)}>
     <Grid container style={{marginTop:"50px"}}>

    
    <Grid item xs={12} style={{display:"flex",justifyContent:"center"}} >
    <input
        
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
    <div style={{display:"flex", maxWidth:"200px",maxHeight:"200px",}}>
         {        
         previewUrl? <img src={previewUrl} style={{maxWidth:"200px",maxHeight:"200px",minWidth:"200px",minHeight:"200px", borderRadius:"100px",borderColor:"#cde8cc",border:"2px solid #cde8cc",boxShadow:"1px 1px 5px 5px #cde8cc",objectFit:"cover"}} alt={"Image Not Found"} />:<img src={DefaultImg} style={{maxWidth:"200px",maxHeight:"200px",borderRadius:"100px",borderColor:"#cde8cc",border:"2px solid #cde8cc",boxShadow:"1px 1px 5px 5px #cde8cc"}} alt={"not found"}></img>
}
         <div style={{position:"absolute",bottom:"9.5rem",marginLeft:"auto",boxShadow:"1px 1px 5px 3px #cde8cc",borderRadius:"50px"}}>
           <IconButton color="primary" onClick={pickImageHandler}>
             <AddAPhotoRoundedIcon></AddAPhotoRoundedIcon>
           </IconButton>
          </div>
    </div>
    
    
    </Grid>
    <Grid item xs={12} style={{display:"flex",justifyContent:"center", marginTop:"20px"}}><CssTextField label={"Status"} onChange={(e)=>handleChange(e)} value={defaultText} name="status" ></CssTextField></Grid>
    <Grid item xs={12} sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}><Button variant="contained" type="submit" sx={{alignSelf:"center",mt:"20px",width:"80%"}}>Update</Button></Grid>
    </Grid>
    </form>
    </> 
  ) 
}

export default MyProfile