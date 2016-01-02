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

## Demo

For demo go [here](http://trash.thedimgames.com/gamegine/samples/).

You can also check it on [jsFiddle](http://jsfiddle.net/gh/get/library/pure/ajakubo1/gamegine/tree/master/demo) - 
there is a possibility that you need to click 'Run' button to make it work (I had to fiddle with jsFiddle a little 
bit to make it work ;))

## API

- ``start`` - starts the ``Gamegine``
- ``stop`` - stops the ``Gamegine``

## Configuration parameters

- ``config`` - ``Object`` element which has the following elements:
    * ``canvas`` - id of DOM canvas element you want to work on (or DOM element itself, or if it does not exist - 
    canvas DOM element will be created with ``id`` as this property)
    * ``width`` - width (in pixels) which should be set on canvas
    * ``height`` - height (in pixels) which should be set on canvas
    * ``fps`` (defaults to ``60``) - how many FPS you'd like to run
    * ``ops`` (defaults to ``fps``) - how many OPS you'd like to run
- ``callback`` - an object/function which should have 2 functions available:
    * ``render`` - which is called when rendering frame should occur (called with one argument, which is canvas 2d 
    context)
    * ``logic`` - which is called when operation occurs (logic for the frame)

## From the author

If you have any suggestions for the library, write me an email (ajakubo1@gmail.com) or open new issue on github!
or