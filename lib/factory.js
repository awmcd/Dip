// Factory.js
// A library for initializing and saving games.
// Contains game object methods.

// create new game object
game = new Game();

// initGame: returns game object with starting properties
// --------
function initGame() {
    var ref, x, territory, temp, adj, match, power, ctr, unit;

    // fetch the reference model json
    $.ajax({
        url: 'json/reference.json',
        dataType: 'json',
        async: false,
        success: function (data) {
            console.log("Succesfully fetched " + this.url);
            ref = data;
        }
    });
    
    // add game turn (temporary)
    game.turn = {
        "year": "1901",
        "season": "Spring"
    }; 
    
    // creates properties for powers
    for (x in ref.powers) {
        game.p[ref.powers[x].id] = ref.powers[x];
    }

    // creates properties for each territory
    for (x in ref.mapdata) {
        game.t[ref.mapdata[x].id] = ref.mapdata[x];
    }

    // converts strings to booleans
    for (x in game.t) {
        if (game.t[x].center === "true") {
            game.t[x].center = true;
        } else {
            game.t[x].center = false;
        }
    }

    // converts all the adjacent territory strings to variables
    temp = {};

    for (territory in game.t) {
        for (x in game.t[territory].adj) {
            adj = game.t[territory].adj[x];
            
            match = (function () {
                var z;
                for (z in game.t) {
                    if (game.t[z].id === adj) {
                        return game.t[z];
                    }
                }
            })();
            
            temp[adj] = match;
        }
        
        game.t[territory].adj = temp;
        temp = {};
    }

    // populate game with starting units, assign starting ownerships
    for (power in game.p) {
        game.p[power].owns = [];
        game.p[power].units = [];
        for (x in game.p[power].armories) {
            //where to build
            ctr = game.p[power].armories[x].id;
            //what to build
            unit = {
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

    console.log("Game init complete!");
    return game;
}

function Game() {
    this.t = {};
    this.p = {};
    this.turn = {};
}

// prototype for game methods: build, save
Game.prototype = {

    // build: for unit type and territory id, builds unit
    // -----
    build: function (type, territory) {
        if (type === 'fleet' && territory.type !== 'coast') {
            console.log("Can't build a fleet here!");
            return;
        }
        
        if (type === 'army' && territory.type === 'sea') {
            console.log("Can't build an army here!");
            return;
        }
        
        if (territory.unit) {
            console.log("Unit already present!");
            return;
        }
        
        territory.unit = {
            "type": type,
            "owner": territory.owner
        };
        
        this.p[territory.owner].units.push(territory.unit);
        this.p[territory.owner].owns.push(territory.id);
        
        console.log("Unit built.");
    },

    // save: returns game-state JSON
    // ----
    save: function () {
        var x, y, z, temp;
        temp = {};
        temp.board = {};
        temp.turn = this.turn;
        
        for (x in this.p) {
            temp.board[x] = {
                "owns": this.p[x].owns,
                "units": this.p[x].units
            };
            
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
    }
};