
function AJAX_JSON_Req( url )
{
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");
 
    AJAX_req.onreadystatechange = function()
    {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
        {
            var response = JSON.parse( AJAX_req.responseText );
            document.write( response.name );
        }
    }
    AJAX_req.send();
}
 


function populateLeaderboard () {
	var shotAllTime = JSON.parse(AJAX_JSON_Req( 'https://logarathon1.github.io/russian-roulette-bot/leaderboards/all-time/shot/current.json' ););
	var notShotAllTime = JSON.parse(AJAX_JSON_Req( 'https://logarathon1.github.io/russian-roulette-bot/leaderboards/all-time/not-shot/current.json' ););
	var shotThisWeek = JSON.parse(AJAX_JSON_Req( 'https://logarathon1.github.io/russian-roulette-bot/leaderboards/weekly/shot/current.json' ););
	var notShotThisWeek = JSON.parse(AJAX_JSON_Req( 'https://logarathon1.github.io/russian-roulette-bot/leaderboards/weekly/not-shot/current.json' ););
	var table = document.getElementById("table");
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[3].innerHTML = "<b>" + shotAllTime[i-2].name + "</b><br><p>Shot " + shotAllTime[i-2].score + " Times</p><br>";
	}
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[4].innerHTML = "<b>" + notShotAllTime[i-2].name + "</b><br><p>Shot " + notShotAllTime[i-2].score + " Times</p><br>";
	}
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[1].innerHTML = "<b>" + shotThisWeek[i-2].name + "</b><br><p>Shot " + shotThisWeek[i-2].score + " Times</p><br>";
	}
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[2].innerHTML = "<b>" + notShotThisWeek[i-2].name + "</b><br><p>Not Shot " + notShotThisWeek[i-2].score + " Times</p><br>";
	}
}
//h