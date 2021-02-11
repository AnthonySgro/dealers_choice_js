//server and database info
const express = require('express');
const app = express();
const { client, syncAndSeed } = require('./sql');

//routes
const databaseRoute = require('./routes/database');
const playersRoute = require('./routes/players');
const addGameRoute = require('./routes/addGame');

//html views
const homepage = require('./public/views/homePage');
const errorpage = require('./public/views/errorPage');

//middleware
const morgan = require("morgan");
app.use(morgan('dev'));
app.use(express.static('public'));

//start-up SQL client
const setUp = async() => {
    try {
        await client.connect();
        await syncAndSeed();
        console.log('Connected to Postgres database');
    } catch (err) { (err => console.error('Failed to connect to Postgres database', err)) };
}

setUp();

//routes
app.get("/", async (req, res, next) => {
    try {
        const data = await client.query(`
            SELECT * FROM games
            ORDER BY RANDOM()
            LIMIT 1;
        `);
        const randomGame = data.rows[0];
        res.send(homepage(randomGame));
    } catch (error) { next(error) }
})

app.use("/database", databaseRoute);
app.use("/players", playersRoute);
app.use("/addgame", addGameRoute);

//if not a route, create an error and pass it down
app.get("*", (req, res, next) => {
    next(new Error("error"));
})

//this middleware is my error handler
app.use((err, req, res, next) => {
    res.send(errorpage());
})

const PORT = 42069;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
