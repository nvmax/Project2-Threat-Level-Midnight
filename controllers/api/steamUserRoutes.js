const router = require('express').Router();
const { SteamUsers, User, Steam } = require('../../models');
const judge = require('../utils/recComVer')
const Op = require('sequelize').Op;

// get compare info
router.get('/compare/uid/:uid/appid/:appid', async (req, res) => {
    console.log(req.params);
    try {
        // const jury = await judge.specCompare(75, 578080);
        console.log("here");
        const jury = await judge.specCompare(req.params.uid, req.params.appid);
        console.log(jury);
        if(!jury){
            res.status(404).json({message: 'Not able to get comparison data'});
        }
        res.status(200).json(jury);
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

// create steamuser association
router.post('/', async (req, res) => {
    try {
        const steamuser = await SteamUsers.create({
            steam_id: req.body.steam_id,
            user_id: req.body.user_id,
        });
        // console.log(steamuser);
        res.status(200).json(steamuser);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete specific game from user's library
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