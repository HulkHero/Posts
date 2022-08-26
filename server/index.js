const express=require("express")
const mongoose = require("mongoose")
const cors=require("cors");
var ObjectId = require('mongodb').ObjectId;
const bcrypt=require("bcrypt");
const {signup,login}=require("./users-controllers")
const multer=require("multer");
const Hello = require("./module");
const Person = require("./models");
const Story = require("./modelsStory");
const bodyParser = require("body-parser");
const fs= require('fs');
const cookieParser=require("cookie-parser");
const {auth} =require("./auth");
require('dotenv').config();
const app=express();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000
}));
app.use(bodyParser.json());

app.use(cors());
console.log("env",process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL).then((err,res)=>console.log(err));

app.use(cookieParser());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname )
    }
});
  
var upload = multer({ storage: storage });

app.get('/myPosts/:id',auth,async(rek,res)=>{
  
  id= rek.params.id
  console.log("id: ",id)
  if(id){
    const user= await Story.find({creater:id})
    res.status(202).send(user)
 

  }
  else{
    res.status(400).json("ID not found.Your are not authorized")
  }

 
 
  

})

app.delete("/deletePost/:id/:userid",async(rek,res)=>{
  console.log("id ")
  id = rek.params.id;
  userid=rek.params.userid;
  if(id){
    
     await Person.updateOne({_id:userid},{$pull:{Posts:id} })
    const story= await Story.findOne({_id:id})
    console.log(story)
     fs.unlink("uploads/"+story.imagename,(err)=>{
      if(err){console.log(err)}
     })
     await Story.findByIdAndRemove({_id:id}).exec()
     
     res.status(202).json("Post deleted")


  }
  else
  {
    res.status(300).send("id not found")
  }
})


 

  app.post("/signup",signup,(rek,res)=>{
     
    res.json("login now")
     
  })

  
  app.post("/login",login,(rek,res)=>{
     
    
    
    res.send(res.locals.user)
 })








app.get("/data",auth,async(req, res) => {
   await Hello.find({}, (err, result) => {
      if (err) {
       // res.json("error")
       console.log("error")
        res.json(err);
      } else {
      
        res.json(result);
      
        console.log("afterdata")
     
      }
    }).clone().catch(function(err){ console.log(err)});
  });




// stories an user 
app.get("/",async(req, res) => {
  
  const person= await Person.find({},{email:1})
 //const user= await Person.find({},{name:1}).populate('Posts')

 const posts= await Story.find().sort({_id:-1})
 //const user=await Story.find({}).populate('creater')
 //console.log(user.creater[0].name)
 res.send({person,
           posts})
res.end()
 // await Story.find({}, (err, result) => {
  //   if (err) {
      // res.json("error")
  //    console.log("error")
   //    res.json(err);
   //  } else {
     
   //    res.json(result);
     
   //    console.log("afterdata")
    
  //   }
   //}).clone().catch(function(err){ console.log(err)});
 });
 app.post('/addStory',upload.single("image"),async(rek,res)=>{
  console.log("entering stories") 
   heading=rek.body.heading;
   caption=rek.body.caption;
   id=rek.body.id;
   creatername=rek.body.creatername;
   console.log("id",id)
 const story1 =await new Story({
   heading: heading,
   creater: ObjectId(id),
    caption:caption,
    date:Date.now(),
    
    creatername:creatername,
    imagename:rek.file.filename,
    image: {
      data: fs.readFileSync('uploads/' + rek.file.filename),
      contentType: 'image/png'
  }                                // assign the _id from the person
 });
 story1.save();
  await Person.updateOne({_id:id},{$push:{Posts:story1._id}})
 res.send("saved")
 console.log("after save")
  
})

app.put("/likePost/:id/:userId",async(rek,res)=>{
     console.log("entering like post")
       id =rek.params.id;
       userId =rek.params.userId;
       console.log("id",id)
       const user= await Story.findOneAndUpdate({_id:id},{$addToSet:{likes:userId}})
       const user2=await Story.findOne({_id:id},{likes:1})
    console.log("user",user2)
    res.send(user2)
      

})
app.put("/dislikePost/:id/:userId",async(rek,res)=>{
  console.log("entering dislike post")
    id =rek.params.id;
    userId =rek.params.userId;
    console.log("id",id)
    const user= await Story.findOneAndUpdate({_id:id},{$pull:{likes:userId}})
    const user2=await Story.findOne({_id:id},{likes:1})
    console.log("user",user2)
    res.send(user2)

})













app.listen( 5000,(rek,res)=>{
    console.log("server is up")
})

/* adding then  listening for changes */





