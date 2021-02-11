const html = require("html-template-tag");

module.exports = addGamePage = () => {
    const htmlExport = html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DealersChoice</title>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../stylesheet/stylesheet.css">
    <link rel="stylesheet" href="../stylesheet/addgamestyle.css">

    <script defer src="../scripts/addGameValidator.js"></script>
</head>
<body>
    <header>
        <nav>
            <a id="main-text" href="/">Dealer's Choice</a>
            <div id="nav-bar-components">
                <a class="nav-link" href="/addgame">
                    Add Game
                </a>
                <a class="nav-link" href="/players">
                    Browse by Player
                </a>
                <a class="nav-link" href="/database">
                    Browse All Games
                </a>
                <a id="database-nav-link" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout mr-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    Back to Homepage
                </a>
            </div>
        </nav>
    </header>
    <main id="sign-up-body">
        <div class="container">
            <form id="form" class="form" method="POST" action="/addgame/">
                <h2>Enter New Game</h2>
                <div class="form-control">
                    <label for="player1">Player 1</label>
                    <input id="player1" name="player1" type="text" placeholder="Enter player 1">
                    <small>Error message</small>
                </div>
                <div class="form-control">
                    <label for="player2">Player 2</label>
                    <input type="text" name="player2" id="player2" placeholder="Enter player 2">
                    <small>Error message</small>
                </div>
                <div class="form-control">
                    <label for="eventName">Event Name</label>
                    <input id="eventName" name="eventName" type="text" placeholder="Enter event name">
                    <small>Error message</small>
                </div>
                <div class="form-control">
                    <label for="place">Location</label>
                    <input id="place" name="place" type="text" placeholder="Enter location">
                    <small>Error message</small>
                </div>
                <div class="form-control">
                    <label for="content">Description</label>
                    <textarea id="content" name="content" type="text" placeholder="Enter description"></textarea>
                    <small>Error message</small>
                </div>
                <div class="form-control">
                    <label for="embedLink">Chess.com Walkthrough Link</label>
                    <input id="embedLink" name="embedLink" type="text" value="//www.chess.com/emboard?id=*******">
                    <small>Error message</small>
                </div>
                <button type="submit" id="btn">Submit</button>
            </form>
        </div>
    </main>
</body>
</html>
`

return htmlExport;
}