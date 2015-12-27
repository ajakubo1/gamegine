# Gamegine

Lightweight js game/animation engine

## Installation

```bash
npm install gamegine
```

To use library in your project, you have to include gamegine.js in your html file
```
<script src="node_modules/gamegine/gamegine.min.js"></script>
```

## Basic usage

Create config file:

```javascript
var config = {
    canvas: "canvas",
    width: 800,
    height: 600,
    fps: 30
};
```

Create your game object (make sure that you have ``render`` and ``logic`` functions exposed):

```javascript
var game = function () {

    //CODE GOES HERE

    return {
        render: function (context) {
        
        },
        logic: function () {
                       
        }
    }
}
game = new game();
```

Init and start the library:

```javascript
var gamegine = new GAMEGINE(config, game);
gamegine.start();
```

And from now on you can enjoy using it.

## Demos

For demo go [here](http://trash.thedimgames.com/gamegine/samples/).

## From the author

If you have any suggestions for the library, write me an email (ajakubo1@gmail.com) or open new issue on github!
