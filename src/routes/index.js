require('dotenv').config();
const { Router } = require('express');
const { auth } = require('express-openid-connect');
const router = Router();
const newsRoute = require('./newsRoute');
const userRoute = require('./userRoute');
const loginRoute = require('./loginRoute');

router.use('/news', newsRoute);
router.use('/users', userRoute);
<<<<<<< HEAD
router.use('/login', loginRoute);
=======
router.use('/login', loginRoute)
>>>>>>> 956fe30aeb75aa02305560690d986cd35f58c8bb

module.exports = router;
