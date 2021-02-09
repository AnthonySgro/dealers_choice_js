//server and database info
const express = require('express');
const app = express();
const client = require('./sql/database');

//html views
const homepage = require('./public/views/homepage');
const errorpage = require('./public/views/errorpage');
const database = require('./public/views/databasepage');
const gamepage = require('./public/views/gamepage');

//middleware
const morgan = require("morgan");
app.use(morgan('dev'));
app.use(express.static('public'));

//routes
app.get("/", async (req, res, next) => {
    try {
        const data = await client.query(`
            SELECT * FROM games;
        `);
        const numberOfGames = data.rows.length;
        res.send(homepage(numberOfGames));
    } catch (error) { next(error) }
})

app.get("/index.html", async (req, res, next) => {
    try {
        const data = await client.query(`
            SELECT * FROM games;
        `);
        const numberOfGames = data.rows.length;
        res.send(homepage(numberOfGames));
    } catch (error) { next(error) }
})

//async bc we are making a request to the database
app.get("/database", async (req, res, next) => {
    try {
        const data = await client.query(`
            SELECT games.game_id,
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
        const games = data.rows;
        res.send(database(games));

    } catch (error) { next(error) }
})

//async bc we are making a request to the database
app.get("/database/:id", async (req, res, next) => {
    try {
        const data = await client.query(`
            SELECT games.game_id,
                games.event_name, 
                games.place,
                games.content,
                games.gif,
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

//if not a route, create an error and pass it down
app.get("*", (req, res, next) => {
    next(new Error("error"));
  })

//this middleware is my errorHandler
app.use((err, req, res, next) => {
    res.send(errorpage());
})

const PORT = 10000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
