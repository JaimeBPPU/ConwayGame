var conway = (function() {

<<<<<<< HEAD
	var pixel = [];


	function randomize() {
=======
	var pixel = []; // Two dimensional array that holds true/false on/off states of all squares
	var isRunning = false;  // Variable to check if game loop is running.
	if (howRandom === undefined) var howRandom = .2;  // Randomize slider, API edition
	
	function randomize() { // This function receives a random value (stored in conway.howRandom) and activates random squares.
>>>>>>> 286b81272f828823fa8e78ae77c74233da471794
		pixel = [];
		for (var i = 0; i < 32; i++) { 
			pixel[i] = [];   // Create second dimension of arrays
			for (var j = 0; j < 32; j++){
				var rnd = Math.random();
				var howRandom = $("#howRandom").val() / 100;
				if (rnd > howRandom) pixel[i][j] = false;
				else pixel[i][j] = true;
			}
		}
		notify();  // Inform UI of the update.
	}

	function draw() {  // Checks each block for on/off state, fills in all true.
		for (var i = 0; i < 32; i++) {
			pixel[i] = []; 
			for (var j = 0; j < 32; j++){
				if (pixel[i][j]) pixel[i][j] = false;
				else pixel[i][j] = true;
			}
		}
		notify();
	}

	function initialize() {
		for (var i = 0; i < 32; i++) {
			pixel[i] = [];  // Clear pixel array
			for (var j = 0; j < 32; j++){
				pixel[i][j] = false;  // Set each block to false, clearing all blocks
			}
		}
		notify();
	}
<<<<<<< HEAD
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
=======
	
	function setPixel(x, y) { // Changes the state of the given block.
		pixel[x][y] = !pixel[x][y]; // Flip true to false and vice versa.
		notify();
	}
	
	function gameLoop() {  // Once activated, Conway's game logic begins.
		if (isRunning === true) { // Is the game running?
			return true;  // Do not re-run the "interval" function.
		}
		isRunning = true;
		var interval = setInterval(function(){
			var update = [];
			for (var i = 0; i < pixel.length; i++) {  // Create a duplicate of pixel arrays.
				update[i] = pixel[i].slice();
			}
			for (var x = 0; x < pixel.length; x++) {
				for (var y = 0; y < pixel[x].length; y++) {
					update[x][y] = newStatus(x, y, pixel);  // Iterate through entire pixel 2d array
				}                                           // Only modify state of copied array
			}                                               // Checking and modifying same array does not work.
			for (var i = 0; i < update.length; i++) {
				pixel[i] = update[i].slice();  // Push updated values back to pixel individually.
			}
			notify();
		}, 100);
	}
	
	function newStatus(x, y, pixelCopy) {  // This function updates individual blocks.
		function checkNeighbors() {	 // This sub-function counts the neighbor blocks for the referenced pixel.
			var neigh = 0;
			for (var i = -1; i < 2; i++) {
				for (var j = -1; j < 2; j++) { //  The IF statement below checks if the square is out of bounds.
					if ((x+i >= 0 && y+j >= 0 && x+i <= pixelCopy.length -1 && x+j <= pixelCopy.length -1) && !(j == 0 && i == 0)) {
						if (pixelCopy[x+i][y+j]) neigh++;  // If there is a neighbor detected, count into neigh.
					}
				}
			}
			return neigh;
		}
		var neigh = checkNeighbors();  // Get the number of neighbors for currently referenced block.
		if (pixelCopy[x][y] && neigh === 2 || neigh === 3) {
			return true;  // This block was alive and survives.
		} else if (!pixelCopy[x][y] && neigh === 3) {
			return true;  // This dead block is now alive.
		} else {
			return false;  // This living block dies or the dead block stays dead.
		}
	}
	
	var listeners = []; // Collect listeners from the UI.
>>>>>>> 286b81272f828823fa8e78ae77c74233da471794

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
<<<<<<< HEAD
		initialize: initialize

=======
		gameLoop: gameLoop
>>>>>>> 286b81272f828823fa8e78ae77c74233da471794
	};

})();
