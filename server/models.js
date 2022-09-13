const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name:{
    type:String,
  },
  email:{
    type:String,
  },
  password:{
    type:String,
  },
  Posts: [{ type: Schema.Types.ObjectId, ref: 'Story' }],

  likedPosts: [{ type: Schema.Types.ObjectId, ref: 'Story' }]

});




const Person = mongoose.model('Person', personSchema,"persons");


module.exports=Person;

