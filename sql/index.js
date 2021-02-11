const pg = require("pg");
const sqlSeed = require("./sqlSeed");
const client = new pg.Client('postgres://localhost/dealers_choice');

const syncAndSeed = async() => {
    const SQL = sqlSeed();
    await client.query(SQL);
}

const getRandomGame = async() => {
    try {
        return (await client.query(`SELECT * FROM GAMES
                                    ORDER BY RANDOM()
                                    LIMIT 1`)).rows[0];
    } catch (err) { console.log(err) }
}

const updatePlayerFreqTable = async() => {
    try {
        return (await client.query(`DROP TABLE IF EXISTS player_freq;
                                    CREATE TABLE player_freq
                                    AS
                                    SELECT player_id, COUNT(*) AS number_of_games
                                    FROM (
                                        SELECT games.player1_id AS player_id
                                        FROM games
                                        UNION ALL
                                            SELECT games.player2_id AS player_id
                                            FROM games
                                    ) AS foo
                                    GROUP BY player_id
                                    ORDER BY player_id;`))
    } catch (err) { console.log(err) }
   
}

const getPlayers = async() => {
    try {
        await updatePlayerFreqTable();
        return (await client.query(`SELECT name FROM players`)).rows;
    } catch (err) { console.log(err) }
}

const getGames = async() => {
    try {
        return (await client.query(`SELECT games.game_id, games.player1_id, games.player2_id, games.event_name, games.place, p1.name AS player1_name, p2.name AS player2_name
                                FROM games
                                JOIN players AS p1 ON p1.id = games.player1_id
                                JOIN players AS p2 ON p2.id = games.player2_id
                                ORDER BY games.game_id;`)).rows;
    } catch (err) { console.log(err) }
}

const getAllGamesDetails = async() => {
    try {
        return (await client.query(`SELECT games.game_id, games.event_name, games.place, games.content, games.embedLink, p1.name AS player1_name, p2.name AS player2_name
                                    FROM games
                                    JOIN players AS p1 ON p1.id = games.player1_id
                                    JOIN players AS p2 ON p2.id = games.player2_id
                                    ORDER BY games.game_id;`)).rows;
    } catch (err) { console.log(err) }
}

const createPlayer = async({ player }) => {
    try {
        await updatePlayerFreqTable();
        return (await client.query(`INSERT INTO players (name) VALUES($1) RETURNING *`, [player])).rows[0];
    } catch (err) { console.log(err) }
}

const getPlayerID = async({ player }) => {
    try {
        return (await client.query(`SELECT id FROM players WHERE name=$1`, [player])).rows[0];
    } catch (err) { console.log(err) };
}

const getAllPlayerDetails = async() => {
    try {
        await updatePlayerFreqTable();
        return (await client.query(`SELECT p.name AS player_name, player_id, number_of_games
                                    FROM player_freq
                                    JOIN players AS p ON p.id = player_freq.player_id
                                    ORDER BY number_of_games DESC;`)).rows;
    } catch (err) { console.log(err) }
}

const addGame = async( {player1_id, player2_id, eventName, place, content, embedLink} ) => {
    try {
        await updatePlayerFreqTable();
        return (await client.query(`INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
                                VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, 
                                [player1_id, player2_id, eventName, place, content, embedLink])).rows[0];
    } catch (err) { console.log(err) }
}

module.exports = {
    client,
    syncAndSeed,
    getPlayers,
    getPlayerID,
    getAllPlayerDetails,
    getGames,
    getAllGamesDetails,
    createPlayer,
    addGame,
    getRandomGame
};