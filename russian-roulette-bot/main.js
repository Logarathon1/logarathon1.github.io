
function populateLeaderboard () {
	var shotAllTime = [{"name":"Abusaif Talal","score":464},{"name":"Kale Alexander","score":352},{"name":"Devin Barcenas","score":341},{"name":"Edwin Artajo","score":336},{"name":"Raven Suou","score":312},{"name":"Matheus Buonani de la Silva","score":306},{"name":"Adam Pants","score":271},{"name":"Marcos Eduardo Bubna","score":247},{"name":"Davide Vanzan","score":244},{"name":"Michael Chopade","score":238},{"name":"Christian Bebel II","score":231},{"name":"Harry Lovell","score":209},{"name":"Sigfried Bussey","score":201},{"name":"Dominic King","score":176},{"name":"Mattaya Topolnicki","score":173},{"name":"Tim Jones","score":161},{"name":"Lila Wille","score":160},{"name":"Maury Stickman","score":156},{"name":"Adam  Newland","score":153},{"name":"Jake Alderson","score":148}]
	var notShotAllTime = [{"name":"Kale Alexander","score":373},{"name":"Matheus Buonani de la Silva","score":339},{"name":"Abusaif Talal","score":286},{"name":"Devin Barcenas","score":280},{"name":"Harry Lovell","score":247},{"name":"Christian Bebel II","score":245},{"name":"Marcos Eduardo Bubna","score":220},{"name":"Adam Pants","score":217},{"name":"Mattaya Topolnicki","score":193},{"name":"Sigfried Bussey","score":189},{"name":"Maury Stickman","score":184},{"name":"Raven Suou","score":182},{"name":"Nay Poe","score":179},{"name":"Tim Jones","score":173},{"name":"Davide Vanzan","score":170},{"name":"Lillian Hu","score":163},{"name":"Conor Gorman","score":157},{"name":"Jake Alderson","score":150},{"name":"Dominic King","score":137},{"name":"Edwin Artajo","score":119}]
	var shotThisWeek = [{"name":"Alejandro Londoño Marín","score":57},{"name":"Abusaif Talal","score":49},{"name":"Adam  Newland","score":40},{"name":"Matheus Buonani de la Silva","score":31},{"name":"Jana Marie Gameng","score":30},{"name":"Gabriel Bottcher Sansao","score":30},{"name":"Eytan Montes","score":27},{"name":"Jessica Guimarães","score":25},{"name":"Edwin Artajo","score":25},{"name":"Nay Poe","score":25},{"name":"Raven Suou","score":24},{"name":"Niko Trg","score":23},{"name":"Christian Bebel II","score":23},{"name":"Justin Gameng","score":22},{"name":"Luiza Lyra","score":21},{"name":"Davide Vanzan","score":21},{"name":"James Smith","score":20},{"name":"Harry Lovell","score":20},{"name":"Liard Stojić","score":20},{"name":"Vini Marose","score":19}]
	var notShotThisWeek = [{"name":"Alejandro Londoño Marín","score":58},{"name":"Matheus Buonani de la Silva","score":42},{"name":"Gabriel Bottcher Sansao","score":40},{"name":"Jana Marie Gameng","score":36},{"name":"Praw Zuccsons","score":36},{"name":"Niko Trg","score":35},{"name":"Nay Poe","score":31},{"name":"Abusaif Talal","score":30},{"name":"Sa Silva","score":28},{"name":"Jessica Guimarães","score":27},{"name":"Christian Bebel II","score":26},{"name":"Marco Mairena","score":25},{"name":"James Smith","score":25},{"name":"Harry Lovell","score":24},{"name":"Eytan Montes","score":23},{"name":"Liard Stojić","score":21},{"name":"Luiza Lyra","score":20},{"name":"Shelby Ann Ososki","score":19},{"name":"Rodrigo Guirger","score":18},{"name":"Tomasz Mayer","score":17}]
	var table = document.getElementById("table");
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[3].innerHTML = "<b>" + shotAllTime[i-2].name + "</b><br><p>Shot " + shotAllTime[i-2].score + " Times</p><br>";
	}
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[4].innerHTML = "<b>" + notShotAllTime[i-2].name + "</b><br><p>Shot " + notShotAllTime[i-2].score + " Times</p><br>";
	}
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[0].innerHTML = "<b>" + shotThisWeek[i-2].name + "</b><br><p>Shot " + shotThisWeek[i-2].score + " Times</p><br>";
	}
	for(i = 2; i < table.rows.length; i++) {
		table.rows[i].cells[1].innerHTML = "<b>" + notShotThisWeek[i-2].name + "</b><br><p>Shot " + notShotThisWeek[i-2].score + " Times</p><br>";
	}
}
