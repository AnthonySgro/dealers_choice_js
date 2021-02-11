// initialize router and sql client methods
const router = require('express').Router();
const { getGames, getAllGamesDetails } = require('../sql');

//html views
const database = require('../public/views/databasePage');
const gamepage = require('../public/views/gamePage');

router.get("/", async (req, res, next) => {
    try {
        const games = await getGames();
        res.send(database(games));

    } catch (error) { next(error) }
})

router.get("/:id", async (req, res, next) => {
    try {
        const altGames = await getAllGamesDetails();
        res.send(gamepage(altGames[req.params.id - 1]));
    } catch(error) { next(error) }
})

module.exports = router;