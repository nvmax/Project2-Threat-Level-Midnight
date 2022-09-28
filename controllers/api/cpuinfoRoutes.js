const router = require('express').Router();
const { User, cpuInfo, CpuInfo } = require('../../models');
const Op = require('sequelize').Op;



//get CPU info
router.get('/', async (req, res) => {
    try {
        const cpuinfoData = await CpuInfo.findAll();
        res.status(200).json(cpuinfoData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get CPU info by id
router.get('/:id', async (req, res) => {
    try {
        const cpuData = await CpuInfo.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!cpuData) {
            res.status(404).json({ message: 'No cpu found with this id!' });
            return;
        }
        res.status(200).json(cpuData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// uses string to return cpu matches
router.get('/search/:cpu', async (req, res) => {
    try {
        const cpuData = await CpuInfo.findAll({
            where: {
                cpu: {
                    [Op.like]: `%${req.params.cpu}%`
                }
            }
        });
        if (!cpuData) {
            res.status(404).json({ message: 'No cpu found with this id!' });
            return;
        }
        res.status(200).json(cpuData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// post route for new CPU
router.post('/', async (req, res) => {
    try {
        const cpuinfoData = await CpuInfo.create(req.body);
        res.status(200).json(cpuinfoData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// put route for updating CPU
router.put('/:id', async (req, res) => {
    try {
        const cpuDb = await CpuInfo.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!cpuDb) {
            res.status(404).json({ message: 'No Cpu found with this id' });
            return;
        }
        res.json(cpuDb);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// delete route for CPU
router.delete('/:id', async (req, res) => {
    try {
        const cpuDb = await CpuInfo.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!cpuDb) {
            res.status(404).json({ message: 'No Cpu found with this id' });
            return;
        }
        res.json(cpuDb);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




    






module.exports = router;