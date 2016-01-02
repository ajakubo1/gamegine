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
    this.updateTime;
    this.fps = config.fps || 60;
    this.ops = config.ops || config.fps;
    this.leftOps = 0;
    this.tickLength = 1000.0 / this.fps;
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

    this.frame = function(frameTime) {
        var tickCount = Math.floor((frameTime - self.updateTime) / self.tickLength);

        if (tickCount > 0) {
            self.updateTime += self.tickLength * tickCount;
            tickCount *= self.ops / self.fps + self.leftOps;
            self.leftOps = tickCount - Math.floor(tickCount);
            tickCount = Math.floor(tickCount);
            while (tickCount) {
                self.callback.logic();
                tickCount -= 1;
            }

            self.callback.render(self.context);
        }

        if (self.running) {
            window.requestAnimationFrame(self.frame);
        }
    };

    self.callback.init(this.context);
};

GAMEGINE.prototype.start = function () {
    this.running = true;
    this.updateTime = window.performance.now();
    window.requestAnimationFrame(this.frame);
};

GAMEGINE.prototype.stop = function () {
    this.running = false;
};