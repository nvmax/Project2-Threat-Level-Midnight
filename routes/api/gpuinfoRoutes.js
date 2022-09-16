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


// put /api/gpuinfo/
router.put('/', async (req, res) => {
    try {
        const dbUserData = await gpuinfo.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;