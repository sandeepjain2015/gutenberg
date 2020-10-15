/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/fifthblock/script.js":
/*!*****************************************!*\
  !*** ./src/blocks/fifthblock/script.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/fifthblock/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/fifthblock/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/fifthblock/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected \")\".\n  ╷\n2 │     background:red(color: #000000);\n  │                         ^\n  ╵\n  /var/www/html/loksattadev/wp-content/plugins/first-block/src/blocks/fifthblock/style.scss 2:22  root stylesheet\n    at runLoaders (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/webpack/lib/NormalModule.js:316:20)\n    at /var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass-loader/dist/index.js:73:7)\n    at Function.call$2 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:88152:16)\n    at _render_closure1.call$2 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:77577:12)\n    at _RootZone.runBinary$3$3 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:26142:18)\n    at _RootZone.runBinary$3 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:26146:19)\n    at _FutureListener.handleError$1 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24590:19)\n    at _Future__propagateToListeners_handleError.call$0 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24887:40)\n    at Object._Future__propagateToListeners (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:4311:88)\n    at _Future._completeError$2 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24715:9)\n    at _AsyncAwaitCompleter.completeError$2 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24107:12)\n    at Object._asyncRethrow (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:4065:17)\n    at /var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:14085:20\n    at _wrapJsFunctionForAsync_closure.$protected (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:4090:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24128:12)\n    at _awaitOnObject_closure0.call$2 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24120:25)\n    at _RootZone.runBinary$3$3 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:26142:18)\n    at _RootZone.runBinary$3 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:26146:19)\n    at _FutureListener.handleError$1 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24590:19)\n    at _Future__propagateToListeners_handleError.call$0 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24887:40)\n    at Object._Future__propagateToListeners (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:4311:88)\n    at _Future._completeError$2 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24715:9)\n    at _Future__asyncCompleteError_closure.call$0 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24810:18)\n    at Object._microtaskLoop (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:4361:21)\n    at StaticClosure._startMicrotaskLoop (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:4367:11)\n    at _AsyncRun__scheduleImmediateJsOverride_internalCallback.call$0 (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:24022:21)\n    at invokeClosure (/var/www/html/loksattadev/wp-content/plugins/first-block/node_modules/sass/sass.dart.js:1363:26)");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_fifthblock_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/fifthblock/script */ "./src/blocks/fifthblock/script.js");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map