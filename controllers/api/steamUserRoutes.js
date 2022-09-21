const router = require('express').Router();
const { SteamUsers, User, Steam } = require('../../models');
const Op = require('sequelize').Op;



// create steamuser association
router.post('/', async (req, res) => {
    try {
        const steamuser = await SteamUsers.create({
            steam_id: req.body.steam_id,
            user_id: req.body.user_id,
        });
        console.log(steamuser);
        res.status(200).json(steamuser);
    } catch (err) {
        res.status(400).json(err);
    }
});

// put steamuser association
router.put('/:id', async (req, res) => {
    try {
        const steamuser = await SteamUsers.update(req.body, {
            where: {
                id: req.params.id,
                // send steam_id and user_id to update
            },
        });
        res.status(200).json(steamuser);
    } catch (err) {
        res.status(400).json(err);
    }
});


// delete steamuser association
router.delete('/:id', async (req, res) => {
    try {
        const steamuser = await SteamUsers.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!steamuser) {
            res.status(404).json({ message: 'No steamuser found with this id!' });
            return;
        }
        res.status(200).json(steamuser);
    } catch (err) {
        res.status(500).json(err);
    }
});












module.exports = router;