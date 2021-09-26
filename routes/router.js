const express = require('express');
const router = express.Router();

const { addUser, getUser } = require('../controller/users');

router
.route('/register')
.post(addUser)


router
.route('/login')
.post(getUser)


module.exports = router;