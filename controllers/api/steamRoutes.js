const router = require('express').Router();
const { Steam } = require('../../models');
const Op = require('sequelize').Op;

// GET /api/steam

router.get('/', async (req, res) => {
    // Access our User model and run .findAll() method)
    try {
        const steamData = await Steam.findAll();
        res.status(200).json(steamData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all games with a partial name match
router.get('/:name', async (req, res) => {
    try {
        // const param 
        const steamData = await Steam.findAll({
            limit: 10,
            where: {
                name: {
                    [Op.like]: '%' + req.params.name + '%'
                }
            }
        });
        res.status(200).json(steamData);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// get name by id
router.get('/id/:id', async (req, res) => {
    try {
        const steamData = await Steam.findByPk(req.params.id);
        res.status(200).json(steamData);
    } catch (err) {
        res.status(500).json(err.message);
    }
});




module.exports = router;