const router = require('express').Router();
const { User, GpuInfo, CpuInfo } = require('../../models');
const { Op } = require("sequelize");

// GET /api/gpuinfo
router.get('/', async (req, res) => {
    // Access our User model and run .findAll() method)
    try {
        const gpuinfoData = await GpuInfo.findAll();
        res.status(200).json(gpuinfoData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET /api/gpuinfo/:id
router.get('/:id', async (req, res) => {
    try {
        const gpuinfoData = await GpuInfo.findByPk(req.params.id);
        if (!gpuinfoData) {
            res.status(404).json({ message: 'No gpuinfo found with this id!' });
            return;
        }
        res.status(200).json(gpuinfoData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// uses string to return gpu matches
router.get('/search/:terms', async (req, res) => {
    try {
        const gpuinfoData = await GpuInfo.findAll({
            where: {
                gpu: {
                    [Op.like]: '%' + req.params.terms + '%'
                }
            }
        });
        if (!gpuinfoData) {
            res.status(404).json({ message: 'No gpuinfo found with this id!' });
            return;
        }
        res.status(200).json(gpuinfoData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// put /api/gpuinfo/
router.put('/', async (req, res) => {
    try {
        const dbUserData = await GpuInfo.update(req.body, {
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

// post route for new gpu
router.post('/', async (req, res) => {
    try {
        const gpuinfoData = await GpuInfo.create(req.body);
        res.status(200).json(gpuinfoData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// delete route for gpu
router.delete('/:id', async (req, res) => {
    try {
        const gpuinfoData = await GpuInfo.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!gpuinfoData) {
            res.status(404).json({ message: 'No gpuinfo found with this id!' });
            return;
        }
        res.status(200).json(gpuinfoData);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;