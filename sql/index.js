const pg = require("pg");
const sqlSeed = require("./sqlSeed");
const client = new pg.Client('postgres://localhost/dealers_choice');

const syncAndSeed = async() => {
    const SQL = sqlSeed();
    await client.query(SQL);
}

module.exports = {
    client,
    syncAndSeed,
};