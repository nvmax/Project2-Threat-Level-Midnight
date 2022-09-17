const router = require('express').Router();
const users = require('./userRoutes');
const cpuinfo = require('./cpuinfoRoutes');
const gpuinfo = require('./gpuinfoRoutes.js');

router.use('/user', users);
router.use('/cpuinfo', cpuinfo);
router.use('/gpuinfo', gpuinfo);

module.exports = router;