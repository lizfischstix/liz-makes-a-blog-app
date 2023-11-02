const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute.js');


//going here, continue to use localhost:3001/
router.use('/', homeRoutes);
//going there, continue to use localhost:3001/api
router.use('/api', apiRoutes);

module.exports = router;