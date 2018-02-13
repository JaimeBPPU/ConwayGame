var pixel = [];
for (var i = 0; i < 32; i++) {
	pixel[i] = [];
	for (var j = 0; j < 32; j++){
		var rnd = Math.random();
		if (rnd > .05) pixel[i][j] = false;
		if (rnd <= .05) pixel[i][j] = true;
	}
}

var canv = $("#grid")[0].getContext('2d');
canv.strokeStyle = '#ffffff';
canv.fillStyle = '#000000';


function update() {
	
	canv.clearRect(0, 0, 512, 512);
	for (var x = 0; x < pixel.length; x++) {
		for (var y = 0; y < pixel[0].length; y++) {
			canv.beginPath();
			canv.rect(y * 16, x * 16, 16, 16);
			if (!pixel[x][y]) canv.stroke();
			if (pixel[x][y]) canv.fill();
		}
	}
}

function randomize() {
	pixel = [];
	
	for (var i = 0; i < 32; i++) {
		pixel[i] = [];
		for (var j = 0; j < 32; j++){
			pixel[i][j] = false;
		}
	}
	for (var i = 0; i < 32; i++) {
		pixel[i] = [];
		for (var j = 0; j < 32; j++){
			var rnd = Math.random();
			if (rnd > .05) pixel[i][j] = false;
			if (rnd <= .05) pixel[i][j] = true;
		}
	}
	update();
}

function initialize() {
	// add a listener.
	// turn pixels on or off depending on what pixels are clicked.
}

function gameLoop() {
	// Game logic loop.
}

update();