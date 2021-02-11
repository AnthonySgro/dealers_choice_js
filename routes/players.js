// initialize router and sql client methods
const router = require('express').Router();
const { client } = require('../sql');

//html views
const playerspage = require('../public/views/playersPage');
const playerdetail = require('../public/views/playerDetail');

router.get("/", async (req, res, next) => {
    try {
        const data = await client.query(`
            SELECT p.name AS player_name,
                player_id, 
                number_of_games
            FROM player_freq
            JOIN players AS p ON p.id = player_freq.player_id
            ORDER BY number_of_games DESC;
        `);
        const players = data.rows;
        res.send(playerspage(players));
    } catch (error) { next(error) }
})

router.get("/:id", async (req, res, next) => {
    try {
        const gameData = await client.query(`
            SELECT games.game_id,
                games.player1_id,
                games.player2_id,
                games.event_name, 
                games.place,
                games.gif,
                p1.name AS player1_name, 
                p2.name AS player2_name
            FROM games
            JOIN players AS p1 ON p1.id = games.player1_id
            JOIN players AS p2 ON p2.id = games.player2_id
            ORDER BY games.game_id;
        `);

        const games = gameData.rows.filter(game => {
            if ((game.player1_id === +req.params.id) || (game.player2_id === +req.params.id)) {
                return true;
            }
        });

        const playerData = await client.query(`
            SELECT p.name AS player_name,
                player_id, 
                number_of_games
            FROM player_freq
            JOIN players AS p ON p.id = player_freq.player_id
            ORDER BY number_of_games DESC;
        `)

        let playerInput = playerData.rows.filter(player => {
            return (player.player_id === +req.params.id);
        });

        res.send(playerdetail(games, playerInput[0]));
    } catch (error) { next(error) };
})

module.exports = router;