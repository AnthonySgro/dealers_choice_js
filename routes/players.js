// initialize router and sql client methods
const router = require('express').Router();
const { getAllPlayerDetails, getGames, getPlayers } = require('../sql');

//html views
const playerspage = require('../public/views/playersPage');
const playerdetail = require('../public/views/playerDetail');

router.get("/", async (req, res, next) => {
    try {
        const players = await getAllPlayerDetails();
        const allPlayers = await getPlayers();
        res.send(playerspage(players));
    } catch (error) { next(error) }
})

router.get("/:id", async (req, res, next) => {
    try {
        //get games and players
        const games = await getGames();
        const players = await getAllPlayerDetails();

        //filter out for the specific player/games we asked for
        const specificPlayerGames = games.filter(game => {
            if ((game.player1_id === +req.params.id) || (game.player2_id === +req.params.id)) {
                return true;
            }
        });
        const specificPlayer = players.filter(player => {
            return (player.player_id === +req.params.id);
        });

        res.send(playerdetail(specificPlayerGames, specificPlayer[0]));
    } catch (error) { next(error) };
})

module.exports = router;