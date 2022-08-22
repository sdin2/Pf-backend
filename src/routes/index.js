require('dotenv').config();
const { Router } = require('express');
const { auth } = require('express-openid-connect');
const router = Router();
const newsRoute = require('./newsRoute');
const userRoute = require('./userRoute');
const loginRoute = require('./loginRoute');

router.use('/news', newsRoute);
router.use('/users', userRoute);
router.use('/login', loginRoute);

module.exports = router;
