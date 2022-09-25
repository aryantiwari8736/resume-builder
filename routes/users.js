const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
router.get("/resume",userController.resume);
router.post('/createmydata',userController.resume_data);
router.get('/show_resume',userController.show_resume);
module.exports = router;