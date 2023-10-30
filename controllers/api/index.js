const router = require('express').Router();
const articleRoutes = require('../articleRoutes');

router.use('/articeRoutes', articleRoutes);

module.exports = router;
