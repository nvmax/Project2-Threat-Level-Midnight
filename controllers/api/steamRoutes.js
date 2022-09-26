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
    if (req.params.name.match(/^\s*\d+\s*$/g)) {
        try {
            const steamData = await Steam.findAll({
                where: {
                    appid: {
                        [Op.like]: `${req.params.name.trim()}`
                    }
                },
                raw:true
            });
            res.status(200).render('search', { game: steamData });
        } catch (err) {
            res.status(500).json(err);
        }
    }else if (req.params.name.includes('%')) {
        try {
            const steamData = await Steam.findAll({
                where: {
                    name: {
                        [Op.contains]: `%${req.params.name}%`
                    }
                },
                raw:true
            });
            res.status(200).render('search', {game :steamData });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        const nameArr = req.params.name.split(' ');
        const name = nameArr.join('%');
        try {
            const steamData = await Steam.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                },
                raw:true
            });
            res.status(200).render('search', {game :steamData });
        } catch (err) {
            res.status(500).json(err);
        }
    }
    
});






module.exports = router;