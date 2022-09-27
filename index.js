const express =require('express');
const env = require('./config/enviornment');
const cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 8000;

var flash = require('connect-flash');

//connecting database
const connectToMongo = require('./config/db');
connectToMongo();
//used for session cookie -
// const session = require('express-session');y
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded()); 
//using cookie -- 
app.use(cookieParser());
app.use(express.static(env.asset_path));
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.use(flash());

//setup the view engine --
app.set('view engine','ejs');
app.set('views','./views');


//using express session  // mongo store is used to store the session cookie in db
app.use(session ({

    name:"Ineuron",

    secret:env.session_cookie, //encode decode key 
    saveUninitialized:false,
    resave:false,
    cookie:{maxAge:(1000*60*10)},  //time how long our cookie remain valid // session time  in milisecond
    store:new MongoStore({
        
            mongoUrl:'mongodb://localhost:27017',
            autoRemove:'disabled' 
        
    },function(err){
        console.log(err );
    })
}))
app.use(passport.initialize());
app.use(passport.session());


//use express router --
app.use('/',require('./routes'))

app.get( "*",function(req,res){
    res.send("404 eror page");
} )

//listening our server -- 
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:  ${err}`);
    }
    console.log("Your server is running on port",port);
})