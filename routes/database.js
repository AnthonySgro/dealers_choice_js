// initialize router and sql client methods
const router = require('express').Router();
const { client } = require('../sql');

//html views
const database = require('../public/views/databasePage');
const gamepage = require('../public/views/gamePage');

router.get("/", async (req, res, next) => {
    try {
        const data = await client.query(`
            SELECT games.game_id,
                games.event_name, 
                games.place,
                games.embedLink,
                p1.name AS player1_name, 
                p2.name AS player2_name
            FROM games
            JOIN players AS p1 ON p1.id = games.player1_id
            JOIN players AS p2 ON p2.id = games.player2_id
            ORDER BY games.game_id;
        `);
        const games = data.rows;
        res.send(database(games));

    } catch (error) { next(error) }
})

router.get("/:id", async (req, res, next) => {
    try {
        const data = await client.query(`
            SELECT games.game_id,
                games.event_name, 
                games.place,
                games.content,
                games.embedLink,
                p1.name AS player1_name, 
                p2.name AS player2_name
            FROM games
            JOIN players AS p1 ON p1.id = games.player1_id
            JOIN players AS p2 ON p2.id = games.player2_id
            ORDER BY games.game_id;
        `
        )
        const games = data.rows;
        res.send(gamepage(games[req.params.id - 1]));
    } catch(error) { next(error) }
})

module.exports = router;