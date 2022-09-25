const express = require('express')
const router = express.Router();
const homeContoller = require("../controllers/home_contoller");


router.get('/',homeContoller.home);
router.use('/users',require('./users'));
router.use('/users',require('./signup'));
router.use('/users',require('./login'));
//for any further routes it can be used form here -- router.name('/file',require(./filename));
// console.log('router is loaded');




module.exports = router;