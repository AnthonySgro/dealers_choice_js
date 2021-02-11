//server and database info
const express = require('express');
const app = express();
const { client, syncAndSeed, getRandomGame } = require('./sql');

//router imports
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
app.use(express.urlencoded({ extended: false }));

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
        const randomGame = await getRandomGame();
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
    console.log(err);
    res.send(errorpage());
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
