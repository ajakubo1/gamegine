# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [v1.1.0](https://github.com/ajakubo1/gamegine/compare/v1.1.0...v1.1.1) - 2016-02-28

### Fixed
- If you didn't provide config.fps, ops was set to undefined and animation failed (now it's set to default fps value)

## [v1.1.0](https://github.com/ajakubo1/gamegine/compare/v1.0.0...v1.1.0) - 2016-01-02

### Added
- demo for jsFiddle
- support for Operations Per Seconds parameter (so that changing fps dont resolve in slower logic execution)
- user can now choose which context type to use (default is 2d, can pass any)

## [v1.0.0](https://github.com/ajakubo1/gamegine/releases/tag/v1.0.0) - 2015-12-27

### Added
- ``GAMEGINE`` object which is a lightweight game/animation engine
- can callback ``init()`` function
- added differentiation between ``render(context)`` function and ``logic()`` function