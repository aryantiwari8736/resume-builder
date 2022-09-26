const mongoose = require('mongoose');
const mongoURI =  "mongodb+srv://aryantiwari:sanu1234@cluster0.0qa2gqs.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("MongoDb is connected succesfully ");
    })
}
module.exports = connectToMongo;