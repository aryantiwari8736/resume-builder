const express= require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
router.get('/login',usersController.login);
router.post('/create_session',usersController.create_session);
module.exports = router;