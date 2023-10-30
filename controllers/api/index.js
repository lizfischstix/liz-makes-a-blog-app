const router = require('express').Router();
const articleRoutes = require('../articleRoutes');
const commentRoutes = require('../commentRoutes');

router.use('/articeRoutes', articleRoutes);
router.use('/commentRoutes', commentRoutes);
module.exports = router;
