// Factory.js
// A library for initializing and saving games.
// Also contains methods for the game object.

function initGame(){
    var ref, game;

    // fetch the reference model
    $.ajax({
	url: 'json/reference.json',
	dataType: 'json',
        async: false,
	success: function(data){
            console.log("Succesfully fetched " + this.url);
            ref = data;
	}
    });
    
    game = {};
    game.p = {};
    game.t = {};
    game.turn = {"year":"1901","season":"Spring"};
    
    // create powers in game
    (function () {
        var x;
        console.log(ref);
        for (x in ref.powers) {
            game.p[ref.powers[x].id] = ref.powers[x];
        }			
    })();
    
    // creates properties for each territory
    for (x in ref.mapdata) {
        game.t[ref.mapdata[x].id] = ref.mapdata[x];
    };
    
    // converts strings to booleans
    for (x in game.t) {
        if (game.t[x].center === "true") {
            game.t[x].center = true;
            } else {
        game.t[x].center = false;
        };
    };
    
    
    return game;  
}