const router = require('express').Router();
const users = require('./userRoutes');
const cpuinfo = require('./cpuinfoRoutes');
const gpuinfo = require('./gpuinfoRoutes.js');
const steaminfo = require('./steamRoutes.js');
const steamusers = require('./steamUserRoutes.js');
const withAuth = require('../../utils/auth');

router.use('/user', users);
router.use('/cpuinfo', cpuinfo);
router.use('/gpuinfo', gpuinfo);
router.use('/steam', steaminfo);
router.use('/steamuser', steamusers);


module.exports = router;
