const router = require('express').Router();
const newPostRoutes = require('./newPostRoutes');

router.use('/newPostRoutes', newPostRoutes);

module.exports = router;
