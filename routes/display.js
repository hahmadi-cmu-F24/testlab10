var express = require('express');
var router = express.Router();

const {getCustomers} = require('../controllers/database');   //this will load the controller file below

router.get('/', getCustomers);

module.exports = router;