const pg = require("pg");
const client = new pg.Client('postgres://localhost/dealers_choice');

//promise for connecting to postgres
client
    .connect()
    .then(() => console.log('Connected to Postgres database'))
    .catch(err => console.error('Failed to connect to Postgres database', err))

module.exports = client;