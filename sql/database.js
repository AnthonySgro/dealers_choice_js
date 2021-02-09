const pg = require("pg");
const sqlSeed = require("./sqlSeed");
const client = new pg.Client('postgres://localhost/dealers_choice');

const syncAndSeed = async() => {
    const SQL = sqlSeed();
    await client.query(SQL);
}

const setUp = async() => {
    try {
        await client.connect();
        await syncAndSeed();
        console.log('Connected to Postgres database');
    } catch (err) { (err => console.error('Failed to connect to Postgres database', err)) };
}

setUp();

module.exports = client;