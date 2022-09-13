const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const friends = Schema({
    
           
            heading:{ type:String,
                                    },
            caption:{type:String},
            
            likes:{type:[String],
                   default:[]},
            date:{type:Object},
           
            rekuestSents:[{ type: Schema.Types.ObjectId, ref: 'Person' }],
            rekuestRecieved:[{ type: Schema.Types.ObjectId, ref: 'Person' }],
            frineds:[{ type: Schema.Types.ObjectId, ref: 'Person' }],
             image:{
                  data:Buffer,
                  contentType:String,
             },
            creater: { type: Schema.Types.ObjectId, ref: 'Person' },
   
  });
  
  const Friends = mongoose.model('Friends', friends,"friends");

  module.exports =Friends;