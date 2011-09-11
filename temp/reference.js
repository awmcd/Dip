var refjson = '{"powers":[{"name":"Austria","armories":[{"id":"vie","unit":"army"},{"id":"bud","unit":"army"},{"id":"tri","unit":"fleet"}]},{"name":"England","armories":[{"id":"lvp","unit":"army"},{"id":"edi","unit":"fleet"},{"id":"lon","unit":"fleet"}]},{"name":"France","armories":[{"id":"par","unit":"army"},{"id":"mar","unit":"army"},{"id":"bre","unit":"fleet"}]},{"name":"Germany","armories":[{"id":"ber","unit":"army"},{"id":"mun","unit":"army"},{"id":"kie","unit":"fleet"}]},{"name":"Italy","armories":[{"id":"rom","unit":"army"},{"id":"ven","unit":"army"},{"id":"nap","unit":"fleet"}]},{"name":"Russia","armories":[{"id":"mos","unit":"army"},{"id":"war","unit":"army"},{"id":"stp","unit":"fleet"},{"id":"sev","unit":"fleet"}]},{"name":"Turkey","armories":[{"id":"con","unit":"army"},{"id":"smy","unit":"army"},{"id":"ank","unit":"fleet"}]}],"mapdata":[ { "name": "Bohemia", "id": "boh", "type": "land", "adj": [ "mun", "sil", "gal", "vie", "tyr" ], "center": "true"}, { "name": "Budapest", "id": "bud", "type": "land", "adj": [ "gal", "rum", "bul", "ser", "tri", "vie" ], "center": "true"}, { "name": "Galicia", "id": "gal", "type": "land", "adj": [ "ukr", "rum", "bud", "vie", "boh", "sil", "war" ], "center": "false"}, { "name": "Trieste", "id": "tri", "type": "coast", "adj": [ "vie", "bud", "ser", "alb", "adr", "ven", "tyr" ], "center": "true"}, { "name": "Tyrolia", "id": "tyr", "type": "land", "adj": [ "mun", "boh", "vie", "tri", "ven", "pie" ], "center": "false"}, { "name": "Vienna", "id": "vie", "type": "land", "adj": [ "boh", "gal", "bud", "tri", "tyr" ], "center": "true"}, { "name": "Clyde", "id": "cly", "type": "coast", "adj": [ "nat", "nrg", "edi", "lvp" ], "center": "false"}, { "name": "Edinburgh", "id": "edi", "type": "coast", "adj": [ "cly", "nrg", "nth", "yor", "lvp" ], "center": "true"}, { "name": "Liverpool", "id": "lvp", "type": "coast", "adj": [ "iri", "nat", "cly", "edi", "yor", "wal" ], "center": "true"}, { "name": "London", "id": "lon", "type": "coast", "adj": [ "wal", "lvp", "yor", "nth", "eng" ], "center": "true"}, { "name": "Wales", "id": "wal", "type": "coast", "adj": [ "iri", "lvp", "yor", "lon", "eng" ], "center": "false"}, { "name": "Yorkshire", "id": "yor", "type": "coast", "adj": [ "wal", "lvp", "edi", "nth", "lon" ], "center": "false"}, { "name": "Brest", "id": "bre", "type": "coast", "adj": [ "mid", "eng", "pic", "par", "gas" ], "center": "true"}, { "name": "Burgundy", "id": "bur", "type": "land", "adj": [ "par", "pic", "bel", "ruh", "mun", "mar", "gas" ], "center": "false"}, { "name": "Gascony", "id": "gas", "type": "coast", "adj": [ "mid", "bre", "par", "bur", "mar", "spa" ], "center": "false"}, { "name": "Marseilles", "id": "mar", "type": "coast", "adj": [ "spa", "gas", "bur", "pie", "gol" ], "center": "true"}, { "name": "Paris", "id": "par", "type": "land", "adj": [ "bre", "pic", "bur", "gas" ], "center": "true"}, { "name": "Picardy", "id": "pic", "type": "coast", "adj": [ "bre", "eng", "bel", "bur", "par" ], "center": "false"}, { "name": "Berlin", "id": "ber", "type": "coast", "adj": [ "kie", "bal", "pru", "sil", "mun" ], "center": "true"}, { "name": "Kiel", "id": "kie", "type": "coast", "adj": [ "hol", "hel", "den", "bal", "ber", "mun", "ruh" ], "center": "true"}, { "name": "Munich", "id": "mun", "type": "land", "adj": [ "ruh", "kie", "ber", "sil", "boh", "tyr", "bur" ], "center": "true"}, { "name": "Prussia", "id": "pru", "type": "coast", "adj": [ "ber", "bal", "lvn", "war", "sil" ], "center": "false"}, { "name": "Ruhr", "id": "ruh", "type": "land", "adj": [ "bel", "hol", "kie", "mun", "bur" ], "center": "false"}, { "name": "Silesia", "id": "sil", "type": "land", "adj": [ "ber", "pru", "war", "gal", "boh", "mun" ], "center": "false"}, { "name": "Apulia", "id": "apu", "type": "coast", "adj": [ "ven", "adr", "ion", "nap", "rom" ], "center": "false"}, { "name": "Naples", "id": "nap", "type": "coast", "adj": [ "rom", "apu", "ion", "tyn" ], "center": "true"}, { "name": "Piedmont", "id": "pie", "type": "coast", "adj": [ "mar", "tyr", "ven", "tus", "gol" ], "center": "false"}, { "name": "Rome", "id": "rom", "type": "coast", "adj": [ "tus", "ven", "apu", "nap", "tyn" ], "center": "true"}, { "name": "Tuscany", "id": "tus", "type": "coast", "adj": [ "pie", "ven", "rom", "tyn", "gol" ], "center": "false"}, { "name": "Venice", "id": "ven", "type": "coast", "adj": [ "pie", "tyr", "tri", "adr", "apu", "rom", "tus" ], "center": "true"}, { "name": "lvnonia", "id": "lvn", "type": "coast", "adj": [ "bal", "bot", "stp", "mos", "war", "pru" ], "center": "false"}, { "name": "Moscow", "id": "mos", "type": "land", "adj": [ "lvn", "stp", "sev", "ukr", "war" ], "center": "true"}, { "name": "Sevastopol", "id": "sev", "type": "coast", "adj": [ "ukr", "mos", "bla", "arm", "rum" ], "center": "true"}, { "name": "St. Petersburg", "id": "stp", "type": "coast", "adj": [ "nwy", "bar", "mos", "lvn", "bot", "fin" ], "center": "true"}, { "name": "Ukraine", "id": "ukr", "type": "land", "adj": [ "war", "mos", "sev", "rum", "gal" ], "center": "false"}, { "name": "Warsaw", "id": "war", "type": "land", "adj": [ "lvn", "mos", "ukr", "gal", "sil", "pru" ], "center": "true"}, { "name": "Ankara", "id": "ank", "type": "coast", "adj": [ "bla", "arm", "smy", "con" ], "center": "true"}, { "name": "Armenia", "id": "arm", "type": "coast", "adj": [ "bla", "sev", "syr", "smy", "ank" ], "center": "false"}, { "name": "Constantinople", "id": "con", "type": "coast", "adj": [ "bul", "bla", "ank", "smy", "aeg" ], "center": "true"}, { "name": "Smyrna", "id": "smy", "type": "coast", "adj": [ "con", "ank", "arm", "syr", "eas", "aeg" ], "center": "true"}, { "name": "Syria", "id": "syr", "type": "coast", "adj": [ "eas", "smy", "arm" ], "center": "false"}, { "name": "Albania", "id": "alb", "type": "coast", "adj": [ "adr", "tri", "ser", "gre", "ion" ], "center": "false"}, { "name": "Belgium", "id": "bel", "type": "coast", "adj": [ "eng", "nth", "hol", "ruh", "bur", "pic" ], "center": "true"}, { "name": "Bulgaria", "id": "bul", "type": "coast", "adj": [ "rum", "bla", "con", "aeg", "gre", "ser" ], "center": "true"}, { "name": "Denmark", "id": "den", "type": "coast", "adj": [ "nth", "ska", "swe", "bal", "kie", "hel" ], "center": "true"}, { "name": "Finland", "id": "fin", "type": "coast", "adj": [ "nwy", "stp", "bot", "swe" ], "center": "false"}, { "name": "Greece", "id": "gre", "type": "coast", "adj": [ "alb", "ser", "bul", "aeg", "ion" ], "center": "true"}, { "name": "Holland", "id": "hol", "type": "coast", "adj": [ "nth", "hel", "kie", "ruh", "bel" ], "center": "true"}, { "name": "Norway", "id": "nwy", "type": "coast", "adj": [ "nth", "nrg", "bar", "stp", "fin", "swe", "ska" ], "center": "true"}, { "name": "North Africa", "id": "naf", "type": "coast", "adj": [ "mid", "wes", "tun" ], "center": "false"}, { "name": "Portugal", "id": "por", "type": "coast", "adj": [ "mid", "spa" ], "center": "true"}, { "name": "Rumania", "id": "rum", "type": "coast", "adj": [ "bud", "bla", "ukr", "sev", "bla", "bul", "ser", "gal" ], "center": "true"}, { "name": "Serbia", "id": "ser", "type": "land", "adj": [ "tri", "bud", "rum", "bul", "gre", "alb" ], "center": "false"}, { "name": "Spain", "id": "spa", "type": "coast", "adj": [ "mid", "por", "gas", "mar", "gol", "wes" ], "center": "true"}, { "name": "Sweden", "id": "swe", "type": "coast", "adj": [ "nwy", "fin", "bot", "bal", "den", "ska" ], "center": "true"}, { "name": "Tunis", "id": "tun", "type": "coast", "adj": [ "naf", "wes", "tyn", "ion" ], "center": "true"}, { "name": "Adriatic Sea", "id": "adr", "type": "sea", "adj": [ "ven", "tri", "alb", "ion", "apu" ], "center": "false"}, { "name": "Aegean Sea", "id": "aeg", "type": "sea", "adj": [ "gre", "bul", "con", "smy", "eas", "ion" ], "center": "false"}, { "name": "Baltic Sea", "id": "bal", "type": "sea", "adj": [ "den", "swe", "bot", "lvn", "pru", "ber", "kie" ], "center": "false"}, { "name": "Barents Sea", "id": "bar", "type": "sea", "adj": [ "nrg", "stp", "nwy" ], "center": "false"}, { "name": "Black Sea", "id": "bla", "type": "sea", "adj": [ "sev", "arm", "ank", "con", "bul", "rum" ], "center": "false"}, { "name": "Eastern Mediterranean", "id": "eas", "type": "sea", "adj": [ "ion", "aeg", "smy", "syr" ], "center": "false"}, { "name": "English Channel", "id": "eng", "type": "sea", "adj": [ "iri", "wal", "lon", "nth", "bel", "pic", "bre", "mid" ], "center": "false"}, { "name": "Gulf of Bothnia", "id": "bot", "type": "sea", "adj": [ "swe", "fin", "stp", "lvn", "bal" ], "center": "false"}, { "name": "Gulf of Lyon", "id": "gol", "type": "sea", "adj": [ "spa", "mar", "pie", "tus", "tyn", "wes" ], "center": "false"}, { "name": "Helgoland Bight", "id": "hel", "type": "sea", "adj": [ "nth", "den", "kie", "hol" ], "center": "false"}, { "name": "Ionian Sea", "id": "ion", "type": "sea", "adj": [ "tun", "tyn", "nap", "apu", "adr", "alb", "gre", "aeg", "eas" ], "center": "false"}, { "name": "Irish Sea", "id": "iri", "type": "sea", "adj": [ "mid", "nat", "lvp", "wal", "eng" ], "center": "false"}, { "name": "Mid-Atlantic Ocean", "id": "mid", "type": "sea", "adj": [ "nat", "iri", "eng", "bre", "gas", "spa", "por", "wes", "naf" ], "center": "false"}, { "name": "North Atlantic Ocean", "id": "nat", "type": "sea", "adj": [ "nrg", "cly", "lvp", "iri", "mid" ], "center": "false"}, { "name": "North Sea", "id": "nth", "type": "sea", "adj": [ "nrg", "nwy", "ska", "den", "hel", "hol", "eng", "lon", "yor", "edi" ], "center": "false"}, { "name": "Norwegian Sea", "id": "nrg", "type": "sea", "adj": [ "nat", "bar", "nwy", "nth", "edi", "cly" ], "center": "false"}, { "name": "Skagerrak", "id": "ska", "type": "sea", "adj": [ "nwy", "swe", "den", "nth" ], "center": "false"}, { "name": "Tyrrhenian Sea", "id": "tyn", "type": "sea", "adj": [ "gol", "tus", "rom", "nap", "ion", "tun", "wes" ], "center": "false"}, { "name": "Western Mediterranean", "id": "wes", "type": "sea", "adj": [ "spa", "gol", "tyn", "tun", "naf", "mid" ], "center": "false"} ]}';

// basic game constructor
function game() {
    this.t = {};
    this.p = {};
    this.turn = {};
};

//the methods for a game. includes build, isAdjacent, save, getConvoyPaths
game.prototype = {

    //function for adding units to the board
    build: function (type, terr) {
        // if (caller.playingAs == terr.owner && terr.owner == terr.buildRights) {
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
                "type": type,
                "owner": terr.owner
                //,
                //"loc":terr.id
            };
            this.p[terr.owner].units.push(terr.unit);
            this.p[terr.owner].owns.push(terr.id);
            console.log("Unit built.");
        } else console.log("Unit already present!");
        // }
    },

    //function for determining adjacency
    isAdjacent: function (t1, t2) {
        if (this.t[t1].adj[t2]) {
            return true;
        } else return false;
    },

    //function that generates game-state JSON
    save: function () {
        var x, y, z;
        temp = {};
        temp.board = {};
        temp.turn = this.turn;

        for (x in this.p) {
            temp.board[x] = {
                "owns": this.p[x].owns,
                "units": this.p[x].units
            }

            //Strip out some unnecessary data and add location data
            for (y in temp.board[x].units) {
                temp.board[x].units[y].owner = undefined;

                for (z in this.t) {
                    if (this.t[z].unit === temp.board[x].units[y]) {
                        temp.board[x].units[y].loc = this.t[z].id;
                    }
                }
            }
        }
        return $.toJSON(temp);
    },

    //A feeder for the real getConvoyPath
    getConvoyPaths: function (t1, t2) {
        return this.getConvoyPath(t1, t2, '', []);
    },

    //A method to find all possible convoy paths. Returns an array of strings of
    //the ids of territories with fleets forming paths between t1 and t2.
    getConvoyPath: function (t1, t2, result, results) {
        var x;
        var result0 = result;
        for (x in this.t[t1].adj) {
            console.log("checking " + x);

            //If the territory you're looking at is the destination, you're done -- add current result path to list
            if (x == t2) {
                console.log("bing!");
                results.push(result);

                //If not, check to see if the territory is already in the current path
            } else if (result.search(this.t[t1].adj[x].id) == -1) {

                //If not, if it's sea and has a fleet, add it to the working result, and recursively check its adjacents
                if ((this.t[t1].adj[x].type == "sea" && this.t[t1].adj[x].unit == "fleet") || this.t[t1].adj[x].id == t2) {

                    //This trickery prevents unsightly leading commas in the resulting path.
                    if (result == "") {
                        result += this.t[t1].adj[x].id;
                    } else result += ("," + this.t[t1].adj[x].id);
                    result += ("," + this.getConvoyPath(this.t[t1].adj[x].id, t2, result, results));
                }
            }

            //reset working result for when call returns and loop continues
            result = result0;
        }

        //Spit out all possible paths
        return results;
    }
};

//a function to create a new game from a JSON reference


function initGame(jsonData) {
    var x;
    var ref = $.evalJSON(jsonData);

    game = new game();
    game.turn = {
        "year": "1901",
        "season": "Spring"
    };

    //Create the powers in the game
    for (x in ref.powers) {
        // game.p[ref.powers[x].name] = ref.powers[x];
        game.p[ref.powers[x].name.slice(0, 3).toLowerCase()] = ref.powers[x];
    }

    // Create proper properties for each territory
    for (x in ref.mapdata) {
        game.t[ref.mapdata[x].id] = ref.mapdata[x];
    }

    // Convert strings to booleans
    for (x in game.t) {
        if (game.t[x].center === "true") {
            game.t[x].center = true;
        } else {
            game.t[x].center = false;
        };
    }

    // Converts all the adjacent territory strings to self-referencing variables.
    console.log("Converting adjacent strings to variables...");
    var territory, temp;

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

    // Add starting units from the powers property
    // to the game board, and assign ownership of starting territories
    console.log("Building starting units...");
    var power;

    for (power in game.p) {
        game.p[power].owns = [];
        game.p[power].units = [];
        for (x in game.p[power].armories) {
            //where to build
            var ctr = game.p[power].armories[x].id;

            //what to build
            var unit = {
                "type": game.p[power].armories[x].unit,
                "owner": power
                //,
                //"loc": ctr
            };

            //update the territory's properties
            game.t[ctr].unit = unit;
            game.t[ctr].owner = power;
            game.t[ctr].buildRights = power;

            //add the territory and unit to the owner's holdings
            game.p[power].owns.push(ctr);
            game.p[power].units.push(unit);
        }
    }

    console.log("Init complete!");
    return game;
};