
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const storySchema = Schema({
    
           
            heading:{ type:String,
                                    },
            caption:{type:String},
            authors:{type:String},
            likes:{type: Number},
            date:{type:Object},
            creater: { type: Schema.Types.ObjectId, ref: 'Person' },
   
  });
  
  const Story = mongoose.model('Story', storySchema,"storys");

  module.exports =Story;