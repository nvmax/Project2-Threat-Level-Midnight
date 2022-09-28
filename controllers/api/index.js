const router = require('express').Router();
const user = require('./userRoutes');
const cpuinfo = require('./cpuinfoRoutes');
const gpuinfo = require('./gpuinfoRoutes.js');
const steam = require('./steamRoutes.js');
const steamusers = require('./steamUserRoutes.js');
const withAuth = require('../../utils/auth');

router.use('/user', user);
router.use('/cpuinfo', withAuth, cpuinfo);
router.use('/gpuinfo', withAuth, gpuinfo);
router.use('/steam', withAuth, steam);
router.use('/steamuser', withAuth, steamusers);


module.exports = router;
