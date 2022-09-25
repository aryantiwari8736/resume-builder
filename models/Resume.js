const mongoose = require('mongoose');
const resumeSchema = new mongoose.Schema({
    name:{
        type:String,   
    },

    email:{
  type:String
    },
    about:{
        type:String
    }

},
);
const Resume = mongoose.model('Resume',resumeSchema); // here first parameter is a collection name 
module.exports = Resume;