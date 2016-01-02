var config = {
    canvas: document.getElementById('canvas'),
    width: 800,
    height: 600,
    fps: 30
};

var GAME = function () {
    this.square;
    this.square_x = 5;
    this.square_y = 5;
    this.step = 10;

    this.init = function () {
        this.square = document.createElement('canvas');
        this.square.width = 100;
        this.square.height = 100;

        var context = this.square.getContext('2d');
        context.fillStyle = "darkgreen";
        context.fillRect(0, 0, 100, 100);
    };

    this.init();
};

GAME.prototype.render = function (context) {
    context.clearRect(0, 0, config.width, config.height);
    context.drawImage(this.square, this.square_x, this.square_y);
};

GAME.prototype.logic = function () {
    if(this.square_x === 5 && this.square_y === 5) {
        this.square_x += this.step;
    } else if (this.square_y === 5 && this.square_x === config.width - 105) {
        this.square_y += this.step;
    } else if (this.square_y === 5) {
        this.square_x += this.step;
    } else if (this.square_x === config.width - 105 && this.square_y === config.height - 105) {
        this.square_x -= this.step;
    } else if (this.square_x === 5 && this.square_y === config.height - 105) {
        this.square_y -= this.step;
    } else if (this.square_y === config.height - 105) {
        this.square_x -= this.step;
    } else if (this.square_x === config.width - 105) {
        this.square_y += this.step;
    } else if (this.square_x === 5) {
        this.square_y -= this.step;
    }
};

var game = new GAME();
var gamegine = new GAMEGINE(config, game);
gamegine.start();