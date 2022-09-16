const router = require('express').Router();
const { User, gpuinfo, cpuinfo } = require('../../models');

// GET /api/gpuinfo
router.get('/', async (req, res) => {
    // Access our User model and run .findAll() method)
    try {
        const gpuinfoData = await gpuinfo.findAll();
        res.status(200).json(gpuinfoData);
    } catch (err) {
        res.status(500).json(err);
    }
});






module.exports = router;