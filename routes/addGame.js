// initialize router and sql client methods
const router = require('express').Router();
const { client } = require('../sql');

//html views
const addGamePage = require('../public/views/addGamePage');

router.get("/", async (req, res, next) => {
    res.send(addGamePage());
})

module.exports = router;