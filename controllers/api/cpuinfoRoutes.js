const router = require('express').Router();
const { User, cpuInfo, CpuInfo } = require('../../models');



// get CPU info
router.get('/', (req, res) => {
    CpuInfo.findAll({
        // no attributes
    })
    .then(dbCpuData => res.json(dbCpuData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// get CPU info by id
router.get('/:id', (req, res) => {
    CpuInfo.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbCpuData => {
        if (!dbCpuData) {
            res.status(404).json({ message: 'No CPU found with this id' });
            return;
        }
        res.json(dbCpuData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// uses string to return cpu matches
router.get('/search/:terms', async (req, res) => {
    try{
        const cpuData = await CpuInfo.findOne({
            where: { cpu: { [Op.like]: `%${req.params.match}%` } },
          });
          res.status.json(cpuData)
    } catch (err) {
        res.status(500).json(err);
    }
})

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