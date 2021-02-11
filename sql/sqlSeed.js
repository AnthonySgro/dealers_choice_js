module.exports = sqlSeed = () => {
    const sql = `
DROP TABLE IF EXISTS player_freq;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS players;

CREATE TABLE players (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO players (name) VALUES ('Garry Kasparov');
INSERT INTO players (name) VALUES ('Viswanathan Anand');
INSERT INTO players (name) VALUES ('Georg Rotlewi');
INSERT INTO players (name) VALUES ('Akiba Rubinstein');
INSERT INTO players (name) VALUES ('Deep Blue');
INSERT INTO players (name) VALUES ('Anatoly Karpov');
INSERT INTO players (name) VALUES ('Bobby Fischer');
INSERT INTO players (name) VALUES ('Boris Spassky');
INSERT INTO players (name) VALUES ('Bent Larsen');
INSERT INTO players (name) VALUES ('Robert Byrne');
INSERT INTO players (name) VALUES ('Donald Byrne');
INSERT INTO players (name) VALUES ('Mikhail Botvinnik');
INSERT INTO players (name) VALUES ('Vasily Smyslov');
INSERT INTO players (name) VALUES ('Mikhail Tal');


CREATE TABLE games (
	game_id SERIAL NOT NULL PRIMARY KEY,
	player1_id INTEGER REFERENCES players(id) NOT NULL,
	player2_id INTEGER REFERENCES players(id) NOT NULL,
	event_name VARCHAR(200) NOT NULL,
    place VARCHAR(200) NOT NULL,
    content TEXT DEFAULT NULL,
    embedLink TEXT DEFAULT NULL
);

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink) 
VALUES ((SELECT id from players where name='Garry Kasparov'), (SELECT id from players where name='Viswanathan Anand'), '1995 World Chess Championship', 'New York, NY', 'The first 8 games were drawn.  Finally, in game 9, a game was won.  Anand had beaten Kasparov in a Sicilian, Sheveningen variation of the Sicilian by sacrificing his Rook, then trapping Kasparov''s Rook.  It would be Anand''s last win against Kasparov in classical play.  Kasparov won in rounds 10, 11, 13, and 14.  He won the match with a 10.5 to 7.5 score.  Since then, Kasparov has beaten Anand 10 times in classical chess play. Here is Anand''s win against Kasparov.  Kasparov was ranked #1 in the world and Anand was ranked #2 in the world.  Today, Anand is #1 in the world and Kasparov has retired from chess.', '//www.chess.com/emboard?id=7563082');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Georg Rotlewi'), (SELECT id from players where name='Akiba Rubinstein'), '1907 Exhibition', 'Łódź, Poland', 'Rotlewi versus Rubinstein is a game of chess played between Gersz Rotlewi and Akiba Rubinstein in Łódź, Poland on 26 December, 1907. It features a brilliant queen and rook sacrifice by Rubinstein to force mate. The game was dubbed Rubinsteins Immortal Game by Hans Kmoch. Garry Kasparov described the game as "Rubinsteins truly immortal game" and "his most famous creation."', '//www.chess.com/emboard?id=7563084');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Deep Blue'), (SELECT id from players where name='Garry Kasparov'), '1996 Exhibition', 'Philadelphia, PA', 'Deep Blue vs. Kasparov, 1996, Game 1 is a famous chess game in which a computer played against a human being. It was the first game played in the 1996 Deep Blue versus Garry Kasparov match, and the first time that a chess-playing computer defeated a reigning world champion under normal chess tournament conditions (in particular, standard time control; in this case 40 moves in two hours).', '//www.chess.com/emboard?id=7563086');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Garry Kasparov'), (SELECT id from players where name='Anatoly Karpov'), '1987 World Chess Championship', 'Seville, Spain', 'Trailing by a point before the final game of their fourth World Championship match, Kasparov surprises Karpov by beginning quietly in Karpovs own style. With Karpov running low on time, Kasparov ratchets up the tension by sacrificing a pawn for an attack. Karpov fails to find the best defence and is finally forced to resign, leaving Kasparov the champion for another three years.', '//www.chess.com/emboard?id=7563090');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Bobby Fischer'), (SELECT id from players where name='Boris Spassky'), '1972 World Chess Championship', 'Reykjavík, Iceland', 'Fischer launches an opening surprise in game 6 by opening with 1.c4 instead of his favorite 1.e4. Spassky joined the audience in applauding Fischers win and called it the best game of the World Chess Championship 1972.', '//www.chess.com/emboard?id=7563092');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Anatoly Karpov'), (SELECT id from players where name='Boris Spassky'), '1974 Candidates Tournament Semifinal', 'Leningrad, USSR', 'Karpov–Spassky, 9th Match Game, Leningrad. On Karpovs inexorable march to the World Championship, even a former World Champion cant cope with his subtle, seemingly effortless positional mastery.', '//www.chess.com/emboard?id=7563100');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Boris Spassky'), (SELECT id from players where name='Bent Larsen'), '1970 USSR vs. Rest of the World', 'Leningrad, USSR', 'Spassky finds immediate punishment for Larsens opening experiments, sacrificing a knight and a rook to create a passed pawn, winning the game in just 17 moves.', '//www.chess.com/emboard?id=7563106');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Robert Byrne'), (SELECT id from players where name='Bobby Fischer'), '1963 US Chess Championship', 'New York, NY', 'Fischer executes a deep sacrificial attack to win in this miniature. Many of the players in the press room thought Fischers position was hopeless and were surprised when they heard Byrne had resigned.', '//www.chess.com/emboard?id=7563110');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Donald Byrne'), (SELECT id from players where name='Bobby Fischer'), '1956 Rosenwald Memorial Tournament', 'New York, NY', 'In Chess Review, Hans Kmoch dubbed it "The Game of the Century" and wrote: "The following game, a stunning masterpiece of combination play performed by a boy of 13 against a formidable opponent, matches the finest on record in the history of chess prodigies." Byrne makes a seemingly minor mistake on move 11, losing a tempo by moving the same piece twice. Fischer pounces, with accurate sacrificial play, culminating in a queen sacrifice. When the smoke has cleared, Fischer has a winning material advantage – a rook and two bishops for a queen, and coordinates them to force checkmate.', '//www.chess.com/emboard?id=7563112');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Mikhail Botvinnik'), (SELECT id from players where name='Vasily Smyslov'), '1954 World Chess Championship', 'Moscow, USSR', 'Botvinnik-Smyslov, 14th Match Game, Moscow. Smyslov sacrifices his queen for three minor pieces and coordinates them superbly to force Botvinniks capitulation.', '//www.chess.com/emboard?id=7563114');

INSERT INTO games (player1_id, player2_id, event_name, place, content, embedLink)
VALUES ((SELECT id from players where name='Mikhail Tal'), (SELECT id from players where name='Vasily Smyslov'), '1959 Candidates Tournament', 'Zagreb, Croatia', 'Mikhail Tals prize-winning victory over Vasily Smyslov in the 1959 Candidates tournament was something of a passing of the torch. Smyslov had played three world chess championship matches against Mikhail Botvinnik in the 50s and stood as Botvinniks greatest challenger, but with his victory in this event, Tal earned the right to battle Botvinnik in 1960. The game itself shows Smyslov playing uncharacteristically sharply on the black side of a Caro-Kann. Tal soon offers a piece sacrifice creating dangerous threats. When Smyslov misses Tals spectacular 19th move, its all over.', '//www.chess.com/emboard?id=7563118');

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
ORDER BY player_id;
`
return sql;
}