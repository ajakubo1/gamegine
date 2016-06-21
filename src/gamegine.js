/**
 * Created by claim on 27.12.15.
 */

/**
 *
 * @param config
 * @param config.canvas - id of DOM canvas element you want to work on
 * @param config.width - width (in pixels) which should be set on canvas
 * @param config.height - height (in pixels) which should be set on canvas
 * @param [config.fps=60] - how many FPS you'd like to run
 * @param [config.ops=config.fps] - how many OPS you'd like to run
 * @param [config.context="2d"] - which canvas context you'd like to get
 * @param callback - callback for logic() and render() functions
 * @param callback.logic - called whenever application logic has to be updated
 * @param callback.render - called once every frame, when display should be re-drawn
 * @constructor
 */
var GAMEGINE = function (config, callback) {

    var self = this;
    this.callback = callback;
    this.running = false;
    this.updateTimeRedraw;
    this.updateTimeStep;
    this.fps = config.fps || 60;
    this.ops = config.ops || this.fps;
    this.tickLengthRedraw = 1000.0 / this.fps;
    this.tickLengthStep = 1000.0 / this.ops;
    this.width = config.width;
    this.height = config.height;
    this.canvas = config.canvas;
    if (!(this.canvas instanceof HTMLElement)) {
        this.canvas = document.getElementById(this.canvas);
    }
    if (this.canvas === null) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = config.canvas;
        document.body.appendChild(this.canvas);
    }
    this.canvas.width  = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext(config.context || "2d");

    this.redraw = function(frameTime) {
        /*var tickCount = Math.floor((frameTime - self.updateTimeRedraw) / self.tickLengthRedraw);

        if (tickCount > 0) {
            console.info(tickCount)
            self.updateTimeRedraw += self.tickLengthRedraw * tickCount;
            self.callback.render(self.context);
        }

        if (self.running) {
            requestAnimationFrame(self.redraw);
        }*/
        self.callback.render(self.context);
        if (self.running) {
            requestAnimationFrame(self.redraw);
        }
    };

    this.step = function () {
        var frameTime = performance.now();
        var tickCount = Math.floor((frameTime - self.updateTimeStep) / self.tickLengthStep);

        if (tickCount > 0) {
            self.updateTimeStep += self.tickLengthStep * tickCount;
            while (tickCount) {
                self.callback.logic();
                tickCount -= 1;
            }
        }

        if (self.running) {
            setTimeout(self.step, self.tickLengthStep);
        }
    };

    self.callback.init(this.context);
};

GAMEGINE.prototype.start = function () {
    this.running = true;
    this.updateTimeRedraw = performance.now();
    this.updateTimeStep = this.updateTimeRedraw;
    requestAnimationFrame(this.redraw);
    setTimeout(this.step, this.tickLengthStep);
};

GAMEGINE.prototype.stop = function () {
    this.running = false;
};