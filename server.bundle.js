/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var express = __webpack_require__(1);

	var path = __webpack_require__(2);

	var buildDir = path.join(__dirname, 'dist');

	var compression = __webpack_require__(3);

	var app = express();

	/**
	* Activate the compression
	*/
	app.use(compression());

	/*
	*  Serve our static stuff
	*/
	app.use(express.static(buildDir));

	// Send all the request to the index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
	  res.sendFile('index.html', { 'root': buildDir });
	});

	var PORT = process.env.PORT || 8080;

	app.listen(PORT, function () {
	  console.log('Production Express Server running at localhost:' + PORT);
	});
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(buildDir, 'buildDir', '/Users/activoricordi/Documents/projects/quaderno/server.js');

	  __REACT_HOT_LOADER__.register(app, 'app', '/Users/activoricordi/Documents/projects/quaderno/server.js');

	  __REACT_HOT_LOADER__.register(PORT, 'PORT', '/Users/activoricordi/Documents/projects/quaderno/server.js');
	}();

	;
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);