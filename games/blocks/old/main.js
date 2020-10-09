/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet Scene1 = new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene();\r\n\r\nclass PhysBlock extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Physics.Arcade.Sprite {\r\n    constructor(x, y, data) {\r\n        super(Scene1, x, y, data);\r\n        this.setData('color', data);\r\n        this.setData('static', false);\r\n        this.scene.add.existing(this);\r\n    }\r\n\r\n    makeStatic() {\r\n        Scene1.staticBlocks.add(new StaticBlock(this.x, this.y, this.getData('color')))\r\n        this.destroy();\r\n    }\r\n}\r\n\r\nclass StaticBlock extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Physics.Arcade.Sprite {\r\n    constructor(x, y, data) {\r\n        super(Scene1, x, y, data);\r\n        this.setData('color', data);\r\n        this.setData('static', true);\r\n        this.scene.add.existing(this);\r\n    }\r\n\r\n    makePhys() {\r\n        Scene1.physBlocks.add(new PhysBlock(this.x, this.y, this.getData('color')))\r\n        this.destroy();\r\n    }\r\n}\r\n\r\n\r\nScene1.init = function () {\r\n    this.WIDTH = game.config.width;\r\n    this.HEIGHT = game.config.height;\r\n    this.CENTER_X = this.WIDTH / 2;\r\n    this.CENTER_Y = this.HEIGHT / 2;\r\n    this.BOUNDS = {\r\n        x: 0,\r\n        y: 40\r\n    };\r\n    this.GRID_COLS = 14;\r\n    this.GRID_ROWS = 14;\r\n    this.BLOCK_WIDTH = 16;\r\n    this.HALF_BLOCK_WIDTH = this.BLOCK_WIDTH / 2;\r\n    this.RAILS = []; // The \"rails\" (columns) that each block is fixed to\r\n    for (let i = 0; i < this.GRID_COLS; i++) {\r\n        this.RAILS[i] = i * this.BLOCK_WIDTH + this.HALF_BLOCK_WIDTH + this.BOUNDS.x;\r\n    }\r\n    /*this.DROP_POS = [{\r\n            x: this.RAILS[6], // top left\r\n            y: this.BOUNDS.y - this.BLOCK_WIDTH\r\n        },\r\n        {\r\n            x: this.RAILS[7], // top right\r\n            y: this.BOUNDS.y - this.BLOCK_WIDTH\r\n        },\r\n        {\r\n            x: this.RAILS[7], // bottom right\r\n            y: this.BOUNDS.y\r\n        },\r\n        {\r\n            x: this.RAILS[6], // bottom left\r\n            y: this.BOUNDS.y\r\n        }\r\n    ]*/\r\n\r\n    this.ZONE = [];\r\n    this.ZONE[0] = this.add.rectangle(this.BOUNDS.x, 0, this.BLOCK_WIDTH + this.HALF_BLOCK_WIDTH, this.HEIGHT).setOrigin(0, 0).setStrokeStyle(1, 0xffffff);\r\n    for (let i = 1; i < this.RAILS.length - 2; i++) {\r\n        this.ZONE[i] = this.add.rectangle(this.RAILS[i], 0, this.BLOCK_WIDTH, this.HEIGHT).setOrigin(0, 0).setStrokeStyle(1, 0xffffff);\r\n    }\r\n    this.ZONE[this.RAILS.length - 2] = this.add.rectangle(this.RAILS[this.RAILS.length - 2], 0, this.BLOCK_WIDTH + this.HALF_BLOCK_WIDTH, this.HEIGHT).setOrigin(0, 0).setStrokeStyle(1, 0xffffff);\r\n\r\n    this.ZONE.forEach((z, i) => {\r\n        z.setInteractive();\r\n        z.on('pointerover', () => {\r\n            this.zoneOver = i;\r\n        });\r\n        z.on('pointerdown', () => {\r\n            if (this.pointer.rightButtonDown()) {\r\n                this.rotateCWOK = true;\r\n            } else {\r\n                this.dropOK = true;\r\n            }\r\n        });\r\n        z.on('pointerup', () => {\r\n            this.dropOK = false;\r\n            this.rotateCWOK = false;\r\n            this.pushonce = true;\r\n        })\r\n    })\r\n\r\n    this.DROP_POS = [];\r\n\r\n    for (let i = 0; i < this.ZONE.length; i++) {\r\n        this.DROP_POS[i] = [{\r\n                x: this.RAILS[i], // top left\r\n                y: this.BOUNDS.y - this.BLOCK_WIDTH - this.BLOCK_WIDTH\r\n            },\r\n            {\r\n                x: this.RAILS[i + 1], // top right\r\n                y: this.BOUNDS.y - this.BLOCK_WIDTH - this.BLOCK_WIDTH\r\n            },\r\n            {\r\n                x: this.RAILS[i + 1], // bottom right\r\n                y: this.BOUNDS.y - this.BLOCK_WIDTH\r\n            },\r\n            {\r\n                x: this.RAILS[i], // bottom left\r\n                y: this.BOUNDS.y - this.BLOCK_WIDTH\r\n            }\r\n        ]\r\n    }\r\n\r\n    this.cycle = 'gen'; // the game's \"stages\" for what the update function should do\r\n    this.zoneOver = 6;\r\n    this.dropOK = false;\r\n    this.rotateCWOK = false;\r\n    this.moveable = true;\r\n    this.grid = [];\r\n\r\n    this.gridAlign = function () {\r\n        for (let row = 0; row < this.GRID_ROWS; row++) {\r\n            this.grid[row] = [];\r\n\r\n            for (let col = 0; col < this.GRID_COLS; col++) {\r\n                let block = undefined;\r\n                let pos = {\r\n                    xmin: (col * this.BLOCK_WIDTH + this.BOUNDS.x),\r\n                    xmax: (col * this.BLOCK_WIDTH + this.BLOCK_WIDTH + this.BOUNDS.x),\r\n                    x: (col * this.BLOCK_WIDTH + this.HALF_BLOCK_WIDTH + this.BOUNDS.x),\r\n                    ymin: (row * this.BLOCK_WIDTH + this.BOUNDS.y),\r\n                    ymax: (row * this.BLOCK_WIDTH + this.BLOCK_WIDTH + this.BOUNDS.y),\r\n                    y: (row * this.BLOCK_WIDTH + this.HALF_BLOCK_WIDTH + this.BOUNDS.y),\r\n                }\r\n\r\n                this.staticBlocks.getChildren().some(e => {\r\n                    if (e.x > pos.xmin && e.x < pos.xmax && e.y > pos.ymin && e.y < pos.ymax) {\r\n                        block = e;\r\n                    }\r\n                })\r\n\r\n                if (block) {\r\n                    block.x = pos.x;\r\n                    block.y = pos.y;\r\n                    block.refreshBody();\r\n                }\r\n                this.grid[row][col] = block;\r\n            }\r\n        }\r\n    }\r\n\r\n    this.pushPhysLeft = function () {\r\n        let blocked = false;\r\n        this.physBlocks.getChildren().forEach(a => {\r\n            let pos = {\r\n                xmin: ((a.x - this.BLOCK_WIDTH) - this.HALF_BLOCK_WIDTH),\r\n                xmax: ((a.x - this.BLOCK_WIDTH) + this.HALF_BLOCK_WIDTH),\r\n                ymin: (a.y - this.BLOCK_WIDTH),\r\n                ymax: (a.y + this.BLOCK_WIDTH)\r\n            }\r\n            this.staticBlocks.getChildren().some(b => {\r\n                if (b.x > pos.xmin && b.x <= pos.xmax && b.y > pos.ymin && b.y <= pos.ymax) {\r\n                    blocked = true;\r\n                }\r\n            })\r\n            if (pos.xmax < this.RAILS[0]) {\r\n                blocked = true;\r\n            }\r\n        })\r\n        if (!blocked) {\r\n            this.physBlocks.getChildren().forEach(e => {\r\n                e.x -= this.BLOCK_WIDTH;\r\n            })\r\n        }\r\n    }\r\n\r\n    this.pushPhysRight = function () {\r\n        let blocked = false;\r\n        this.physBlocks.getChildren().forEach(a => {\r\n            let pos = {\r\n                xmin: ((a.x + this.BLOCK_WIDTH) - this.HALF_BLOCK_WIDTH),\r\n                xmax: ((a.x + this.BLOCK_WIDTH) + this.HALF_BLOCK_WIDTH),\r\n                ymin: (a.y - this.BLOCK_WIDTH),\r\n                ymax: (a.y + this.BLOCK_WIDTH)\r\n            }\r\n            this.staticBlocks.getChildren().some(b => {\r\n                if (b.x > pos.xmin && b.x <= pos.xmax && b.y > pos.ymin && b.y <= pos.ymax) {\r\n                    blocked = true;\r\n                }\r\n            })\r\n            if (pos.xmin > this.RAILS[this.RAILS.length - 1]) {\r\n                blocked = true;\r\n            }\r\n        })\r\n        if (!blocked) {\r\n            this.physBlocks.getChildren().forEach(e => {\r\n                e.x += this.BLOCK_WIDTH;\r\n            })\r\n        }\r\n    }\r\n\r\n    this.randColor = function () {\r\n        let rand = phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Math.Between(0, 3);\r\n        switch (rand) {\r\n            case 0:\r\n                return 'red';\r\n            case 1:\r\n                return 'blue';\r\n            case 2:\r\n                return 'yellow';\r\n            case 3:\r\n                return 'green';\r\n            case 4:\r\n                return 'purple';\r\n        }\r\n    }\r\n\r\n    this.rotateCW = function () {\r\n        let tl, tr, br, bl;\r\n        this.physBlocks.getChildren().forEach(e => {\r\n            switch (e.getData('pos')) {\r\n                case 0:\r\n                    tl = e;\r\n                    break;\r\n                case 1:\r\n                    tr = e;\r\n                    break;\r\n                case 2:\r\n                    br = e;\r\n                    break;\r\n                case 3:\r\n                    bl = e;\r\n                    break;\r\n            }\r\n        })\r\n        let x = tl.x;\r\n        let y = tl.y;\r\n\r\n        tl.x = tr.x;\r\n        tl.y = tr.y;\r\n        tl.setData('pos', 1);\r\n\r\n        tr.x = br.x;\r\n        tr.y = br.y;\r\n        tr.setData('pos', 2);\r\n\r\n        br.x = bl.x;\r\n        br.y = bl.y;\r\n        br.setData('pos', 3);\r\n\r\n        bl.x = x;\r\n        bl.y = y;\r\n        bl.setData('pos', 0);\r\n    }\r\n\r\n    this.moveBlocksTo = function (zone) {\r\n        let tl, tr, br, bl;\r\n        this.physBlocks.getChildren().forEach(e => {\r\n            switch (e.getData('pos')) {\r\n                case 0:\r\n                    tl = e;\r\n                    break;\r\n                case 1:\r\n                    tr = e;\r\n                    break;\r\n                case 2:\r\n                    br = e;\r\n                    break;\r\n                case 3:\r\n                    bl = e;\r\n                    break;\r\n            }\r\n        })\r\n        tl.x = this.DROP_POS[zone][0].x;\r\n        tl.y = this.DROP_POS[zone][0].y;\r\n\r\n        tr.x = this.DROP_POS[zone][1].x;\r\n        tr.y = this.DROP_POS[zone][1].y;\r\n\r\n        br.x = this.DROP_POS[zone][2].x;\r\n        br.y = this.DROP_POS[zone][2].y;\r\n\r\n        bl.x = this.DROP_POS[zone][3].x;\r\n        bl.y = this.DROP_POS[zone][3].y;\r\n    }\r\n\r\n    this.isThereRoom = function (zone) {\r\n        let ok = true;\r\n        this.staticBlocks.getChildren().forEach(e => {\r\n            if (e.x === this.DROP_POS[zone][2].x || e.x === this.DROP_POS[zone][3].x) {\r\n                if (e.y < this.BOUNDS.y + (this.BLOCK_WIDTH * 2)) {\r\n                    ok = false;\r\n                }\r\n            }\r\n        })\r\n        return ok;\r\n    }\r\n\r\n    this.findBlocks = function () {\r\n        let color;\r\n        let col;\r\n        let row;\r\n        let found = false;\r\n\r\n        findColor:\r\n            for (let col2 = this.GRID_WIDTH - 1; col2 >= 0; col2--) { // move along rows from bottom\r\n                for (let row2 = this.GRID_HEIGHT - 1; row2 >= 0; row2--) {\r\n                    if (this.grid[row2][col2].getData('marked') === true) {\r\n                        color = this.grid[row2][col2].getData('color');\r\n                        col = col2;\r\n                        row = row2;\r\n                        found = true;\r\n                        break findColor;\r\n                    }\r\n                }\r\n            }\r\n\r\n        if (found) {\r\n\r\n            if (this.grid[row - 1] &&\r\n                this.grid[row - 1][col] &&\r\n                this.grid[row - 1][col].getData('color') === color &&\r\n                !this.grid[row - 1][col].getData('marked') &&\r\n                !this.grid[row - 1][col].getData('toPop')) {\r\n\r\n                this.grid[row - 1][col].setData('marked', true);\r\n            }\r\n\r\n            if (this.grid[row + 1] &&\r\n                this.grid[row + 1][col] &&\r\n                this.grid[row + 1][col].getData('color') === color &&\r\n                !this.grid[row + 1][col].getData('marked') &&\r\n                !this.grid[row + 1][col].getData('toPop')) {\r\n\r\n                this.grid[row + 1][col].setData('marked', true);\r\n            }\r\n\r\n            if (this.grid[row][col + 1] &&\r\n                this.grid[row][col + 1].getData('color') === color &&\r\n                !this.grid[row][col + 1].getData('marked') &&\r\n                !this.grid[row][col + 1].getData('toPop')) {\r\n\r\n                this.grid[row][col + 1].setData('marked', true);\r\n            }\r\n\r\n            if (this.grid[row][col - 1] &&\r\n                this.grid[row][col - 1].getData('color') === color &&\r\n                !this.grid[row][col - 1].getData('marked') &&\r\n                !this.grid[row][col - 1].getData('toPop')) {\r\n\r\n                this.grid[row][col - 1].setData('marked', true);\r\n            }\r\n\r\n            this.grid[row][col].setData('marked', false);\r\n            this.grid[row][col].setData('toPop', true);\r\n            this.findBlocks();\r\n        }\r\n    }\r\n\r\n  this.popBlocks = function () {\r\n        let numPopped = 0;\r\n        for (let col = this.GRID_WIDTH - 1; col >= 0; col--) { // move along rows from bottom\r\n            for (let row = this.GRID_HEIGHT - 1; row >= 0; row--) {\r\n                if (this.grid[row][col].getData('toPop') === true) {\r\n                    numPopped++;\r\n                    this.grid[row][col].setData('toPop', false)\r\n                    this.grid[row][col].setTexture(); // remove block upon click\r\n                    this.grid[row][col].setData('color', 'blank');\r\n                    this.grid[row][col].removeInteractive();\r\n                }\r\n            }\r\n        }\r\n        console.log(`number popped: ${numPopped}`);\r\n        this.score += numPopped * numPopped;\r\n    }\r\n};\r\n\r\nScene1.preload = function () {\r\n    this.load.image('red', 'assets/redBlock.png');\r\n    this.load.image('blue', 'assets/blueBlock.png');\r\n    this.load.image('yellow', 'assets/yellowBlock.png');\r\n    this.load.image('green', 'assets/greenBlock.png');\r\n    this.load.image('purple', 'assets/purpleBlock.png');\r\n    this.load.image('grey', 'assets/greyBlock.png');\r\n\r\n    this.load.image('redBomb', 'assets/redBomb.png');\r\n    this.load.image('blueBomb', 'assets/blueBomb.png');\r\n    this.load.image('yellowBomb', 'assets/yellowBomb.png');\r\n    this.load.image('greenBomb', 'assets/greenBomb.png');\r\n    this.load.image('purpleBomb', 'assets/purpleBomb.png');\r\n};\r\n\r\nScene1.create = function () {\r\n    /*this.score = 0;\r\n\r\n    this.scoreText = this.add.text(4, 0, `Score: ${this.score}`, {\r\n        fontSize: '12pt',\r\n        color: '#fff'\r\n    });*/\r\n\r\n    this.physBlocks = this.physics.add.group();\r\n    this.staticBlocks = this.physics.add.staticGroup();\r\n\r\n    // Bottom row\r\n    this.bottom = this.physics.add.staticGroup();\r\n    this.RAILS.forEach((e) => {\r\n        let block = new StaticBlock(e, (this.GRID_ROWS * this.BLOCK_WIDTH) + this.HALF_BLOCK_WIDTH + this.BOUNDS.y, 'grey');\r\n        block.setData('static', true);\r\n        block.setData('color', 'bottom');\r\n        this.bottom.add(block);\r\n    })\r\n\r\n    // Collision\r\n    this.physics.add.collider(this.physBlocks, this.staticBlocks, (a, b) => {\r\n        a.makeStatic();\r\n        this.gridAlign();\r\n    });\r\n    this.physics.add.collider(this.physBlocks, this.bottom, (a, b) => {\r\n        a.makeStatic();\r\n        this.gridAlign();\r\n    });\r\n\r\n    // setup for space key\r\n    this.spaceKey = this.input.keyboard.addKey(\r\n        phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.SPACE\r\n    );\r\n    this.pointer = this.input.activePointer;\r\n    this.pushonce = true;\r\n    this.input.mouse.disableContextMenu();\r\n};\r\n\r\nScene1.update = function () {\r\n\r\n    switch (this.cycle) {\r\n        case 'gen':\r\n            // create 4 blocks in center top\r\n            this.physBlocks.add(new PhysBlock(this.DROP_POS[6][0].x, this.DROP_POS[6][0].y, this.randColor()).setData('pos', 0));\r\n            this.physBlocks.add(new PhysBlock(this.DROP_POS[6][2].x, this.DROP_POS[6][2].y, this.randColor()).setData('pos', 2));\r\n            this.physBlocks.add(new PhysBlock(this.DROP_POS[6][3].x, this.DROP_POS[6][3].y, this.randColor()).setData('pos', 3));\r\n            this.physBlocks.add(new PhysBlock(this.DROP_POS[6][1].x, this.DROP_POS[6][1].y, this.randColor()).setData('pos', 1));\r\n\r\n            this.cycle = 'move';\r\n\r\n            break;\r\n\r\n        case 'move':\r\n\r\n            this.moveBlocksTo(this.zoneOver);\r\n\r\n            if (this.rotateCWOK && this.pushonce) {\r\n                this.rotateCW();\r\n                this.pushonce = false;\r\n            }\r\n\r\n            if (this.dropOK && this.pushonce) {\r\n\r\n                if (this.isThereRoom(this.zoneOver) === true) {\r\n                    this.physBlocks.setVelocityY(200);\r\n                    this.cycle = 'drop';\r\n                    \r\n                }this.pushonce = false;\r\n            }\r\n\r\n            break;\r\n\r\n        case 'drop':\r\n            // Check if there are any free blocks left\r\n            if (this.physBlocks.getChildren().length === 0) {\r\n                this.cycle = 'align';\r\n            }\r\n\r\n            break;\r\n\r\n        case 'align':\r\n            this.gridAlign();\r\n            this.cycle = 'gen';\r\n\r\n            this.staticBlocks.getChildren().forEach(e => {\r\n                if (e.y <= this.BOUNDS.y) {\r\n                    this.cycle = 'gameover'\r\n                }\r\n            })\r\n            console.log(this.cycle)\r\n            break;\r\n\r\n        case 'gameover':\r\n\r\n\r\n            break;\r\n    }\r\n};\r\n\r\nconst config = {\r\n    type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\r\n    parent: 'cnv',\r\n    width: 224,\r\n    height: 280,\r\n    pixelArt: true,\r\n    zoom: 3,\r\n    physics: {\r\n        default: 'arcade',\r\n        arcade: {\r\n            debug: true\r\n        }\r\n    },\r\n    scene: Scene1\r\n};\r\n\r\nconst game = new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game(config);\r\nconsole.log(game);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });