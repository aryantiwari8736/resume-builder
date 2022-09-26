const mongoose = require('mongoose');
const resumeSchema = new mongoose.Schema({
    name:{
        type:String,   
    },user:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'User'
    },

    email:{
  type:String
    },
    about:{
        type:String
    },

},{
    timestamps:true
}
);
const Resume = mongoose.model('Resume',resumeSchema); // here first parameter is a collection name 
module.exports = Resume;