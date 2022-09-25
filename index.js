const express =require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 8000;
//used for session cookie -
const session = require('express-session');

const connectToMongo = require('./config/db');
connectToMongo();


app.use(express.urlencoded());
//use express router --
app.use('/',require('./routes'))
app.use(express.static('assets'));
//setup the view engine --
app.set('view engine','ejs');
app.set('views','./views');

//using cookie -- 
app.use(cookieParser());


//listening our server -- 
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:  ${err}`);
    }
    console.log("Your server is running on port",port);
})