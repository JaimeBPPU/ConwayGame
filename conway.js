var conway = (function() {

	var pixel = [];


	function randomize() {
		pixel = [];
		for (var i = 0; i < 32; i++) {
			pixel[i] = [];
			for (var j = 0; j < 32; j++){
				var rnd = Math.random();
				var howRandom = $("#howRandom").val() / 100;
				if (rnd > howRandom) pixel[i][j] = false;
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
	function gameLoop() {
		// Game logic loop.
	}
	// add a listener.
	// turn pixels on or off depending on what pixels are clicked.
	function setPixel(x, y) {
		pixel[x][y] = !pixel[x][y];
		notify();
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
		randomize: randomize,
		listen: listen,
		setPixel: setPixel,
		initialize: initialize

	};

})();
