const html = require("html-template-tag");

module.exports = homepage = (game) => {
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
    <link rel="stylesheet" href="../stylesheet/gamedetailstyle.css">
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
    <main>
        <div class="centerfold">
            <h1>${game.player1_name}</h1>
            <h1>vs</h1>
            <h1>${game.player2_name}</h1>
        </div>
        <section id="database">
            <div id="game-detail-container">
                <ul id="game-info-list">
                    <li id="detail-tournament">
                        <p>${game.event_name} in ${game.place}</p>
                    </li>
                    <li id="detail-content">
                        <p>${game.content}</p>
                    </li>
                    <li id="gif">
                        <div id="board-viewer">
                            <iframe id="7563018" allowtransparency="true" frameborder="0" style="height:100%;width:60%;border:none;" src="${game.gif}"></iframe>
                            <script>window.addEventListener("message",e=>{e['data']&&"7563018"===e['data']['id']&&document.getElementById(e['data']['id'])&&(document.getElementById(e['data']['id']).style.height=e['data']['frameHeight']+30px)});</script>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</body>
</html>
`

//www.chess.com/emboard?id=7563018"

return htmlExport;
}