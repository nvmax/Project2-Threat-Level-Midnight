const router = require('express').Router();
const apiRoutes = require('../controllers/api');

router.use('/api', apiRoutes);

module.exports = router;