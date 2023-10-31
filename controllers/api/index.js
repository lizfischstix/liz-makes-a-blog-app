const router = require('express').Router();
const articleRoutes = require('./articleRoutes');
const commentRoutes = require('./commentRoutes');
const dashRoutes = require('../dashRoutes');
const loginRoutes = require('../homeRoute');

router.use('/articeRoutes', articleRoutes);
router.use('/commentRoutes', commentRoutes);
router.use('./dashRoutes', dashRoutes);
router.use('./loginRoutes', loginRoutes);

module.exports = router;
