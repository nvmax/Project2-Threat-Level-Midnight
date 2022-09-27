const router = require('express').Router();
const users = require('./userRoutes');
const cpuinfo = require('./cpuinfoRoutes');
const gpuinfo = require('./gpuinfoRoutes.js');
const steaminfo = require('./steamRoutes.js');
const steamusers = require('./steamUserRoutes.js');
const withAuth = require('../../utils/auth');

router.use('/user', users);
router.use('/cpuinfo', withAuth, cpuinfo);
router.use('/gpuinfo', withAuth, gpuinfo);
router.use('/steam', withAuth, steaminfo);
router.use('/steamuser', withAuth, steamusers);


module.exports = router;
