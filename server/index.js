const express=require("express")
const mongoose = require("mongoose")
const cors=require("cors");
var ObjectId = require('mongodb').ObjectId;
const bcrypt=require("bcrypt");
const {signup,login}=require("./users-controllers")
const Hello = require("./module");
const Person = require("./models");
const Story = require("./modelsStory");
const bodyParser = require("body-parser");

const cookieParser=require("cookie-parser");
const {auth} =require("./auth");
require('dotenv').config();
const app=express();
app.use(express.json());
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://Hulk:Hulk%401322@cluster0.cmdv1.mongodb.net/hulk2?retryWrites=true&w=majority").then((err,res)=>console.log(err));
app.use(cors());

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
 app.get('/getPosts',(rek,res)=>{
  console.log("inside get")
    
   Hello.find({ },(rek,result)=>{
     if (result){
      res.json(result);
    
     }

   })



 })
 app.post("/posts",(rek,res)=>{
  console.log("in posts")
     names=rek.body.name;
     posts=rek.body.posts;
     email="z"
     password="hamm"
     author="hello"
   console.log("after names")
     const Hello2 = new Hello({
      name:names,
      email:email,
      password:password,
      
      posts:[
        {
          heading:posts.heading,
          caption:posts.caption,
          date:new Date("<YYYY-mm-dd>"),
          authors:author,
          likes:0
        },
      ]
    

     })

     Hello2.save();

     res.json("saved")


 }) 

 app.post("/addPosts",(rek, res)=>{
  
 

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
  
  //const user=  Person.find()
 const user= await Person.find({},{name:1}).populate('Posts')

 //const user=await Story.find({}).populate('creater')
 //console.log(user.creater[0].name)
 res.json(user)

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
 app.post('/addStory',async(rek,res)=>{
  console.log("entering stories")
   id=rek.body.id;
   heading=rek.body.heading;
   caption=rek.body.caption;
  console.log("id",id)
 const story1 =await new Story({
   heading: heading,
   creater: ObjectId(id),
    caption:caption,
    date:new Date("<YYYY-mm-dd>"),
    likes:0,                                // assign the _id from the person
 });
 
 console.log("before save")
 story1.save();
 console.log(story1._id) ///user  id here
  await Person.updateOne({_id:id},{$push:{Posts:story1._id}})
 
 console.log("after save")
  
})



app.post('/addUser',(rek,res)=>{
  console.log("hello")
  const Person2 = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Idfn Fleming io dsa',
    email: "zhammad",
    password:"helloworld",
    Posts:null,
  })
  Person2.save();

  console.log("hello")
  
  console.log("hello")
  console.log("author",Person2._id)
  res.json("saaved")
})







app.listen( 5000,(rek,res)=>{
    console.log("server is up")
})

/* adding then  listening for changes */





