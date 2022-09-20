const router = require('express').Router();
const users = require('./userRoutes');
const cpuinfo = require('./cpuinfoRoutes');
const gpuinfo = require('./gpuinfoRoutes.js');
const steaminfo = require('./steamRoutes.js');

router.use('/user', users);
router.use('/cpuinfo', cpuinfo);
router.use('/gpuinfo', gpuinfo);
router.use('/steam', steaminfo);

module.exports = router;