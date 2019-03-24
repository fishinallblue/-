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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = '123455'\n\n//# sourceURL=webpack:///./src/a.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let str = __webpack_require__(/*! ./a */ \"./src/a.js\")\n__webpack_require__(/*! ./index.less */ \"./src/index.less\");\nconsole.log(str)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nReferenceError: window is not defined\\n    at eval (webpack:///./node_modules/style-loader/lib/addStyles.js?:23:2)\\n    at eval (webpack:///./node_modules/style-loader/lib/addStyles.js?:12:46)\\n    at module.exports (webpack:///./node_modules/style-loader/lib/addStyles.js?:80:88)\\n    at eval (webpack:///./src/index.less?./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js:16:134)\\n    at Object../node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/index.less (/Users/junhe/other/study/webpack-1/node_modules/style-loader/index.js!/Users/junhe/other/study/webpack-1/node_modules/css-loader/dist/cjs.js!/Users/junhe/other/study/webpack-1/node_modules/less-loader/dist/cjs.js!/Users/junhe/other/study/webpack-1/src/index.less:120:1)\\n    at __webpack_require__ (/Users/junhe/other/study/webpack-1/node_modules/style-loader/index.js!/Users/junhe/other/study/webpack-1/node_modules/css-loader/dist/cjs.js!/Users/junhe/other/study/webpack-1/node_modules/less-loader/dist/cjs.js!/Users/junhe/other/study/webpack-1/src/index.less:21:30)\\n    at /Users/junhe/other/study/webpack-1/node_modules/style-loader/index.js!/Users/junhe/other/study/webpack-1/node_modules/css-loader/dist/cjs.js!/Users/junhe/other/study/webpack-1/node_modules/less-loader/dist/cjs.js!/Users/junhe/other/study/webpack-1/src/index.less:85:18\\n    at Object.<anonymous> (/Users/junhe/other/study/webpack-1/node_modules/style-loader/index.js!/Users/junhe/other/study/webpack-1/node_modules/css-loader/dist/cjs.js!/Users/junhe/other/study/webpack-1/node_modules/less-loader/dist/cjs.js!/Users/junhe/other/study/webpack-1/src/index.less:88:10)\\n    at Module._compile (/Users/junhe/other/study/webpack-1/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)\\n    at exec (/Users/junhe/other/study/webpack-1/node_modules/mini-css-extract-plugin/dist/loader.js:47:10)\\n    at childCompiler.runAsChild (/Users/junhe/other/study/webpack-1/node_modules/mini-css-extract-plugin/dist/loader.js:126:14)\\n    at compile (/Users/junhe/other/study/webpack-1/node_modules/webpack/lib/Compiler.js:306:11)\\n    at hooks.afterCompile.callAsync.err (/Users/junhe/other/study/webpack-1/node_modules/webpack/lib/Compiler.js:630:14)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:24:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/Hook.js:154:20)\\n    at compilation.seal.err (/Users/junhe/other/study/webpack-1/node_modules/webpack/lib/Compiler.js:627:30)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.optimizeAssets.callAsync.err (/Users/junhe/other/study/webpack-1/node_modules/webpack/lib/Compilation.js:1325:35)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.optimizeChunkAssets.callAsync.err (/Users/junhe/other/study/webpack-1/node_modules/webpack/lib/Compilation.js:1316:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.additionalAssets.callAsync.err (/Users/junhe/other/study/webpack-1/node_modules/webpack/lib/Compilation.js:1311:36)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/Hook.js:154:20)\\n    at hooks.optimizeTree.callAsync.err (/Users/junhe/other/study/webpack-1/node_modules/webpack/lib/Compilation.js:1307:32)\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (/Users/junhe/other/study/webpack-1/node_modules/tapable/lib/Hook.js:154:20)\");\n\n//# sourceURL=webpack:///./src/index.less?");

/***/ })

/******/ });