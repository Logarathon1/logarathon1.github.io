$(function () {
    var bar = '';
	bar += '<header>'
    bar += '<h1><a href = "index.html">i have a large bongus nongus and big pp too<a></h1>';
    bar += '<nav>';
    bar += '<ul class="nav navbar-nav">';
    bar += '<li id="home"><a href = "https://logarathon1.github.io/">Home</a></li>';
    bar += '<li id="rogue-likebot1980"><a href = "https://logarathon1.github.io/rogue-likebot1980">Rogue-likebot 1980</a></li>';
    bar += '<li id="thanosbotthanosbot"><a href = "https://logarathon1.github.io/thanos-bot">Thanos Bot Thanos Bot</a></li>';
	bar += '<li id="mdhhcd-bot"><a href = "https://logarathon1.github.io/mdhhcd-bot">MDHHCD-Bot</a></li>';
	bar += '<li id="russianroulettebot"><a href = "https://logarathon1.github.io/russian-roulette-bot">Russian Roulette Bot</a></li>';
	bar += '<li id="casinobot888"><a href = "https://logarathon1.github.io/casino-bot">Casino Bot 888</a></li>';
    bar += '</ul>';
    bar += '</nav>';
	bar += '</header>';

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}