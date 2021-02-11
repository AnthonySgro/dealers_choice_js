// initialize router and sql client methods
const router = require('express').Router();
const { client, getPlayers, getPlayerID, createPlayer, addGame } = require('../sql');

//html views
const addGamePage = require('../public/views/addGamePage');

router.get("/", async (req, res, next) => {
    res.send(addGamePage());
})

router.post("/", async (req, res, next) => {
    try {

        //retrieve data from payload
        const player1 = req.body.player1;
        const player2 = req.body.player2;
        const eventName = req.body.eventName;
        const place = req.body.place;
        const content = req.body.content;
        const embedLink = req.body.embedLink;
    
        //get all players
        const players = [...await getPlayers()];

        //if new player, create...
        if (!players.includes(player1)) {
            await createPlayer({ player: player1});
        }

        if (!players.includes(player2)) {
            await createPlayer({ player: player2});
        }

        //get new player id's
        const player1_id = (await getPlayerID({ player: player1})).id;
        const player2_id = (await getPlayerID({ player: player2})).id;

        //create a game
        await addGame({ player1_id: player1_id, player2_id: player2_id, eventName: eventName, place: place, content: content, embedLink: embedLink } );
        
        const allPlayers = await getPlayers();
        console.log(allPlayers);

        res.redirect('/database');  
    } catch (err) { next(err) };
})


module.exports = router;