var conway = (function() {

	var pixel = []; 
	if (howRandom === undefined) var howRandom = .2;  // Randomize slider, API edition
	
	function randomize() {
		pixel = [];
		for (var i = 0; i < 32; i++) {
			pixel[i] = [];
			for (var j = 0; j < 32; j++){
				var rnd = Math.random();
				if (rnd > conway.howRandom) pixel[i][j] = false;
				else pixel[i][j] = true;
			}
		}
		notify();
	}

	function initialize() {
		for (var i = 0; i < 32; i++) {
			pixel[i] = [];
			for (var j = 0; j < 32; j++){
				pixel[i][j] = false;
			}
		}

		notify();
	}
	
	function setPixel(x, y) {
		pixel[x][y] = !pixel[x][y];
		notify();
	}
	
	function gameLoop() {
		
	}
	
	function newStatus(x, y) {		
		var neigh = 0;
		
		for (var i = -1; i < 2; i++) {
			for (var j = -1; j < 2; j++) {
				if ((x+i >= 0 && y+j >= 0 && x+i <= pixel.length -1 && x+j <= pixel.length -1) && !(j == 0 && i == 0)) {
					if (pixel[x+i][y+j]) neigh++;
				}
			}
		}
		if (neigh > 2) console.log("Too many neighbors."); //debug, can be removed
		if (neigh < 2) console.log("Too lonely."); // debug, can be removed
		if (neigh === 2) return true;
		return false;
	}

	var listeners = [];

	// this function registers/adds a listener
	function listen(cb) {
	// collect them in the listeners array
		listeners.push(cb);
	}

	// notify all listeners of a change to the grid
	function notify() {
	// iterate through the array and call the listen callback function
		for (var i = 0; i < listeners.length; i++) {
			// call the function
			listeners[i](pixel);
		}
	}

	return {
		howRandom: howRandom,
		randomize: randomize,
		listen: listen,
		initialize: initialize,
		setPixel: setPixel,
		newStatus: newStatus
	};

})();
