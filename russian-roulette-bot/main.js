
function populateLeaderboard () {
	var shotAllTime = [{name:"Abusaif Talal",score:428},{name:"Kale Alexander",score:352},{name:"Devin Barcenas",score:341},{name:"Edwin Artajo",score:323},{name:"Raven Suou",score:298},{name:"Matheus Buonani de la Silva",score:283},{name:"Adam Pants",score:271},{name:"Marcos Eduardo Bubna",score:247},{name:"Michael Chopade",score:238},{name:"Davide Vanzan",score:230},{name:"Christian Bebel II",score:214},{name:"Harry Lovell",score:203},{name:"Sigfried Bussey",score:192},{name:"Dominic King",score:176},{name:"Mattaya Topolnicki",score:173},{name:"Tim Jones",score:161},{name:"Lila Wille",score:158},{name:"Maury Stickman",score:155},{name:"Jake Alderson",score:148},{name:"Robert Lyra",score:133}];
	var notShotAllTime = [{name:"Kale Alexander",score:373},{name:"Matheus Buonani de la Silva",score:312},{name:"Devin Barcenas",score:279},{name:"Abusaif Talal",score:268},{name:"Harry Lovell",score:239},{name:"Christian Bebel II",score:222},{name:"Marcos Eduardo Bubna",score:220},{name:"Adam Pants",score:217},{name:"Mattaya Topolnicki",score:193},{name:"Sigfried Bussey",score:183},{name:"Maury Stickman",score:182},{name:"Tim Jones",score:173},{name:"Raven Suou",score:173},{name:"Davide Vanzan",score:161},{name:"Nay Poe",score:160},{name:"Lillian Hu",score:155},{name:"Conor Gorman",score:153},{name:"Jake Alderson",score:148},{name:"Dominic King",score:137},{name:"Edwin Artajo",score:115}];
	//var shotThisWeek = JSON.parse(fs.readFileSync("./leaderboards/weekly/shot/current.json"));
	//var notShotThisWeek = JSON.parse(fs.readFileSync("./leaderboards/weekly/not-shot/current.json"));
	var table = document.getElementById("table");
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[3].innerHTML = "<b>" + shotAllTime[i-2].name + "</b><br><p>Shot " + shotAllTime[i-2].score + " Times</p><br>";
	}
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[4].innerHTML = "<b>" + notShotAllTime[i-2].name + "</b><br><p>Shot " + notShotAllTime[i-2].score + " Times</p><br>";
	}
}
