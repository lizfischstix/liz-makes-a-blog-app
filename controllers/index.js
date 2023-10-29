const router = require('express').Router();
const postRoutesRoutes = require('./postRoutes');
//const travellerRoutes = require('./travellerRoutes');

router.use('/posts', postRoutes);
//router.use('/travellers', travellerRoutes);

module.exports = router;