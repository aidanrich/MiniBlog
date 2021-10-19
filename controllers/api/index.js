const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./blogpost-routes');

router.use('/users', userRoutes);
router.use('/blogpost', postRoutes);

module.exports = router;
