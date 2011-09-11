// GUI.js
// Support for building and interacting with board svg.

// creat new gui object
gui = new Gui();

function buildMap () {
    var pathref, R, territory;
    
    // fetch svg path data from json
    $.ajax({
        url: 'json/svg_jDip_paths.json',
        dataType: 'json',
        async: false,
        success: function (data) {
            console.log("Succesfully fetched " + this.url);
            pathref = data;
        }
    });
    
    // create Raphael canvas
    R = Raphael("map", $("#map").width(), $("#map").height());
    
    // draw and fill territories
    for (territory in pathref) {
        
        // draw
        gui.map[territory] = R.path(pathref[territory]).attr(gui.path_styles.default);
        
        // fill territories
        
        if (game.t[territory]) {
            if (game.t[territory].owner) {
                gui.map[territory].attr({"fill": gui.colors.powers[game.t[territory].owner]});
            } else {
                gui.map[territory].attr({"fill": gui.colors.natural[game.t[territory].type]});
            }
        }
        
        if (!game.t[territory]) {
            gui.map[territory].attr({"fill": gui.colors.natural.neutral});
        }
    };
    
    // reveal map
    $("#loading").hide("fade", {}, 500);
}

function Gui () {
    
    this.map = {};
    
    this.path_styles = {
        default: {
            stroke: "#333333",
            "stroke-width": 1,
            "stroke-linejoin": "round",
            scale: "1, 1",
            "fill-opacity": 0.8 
        }
    };
    
    this.colors = {
        natural: {
            land: "#CC9900",
            coast: "#CC9900",
            sea: "#0099FF",
            neutral: "#999999"
        },
        
        powers: {
            aus: "#CC0000",
            eng: "#0000CC",
            fra: "#CCFF33",
            ger: "#006666",
            ita: "#00CC66",
            rus: "#660099",
            tur: "#66FFFF",
        }
    }
    
}
