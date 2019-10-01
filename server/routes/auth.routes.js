const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});


const authCtrl = require('../controllers/auth.controller');
const profileCtrl = require('../controllers/profile.controller');


router.get('/profile', auth, profileCtrl.profileRead);

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.get('/usuarios',authCtrl.getUsers );

module.exports = router;