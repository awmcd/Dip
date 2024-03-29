function InitGame() {
	var refjson ='{ "powers":[ { "name":"Austria", "id":"aus", "armories":[ { "id":"vie", "unit":"army" }, { "id":"bud", "unit":"army" }, { "id":"tri", "unit":"fleet" } ] }, { "name":"England", "id":"eng", "armories":[ { "id":"lvp", "unit":"army" }, { "id":"edi", "unit":"fleet" }, { "id":"lon", "unit":"fleet" } ] }, { "name":"France", "id":"fra", "armories":[ { "id":"par", "unit":"army" }, { "id":"mar", "unit":"army" }, { "id":"bre", "unit":"fleet" } ] }, { "name":"Germany", "id":"ger", "armories":[ { "id":"ber", "unit":"army" }, { "id":"mun", "unit":"army" }, { "id":"kie", "unit":"fleet" } ] }, { "name":"Italy", "id":"ita", "armories":[ { "id":"rom", "unit":"army" }, { "id":"ven", "unit":"army" }, { "id":"nap", "unit":"fleet" } ] }, { "name":"Russia", "id":"rus", "armories":[ { "id":"mos", "unit":"army" }, { "id":"war", "unit":"army" }, { "id":"stp", "unit":"fleet" }, { "id":"sev", "unit":"fleet" } ] }, { "name":"Turkey", "id":"tur", "armories":[ { "id":"con", "unit":"army" }, { "id":"smy", "unit":"army" }, { "id":"ank", "unit":"fleet" } ] } ], "mapdata":[ { "name":"Bohemia", "id":"boh", "type":"land", "adj":[ "mun", "sil", "gal", "vie", "tyr" ], "center":"true", "country":"aus" }, { "name":"Budapest", "id":"bud", "type":"land", "adj":[ "gal", "rum", "bul", "ser", "tri", "vie" ], "center":"true", "country":"aus" }, { "name":"Galicia", "id":"gal", "type":"land", "adj":[ "ukr", "rum", "bud", "vie", "boh", "sil", "war" ], "center":"false", "country":"aus" }, { "name":"Trieste", "id":"tri", "type":"coast", "adj":[ "vie", "bud", "ser", "alb", "adr", "ven", "tyr" ], "center":"true", "country":"aus" }, { "name":"Tyrolia", "id":"tyr", "type":"land", "adj":[ "mun", "boh", "vie", "tri", "ven", "pie" ], "center":"false", "country":"aus" }, { "name":"Vienna", "id":"vie", "type":"land", "adj":[ "boh", "gal", "bud", "tri", "tyr" ], "center":"true", "country":"aus" }, { "name":"Clyde", "id":"cly", "type":"coast", "adj":[ "nat", "nrg", "edi", "lvp" ], "center":"false", "country":"eng" }, { "name":"Edinburgh", "id":"edi", "type":"coast", "adj":[ "cly", "nrg", "nth", "yor", "lvp" ], "center":"true", "country":"eng" }, { "name":"Liverpool", "id":"lvp", "type":"coast", "adj":[ "iri", "nat", "cly", "edi", "yor", "wal" ], "center":"true", "country":"eng" }, { "name":"London", "id":"lon", "type":"coast", "adj":[ "wal", "lvp", "yor", "nth", "eng" ], "center":"true", "country":"eng" }, { "name":"Wales", "id":"wal", "type":"coast", "adj":[ "iri", "lvp", "yor", "lon", "eng" ], "center":"false", "country":"eng" }, { "name":"Yorkshire", "id":"yor", "type":"coast", "adj":[ "wal", "lvp", "edi", "nth", "lon" ], "center":"false", "country":"eng" }, { "name":"Brest", "id":"bre", "type":"coast", "adj":[ "mid", "eng", "pic", "par", "gas" ], "center":"true", "country":"fra" }, { "name":"Burgundy", "id":"bur", "type":"land", "adj":[ "par", "pic", "bel", "ruh", "mun", "mar", "gas" ], "center":"false", "country":"fra" }, { "name":"Gascony", "id":"gas", "type":"coast", "adj":[ "mid", "bre", "par", "bur", "mar", "spa" ], "center":"false", "country":"fra" }, { "name":"Marseilles", "id":"mar", "type":"coast", "adj":[ "spa", "gas", "bur", "pie", "gol" ], "center":"true", "country":"fra" }, { "name":"Paris", "id":"par", "type":"land", "adj":[ "bre", "pic", "bur", "gas" ], "center":"true", "country":"fra" }, { "name":"Picardy", "id":"pic", "type":"coast", "adj":[ "bre", "eng", "bel", "bur", "par" ], "center":"false", "country":"fra" }, { "name":"Berlin", "id":"ber", "type":"coast", "adj":[ "kie", "bal", "pru", "sil", "mun" ], "center":"true", "country":"ger" }, { "name":"Kiel", "id":"kie", "type":"coast", "adj":[ "hol", "hel", "den", "bal", "ber", "mun", "ruh" ], "center":"true", "country":"ger" }, { "name":"Munich", "id":"mun", "type":"land", "adj":[ "ruh", "kie", "ber", "sil", "boh", "tyr", "bur" ], "center":"true", "country":"ger" }, { "name":"Prussia", "id":"pru", "type":"coast", "adj":[ "ber", "bal", "lvn", "war", "sil" ], "center":"false", "country":"ger" }, { "name":"Ruhr", "id":"ruh", "type":"land", "adj":[ "bel", "hol", "kie", "mun", "bur" ], "center":"false", "country":"ger" }, { "name":"Silesia", "id":"sil", "type":"land", "adj":[ "ber", "pru", "war", "gal", "boh", "mun" ], "center":"false", "country":"ger" }, { "name":"Apulia", "id":"apu", "type":"coast", "adj":[ "ven", "adr", "ion", "nap", "rom" ], "center":"false", "country":"ita" }, { "name":"Naples", "id":"nap", "type":"coast", "adj":[ "rom", "apu", "ion", "tyn" ], "center":"true", "country":"ita" }, { "name":"Piedmont", "id":"pie", "type":"coast", "adj":[ "mar", "tyr", "ven", "tus", "gol" ], "center":"false", "country":"ita" }, { "name":"Rome", "id":"rom", "type":"coast", "adj":[ "tus", "ven", "apu", "nap", "tyn" ], "center":"true", "country":"ita" }, { "name":"Tuscany", "id":"tus", "type":"coast", "adj":[ "pie", "ven", "rom", "tyn", "gol" ], "center":"false", "country":"ita" }, { "name":"Venice", "id":"ven", "type":"coast", "adj":[ "pie", "tyr", "tri", "adr", "apu", "rom", "tus" ], "center":"true", "country":"ita" }, { "name":"lvnonia", "id":"lvn", "type":"coast", "adj":[ "bal", "bot", "stp", "mos", "war", "pru" ], "center":"false", "country":"rus" }, { "name":"Moscow", "id":"mos", "type":"land", "adj":[ "lvn", "stp", "sev", "ukr", "war" ], "center":"true", "country":"rus" }, { "name":"Sevastopol", "id":"sev", "type":"coast", "adj":[ "ukr", "mos", "bla", "arm", "rum" ], "center":"true", "country":"rus" }, { "name":"St. Petersburg", "id":"stp", "type":"coast", "adj":[ "nwy", "bar", "mos", "lvn", "bot", "fin" ], "center":"true", "country":"rus" }, { "name":"Ukraine", "id":"ukr", "type":"land", "adj":[ "war", "mos", "sev", "rum", "gal" ], "center":"false", "country":"rus" }, { "name":"Warsaw", "id":"war", "type":"land", "adj":[ "lvn", "mos", "ukr", "gal", "sil", "pru" ], "center":"true", "country":"rus" }, { "name":"Ankara", "id":"ank", "type":"coast", "adj":[ "bla", "arm", "smy", "con" ], "center":"true", "country":"tur" }, { "name":"Armenia", "id":"arm", "type":"coast", "adj":[ "bla", "sev", "syr", "smy", "ank" ], "center":"false", "country":"tur" }, { "name":"Constantinople", "id":"con", "type":"coast", "adj":[ "bul", "bla", "ank", "smy", "aeg" ], "center":"true", "country":"tur" }, { "name":"Smyrna", "id":"smy", "type":"coast", "adj":[ "con", "ank", "arm", "syr", "eas", "aeg" ], "center":"true", "country":"tur" }, { "name":"Syria", "id":"syr", "type":"coast", "adj":[ "eas", "smy", "arm" ], "center":"false", "country":"tur" }, { "name":"Albania", "id":"alb", "type":"coast", "adj":[ "adr", "tri", "ser", "gre", "ion" ], "center":"false", "country":"neu" }, { "name":"Belgium", "id":"bel", "type":"coast", "adj":[ "eng", "nth", "hol", "ruh", "bur", "pic" ], "center":"true", "country":"neu" }, { "name":"Bulgaria", "id":"bul", "type":"coast", "adj":[ "rum", "bla", "con", "aeg", "gre", "ser" ], "center":"true", "country":"neu" }, { "name":"Denmark", "id":"den", "type":"coast", "adj":[ "nth", "ska", "swe", "bal", "kie", "hel" ], "center":"true", "country":"neu" }, { "name":"Finland", "id":"fin", "type":"coast", "adj":[ "nwy", "stp", "bot", "swe" ], "center":"false", "country":"neu" }, { "name":"Greece", "id":"gre", "type":"coast", "adj":[ "alb", "ser", "bul", "aeg", "ion" ], "center":"true", "country":"neu" }, { "name":"Holland", "id":"hol", "type":"coast", "adj":[ "nth", "hel", "kie", "ruh", "bel" ], "center":"true", "country":"neu" }, { "name":"Norway", "id":"nwy", "type":"coast", "adj":[ "nth", "nrg", "bar", "stp", "fin", "swe", "ska" ], "center":"true", "country":"neu" }, { "name":"North Africa", "id":"naf", "type":"coast", "adj":[ "mid", "wes", "tun" ], "center":"false", "country":"neu" }, { "name":"Portugal", "id":"por", "type":"coast", "adj":[ "mid", "spa" ], "center":"true", "country":"neu" }, { "name":"Rumania", "id":"rum", "type":"coast", "adj":[ "bud", "bla", "ukr", "sev", "bla", "bul", "ser", "gal" ], "center":"true", "country":"neu" }, { "name":"Serbia", "id":"ser", "type":"land", "adj":[ "tri", "bud", "rum", "bul", "gre", "alb" ], "center":"false", "country":"neu" }, { "name":"Spain", "id":"spa", "type":"coast", "adj":[ "mid", "por", "gas", "mar", "gol", "wes" ], "center":"true", "country":"neu" }, { "name":"Sweden", "id":"swe", "type":"coast", "adj":[ "nwy", "fin", "bot", "bal", "den", "ska" ], "center":"true", "country":"neu" }, { "name":"Tunis", "id":"tun", "type":"coast", "adj":[ "naf", "wes", "tyn", "ion" ], "center":"true", "country":"neu" }, { "name":"Adriatic Sea", "id":"adr", "type":"sea", "adj":[ "ven", "tri", "alb", "ion", "apu" ], "center":"false", "country":"sea" }, { "name":"Aegean Sea", "id":"aeg", "type":"sea", "adj":[ "gre", "bul", "con", "smy", "eas", "ion" ], "center":"false", "country":"sea" }, { "name":"Baltic Sea", "id":"bal", "type":"sea", "adj":[ "den", "swe", "bot", "lvn", "pru", "ber", "kie" ], "center":"false", "country":"sea" }, { "name":"Barents Sea", "id":"bar", "type":"sea", "adj":[ "nrg", "stp", "nwy" ], "center":"false", "country":"sea" }, { "name":"Black Sea", "id":"bla", "type":"sea", "adj":[ "sev", "arm", "ank", "con", "bul", "rum" ], "center":"false", "country":"sea" }, { "name":"Eastern Mediterranean", "id":"eas", "type":"sea", "adj":[ "ion", "aeg", "smy", "syr" ], "center":"false", "country":"sea" }, { "name":"English Channel", "id":"eng", "type":"sea", "adj":[ "iri", "wal", "lon", "nth", "bel", "pic", "bre", "mid" ], "center":"false", "country":"sea" }, { "name":"Gulf of Bothnia", "id":"bot", "type":"sea", "adj":[ "swe", "fin", "stp", "lvn", "bal" ], "center":"false", "country":"sea" }, { "name":"Gulf of Lyon", "id":"gol", "type":"sea", "adj":[ "spa", "mar", "pie", "tus", "tyn", "wes" ], "center":"false", "country":"sea" }, { "name":"Helgoland Bight", "id":"hel", "type":"sea", "adj":[ "nth", "den", "kie", "hol" ], "center":"false", "country":"sea" }, { "name":"Ionian Sea", "id":"ion", "type":"sea", "adj":[ "tun", "tyn", "nap", "apu", "adr", "alb", "gre", "aeg", "eas" ], "center":"false", "country":"sea" }, { "name":"Irish Sea", "id":"iri", "type":"sea", "adj":[ "mid", "nat", "lvp", "wal", "eng" ], "center":"false", "country":"sea" }, { "name":"Mid-Atlantic Ocean", "id":"mid", "type":"sea", "adj":[ "nat", "iri", "eng", "bre", "gas", "spa", "por", "wes", "naf" ], "center":"false", "country":"sea" }, { "name":"North Atlantic Ocean", "id":"nat", "type":"sea", "adj":[ "nrg", "cly", "lvp", "iri", "mid" ], "center":"false", "country":"sea" }, { "name":"North Sea", "id":"nth", "type":"sea", "adj":[ "nrg", "nwy", "ska", "den", "hel", "hol", "eng", "lon", "yor", "edi" ], "center":"false", "country":"sea" }, { "name":"Norwegian Sea", "id":"nrg", "type":"sea", "adj":[ "nat", "bar", "nwy", "nth", "edi", "cly" ], "center":"false", "country":"sea" }, { "name":"Skagerrak", "id":"ska", "type":"sea", "adj":[ "nwy", "swe", "den", "nth" ], "center":"false", "country":"sea" }, { "name":"Tyrrhenian Sea", "id":"tyn", "type":"sea", "adj":[ "gol", "tus", "rom", "nap", "ion", "tun", "wes" ], "center":"false", "country":"sea" }, { "name":"Western Mediterranean", "id":"wes", "type":"sea", "adj":[ "spa", "gol", "tyn", "tun", "naf", "mid" ], "center":"false", "country":"sea" } ] }';
	var ref = $.evalJSON(refjson);
	console.log ("Initializing game from JSON . . .");
	
	// Creates an empty game object.
	var game = {};
	game.t = {};
	game.p = {};
	game.turn = {"season":"Spring","year":"1901"};
	
	// Create the powers in the game
	(function () {
		var x;
		for (x in ref.powers) {
			game.p[ref.powers[x].name] = ref.powers[x];
		}			
	})();
	
	// Create proper properties for each territory
	(function () {
		var x;
		for (x in ref.mapdata) {
			game.t[ref.mapdata[x].id] = ref.mapdata[x];
		}
	})();
	
	// Convert strings to booleans
	(function () {		
		var x;
		
		for (x in game.t) {
			if (game.t[x].center === "true") {
				game.t[x].center = true;
				} else {
				game.t[x].center = false;
			};
		}
		
	})();
	
	// Converts all the adjacent territory strings to self-referencing variables.
	(function () {
		console.log("Converting adjacent strings to variables...");
		var territory, x, temp;
		
		temp = {};
		
		for (territory in game.t) {
			for (x in game.t[territory].adj) {
				var adj, match;
				
				adj = game.t[territory].adj[x];
				
				match = (function () {
					var z;
					
					for (z in game.t) {
						if (game.t[z].id == adj) {
							return game.t[z];
						}
					}
				})();
				
				temp[adj] = match;
			}
			
			game.t[territory].adj = temp;
			temp = {};
		}
	})();
	
	// Add starting units from the powers property
	// to the game board, and assign ownership of starting territories
	(function () {
		console.log("Building starting units...");
		var power, x;

		for (power in game.p) {
			game.p[power].owns = [];
			game.p[power].units = [];
			for (x in game.p[power].armories) {
				var ctr = game.p[power].armories[x].id;
				var unit = {};
				unit.type = game.p[power].armories[x].unit;
				unit.owner = game.p[power].name;
				unit.loc = ctr;
				game.t[ctr].unit = unit;
				game.t[ctr].owner = game.p[power].name;
				
				//Add the territory and unit to the owners holdings
				game.p[power].owns.push(ctr);
				game.p[power].units.push(unit);
			}
		}
	})();
	
	this.t = game.t;
	this.p = game.p;
	this.turn = game.turn;
	
	//function for adding units to the board
	this.build = function build(type, terr) {
		//if (caller.playingAs == terr.owner && terr.owner == terr.buildRights) {
		
			if (type == 'fleet' && terr.type != 'coast') {
				console.log("Can't build a fleet here!");
				return;
			}

			if (type == 'army' && terr.type == 'sea') {
				console.log("Can't build an army here!");
				return;
			}
			
			if (!terr.unit) {
				terr.unit = {
					"type":type,
					"owner":terr.owner,
					"loc":terr.id
				};
				this.p[terr.owner].units.push(terr.unit);
				this.p[terr.owner].owns.push(terr.id);
				console.log("Unit built.");
			} else console.log("Unit already present!");	
		//}
	};
	
	this.save = function() {
		var x,y;
		temp = {};
		temp.board = {};
		temp.turn = this.turn;
		
		for (x in this.p){
			temp.board[this.p[x].name] = {
				"owns": this.p[x].owns,
				"units": this.p[x].units
			}
				
			//Strip out some unnecessary data	
			for (y in temp.board[x].units) {
				temp.board[x].units[y].owner = undefined;
			}		
		}
			return $.toJSON(temp);
	};

	console.log ("Init complete!");
};
