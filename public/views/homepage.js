const html = require("html-template-tag");

module.exports = homepage = () => {
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
</head>
<body>
    <header>
        <nav>
            <a id="main-text" href="index.html">Dealer's Choice</a>
            <a id="database-nav-link" href="/database">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout mr-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                &nbsp;Examine Database
            </a>
        </nav>
    </header>
    <main>
        <div class="centerfold">
            <h1 id="welcome">
                Chess Game Database
            </h1>
            <p>Explore Famous Games by World Champions and top Grandmasters in the 20th Century</p>
            <div id="main-btn-container">
                <a href="/database">
                    <button id="play-now">
                        <p>Look at Games&nbsp;</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </a>
                <a href="/imlucky">
                    <button id="imlucky">
                        <p>I'm Feeling Lucky...</p>
                    </button></a>
            </div>
        </div>
    </main>
</body>
</html>
`

return htmlExport;
}