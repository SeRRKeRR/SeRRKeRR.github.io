/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 7705:
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 6742:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 6738:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 3225:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6742);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(8246), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(429), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(9660), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(9355), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(2352), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(9525), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(5130), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(3114), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}@font-face{font-family:'Montserrat';font-display:swap;font-style:italic;font-weight:400;src:local(\"Montserrat\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\")}@font-face{font-family:'Montserrat';font-display:swap;font-style:italic;font-weight:500;src:local(\"Montserrat\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\")}@font-face{font-family:'Montserrat';font-display:swap;font-style:italic;font-weight:700;src:local(\"Montserrat\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\")}@font-face{font-family:\"Comfortaa\";font-display:swap;font-style:normal;font-weight:700;src:local(\"Comfortaa\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff\")}body{font-weight:400;font-size:var(--text-size-pc);line-height:var(--text-height-pc);font-family:'Montserrat', serif;padding:0;margin:0;background-color:var(--main-color)}@media (max-width: 768px){body{font-size:var(--text-size-mb);line-height:var(--text-height-mb)}}*{color:var(--text-color);box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}ul{margin:0;padding:0;list-style-type:none}a{text-decoration:none}button{font-weight:400;font-size:var(--text-size-pc);line-height:var(--text-height-pc);font-family:'Montserrat', serif;padding:0;border:0;background:transparent;cursor:pointer}@media (max-width: 768px){button{font-size:var(--text-size-mb);line-height:var(--text-height-mb)}}p{margin:0 0;text-align:justify}h1,h2,h3{margin:0 0}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 2887:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.btnscroll__link--m3O6x{padding:10px 20px;border-radius:10px;background-color:#c7c4aa;transition-property:background-color;transition-duration:0.3s;transition-timing-function:ease-in-out;display:block;color:#333;cursor:pointer}.btnscroll__link--m3O6x:hover{background-color:#939180}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"link": "btnscroll__link--m3O6x"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.aboutme__container--kUPK1,.aboutme__leftColumn--d1SHr,.aboutme__rightColumn--nlrHW{display:flex;flex-direction:column}.aboutme__container--kUPK1{height:auto}@media (max-width: 768px){.aboutme__container--kUPK1{height:auto}}.aboutme__heading--TV5Fk{z-index:1;margin-bottom:30px;font-size:48px;line-height:58px;margin-bottom:20px}@media (max-width: 768px){.aboutme__heading--TV5Fk{margin-bottom:15px;font-size:32px;line-height:36px}}@media (max-width: 480px){.aboutme__heading--TV5Fk{font-size:27px;line-height:31px}}.aboutme__box--dIoCT{display:flex;height:600px}.aboutme__leftColumn--d1SHr{margin-right:50px;align-items:center}.aboutme__rightColumn--nlrHW{align-items:flex-start;overflow:hidden}.aboutme__imgBox--ULUCD{margin-bottom:20px;display:flex;justify-content:center;max-height:560px;border-radius:5px;overflow:hidden}.aboutme__img--VZASt{margin-bottom:-5px;height:497px;width:373px;border-radius:5px;opacity:0;transform:translateX(30%)}.aboutme__name--kzgZi{display:block;font-size:20px;font-weight:700;opacity:0;text-align:center}.aboutme__list--x_WXh{margin-bottom:30px;height:0;overflow-y:scroll;max-width:700px;max-height:460px}.aboutme__list--x_WXh::-webkit-scrollbar{width:8px}.aboutme__list--x_WXh::-webkit-scrollbar-track{background:var(--main-color)}.aboutme__list--x_WXh::-webkit-scrollbar-thumb{background-color:var(--text-color);border-radius:10px;border:2px solid var(--main-color)}.aboutme__text--K8T5w{text-align:justify}.aboutme__text--K8T5w:not(:last-child){margin-bottom:20px}.aboutme__btnBox--Eh_Iw{opacity:0}@media (max-width: 1024px){.aboutme__box--dIoCT{height:510px}.aboutme__leftColumn--d1SHr{margin-right:4%;width:36%}.aboutme__rightColumn--nlrHW{width:60%}.aboutme__imgBox--ULUCD{width:100%}}@media (max-width: 768px){.aboutme__box--dIoCT{display:flex;flex-direction:column;height:auto}.aboutme__leftColumn--d1SHr,.aboutme__rightColumn--nlrHW{margin-right:0;width:100%}.aboutme__rightColumn--nlrHW{min-height:350px}.aboutme__list--x_WXh{overflow-y:hidden;margin-bottom:30px;max-height:370px}html[data-textsize='big'] .aboutme__list--x_WXh{overflow-y:scroll}.aboutme__imgBox--ULUCD{height:400px;width:auto}.aboutme__name--kzgZi{margin-bottom:20px}.aboutme__text--K8T5w:not(:last-child){margin-bottom:10px}}@media (max-width: 599px){.aboutme__rightColumn--nlrHW{min-height:310px}}@media (max-width: 480px){.aboutme__imgBox--ULUCD{width:100%}.aboutme__list--x_WXh{overflow-y:scroll;margin-bottom:25px;max-height:248px}.aboutme__list--x_WXh::-webkit-scrollbar{width:8px}.aboutme__list--x_WXh::-webkit-scrollbar-track{background:var(--main-color)}.aboutme__list--x_WXh::-webkit-scrollbar-thumb{background-color:var(--text-color);border-radius:10px;border:2px solid var(--main-color)}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "aboutme__container--kUPK1",
	"leftColumn": "aboutme__leftColumn--d1SHr",
	"rightColumn": "aboutme__rightColumn--nlrHW",
	"heading": "aboutme__heading--TV5Fk",
	"box": "aboutme__box--dIoCT",
	"imgBox": "aboutme__imgBox--ULUCD",
	"img": "aboutme__img--VZASt",
	"name": "aboutme__name--kzgZi",
	"list": "aboutme__list--x_WXh",
	"text": "aboutme__text--K8T5w",
	"btnBox": "aboutme__btnBox--Eh_Iw"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.btnbox__container--fupQG{display:flex;flex-direction:column}.btnbox__btn--WYlX8{display:flex;justify-content:space-between;align-items:center;padding:30px 0;width:100%}.btnbox__btn--WYlX8:hover .btnbox__question--OfOKR{color:#939180}.btnbox__btn--WYlX8:hover .btnbox__icon--_8zt8{background-color:#939180}.btnbox__question--OfOKR{flex:1 1 100%;margin-right:50px;font-size:24px;line-height:26px;text-align:start;transition:color 0.3s ease-in-out}.btnbox__icon--_8zt8{position:relative;content:'';flex:0 0 50px;height:50px;border-radius:50%;background-color:#c7c4aa;transition:background-color 0.3s ease-in-out}.btnbox__icon--_8zt8::after,.btnbox__icon--_8zt8::before{content:\"\";position:absolute;background-color:#67665d;transition:transform 0.3s ease-in-out}.btnbox__icon--_8zt8::after{top:20%;left:50%;width:1px;height:62%}.btnbox__icon--_8zt8::before{top:50%;left:20%;width:62%;height:1px}.btnbox__icon--_8zt8.btnbox__open--_hcHm::after,.btnbox__icon--_8zt8.btnbox__open--_hcHm::before{transform:rotate(45deg)}.btnbox__answer--oxmyL{height:0}@media (max-width: 599px){.btnbox__btn--WYlX8{padding:15px 0}.btnbox__question--OfOKR{font-size:18px;line-height:20px}.btnbox__icon--_8zt8{flex:0 0 35px;height:35px}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "btnbox__container--fupQG",
	"btn": "btnbox__btn--WYlX8",
	"question": "btnbox__question--OfOKR",
	"icon": "btnbox__icon--_8zt8",
	"open": "btnbox__open--_hcHm",
	"answer": "btnbox__answer--oxmyL"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.accordion__container--GzHu3,.accordion__list--zqtI8{display:flex;flex-direction:column;width:100%}.accordion__heading--V8naR{z-index:1;margin-bottom:30px;font-size:48px;line-height:58px}@media (max-width: 768px){.accordion__heading--V8naR{margin-bottom:15px;font-size:32px;line-height:36px}}@media (max-width: 480px){.accordion__heading--V8naR{font-size:27px;line-height:31px}}.accordion__listItem--aLfWQ{overflow:hidden;border-top:1px solid var(--accordion-border-color)}.accordion__listItem--aLfWQ:not(:last-child){margin-bottom:-1px;border-bottom:1px solid transparent}.accordion__listItem--aLfWQ:last-child{border-bottom:1px solid var(--accordion-border-color)}.accordion__listItem--aLfWQ:hover{z-index:1;position:relative;border-color:#939180}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "accordion__container--GzHu3",
	"list": "accordion__list--zqtI8",
	"heading": "accordion__heading--V8naR",
	"listItem": "accordion__listItem--aLfWQ"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6742);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(9697), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.home__container--CYCkA{display:flex;flex-direction:column}.home__box--ODT_n{display:flex;justify-content:space-between;align-items:center}.home__kavinBox--rUomH{display:flex;align-items:center;height:auto;flex:0 1 460px}.home__kavin--bTOis{width:100%;border-radius:10px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:contain;background-repeat:no-repeat;transform:scale(0%)}.home__heading--QaT0d{z-index:1;margin-bottom:30px;font-size:48px;line-height:58px;margin-bottom:0}@media (max-width: 768px){.home__heading--QaT0d{margin-bottom:15px;font-size:32px;line-height:36px}}@media (max-width: 480px){.home__heading--QaT0d{font-size:27px;line-height:31px}}.home__heading--QaT0d,.home__text--IE8y1{color:var(--stock-color)}.home__svg--gvrDl{display:block;height:20px;line-height:24px;flex:0 0 20px;margin-right:15px}.home__headingBox--JD0PG{display:flex;justify-content:center}.home__headingBox--JD0PG,.home__list--ZxRss{width:50%;min-width:500px}.home__list--ZxRss{display:flex;flex-direction:column;margin-right:3%;opacity:0}.home__text--IE8y1{text-align:center;font-size:20px;font-weight:500}.home__item--zkjq_{display:flex;justify-content:space-between;align-items:center}.home__item--zkjq_:not(:last-child){margin-bottom:30px}@media (max-width: 1024px){.home__headingBox--JD0PG{margin-bottom:30px}.home__list--ZxRss{flex:1 1 60%;min-width:auto}.home__kavinBox--rUomH{flex:1 1 37%}}@media (max-width: 768px){.home__box--ODT_n{display:flex;flex-direction:column}.home__list--ZxRss,.home__headingBox--JD0PG{width:100%;min-width:auto}.home__headingBox--JD0PG{margin-bottom:0}.home__text--IE8y1{font-size:18px;line-height:22px}.home__list--ZxRss{margin-right:0;margin-bottom:20px;max-width:500px}.home__kavinBox--rUomH{max-width:400px}.home__item--zkjq_:not(:last-child){margin-bottom:20px}}@media (max-width: 480px){.home__item--zkjq_:not(:last-child){margin-bottom:10px}.home__svg--gvrDl{margin-right:5px}.home__text--IE8y1{font-size:var(--text-size-mb);line-height:var(--text-height-mb)}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "home__container--CYCkA",
	"box": "home__box--ODT_n",
	"kavinBox": "home__kavinBox--rUomH",
	"kavin": "home__kavin--bTOis",
	"heading": "home__heading--QaT0d",
	"text": "home__text--IE8y1",
	"svg": "home__svg--gvrDl",
	"headingBox": "home__headingBox--JD0PG",
	"list": "home__list--ZxRss",
	"item": "home__item--zkjq_"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1037:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.navlist__container--GpkXZ{display:flex;justify-content:space-between;align-items:center;max-width:400px}.navlist__item--xssfl:not(:last-child){margin-right:15px}.navlist__btn--EyPYY{border-bottom:1px solid transparent;transition-property:border-color;transition-duration:0.3s;transition-timing-function:ease-in-out}.navlist__btn--EyPYY:hover,.navlist__open--cqrEP{border-color:#c7c4aa}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "navlist__container--GpkXZ",
	"item": "navlist__item--xssfl",
	"btn": "navlist__btn--EyPYY",
	"open": "navlist__open--cqrEP"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.workingpage__container--tZqYW{display:flex;justify-content:space-between;align-items:center;height:100%}.workingpage__leftColumn--WfXgA,.workingpage__rightColumn--h_lgQ{min-height:425px}.workingpage__leftColumn--WfXgA{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;width:40%}.workingpage__rightColumn--h_lgQ{position:relative;height:100%;width:56%}.workingpage__heading--GiBBb{font-size:32px;line-height:36px;margin-bottom:10px}@media (max-width: 1439px){.workingpage__heading--GiBBb{font-size:30px;line-height:34px}}@media (max-width: 768px){.workingpage__heading--GiBBb{font-size:24px;line-height:28px}}.workingpage__textContainer--id1H5{margin-bottom:20px;height:0;overflow:hidden}.workingpage__text--NTDEC::-webkit-scrollbar{width:8px}.workingpage__text--NTDEC::-webkit-scrollbar-track{background:var(--main-color)}.workingpage__text--NTDEC::-webkit-scrollbar-thumb{background-color:var(--text-color);border-radius:10px;border:2px solid var(--main-color)}.workingpage__text--NTDEC{max-height:300px;overflow-y:scroll}.workingpage__text--NTDEC .workingpage__scroll--AwSHa::-webkit-scrollbar{width:12px}.workingpage__text--NTDEC .workingpage__scroll--AwSHa::-webkit-scrollbar-track{background:orange}.workingpage__text--NTDEC .workingpage__scroll--AwSHa::-webkit-scrollbar-thumb{background-color:blue;border-radius:20px;border:3px solid orange}.workingpage__btnBox--FjF5L{opacity:0}.workingpage__backImg--PiYoo{position:absolute;top:40px;left:0;bottom:0;width:100%;border-radius:10px;background-repeat:no-repeat;background-position:top center;opacity:0;transform:translateX(30%)}@media (max-width: 1024px){.workingpage__leftColumn--WfXgA,.workingpage__rightColumn--h_lgQ{width:48%;height:100%}}@media (max-width: 768px){.workingpage__container--tZqYW{display:flex;flex-direction:column}.workingpage__leftColumn--WfXgA,.workingpage__rightColumn--h_lgQ{min-height:auto;width:100%}.workingpage__leftColumn--WfXgA{height:310px;margin-bottom:20px}.workingpage__rightColumn--h_lgQ{height:300px}.workingpage__text--NTDEC{max-height:200px}.workingpage__backImg--PiYoo{top:0;bottom:0;background-size:cover}}@media (max-width: 599px){.workingpage__text--NTDEC{height:193px}.workingpage__rightColumn--h_lgQ{height:250px}}@media (max-width: 480px){.workingpage__rightColumn--h_lgQ{height:200px}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "workingpage__container--tZqYW",
	"leftColumn": "workingpage__leftColumn--WfXgA",
	"rightColumn": "workingpage__rightColumn--h_lgQ",
	"heading": "workingpage__heading--GiBBb",
	"textContainer": "workingpage__textContainer--id1H5",
	"text": "workingpage__text--NTDEC",
	"scroll": "workingpage__scroll--AwSHa",
	"btnBox": "workingpage__btnBox--FjF5L",
	"backImg": "workingpage__backImg--PiYoo"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6742);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(6108), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(8925), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(3940), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(7260), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.workingbox__imgOne--aUEt0{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.workingbox__imgTwo--GtCY7{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.workingbox__imgThree--l1A11{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.workingbox__imgFour--a8aCa{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"imgOne": "workingbox__imgOne--aUEt0",
	"imgTwo": "workingbox__imgTwo--GtCY7",
	"imgThree": "workingbox__imgThree--l1A11",
	"imgFour": "workingbox__imgFour--a8aCa"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.howiwork__container--AGyj7{display:flex;flex-direction:column;height:auto}@media (max-width: 768px){.howiwork__container--AGyj7{height:auto}}.howiwork__heading--yQ_uE{z-index:1;margin-bottom:30px;font-size:48px;line-height:58px;margin-bottom:40px}@media (max-width: 768px){.howiwork__heading--yQ_uE{margin-bottom:15px;font-size:32px;line-height:36px}}@media (max-width: 480px){.howiwork__heading--yQ_uE{font-size:27px;line-height:31px}}.howiwork__navBox--6uTl8{margin-bottom:40px}@media (max-width: 599px){.howiwork__navBox--6uTl8{margin-bottom:20px}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "howiwork__container--AGyj7",
	"heading": "howiwork__heading--yQ_uE",
	"navBox": "howiwork__navBox--6uTl8"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.socialnetworks__container--oiWEh{display:flex;flex-direction:column}.socialnetworks__heading--zIVGi{z-index:1;margin-bottom:30px;font-size:48px;line-height:58px}@media (max-width: 768px){.socialnetworks__heading--zIVGi{margin-bottom:15px;font-size:32px;line-height:36px}}@media (max-width: 480px){.socialnetworks__heading--zIVGi{font-size:27px;line-height:31px}}.socialnetworks__list--qHoKK{display:flex;justify-content:space-between;align-items:center;max-width:550px}.socialnetworks__link--qrqH0{display:block;width:60px;height:60px}.socialnetworks__svg--RDN8o{width:60px;height:60px;filter:grayscale(1);transition:filter 0.3s ease-in-out}.socialnetworks__vk--kKuVS{fill:#0077ff}.socialnetworks__tg--fFpoh{fill:#2481cc}.socialnetworks__inst--JVYdM{fill:url(#grad)}.socialnetworks__wa--zA52Z{fill:#25D366}.socialnetworks__mail--G5sVc{fill:#ff9e00}.socialnetworks__phone--yHFPJ{fill:#07a631}.socialnetworks__link--qrqH0:hover .socialnetworks__svg--RDN8o{filter:grayscale(0)}@media (max-width: 599px){.socialnetworks__link--qrqH0,.socialnetworks__svg--RDN8o{width:35px;height:35px}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "socialnetworks__container--oiWEh",
	"heading": "socialnetworks__heading--zIVGi",
	"list": "socialnetworks__list--qHoKK",
	"link": "socialnetworks__link--qrqH0",
	"svg": "socialnetworks__svg--RDN8o",
	"vk": "socialnetworks__vk--kKuVS",
	"tg": "socialnetworks__tg--fFpoh",
	"inst": "socialnetworks__inst--JVYdM",
	"wa": "socialnetworks__wa--zA52Z",
	"mail": "socialnetworks__mail--G5sVc",
	"phone": "socialnetworks__phone--yHFPJ"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6742);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(5632), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(7946), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.subjectsmse__container--hQDHB{display:flex;flex-direction:column;height:auto}@media (max-width: 768px){.subjectsmse__container--hQDHB{height:auto}}.subjectsmse__list--MXJz9{display:flex;justify-content:space-between;align-items:center;flex:1 1 600px}.subjectsmse__item--d1WPK{display:flex;flex-direction:column;align-items:flex-start;padding:30px 30px;height:100%;width:45%;border-radius:25px;opacity:0;transform:translateX(30%)}.subjectsmse__socialList--ULocI{list-style-type:disc;margin-bottom:20px}.subjectsmse__socialListItem--UdlEh{color:#c7c4aa;text-align:justify}.subjectsmse__socialListItem--UdlEh:not(:last-child){margin-bottom:5px}.subjectsmse__mathematics--QXn11{background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:center bottom;background-size:cover;background-repeat:no-repeat}@media (max-width: 800px){.subjectsmse__mathematics--QXn11{background-position:center}}@media (max-width: 768px){.subjectsmse__mathematics--QXn11{background-position:center center}}.subjectsmse__socialScience--CSYUN{background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:center bottom;background-size:cover;background-repeat:no-repeat}@media (max-width: 800px){.subjectsmse__socialScience--CSYUN{background-position:center}}@media (max-width: 768px){.subjectsmse__socialScience--CSYUN{background-position:center center}}.subjectsmse__heading--l2oGu{z-index:1;margin-bottom:30px;font-size:48px;line-height:58px;margin-bottom:20px}@media (max-width: 768px){.subjectsmse__heading--l2oGu{margin-bottom:15px;font-size:32px;line-height:36px}}@media (max-width: 480px){.subjectsmse__heading--l2oGu{font-size:27px;line-height:31px}}@media (max-width: 1176px){.subjectsmse__item--d1WPK{width:48%}}@media (max-width: 1024px){.subjectsmse__list--MXJz9{align-items:stretch}.subjectsmse__item--d1WPK{padding:20px 20px;flex:1 1}.subjectsmse__item--d1WPK:first-child{margin-right:30px}}@media (max-width: 800px){.subjectsmse__list--MXJz9{display:flex;flex-direction:column}.subjectsmse__mathematics--QXn11{background-position:top center}.subjectsmse__item--d1WPK{width:100%}.subjectsmse__item--d1WPK:not(:last-child){margin-bottom:30px}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "subjectsmse__container--hQDHB",
	"list": "subjectsmse__list--MXJz9",
	"item": "subjectsmse__item--d1WPK",
	"socialList": "subjectsmse__socialList--ULocI",
	"socialListItem": "subjectsmse__socialListItem--UdlEh",
	"mathematics": "subjectsmse__mathematics--QXn11",
	"socialScience": "subjectsmse__socialScience--CSYUN",
	"heading": "subjectsmse__heading--l2oGu"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.subjectcontent__container--injsG{display:flex;flex-direction:column;height:100%}.subjectcontent__priceBox--hZeh0{border-bottom:2px solid #d6be8b}.subjectcontent__name--Xf6oI,.subjectcontent__text--yRfGu,.subjectcontent__from--Dja8H,.subjectcontent__rub--crCne{color:#c7c4aa}.subjectcontent__from--Dja8H{margin-right:15px}.subjectcontent__from--Dja8H,.subjectcontent__price--e6buh,.subjectcontent__rub--crCne{font-size:32px;line-height:36px}.subjectcontent__price--e6buh{color:#d6be8b;font-weight:700}.subjectcontent__name--Xf6oI{font-size:32px;line-height:36px;margin-bottom:20px}@media (max-width: 1439px){.subjectcontent__name--Xf6oI{font-size:30px;line-height:34px}}@media (max-width: 768px){.subjectcontent__name--Xf6oI{font-size:24px;line-height:28px}}.subjectcontent__text--yRfGu{margin-bottom:20px}.subjectcontent__box--HtK8u{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;flex:1 1}.subjectcontent__priceBox--hZeh0{margin-bottom:30px}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "subjectcontent__container--injsG",
	"priceBox": "subjectcontent__priceBox--hZeh0",
	"name": "subjectcontent__name--Xf6oI",
	"text": "subjectcontent__text--yRfGu",
	"from": "subjectcontent__from--Dja8H",
	"rub": "subjectcontent__rub--crCne",
	"price": "subjectcontent__price--e6buh",
	"box": "subjectcontent__box--HtK8u"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6742);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(7217), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(2469), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(6834), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.subjects__container--J_Xov{display:flex;flex-direction:column;height:auto}@media (max-width: 768px){.subjects__container--J_Xov{height:auto}}.subjects__list--K4Ik2{display:flex;justify-content:space-between;align-items:center;flex:1 1 600px}.subjects__item--iRpVI{display:flex;flex-direction:column;align-items:flex-start;padding:30px 30px;height:100%;width:30%;border-radius:25px;opacity:0;transform:translateX(30%)}.subjects__socialList--CIYQc{list-style-type:disc;margin-bottom:20px}.subjects__socialListItem--bG9XM{color:#c7c4aa;text-align:justify}.subjects__socialListItem--bG9XM:not(:last-child){margin-bottom:5px}.subjects__mathematics--q814E{background:linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:center bottom;background-size:cover;background-repeat:no-repeat}@media (max-width: 800px){.subjects__mathematics--q814E{background-position:center}}@media (max-width: 768px){.subjects__mathematics--q814E{background-position:center center}}.subjects__mathematicsBase--tnO8h{background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:center bottom;background-size:cover;background-repeat:no-repeat}@media (max-width: 800px){.subjects__mathematicsBase--tnO8h{background-position:center}}@media (max-width: 768px){.subjects__mathematicsBase--tnO8h{background-position:center center}}.subjects__socialScience--wYl9S{background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-position:center bottom;background-size:cover;background-repeat:no-repeat}@media (max-width: 800px){.subjects__socialScience--wYl9S{background-position:center}}@media (max-width: 768px){.subjects__socialScience--wYl9S{background-position:center center}}.subjects__heading--mfKx1{z-index:1;margin-bottom:30px;font-size:48px;line-height:58px;margin-bottom:20px}@media (max-width: 768px){.subjects__heading--mfKx1{margin-bottom:15px;font-size:32px;line-height:36px}}@media (max-width: 480px){.subjects__heading--mfKx1{font-size:27px;line-height:31px}}@media (max-width: 1439px){.subjects__item--iRpVI{padding:20px 20px;width:32%}}@media (max-width: 1176px){.subjects__list--K4Ik2{height:auto;align-items:stretch;flex-wrap:wrap;flex:1 1}.subjects__item--iRpVI{width:48%;height:auto}.subjects__item--iRpVI:last-child{margin-top:30px}.subjects__mathematicsBase--tnO8h,.subjects__socialScience--wYl9S{background-position:center}}@media (max-width: 800px){.subjects__list--K4Ik2{display:flex;flex-direction:column}.subjects__item--iRpVI{width:100%}.subjects__item--iRpVI:not(:last-child){margin-bottom:30px}.subjects__mathematicsBase--tnO8h{background-position:0% 20%}.subjects__item--iRpVI:last-child{margin-top:0}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "subjects__container--J_Xov",
	"list": "subjects__list--K4Ik2",
	"item": "subjects__item--iRpVI",
	"socialList": "subjects__socialList--CIYQc",
	"socialListItem": "subjects__socialListItem--bG9XM",
	"mathematics": "subjects__mathematics--q814E",
	"mathematicsBase": "subjects__mathematicsBase--tnO8h",
	"socialScience": "subjects__socialScience--wYl9S",
	"heading": "subjects__heading--mfKx1"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 24:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.content__container--TCJmB{margin:0 auto;padding:0 80px;max-width:1440px}@media (max-width: 1024px){.content__container--TCJmB{padding:0 5%}}.content__renderBox--qUR1M{padding:35px 0 50px 0}.content__contacts--tJ0Zp,.content__questions--_A6j0{margin-bottom:50px}@media (max-width: 480px){.content__renderBox--qUR1M{padding:15px 0 30px 0}.content__contacts--tJ0Zp,.content__questions--_A6j0{margin-bottom:30px}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "content__container--TCJmB",
	"renderBox": "content__renderBox--qUR1M",
	"contacts": "content__contacts--tJ0Zp",
	"questions": "content__questions--_A6j0"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2157:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.footer__footer--S8TsD{background-color:var(--header-color);box-shadow:0px 10px 63px rgba(0,0,0,0.1)}.footer__container--hu_C0{margin:0 auto;padding:0 80px;max-width:1440px;display:flex;justify-content:space-between;align-items:center;padding-top:15px;padding-bottom:15px}@media (max-width: 1024px){.footer__container--hu_C0{padding:0 5%}}.footer__box--zdf1j{display:flex;flex-direction:column}.footer__name--p_2xi,.footer__data--qkQEV{color:#c7c4aa}@media (max-width: 1024px){.footer__container--hu_C0{padding-top:15px;padding-bottom:15px}}@media (max-width: 768px){.footer__container--hu_C0{padding-top:10px;padding-bottom:10px}.footer__box--zdf1j{display:none}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": "footer__footer--S8TsD",
	"container": "footer__container--hu_C0",
	"box": "footer__box--zdf1j",
	"name": "footer__name--p_2xi",
	"data": "footer__data--qkQEV"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8356:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.burgerbtn__btn--AfmjF{flex:0 0 30px;display:none;margin:0 0;padding:0 0;height:30px;background-color:transparent}.burgerbtn__lineOne--nwoT6,.burgerbtn__lineTwo--ir7S6,.burgerbtn__lineThree--EAgsM{display:none;width:100%;height:4px;background-color:var(--text-color);transform-origin:right center;transition:transform 0.3s ease-in-out}@media (max-width: 1024px){.burgerbtn__btn--AfmjF{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch}.burgerbtn__lineOne--nwoT6,.burgerbtn__lineTwo--ir7S6,.burgerbtn__lineThree--EAgsM{display:block}.burgerbtn__btn--AfmjF.burgerbtn__open--T5Z4j .burgerbtn__lineOne--nwoT6{transform-origin:right center;transform:rotate(-45deg) translate(-3.5px, 3.5px)}.burgerbtn__btn--AfmjF.burgerbtn__open--T5Z4j .burgerbtn__lineTwo--ir7S6{transform:scale(0, 0)}.burgerbtn__btn--AfmjF.burgerbtn__open--T5Z4j .burgerbtn__lineThree--EAgsM{transform-origin:right center;transform:rotate(45deg)}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"btn": "burgerbtn__btn--AfmjF",
	"lineOne": "burgerbtn__lineOne--nwoT6",
	"lineTwo": "burgerbtn__lineTwo--ir7S6",
	"lineThree": "burgerbtn__lineThree--EAgsM",
	"open": "burgerbtn__open--T5Z4j"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.navigation__container--Viw8a{display:flex;justify-content:space-between;align-items:center;padding:0 1.7% 0 5%;width:100%}.navigation__nav--m5tOY{margin-right:5.5%;flex:1 1}.navigation__btnBox--CV2ca{display:flex;flex-direction:column;justify-content:space-around;padding-left:15px;height:50px;width:145px;border-left:1px solid var(--text-color)}.navigation__border--O0PiT{display:none}.navigation__navList--Sh6Gc{display:flex;justify-content:space-between;align-items:center;flex:1 1 100%}.navigation__navLink--LFHoX{border-bottom:1px solid transparent;transition-property:border-color;transition-duration:0.3s;transition-timing-function:ease-in-out;display:block}.navigation__navLink--LFHoX:hover,.navigation__navLink--LFHoX.navigation__open--OB1sx{border-color:#c7c4aa}.navigation__navItem--wXFgW:not(:last-child){margin-right:12px}@media (max-width: 1439px){.navigation__container--Viw8a{padding:0 1% 0 3%}.navigation__nav--m5tOY{margin-right:3.5%}}@media (max-width: 1024px){.navigation__container--Viw8a{margin:0 auto;padding:0 80px;max-width:1440px;z-index:1;display:none;position:absolute;top:100%;right:0;background-color:var(--header-color);border-top:1px solid var(--text-color);box-shadow:0px 10px 63px rgba(0,0,0,0.07);overflow:hidden;height:0;transition:height 0.3s ease-in-out}}@media (max-width: 1024px) and (max-width: 1024px){.navigation__container--Viw8a{padding:0 5%}}@media (max-width: 1024px){.navigation__container--Viw8a.navigation__open--OB1sx{display:flex}.navigation__btnBox--CV2ca{height:100%}.navigation__container--Viw8a.navigation__animation--fDTY1{height:50px}.navigation__navList--Sh6Gc{padding:8px 0}}@media (max-width: 768px){.navigation__container--Viw8a{padding:0 0;flex-direction:column-reverse}.navigation__nav--m5tOY{margin-right:0;padding:15px 0}.navigation__btnBox--CV2ca{flex-direction:row;justify-content:space-evenly;padding-left:0;align-items:center;width:100%;border-bottom:1px solid var(--text-color);border-left:none}.navigation__border--O0PiT{display:block;width:1px;height:100%;background-color:var(--text-color)}.navigation__navList--Sh6Gc{padding:0 0;flex-direction:column}html[data-textsize='normal'] .navigation__container--Viw8a.navigation__animation--fDTY1{height:220px}html[data-textsize='big'] .navigation__container--Viw8a.navigation__animation--fDTY1{height:250px}.navigation__navItem--wXFgW:not(:last-child){margin-right:0;margin-bottom:15px}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "navigation__container--Viw8a",
	"nav": "navigation__nav--m5tOY",
	"btnBox": "navigation__btnBox--CV2ca",
	"border": "navigation__border--O0PiT",
	"navList": "navigation__navList--Sh6Gc",
	"navLink": "navigation__navLink--LFHoX",
	"open": "navigation__open--OB1sx",
	"navItem": "navigation__navItem--wXFgW",
	"animation": "navigation__animation--fDTY1"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.switchtextsize__switchBtn--YGNz3{display:flex;align-items:center}.switchtextsize__svg--W6EIc{width:20px;height:20px;fill:var(--text-color);transition:fill 0.3s ease-in-out}.switchtextsize__text--ewWuX{border-bottom:1px solid transparent;transition-property:border-color;transition-duration:0.3s;transition-timing-function:ease-in-out;margin-top:1px;margin-left:5px}.switchtextsize__switchBtn--YGNz3:hover .switchtextsize__svg--W6EIc+.switchtextsize__text--ewWuX{border-color:#c7c4aa}.switchtextsize__switchBtn--YGNz3:hover .switchtextsize__svg--W6EIc{fill:#939180}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"switchBtn": "switchtextsize__switchBtn--YGNz3",
	"svg": "switchtextsize__svg--W6EIc",
	"text": "switchtextsize__text--ewWuX"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.switchtheme__switchBtn--ZKtLG{display:flex;align-items:center}.switchtheme__moon--okgNp,.switchtheme__sun--MpFjn{width:20px;height:20px;fill:transparent;transition-property:fill, stroke;transition-duration:0.3s;transition-timing-function:ease-in-out}.switchtheme__moon--okgNp{stroke:#67665d}.switchtheme__sun--MpFjn{stroke:#c7c4aa}.switchtheme__switchBtn--ZKtLG:hover .switchtheme__moon--okgNp{fill:#67665d;stroke:#333}.switchtheme__text--wY9Ss{border-bottom:1px solid transparent;transition-property:border-color;transition-duration:0.3s;transition-timing-function:ease-in-out;margin-top:1px}.switchtheme__switchBtn--ZKtLG:hover .switchtheme__moon--okgNp+.switchtheme__text--wY9Ss,.switchtheme__switchBtn--ZKtLG:hover .switchtheme__sun--MpFjn+.switchtheme__text--wY9Ss{border-color:#c7c4aa}.switchtheme__switchBtn--ZKtLG:hover .switchtheme__sun--MpFjn{fill:#c7c4aa;stroke:#fff}.switchtheme__text--wY9Ss{margin-left:5px}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"switchBtn": "switchtheme__switchBtn--ZKtLG",
	"moon": "switchtheme__moon--okgNp",
	"sun": "switchtheme__sun--MpFjn",
	"text": "switchtheme__text--wY9Ss"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.telephone__box--IEwzN{display:flex;justify-content:space-between;align-items:center;flex:0 0}.telephone__text--RRAtR{margin-right:10px;display:block}.telephone__link--dxDLT{display:flex}.telephone__svg--zd3Ei{margin-right:5px}.telephone__svgMobile--lrUt4{display:none}.telephone__number--LhuSK{color:#c7c4aa;font-weight:500;transition:color 0.3s ease-in-out}@media (max-width: 1439px){.telephone__text--RRAtR,.telephone__number--LhuSK,.telephone__svg--zd3Ei{display:none}.telephone__svgMobile--lrUt4{margin-right:0;display:block;width:40px;height:40px}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"box": "telephone__box--IEwzN",
	"text": "telephone__text--RRAtR",
	"link": "telephone__link--dxDLT",
	"svg": "telephone__svg--zd3Ei",
	"svgMobile": "telephone__svgMobile--lrUt4",
	"number": "telephone__number--LhuSK"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.header__header--fvgfl{z-index:2;position:relative;box-shadow:0px 10px 63px rgba(0,0,0,0.07);background-color:var(--header-color)}.header__container--Li5jK{margin:0 auto;padding:0 80px;max-width:1440px;display:flex;justify-content:space-between;align-items:center;padding-top:10px;padding-bottom:10px}@media (max-width: 1024px){.header__container--Li5jK{padding:0 5%}}.header__nav--DNPvz{display:block;width:100%}@media (max-width: 1024px){.header__container--Li5jK{padding-top:10px;padding-bottom:10px}.header__nav--DNPvz{display:flex;width:30px;order:-1}}@media (max-width: 480px){.header__header--fvgfl{position:sticky;top:0}}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "header__header--fvgfl",
	"container": "header__container--Li5jK",
	"nav": "header__nav--DNPvz"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 536:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.logo__text--Wm0GM{fill:var(--text-color)}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"text": "logo__text--Wm0GM"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}.layout__layout--Y5A7N{background-color:var(--body-color)}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"layout": "layout__layout--Y5A7N"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2435:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6738);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7705);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html[data-theme='dark']{--text-color: #a0a0a0;--stock-color: #c7c4aa;--main-color: #333;--header-color: #444;--accordion-border-color: #c7c4aa}html[data-theme='light']{--text-color: #333;--stock-color: #333;--main-color: #FFF;--header-color: #FFF;--accordion-border-color: #67665d}html[data-textsize='normal']{--text-size-pc: 16px;--text-height-pc: 20px;--text-size-mb: 14px;--text-height-mb: 16px}html[data-textsize='big']{--text-size-pc: 20px;--text-height-pc: 24px;--text-size-mb: 18px;--text-height-mb: 22px}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 3114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c54e68f3124e495d1c1e.woff";

/***/ }),

/***/ 5130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "133b4cf2543f68a38147.woff2";

/***/ }),

/***/ 9525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e69710e73897b29b794b.woff";

/***/ }),

/***/ 2352:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90543f6d2ab7e9fa73af.woff2";

/***/ }),

/***/ 429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d8693d311414ef85708.woff";

/***/ }),

/***/ 8246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2932d92a15919302fe5.woff2";

/***/ }),

/***/ 9355:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3fe2d7f2e9b2a922216.woff";

/***/ }),

/***/ 9660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b458b21cebd79e4e34b0.woff2";

/***/ }),

/***/ 2469:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dc67c6e049942b11603.webp";

/***/ }),

/***/ 6834:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64f849e61c8865213be7.webp";

/***/ }),

/***/ 5632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "430c88db7e19598a6cfc.webp";

/***/ }),

/***/ 7946:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d865881c042c8754fd5.webp";

/***/ }),

/***/ 7217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cdb8f4185e95973dffd.webp";

/***/ }),

/***/ 6108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dad15ae66fc7e33404c3.webp";

/***/ }),

/***/ 8925:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac2ea505b5861cf075c5.webp";

/***/ }),

/***/ 3940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef8238d44bfcc68fdfa3.webp";

/***/ }),

/***/ 7260:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e929715b5da97f75ecbe.webp";

/***/ }),

/***/ 9697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c09ac44cf95e554f7781.png";

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = require("url").pathToFileURL(__filename);
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: external "react-hot-loader/root"
const root_namespaceObject = require("react-hot-loader/root");
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
// EXTERNAL MODULE: ./src/variables.global.scss
var variables_global = __webpack_require__(2435);
// EXTERNAL MODULE: ./src/main.global.scss
var main_global = __webpack_require__(3225);
// EXTERNAL MODULE: ./src/shared/layout.scss
var layout = __webpack_require__(4704);
;// CONCATENATED MODULE: ./src/shared/Layout.tsx


function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: layout/* default.layout */.Z.layout
  }, children);
}
;// CONCATENATED MODULE: ./src/shared/index.ts

;// CONCATENATED MODULE: external "react-router-dom"
const external_react_router_dom_namespaceObject = require("react-router-dom");
;// CONCATENATED MODULE: ./src/utils/ts/scroll.ts
var Scroll = __webpack_require__(3094);

function scrollTop() {
  var scroll = Scroll.animateScroll;
  scroll.scrollToTop();
}
// EXTERNAL MODULE: ./src/shared/Logo/logo.scss
var logo = __webpack_require__(536);
;// CONCATENATED MODULE: ./src/shared/Logo/Logo.tsx




function Logo() {
  return /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Link, {
    to: '/home',
    onClick: scrollTop
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: logo/* default.logo */.Z.logo,
    height: "45px",
    width: "165px",
    "view-box": "0 0 165 45"
  }, /*#__PURE__*/external_react_default().createElement("text", {
    className: logo/* default.text */.Z.text,
    x: "0",
    y: "32",
    fontSize: "32px",
    fontFamily: "Comfortaa"
  }, "Your"), /*#__PURE__*/external_react_default().createElement("text", {
    x: "78",
    y: "32",
    fill: "#c7c4aa",
    fontSize: "32px",
    fontFamily: "Comfortaa"
  }, "tutor"), /*#__PURE__*/external_react_default().createElement("text", {
    className: logo/* default.text */.Z.text,
    x: "10",
    y: "42",
    fontSize: "8px",
    fontFamily: "Comfortaa"
  }, "\u041A\u0443\u0440\u0441\u044B \u043F\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u043A \u0415\u0413\u042D/\u041E\u0413\u042D"), /*#__PURE__*/external_react_default().createElement("path", {
    className: logo/* default.text */.Z.text,
    style: {
      transform: 'translate(126px, 5px)'
    },
    d: "M10 10L2.54 7.02L3 18H1l.48-11.41L0 6l10-4l10 4zm0-5c-.55 0-1 .22-1 .5s.45.5 1 .5s1-.22 1-.5s-.45-.5-1-.5zm0 6l5.57-2.23c.71.94 1.2 2.07 1.36 3.3c-.3-.04-.61-.07-.93-.07c-2.55 0-4.78 1.37-6 3.41A6.986 6.986 0 0 0 4 12c-.32 0-.63.03-.93.07c.16-1.23.65-2.36 1.36-3.3z"
  })));
}
;// CONCATENATED MODULE: ./src/shared/Logo/index.ts

// EXTERNAL MODULE: ./src/shared/Header/header.scss
var header = __webpack_require__(8361);
// EXTERNAL MODULE: ./src/shared/Header/BurgerBtn/burgerbtn.scss
var burgerbtn = __webpack_require__(8356);
;// CONCATENATED MODULE: ./src/shared/Header/BurgerBtn/BurgerBtn.tsx


function BurgerBtn(_ref) {
  var isDropDown = _ref.isDropDown,
      isOpen = _ref.isOpen;
  return /*#__PURE__*/external_react_default().createElement("button", {
    className: "".concat(burgerbtn/* default.btn */.Z.btn, " ").concat(isOpen ? burgerbtn/* default.open */.Z.open : ''),
    onClick: isDropDown
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: burgerbtn/* default.lineOne */.Z.lineOne
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: burgerbtn/* default.lineTwo */.Z.lineTwo
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: burgerbtn/* default.lineThree */.Z.lineThree
  }));
}
;// CONCATENATED MODULE: ./src/shared/Header/BurgerBtn/index.ts

;// CONCATENATED MODULE: ./src/utils/ts/changeTextSize.ts
function changeTextSize(textSize) {
  if (textSize) {
    document.documentElement.setAttribute("data-textsize", "big");
  } else {
    document.documentElement.setAttribute("data-textsize", "normal");
  }
}
// EXTERNAL MODULE: ./src/shared/Header/SwitchTextSize/switchtextsize.scss
var switchtextsize = __webpack_require__(2962);
;// CONCATENATED MODULE: ./src/shared/Header/SwitchTextSize/SwitchTextSize.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function SwitchTextSize() {
  var _useState = (0,external_react_namespaceObject.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      bigSize = _useState2[0],
      setBigSize = _useState2[1];

  var handleChange = function handleChange() {
    changeTextSize(!bigSize);
    setBigSize(!bigSize);
  };

  return /*#__PURE__*/external_react_default().createElement("button", {
    className: switchtextsize/* default.switchBtn */.Z.switchBtn,
    onClick: handleChange
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: switchtextsize/* default.svg */.Z.svg,
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 256 256"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M86.9 50.9a12.1 12.1 0 0 0-21.8 0l-64 136a12 12 0 0 0 21.8 10.2L38.4 164h75.2l15.5 33.1A12 12 0 0 0 140 204a13 13 0 0 0 5.1-1.1a12.1 12.1 0 0 0 5.8-16ZM49.7 140L76 84.2l26.3 55.8ZM204 90.9a47 47 0 0 0-26.9 8.3a12 12 0 0 0 13.8 19.7a22.6 22.6 0 0 1 13.1-4c11 0 20 7.2 20 16v1.4a48.8 48.8 0 0 0-20-4.3c-24.3 0-44 17.5-44 39s19.7 39 44 39a48.4 48.4 0 0 0 23.2-5.9a11.9 11.9 0 0 0 8.8 3.9a12 12 0 0 0 12-12v-61.1c0-22.1-19.7-40-44-40Zm0 91.1c-10.8 0-20-6.9-20-15s9.2-15 20-15s20 6.9 20 15s-9.2 15-20 15Z"
  })), /*#__PURE__*/external_react_default().createElement("span", {
    className: switchtextsize/* default.text */.Z.text
  }, bigSize ? 'Обычный' : 'Большой'));
}
;// CONCATENATED MODULE: ./src/shared/Header/SwitchTextSize/index.ts

;// CONCATENATED MODULE: ./src/utils/ts/changeThemeHTML.ts
function changeThemeHTML(darkTheme) {
  if (darkTheme) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
// EXTERNAL MODULE: ./src/shared/Header/SwitchTheme/switchtheme.scss
var switchtheme = __webpack_require__(1680);
;// CONCATENATED MODULE: ./src/shared/Header/SwitchTheme/SwitchTheme.tsx
function SwitchTheme_slicedToArray(arr, i) { return SwitchTheme_arrayWithHoles(arr) || SwitchTheme_iterableToArrayLimit(arr, i) || SwitchTheme_unsupportedIterableToArray(arr, i) || SwitchTheme_nonIterableRest(); }

function SwitchTheme_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SwitchTheme_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SwitchTheme_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SwitchTheme_arrayLikeToArray(o, minLen); }

function SwitchTheme_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SwitchTheme_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SwitchTheme_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function SwitchTheme() {
  var _useState = (0,external_react_namespaceObject.useState)(false),
      _useState2 = SwitchTheme_slicedToArray(_useState, 2),
      darkTheme = _useState2[0],
      setDarkTheme = _useState2[1];

  var handleChange = function handleChange() {
    changeThemeHTML(!darkTheme);
    setDarkTheme(!darkTheme);
  };

  return /*#__PURE__*/external_react_default().createElement("button", {
    className: switchtheme/* default.switchBtn */.Z.switchBtn,
    onClick: handleChange
  }, darkTheme && /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("svg", {
    className: switchtheme/* default.sun */.Z.sun,
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    height: "1.4em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16 6V3M8.929 8.929L6.808 6.808M6 16H3m13 13v-3m9.192-.808l-2.121-2.12M29 16h-3M8.929 23.071l-2.121 2.121M25.192 6.808l-2.12 2.121M22 16a6 6 0 1 1-12 0a6 6 0 0 1 12 0Z"
  }))), !darkTheme && /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("svg", {
    className: switchtheme/* default.moon */.Z.moon,
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    height: "1.3em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M14 2C9 2 3 7 3 15s6 14 14 14s13-6 13-11C19 25 7 13 14 2Z"
  }))), /*#__PURE__*/external_react_default().createElement("span", {
    className: switchtheme/* default.text */.Z.text
  }, darkTheme ? 'Светлая' : 'Тёмная'));
}
;// CONCATENATED MODULE: ./src/shared/Header/SwitchTheme/index.ts

// EXTERNAL MODULE: ./src/shared/Header/Navigation/navigation.scss
var navigation = __webpack_require__(2940);
;// CONCATENATED MODULE: ./src/shared/Header/Navigation/Navigation.tsx
function Navigation_slicedToArray(arr, i) { return Navigation_arrayWithHoles(arr) || Navigation_iterableToArrayLimit(arr, i) || Navigation_unsupportedIterableToArray(arr, i) || Navigation_nonIterableRest(); }

function Navigation_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Navigation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Navigation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Navigation_arrayLikeToArray(o, minLen); }

function Navigation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Navigation_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Navigation_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Navigation() {
  var _useState = (0,external_react_namespaceObject.useState)(false),
      _useState2 = Navigation_slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var refNav = (0,external_react_namespaceObject.useRef)(null);

  var _useState3 = (0,external_react_namespaceObject.useState)(setTimeout(function () {}, 1)),
      _useState4 = Navigation_slicedToArray(_useState3, 2),
      timer = _useState4[0],
      setTimer = _useState4[1];

  var toggleOpen = function toggleOpen() {
    clearTimeout(timer);

    if (refNav.current) {
      if (isOpen) {
        var timeOut = setTimeout(function () {
          var _refNav$current;

          return (_refNav$current = refNav.current) === null || _refNav$current === void 0 ? void 0 : _refNav$current.classList.remove(navigation/* default.open */.Z.open);
        }, 300);
        setTimer(timeOut);
      } else {
        var _refNav$current2;

        (_refNav$current2 = refNav.current) === null || _refNav$current2 === void 0 ? void 0 : _refNav$current2.classList.add(navigation/* default.open */.Z.open);
      }

      setTimeout(function () {
        var _refNav$current3;

        return (_refNav$current3 = refNav.current) === null || _refNav$current3 === void 0 ? void 0 : _refNav$current3.classList.toggle(navigation/* default.animation */.Z.animation);
      }, 1);
      setIsOpen(!isOpen);
    }
  };

  var closeModal = function closeModal() {
    scrollTop();

    if (document.documentElement.clientWidth <= 768) {
      clearTimeout(timer);
      var timeOut = setTimeout(function () {
        var _refNav$current4;

        return (_refNav$current4 = refNav.current) === null || _refNav$current4 === void 0 ? void 0 : _refNav$current4.classList.remove(navigation/* default.open */.Z.open);
      }, 300);
      setTimer(timeOut);
      setTimeout(function () {
        var _refNav$current5;

        return (_refNav$current5 = refNav.current) === null || _refNav$current5 === void 0 ? void 0 : _refNav$current5.classList.remove(navigation/* default.animation */.Z.animation);
      }, 1);
      setIsOpen(false);
    }
  };

  var _useState5 = (0,external_react_namespaceObject.useState)(1),
      _useState6 = Navigation_slicedToArray(_useState5, 2),
      isClick = _useState6[0],
      setIsClick = _useState6[1];

  var _useState7 = (0,external_react_namespaceObject.useState)('/home'),
      _useState8 = Navigation_slicedToArray(_useState7, 2),
      pathNow = _useState8[0],
      setPathNow = _useState8[1];

  (0,external_react_namespaceObject.useEffect)(function () {
    var pathName = window.location.pathname;

    if (pathName !== '/') {
      setPathNow(pathName);
    }
  }, [isClick]);

  function onClickLink(n) {
    setIsClick(n);
    closeModal();
  }

  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement(BurgerBtn, {
    isDropDown: toggleOpen,
    isOpen: isOpen
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: navigation/* default.container */.Z.container,
    ref: refNav
  }, /*#__PURE__*/external_react_default().createElement("nav", {
    className: navigation/* default.nav */.Z.nav,
    id: "nav"
  }, /*#__PURE__*/external_react_default().createElement("ul", {
    className: navigation/* default.navList */.Z.navList
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: navigation/* default.navItem */.Z.navItem
  }, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Link, {
    className: "".concat(navigation/* default.navLink */.Z.navLink, " ").concat(pathNow === '/home' ? navigation/* default.open */.Z.open : ''),
    to: '/home',
    onClick: function onClick() {
      return onClickLink(1);
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), /*#__PURE__*/external_react_default().createElement("li", {
    className: navigation/* default.navItem */.Z.navItem
  }, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Link, {
    className: "".concat(navigation/* default.navLink */.Z.navLink, " ").concat(pathNow === '/aboutme' ? navigation/* default.open */.Z.open : ''),
    to: '/aboutme',
    onClick: function onClick() {
      return onClickLink(2);
    }
  }, "\u041E\u0431\u043E\xA0\u043C\u043D\u0435")), /*#__PURE__*/external_react_default().createElement("li", {
    className: navigation/* default.navItem */.Z.navItem
  }, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Link, {
    className: "".concat(navigation/* default.navLink */.Z.navLink, " ").concat(pathNow === '/howiwork' ? navigation/* default.open */.Z.open : ''),
    to: '/howiwork',
    onClick: function onClick() {
      return onClickLink(3);
    }
  }, "\u041A\u0430\u043A\xA0\u044F\xA0\u0440\u0430\u0431\u043E\u0442\u0430\u044E")), /*#__PURE__*/external_react_default().createElement("li", {
    className: navigation/* default.navItem */.Z.navItem
  }, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Link, {
    className: "".concat(navigation/* default.navLink */.Z.navLink, " ").concat(pathNow === '/use' ? navigation/* default.open */.Z.open : ''),
    to: '/use',
    onClick: function onClick() {
      return onClickLink(4);
    }
  }, "\u0415\u0413\u042D")), /*#__PURE__*/external_react_default().createElement("li", {
    className: navigation/* default.navItem */.Z.navItem
  }, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Link, {
    className: "".concat(navigation/* default.navLink */.Z.navLink, " ").concat(pathNow === '/mse' ? navigation/* default.open */.Z.open : ''),
    to: '/mse',
    onClick: function onClick() {
      return onClickLink(5);
    }
  }, "\u041E\u0413\u042D")))), /*#__PURE__*/external_react_default().createElement("div", {
    className: navigation/* default.btnBox */.Z.btnBox
  }, /*#__PURE__*/external_react_default().createElement(SwitchTheme, null), /*#__PURE__*/external_react_default().createElement("div", {
    className: navigation/* default.border */.Z.border
  }), /*#__PURE__*/external_react_default().createElement(SwitchTextSize, null))));
}
;// CONCATENATED MODULE: ./src/shared/Header/Navigation/index.ts

// EXTERNAL MODULE: ./src/shared/Header/Telephone/telephone.scss
var telephone = __webpack_require__(5216);
;// CONCATENATED MODULE: ./src/shared/Header/Telephone/Telephone.tsx


function Telephone() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: telephone/* default.box */.Z.box
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: telephone/* default.text */.Z.text
  }, "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F"), /*#__PURE__*/external_react_default().createElement("a", {
    className: telephone/* default.link */.Z.link,
    href: "tel:+79295207280"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: telephone/* default.svg */.Z.svg,
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    fill: "currentColor",
    d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608a17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
  })), /*#__PURE__*/external_react_default().createElement("span", {
    className: telephone/* default.number */.Z.number
  }, "8(929)520\u201172\u201180"), /*#__PURE__*/external_react_default().createElement("svg", {
    className: telephone/* default.svgMobile */.Z.svgMobile,
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M1.75 1.75c0 8.5 4 12.5 12.5 12.5v-4l-3.5-1l-1 1.5c-2 0-4.5-2.5-4.5-4.5l1.5-1l-1-3.5zm8 0c2.5 0 4.5 2 4.5 4.5m-4.5-2c1 0 2 1 2 2"
  }))));
}
;// CONCATENATED MODULE: ./src/shared/Header/Telephone/index.ts

;// CONCATENATED MODULE: ./src/shared/Header/Header.tsx





function Header() {
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    id: "top"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: header/* default.header */.Z.header
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: header/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement(Logo, null), /*#__PURE__*/external_react_default().createElement("div", {
    className: header/* default.nav */.Z.nav
  }, /*#__PURE__*/external_react_default().createElement(Navigation, null)), /*#__PURE__*/external_react_default().createElement(Telephone, null))));
}
;// CONCATENATED MODULE: ./src/shared/Header/index.ts

;// CONCATENATED MODULE: external "gsap"
const external_gsap_namespaceObject = require("gsap");
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_namespaceObject);
// EXTERNAL MODULE: ./src/shared/Content/AboutMe/aboutme.scss
var aboutme = __webpack_require__(9628);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: ./src/shared/BtnScroll/btnscroll.scss
var btnscroll = __webpack_require__(2887);
;// CONCATENATED MODULE: ./src/shared/BtnScroll/BtnScroll.tsx



function BtnScroll(_ref) {
  var text = _ref.text,
      to = _ref.to,
      duration = _ref.duration;
  return /*#__PURE__*/external_react_default().createElement(external_react_scroll_.Link, {
    className: btnscroll/* default.link */.Z.link,
    to: to,
    smooth: true,
    duration: duration
  }, text);
}
;// CONCATENATED MODULE: ./src/shared/BtnScroll/index.ts

;// CONCATENATED MODULE: ./src/utils/ts/animation.ts
function animation(func, maxWidth, delay) {
  var displayWidth = document.documentElement.clientWidth;

  if (displayWidth > maxWidth) {
    func();
  } else {
    setTimeout(func, delay);
  }
}
;// CONCATENATED MODULE: ./src/assets/img/jpg/me.webp
const me_namespaceObject = __webpack_require__.p + "393f6dec2511eb83b03a.webp";
;// CONCATENATED MODULE: ./src/constants.ts
var popUpMenuDisplay = 768;
var popUpMenuDuration = 300;
;// CONCATENATED MODULE: ./src/shared/Content/AboutMe/AboutMe.tsx







function AboutMe() {
  var refP = (0,external_react_namespaceObject.useRef)(null);
  var refS = (0,external_react_namespaceObject.useRef)(null);
  var refImg = (0,external_react_namespaceObject.useRef)(null);
  var refBtn = (0,external_react_namespaceObject.useRef)(null);
  (0,external_react_namespaceObject.useEffect)(function () {
    var animationFunc = function animationFunc() {
      external_gsap_default().timeline().to(refImg.current, {
        duration: 0.5,
        translateX: 0,
        opacity: 1
      }).to(refS.current, {
        opacity: 1,
        duration: 0.5
      }).to(refP.current, {
        height: 'auto',
        duration: 0.8
      }, '<').to(refBtn.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.8
      }, '<');
    };

    animation(animationFunc, popUpMenuDisplay, popUpMenuDuration);
  }, []);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: aboutme/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("h2", {
    className: aboutme/* default.heading */.Z.heading
  }, "\u041E\u0431\u043E \u043C\u043D\u0435"), /*#__PURE__*/external_react_default().createElement("div", {
    className: aboutme/* default.box */.Z.box
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: aboutme/* default.leftColumn */.Z.leftColumn
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: aboutme/* default.imgBox */.Z.imgBox
  }, /*#__PURE__*/external_react_default().createElement("img", {
    className: aboutme/* default.img */.Z.img,
    src: me_namespaceObject,
    alt: "\u0424\u043E\u0442\u043E \u041D\u0438\u043A\u0443\u043B\u0438\u043D\u0430 \u041D.\u0410.",
    ref: refImg
  })), /*#__PURE__*/external_react_default().createElement("span", {
    className: aboutme/* default.name */.Z.name,
    ref: refS
  }, "\u041D\u0438\u043A\u0443\u043B\u0438\u043D\u0430 \u041D\u0430\u0434\u0435\u0436\u0434\u0430 \u0410\u043D\u0434\u0440\u0435\u0435\u0432\u043D\u0430")), /*#__PURE__*/external_react_default().createElement("div", {
    className: aboutme/* default.rightColumn */.Z.rightColumn
  }, /*#__PURE__*/external_react_default().createElement("ul", {
    className: aboutme/* default.list */.Z.list,
    ref: refP
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: aboutme/* default.text */.Z.text
  }, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435: \u041D\u0418\u0423 \u041C\u0418\u042D\u0422. \u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \xAB\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\xBB"), /*#__PURE__*/external_react_default().createElement("li", {
    className: aboutme/* default.text */.Z.text
  }, "\u0421\u0442\u0430\u0436 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438: \u0421 2017 \u0433\u043E\u0434\u0430"), /*#__PURE__*/external_react_default().createElement("li", {
    className: aboutme/* default.text */.Z.text
  }, "\u041B\u0443\u0447\u0448\u0438\u0435 \u0415\u0413\u042D \u043F\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E\u0437\u043D\u0430\u043D\u0438\u044E 100, 99, 93"), /*#__PURE__*/external_react_default().createElement("li", {
    className: aboutme/* default.text */.Z.text
  }, "\u043B\u0443\u0447\u0448\u0438\u0435 \u0415\u0413\u042D \u043F\u043E \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0435 88, 86, 82"), /*#__PURE__*/external_react_default().createElement("li", {
    className: "".concat(aboutme/* default.text */.Z.text, " ").concat(aboutme/* default.description */.Z.description)
  }, "\u041E\u0431\u0448\u0438\u0440\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0443\u0447\u0435\u043D\u0438\u043A\u0430\u043C\u0438 \u0441 \u0441\u0430\u043C\u044B\u043C\u0438 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u0443\u0440\u043E\u0432\u043D\u044F\u043C\u0438 \u0438 \u0446\u0435\u043B\u044F\u043C\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043D\u0435\u043F\u0440\u0435\u0440\u044B\u0432\u043D\u043E\u0435 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u043C\u043D\u0435 \u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u043F\u043E \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0439, \u043D\u0435\u043E\u0434\u043D\u043E\u043A\u0440\u0430\u0442\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0439 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438. \u0421\u0432\u043E\u0435\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u0441\u0442\u0430\u0432\u043B\u044E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0435\u043D\u0438\u043A\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u043E\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0437\u0430 \u0440\u0430\u043C\u043A\u0438 \u0444\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u044F \u0442\u0435\u043E\u0440\u0438\u0438 \u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044E \u0437\u0430\u0434\u0430\u0447. \u041C\u044B \u0442\u0430\u043A \u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0435\u0439 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043D\u0430 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0435, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u043C \u0443\u043C\u0435\u043D\u0438\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0441\u0438\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u0438 \u0434\u043E\u0431\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432.")), /*#__PURE__*/external_react_default().createElement("div", {
    className: aboutme/* default.btnBox */.Z.btnBox,
    ref: refBtn
  }, /*#__PURE__*/external_react_default().createElement(BtnScroll, {
    to: "contacts",
    text: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F",
    duration: 1000
  })))));
}
;// CONCATENATED MODULE: ./src/shared/Content/AboutMe/index.ts

// EXTERNAL MODULE: ./src/shared/Content/Accordion/accordion.scss
var accordion = __webpack_require__(9590);
;// CONCATENATED MODULE: ./src/utils/hooks/useClose.ts

function useClose(onClose, set) {
  var ref = (0,external_react_namespaceObject.useRef)(null);
  (0,external_react_namespaceObject.useEffect)(function () {
    function handleClick(e) {
      var _ref$current;

      if (e.target instanceof Node && !((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(e.target))) {
        onClose(); // console.log(onClose)
      }
    }

    document.addEventListener('click', handleClick);
    return function () {
      document.removeEventListener('click', handleClick);
    };
  }, [set]);
  return [ref];
}
// EXTERNAL MODULE: ./src/shared/Content/Accordion/BtnBox/btnbox.scss
var btnbox = __webpack_require__(3660);
;// CONCATENATED MODULE: ./src/shared/Content/Accordion/BtnBox/BtnBox.tsx
function BtnBox_slicedToArray(arr, i) { return BtnBox_arrayWithHoles(arr) || BtnBox_iterableToArrayLimit(arr, i) || BtnBox_unsupportedIterableToArray(arr, i) || BtnBox_nonIterableRest(); }

function BtnBox_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function BtnBox_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BtnBox_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BtnBox_arrayLikeToArray(o, minLen); }

function BtnBox_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function BtnBox_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function BtnBox_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function BtnBox(_ref) {
  var question = _ref.question,
      answer = _ref.answer;

  var _useState = (0,external_react_namespaceObject.useState)(false),
      _useState2 = BtnBox_slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useClose = useClose(function () {
    return setIsOpen(false);
  }, isOpen),
      _useClose2 = BtnBox_slicedToArray(_useClose, 1),
      ref = _useClose2[0];

  var refP = (0,external_react_namespaceObject.useRef)(null);
  (0,external_react_namespaceObject.useEffect)(function () {
    if (!isOpen) {
      external_gsap_default().to(refP.current, {
        height: 0,
        marginBottom: 0,
        duration: 0.3
      });
    } else {
      external_gsap_default().to(refP.current, {
        height: 'auto',
        marginBottom: 10,
        duration: 0.3
      });
    }
  }, [isOpen]);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: btnbox/* default.container */.Z.container,
    ref: ref
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: btnbox/* default.btn */.Z.btn,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: btnbox/* default.question */.Z.question
  }, question), /*#__PURE__*/external_react_default().createElement("span", {
    className: "".concat(btnbox/* default.icon */.Z.icon, " ").concat(isOpen ? btnbox/* default.open */.Z.open : '')
  })), /*#__PURE__*/external_react_default().createElement("p", {
    className: btnbox/* default.answer */.Z.answer,
    ref: refP
  }, answer));
}
;// CONCATENATED MODULE: ./src/shared/Content/Accordion/BtnBox/index.ts

;// CONCATENATED MODULE: ./src/shared/Content/Accordion/Accordion.tsx



function Accordion() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: accordion/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("h2", {
    className: accordion/* default.heading */.Z.heading
  }, "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: accordion/* default.list */.Z.list
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: accordion/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement(BtnBox, {
    question: 'Можно ли посетить пробное занятие?',
    answer: 'Да, ученик может посетить пробное занятие, которые оплачивается как 50% от стоимости обычного занятия. На нем происходит знакомство, определение уровня знаний ученика и тд.'
  })), /*#__PURE__*/external_react_default().createElement("li", {
    className: accordion/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement(BtnBox, {
    question: 'В какие дни и какой промежуток времени проходят занятия?',
    answer: 'Я работаю с 9:00 до 21:00 по всем дням кроме вторника, четверга и субботы. В эти дни запись происходит по индивидуальной договоренности.'
  })), /*#__PURE__*/external_react_default().createElement("li", {
    className: accordion/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement(BtnBox, {
    question: 'Как формируется цена?',
    answer: 'Цена зависит напрямую от пожеланий ученика к занятиям и года его обучения. Для тех, кто готовится к ЕГЭ плата за час будет выше, чем для тех, кто готовится к ОГЭ. Так же цена зависит от необходимого уровня подготовки, то есть, если ученику нужно пройти порог, то и цена за час будет ниже, чем для ученика, который хочет набрать максимум баллов.'
  })), /*#__PURE__*/external_react_default().createElement("li", {
    className: accordion/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement(BtnBox, {
    question: 'Как производится оплата занятий?',
    answer: 'Оплата производится по абонементам, то есть каждый месяц Вы оплачиваете нужное количество занятий.'
  })), /*#__PURE__*/external_react_default().createElement("li", {
    className: accordion/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement(BtnBox, {
    question: 'Что происходит с оплаченным уроком, если ученик пропустил занятие?',
    answer: 'Абонемент — это предоплата за месяц. Она сгорает, если занятие не состоялось по вине ученика. В качестве компенсации преподаватель может предложить время для отработки пропуска, дополнительное домашнее задание или короткую консультацию через Zoom.'
  }))));
}
;// CONCATENATED MODULE: ./src/shared/Content/Accordion/index.ts

// EXTERNAL MODULE: ./src/shared/Content/content.scss
var content = __webpack_require__(24);
// EXTERNAL MODULE: ./src/shared/Content/Home/home.scss
var home = __webpack_require__(2370);
// EXTERNAL MODULE: ./src/assets/img/png/kavin.png
var kavin = __webpack_require__(9697);
;// CONCATENATED MODULE: ./src/shared/Content/Home/Home.tsx






function Home() {
  var refUl = (0,external_react_namespaceObject.useRef)(null);
  var refImg = (0,external_react_namespaceObject.useRef)(null);
  var loopAnim;
  (0,external_react_namespaceObject.useEffect)(function () {
    var animationFunc = function animationFunc() {
      external_gsap_default().timeline().to(refImg.current, {
        duration: 0.8,
        scale: 1
      }).to(refUl.current, {
        duration: 0.8,
        opacity: 1
      });
    };

    animation(animationFunc, popUpMenuDisplay, popUpMenuDuration);
    loopAnim = external_gsap_default().timeline().to(refUl.current, {
      duration: 0.8,
      scale: 0.9
    }).repeat(-1).yoyo(true);
    loopAnim.play();
  }, []);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: home/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: home/* default.headingBox */.Z.headingBox
  }, /*#__PURE__*/external_react_default().createElement("h2", {
    className: home/* default.heading */.Z.heading
  }, "\u0421\u043F\u0435\u0446\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F")), /*#__PURE__*/external_react_default().createElement("div", {
    className: home/* default.box */.Z.box
  }, /*#__PURE__*/external_react_default().createElement("ul", {
    className: home/* default.list */.Z.list,
    ref: refUl
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: home/* default.item */.Z.item
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: home/* default.svg */.Z.svg,
    "view-box": "0 0 40 40"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    fill: "currentColor",
    d: "M10 10L2.54 7.02L3 18H1l.48-11.41L0 6l10-4l10 4zm0-5c-.55 0-1 .22-1 .5s.45.5 1 .5s1-.22 1-.5s-.45-.5-1-.5zm0 6l5.57-2.23c.71.94 1.2 2.07 1.36 3.3c-.3-.04-.61-.07-.93-.07c-2.55 0-4.78 1.37-6 3.41A6.986 6.986 0 0 0 4 12c-.32 0-.63.03-.93.07c.16-1.23.65-2.36 1.36-3.3z"
  })), /*#__PURE__*/external_react_default().createElement("span", {
    className: home/* default.text */.Z.text
  }, "\u041F\u0440\u0438 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0438 \u0434\u0432\u0443\u0445\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0433\u043E \u0430\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442\u0430 \u0438 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043A\u0438\u0434\u043A\u0430 10%.")), /*#__PURE__*/external_react_default().createElement("li", {
    className: home/* default.item */.Z.item
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: home/* default.svg */.Z.svg,
    "view-box": "0 0 40 40"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    fill: "currentColor",
    d: "M10 10L2.54 7.02L3 18H1l.48-11.41L0 6l10-4l10 4zm0-5c-.55 0-1 .22-1 .5s.45.5 1 .5s1-.22 1-.5s-.45-.5-1-.5zm0 6l5.57-2.23c.71.94 1.2 2.07 1.36 3.3c-.3-.04-.61-.07-.93-.07c-2.55 0-4.78 1.37-6 3.41A6.986 6.986 0 0 0 4 12c-.32 0-.63.03-.93.07c.16-1.23.65-2.36 1.36-3.3z"
  })), /*#__PURE__*/external_react_default().createElement("span", {
    className: home/* default.text */.Z.text
  }, "\u041F\u0440\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438 screenshot \u0434\u0430\u043D\u043D\u043E\u0439 \u0430\u043A\u0446\u0438\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043A\u0438\u0434\u043A\u0430 \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435 \u2013 50%.")), /*#__PURE__*/external_react_default().createElement("li", {
    className: home/* default.item */.Z.item
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: home/* default.svg */.Z.svg,
    "view-box": "0 0 40 40"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    fill: "currentColor",
    d: "M10 10L2.54 7.02L3 18H1l.48-11.41L0 6l10-4l10 4zm0-5c-.55 0-1 .22-1 .5s.45.5 1 .5s1-.22 1-.5s-.45-.5-1-.5zm0 6l5.57-2.23c.71.94 1.2 2.07 1.36 3.3c-.3-.04-.61-.07-.93-.07c-2.55 0-4.78 1.37-6 3.41A6.986 6.986 0 0 0 4 12c-.32 0-.63.03-.93.07c.16-1.23.65-2.36 1.36-3.3z"
  })), /*#__PURE__*/external_react_default().createElement("span", {
    className: home/* default.text */.Z.text
  }, "\u0425\u043E\u0447\u0435\u0448\u044C \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u0432 \u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F? \u0412\u043C\u0435\u0441\u0442\u043E \u043F\u0440\u0430\u0439\u043C\u2011\u0442\u0430\u0439\u043C (16:00-21:00) - \u043F\u043E\u043B\u0443\u0447\u0430\u0439 \u0441\u043A\u0438\u0434\u043A\u0443 10%."))), /*#__PURE__*/external_react_default().createElement("div", {
    className: home/* default.kavinBox */.Z.kavinBox
  }, /*#__PURE__*/external_react_default().createElement("img", {
    className: home/* default.kavin */.Z.kavin,
    src: kavin,
    ref: refImg
  }))));
}
;// CONCATENATED MODULE: ./src/shared/Content/Home/index.ts

// EXTERNAL MODULE: ./src/shared/Content/HowIWork/howiwork.scss
var howiwork = __webpack_require__(7763);
// EXTERNAL MODULE: ./src/shared/Content/HowIWork/NavList/navlist.scss
var navlist = __webpack_require__(1037);
;// CONCATENATED MODULE: ./src/shared/Content/HowIWork/NavList/NavList.tsx
function NavList_slicedToArray(arr, i) { return NavList_arrayWithHoles(arr) || NavList_iterableToArrayLimit(arr, i) || NavList_unsupportedIterableToArray(arr, i) || NavList_nonIterableRest(); }

function NavList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function NavList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NavList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NavList_arrayLikeToArray(o, minLen); }

function NavList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NavList_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function NavList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function NavList(_ref) {
  var setFirstRender = _ref.setFirstRender,
      funcOne = _ref.funcOne,
      funcTwo = _ref.funcTwo,
      funcThree = _ref.funcThree,
      funcFour = _ref.funcFour;

  var _useState = (0,external_react_namespaceObject.useState)(1),
      _useState2 = NavList_slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOPen = _useState2[1];

  function open(cnt) {
    setFirstRender();

    if (cnt === 1) {
      setIsOPen(1);
      funcOne(true);
      funcTwo(false);
      funcThree(false);
      funcFour(false);
    } else if (cnt === 2) {
      setIsOPen(2);
      funcOne(false);
      funcTwo(true);
      funcThree(false);
      funcFour(false);
    } else if (cnt === 3) {
      setIsOPen(3);
      funcOne(false);
      funcTwo(false);
      funcThree(true);
      funcFour(false);
    } else if (cnt === 4) {
      setIsOPen(4);
      funcOne(false);
      funcTwo(false);
      funcThree(false);
      funcFour(true);
    }
  }

  return /*#__PURE__*/external_react_default().createElement("ul", {
    className: navlist/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: navlist/* default.item */.Z.item
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "".concat(navlist/* default.btn */.Z.btn, " ").concat(isOpen === 1 ? navlist/* default.open */.Z.open : ''),
    onClick: function onClick() {
      return open(1);
    }
  }, "1 \u0448\u0430\u0433")), /*#__PURE__*/external_react_default().createElement("li", {
    className: navlist/* default.item */.Z.item
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "".concat(navlist/* default.btn */.Z.btn, " ").concat(isOpen === 2 ? navlist/* default.open */.Z.open : ''),
    onClick: function onClick() {
      return open(2);
    }
  }, "2 \u0448\u0430\u0433")), /*#__PURE__*/external_react_default().createElement("li", {
    className: navlist/* default.item */.Z.item
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "".concat(navlist/* default.btn */.Z.btn, " ").concat(isOpen === 3 ? navlist/* default.open */.Z.open : ''),
    onClick: function onClick() {
      return open(3);
    }
  }, "3 \u0448\u0430\u0433")), /*#__PURE__*/external_react_default().createElement("li", {
    className: navlist/* default.item */.Z.item
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "".concat(navlist/* default.btn */.Z.btn, " ").concat(isOpen === 4 ? navlist/* default.open */.Z.open : ''),
    onClick: function onClick() {
      return open(4);
    }
  }, "4 \u0448\u0430\u0433")));
}
;// CONCATENATED MODULE: ./src/shared/Content/HowIWork/NavList/index.ts

// EXTERNAL MODULE: ./src/shared/Content/HowIWork/WorkingBox/workingbox.scss
var workingbox = __webpack_require__(3015);
// EXTERNAL MODULE: ./src/shared/Content/HowIWork/WorkingBox/WorkingPage/workingpage.scss
var workingpage = __webpack_require__(9566);
;// CONCATENATED MODULE: ./src/shared/Content/HowIWork/WorkingBox/WorkingPage/WorkingPage.tsx






function WorkingPage(_ref) {
  var heading = _ref.heading,
      text = _ref.text,
      styleImg = _ref.styleImg,
      pageNumber = _ref.pageNumber,
      firstRender = _ref.firstRender;
  var refP = (0,external_react_namespaceObject.useRef)(null);
  var refBtn = (0,external_react_namespaceObject.useRef)(null);
  var refImg = (0,external_react_namespaceObject.useRef)(null);
  (0,external_react_namespaceObject.useEffect)(function () {
    var animationFunc = function animationFunc() {
      external_gsap_default().timeline().to(refP.current, {
        height: 'auto',
        duration: 0.8
      }).to(refBtn.current, {
        opacity: 1,
        duration: 0.5
      }).to(refImg.current, {
        duration: 0.5,
        translateX: 0,
        opacity: 1
      }, '<');
    };

    if (pageNumber === 1 && firstRender) {
      animation(animationFunc, popUpMenuDisplay, popUpMenuDuration);
    } else {
      animationFunc();
    }
  }, []);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: workingpage/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: workingpage/* default.leftColumn */.Z.leftColumn
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: workingpage/* default.textContainer */.Z.textContainer,
    ref: refP
  }, /*#__PURE__*/external_react_default().createElement("h3", {
    className: workingpage/* default.heading */.Z.heading
  }, heading), /*#__PURE__*/external_react_default().createElement("p", {
    className: workingpage/* default.text */.Z.text
  }, text)), /*#__PURE__*/external_react_default().createElement("div", {
    className: workingpage/* default.btnBox */.Z.btnBox,
    ref: refBtn
  }, /*#__PURE__*/external_react_default().createElement(BtnScroll, {
    to: "contacts",
    text: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F",
    duration: 1000
  }))), /*#__PURE__*/external_react_default().createElement("div", {
    className: workingpage/* default.rightColumn */.Z.rightColumn
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "".concat(workingpage/* default.backImg */.Z.backImg, " ").concat(styleImg),
    ref: refImg
  })));
}
;// CONCATENATED MODULE: ./src/shared/Content/HowIWork/WorkingBox/WorkingPage/index.ts

;// CONCATENATED MODULE: ./src/shared/Content/HowIWork/WorkingBox/WorkingBox.tsx



function WorkingBox(_ref) {
  var one = _ref.one,
      two = _ref.two,
      three = _ref.three,
      four = _ref.four,
      firstRender = _ref.firstRender;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: workingbox/* default.container */.Z.container
  }, one && /*#__PURE__*/external_react_default().createElement(WorkingPage, {
    pageNumber: 1,
    firstRender: firstRender,
    heading: "\u041F\u0440\u043E\u0432\u043E\u0436\u0443 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E",
    text: "\u042F \u043F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0441\u044C \u043A \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u0443\u0440\u043E\u043A\u0443. \u041E\u0447\u0435\u043D\u044C \u0432\u0430\u0436\u043D\u043E \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0435\u043D\u0438\u043A\u0430, \u0438\u043D\u0430\u0447\u0435 \u0443 \u043D\u0435\u0433\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043D\u0438\u043A\u0430\u043A\u043E\u0433\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0443\u0447\u0438\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B. \u041D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u0440\u043E\u0431\u043D\u043E\u043C \u0437\u0430\u043D\u044F\u0442\u0438\u0438 \u043C\u044B \u0432\u043C\u0435\u0441\u0442\u0435 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0430, \u0432\u044B\u044F\u0441\u043D\u044F\u0435\u043C, \u0447\u0442\u043E \u0438\u0437 \u043A\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E \u0443\u0447\u0430\u0449\u0435\u043C\u0443\u0441\u044F. \u0414\u0430\u043B\u0435\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F \u0446\u0435\u043B\u044C \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u2013 \u043A \u043A\u0430\u043A\u043E\u043C\u0443 \u0431\u0430\u043B\u043B\u0443 \u0445\u043E\u0447\u0435\u0442 \u043F\u0440\u0438\u0439\u0442\u0438 \u0443\u0447\u0435\u043D\u0438\u043A. \u042F \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0435\u043D\u0438\u043A\u0430: \u043D\u0430\u0445\u043E\u0436\u0443 \u043E\u0431\u0449\u0438\u0439 \u044F\u0437\u044B\u043A \u0438 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u044E \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0438\u043C\u0435\u044E\u0449\u0438\u043C\u0441\u044F \u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u043E \u0437\u0430\u043D\u044F\u0442\u0438\u0439 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438. \u0410 \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435? \u042D\u0442\u043E \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u043E \u043E\u0442\u0440\u0435\u0436\u0438\u0441\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440\u043E\u043C \xAB\u0441\u043F\u0435\u043A\u0442\u0430\u043A\u043B\u044C\xBB \u0434\u0432\u0443\u0445 \u0430\u043A\u0442\u0435\u0440\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u044B \u0438 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u0440\u043E\u043B\u0438.",
    styleImg: workingbox/* default.imgOne */.Z.imgOne
  }), two && /*#__PURE__*/external_react_default().createElement(WorkingPage, {
    heading: "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0442\u0435\u043E\u0440\u0438\u0438",
    text: "\u0417\u0430\u043D\u044F\u0442\u0438\u044F \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u044B \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u043C\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C\u0438, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0440\u043E\u043A\u043E\u0432. \u041D\u0430 \u043E\u043F\u044B\u0442\u0435 \u0441\u0432\u043E\u0438\u0445 \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432 \u044F \u043F\u043E\u043D\u044F\u043B\u0430, \u0447\u0442\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0435\u0431\u0451\u043D\u043E\u043A \u0443\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E, \u0442\u043E \u0435\u0441\u0442\u044C \u0433\u043B\u0430\u0437\u0430\u043C\u0438. \u0415\u043C\u0443 \u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0445 \u0444\u0430\u043A\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0433\u043E \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0442, \u043D\u043E \u0431\u0443\u043A\u0432\u0430\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u0441\u044F\u0446 \u043E\u043D \u0438\u0445 \u0431\u043B\u0430\u0433\u043E\u043F\u043E\u043B\u0443\u0447\u043D\u043E \u0432\u044B\u043A\u0438\u043D\u0435\u0442 \u0438\u0437 \u0433\u043E\u043B\u043E\u0432\u044B. \u0422\u0430\u043A\u0436\u0435 \u043F\u0440\u0438 \u043E\u0434\u043D\u043E\u0442\u0438\u043F\u043D\u043E\u0439 \xAB\u043F\u0438\u0441\u0430\u043D\u0438\u043D\u0435\xBB \u0432 \u0442\u0435\u0442\u0440\u0430\u0434\u0438 \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0441\u043B\u043E\u0436\u043D\u043E \u0432\u0441\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u0438\u043B\u0438 \u043D\u0430\u0439\u0442\u0438 \u0442\u043E, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E. \u0410 \u043F\u0440\u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u043A \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0443 \u044D\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u043F\u043B\u043E\u0445\u043E. \u042F \u0441\u0447\u0438\u0442\u0430\u044E, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u044B \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0432 \u043D\u0430\u0448\u0435\u0439 \u0436\u0438\u0437\u043D\u0438, \u0442\u043E \u0438 \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F \u043A \u043D\u0438\u043C \u043D\u0443\u0436\u043D\u043E \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C. \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u043B\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0443 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0445\u043E\u0436\u0430 \u043D\u0430 \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0441\u0431\u043E\u0440\u043D\u0438\u043A, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0432\u044B \u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u0442\u0435\u043E\u0440\u0438\u044E. \u041D\u043E!.. \u042F \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043B\u0430 \u0442\u0430\u043C \u0442\u043E, \u0447\u0442\u043E \u0442\u043E\u0447\u043D\u043E \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0435. \u041D\u0438\u043A\u0430\u043A\u043E\u0439 \u0432\u043E\u0434\u044B. \u0413\u043B\u0430\u0432\u043D\u043E\u0435, \u0447\u0442\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043A\u0430\u0436\u0434\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C, \u043E\u043D\u0430 \u0438\u0434\u0451\u0442 \u0441 \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F\u043C\u0438. \u0423\u0447\u0435\u043D\u0438\u043A\u0443 \u0431\u0443\u0434\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0435\u0435 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u0443\u044E \u0442\u0435\u043E\u0440\u0438\u044E, \u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u0431\u0443\u0434\u0435\u0442 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043E\u043C, \u0441\u0445\u0435\u043C\u0430\u043C\u0438, \u0442\u0430\u0431\u043B\u0438\u0446\u0430\u043C\u0438.",
    styleImg: workingbox/* default.imgTwo */.Z.imgTwo
  }), three && /*#__PURE__*/external_react_default().createElement(WorkingPage, {
    heading: "\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435",
    text: "\u041F\u043E\u0441\u043B\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u043E\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0437\u0430\u043D\u044F\u0442\u044C\u0441\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u043E\u0439. \u041C\u044B \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u0437\u0430\u0434\u0430\u043D\u0438\u044F, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0442\u0435\u043C\u0438 \u0442\u0435\u043C\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B\u0438. \u0412\u0441\u0435\u043C \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E, \u0447\u0442\u043E \u043B\u044E\u0431\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0440\u0435\u0448\u0430\u044E\u0442\u0441\u044F \u043D\u0435 \u043E\u0434\u043D\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u0442\u0430\u043A \u0432\u043E\u0442 \u043F\u043E\u0441\u043B\u0435 \u0432\u0435\u0440\u043D\u043E\u0433\u043E \u0438\u0437\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438, \u044F \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E \u043F\u0440\u0438\u0434\u0443\u043C\u0430\u0442\u044C \u0443\u0447\u0435\u043D\u0438\u043A\u0443 \u0441\u0432\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0442\u043E\u0439 \u0436\u0435 \u0437\u0430\u0434\u0430\u0447\u0438. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043C\u043E\u0437\u0433\u0443 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C, \u043A\u0430\u043A \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044F \u0434\u0430\u043D\u043D\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435, \u043D\u043E \u0438 \u0442\u043E\u0447\u043D\u043E \u0437\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u043F\u0440\u0438\u043D\u0446\u0438\u043F \u0435\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0432 \u043D\u0430\u0448\u0435\u043C \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0438.",
    styleImg: workingbox/* default.imgThree */.Z.imgThree
  }), four && /*#__PURE__*/external_react_default().createElement(WorkingPage, {
    heading: "\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u044F\u0435\u043C \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B",
    text: "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043D\u044B\u043C \u0442\u0435\u043C\u0430\u043C. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u043C\u044B \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0435\u043C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0438 \u0432\u044B\u044F\u0432\u043B\u044F\u0435\u043C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u043F\u0443\u0441\u0442\u0438\u043B\u0438. \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u0442\u0430\u043A\u0438\u0435 \u0442\u0435\u0441\u0442\u044B \u0440\u0435\u0448\u0430\u044E\u0442\u0441\u044F \u0443\u0447\u0435\u043D\u0438\u043A\u0430\u043C\u0438 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u043B\u0435\u0433\u043A\u043E.",
    styleImg: workingbox/* default.imgFour */.Z.imgFour
  }));
}
;// CONCATENATED MODULE: ./src/shared/Content/HowIWork/WorkingBox/index.ts

;// CONCATENATED MODULE: ./src/shared/Content/HowIWork/HowIWork.tsx
function HowIWork_slicedToArray(arr, i) { return HowIWork_arrayWithHoles(arr) || HowIWork_iterableToArrayLimit(arr, i) || HowIWork_unsupportedIterableToArray(arr, i) || HowIWork_nonIterableRest(); }

function HowIWork_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function HowIWork_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return HowIWork_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return HowIWork_arrayLikeToArray(o, minLen); }

function HowIWork_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function HowIWork_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function HowIWork_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function HowIWork() {
  var _useState = (0,external_react_namespaceObject.useState)(true),
      _useState2 = HowIWork_slicedToArray(_useState, 2),
      isOpenOne = _useState2[0],
      setIsOpenOne = _useState2[1];

  var _useState3 = (0,external_react_namespaceObject.useState)(false),
      _useState4 = HowIWork_slicedToArray(_useState3, 2),
      isOpenTwo = _useState4[0],
      setIsOpenTwo = _useState4[1];

  var _useState5 = (0,external_react_namespaceObject.useState)(false),
      _useState6 = HowIWork_slicedToArray(_useState5, 2),
      isOpenThree = _useState6[0],
      setIsOpenThree = _useState6[1];

  var _useState7 = (0,external_react_namespaceObject.useState)(false),
      _useState8 = HowIWork_slicedToArray(_useState7, 2),
      isOpenFour = _useState8[0],
      setIsOpenFour = _useState8[1];

  var _useState9 = (0,external_react_namespaceObject.useState)(true),
      _useState10 = HowIWork_slicedToArray(_useState9, 2),
      firstRender = _useState10[0],
      setFirstRender = _useState10[1];

  var changeRender = function changeRender() {
    return setFirstRender(false);
  };

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: howiwork/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("h2", {
    className: howiwork/* default.heading */.Z.heading
  }, "\u041A\u0430\u043A \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u044E"), /*#__PURE__*/external_react_default().createElement("div", {
    className: howiwork/* default.navBox */.Z.navBox
  }, /*#__PURE__*/external_react_default().createElement(NavList, {
    setFirstRender: changeRender,
    funcOne: setIsOpenOne,
    funcTwo: setIsOpenTwo,
    funcThree: setIsOpenThree,
    funcFour: setIsOpenFour
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: howiwork/* default.workBox */.Z.workBox
  }, /*#__PURE__*/external_react_default().createElement(WorkingBox, {
    firstRender: firstRender,
    one: isOpenOne,
    two: isOpenTwo,
    three: isOpenThree,
    four: isOpenFour
  })));
}
;// CONCATENATED MODULE: ./src/shared/Content/HowIWork/index.ts

// EXTERNAL MODULE: ./src/shared/Content/SocialNetworks/socialnetworks.scss
var socialnetworks = __webpack_require__(5181);
;// CONCATENATED MODULE: ./src/shared/Content/SocialNetworks/SocialNetworks.tsx


function SocialNetworks() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: socialnetworks/* default.container */.Z.container,
    id: "contacts"
  }, /*#__PURE__*/external_react_default().createElement("h2", {
    className: socialnetworks/* default.heading */.Z.heading
  }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u043C\u043D\u043E\u0439"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: socialnetworks/* default.list */.Z.list
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: socialnetworks/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement("a", {
    className: socialnetworks/* default.link */.Z.link,
    target: "_blank",
    href: "https://wa.me/79265207280"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: "".concat(socialnetworks/* default.svg */.Z.svg, " ").concat(socialnetworks/* default.wa */.Z.wa),
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M15.271 13.21a7.014 7.014 0 0 1 1.543.7l-.031-.018c.529.235.986.51 1.403.833l-.015-.011c.02.061.032.13.032.203l-.001.032v-.001c-.015.429-.11.832-.271 1.199l.008-.021c-.231.463-.616.82-1.087 1.01l-.014.005a3.624 3.624 0 0 1-1.576.411h-.006a8.342 8.342 0 0 1-2.988-.982l.043.022a8.9 8.9 0 0 1-2.636-1.829l-.001-.001a20.473 20.473 0 0 1-2.248-2.794l-.047-.074a5.38 5.38 0 0 1-1.1-2.995l-.001-.013v-.124a3.422 3.422 0 0 1 1.144-2.447l.003-.003a1.17 1.17 0 0 1 .805-.341h.001c.101.003.198.011.292.025l-.013-.002c.087.013.188.021.292.023h.003a.642.642 0 0 1 .414.102l-.002-.001c.107.118.189.261.238.418l.002.008q.124.31.512 1.364c.135.314.267.701.373 1.099l.014.063a1.573 1.573 0 0 1-.533.889l-.003.002q-.535.566-.535.72a.436.436 0 0 0 .081.234l-.001-.001a7.03 7.03 0 0 0 1.576 2.119l.005.005a9.89 9.89 0 0 0 2.282 1.54l.059.026a.681.681 0 0 0 .339.109h.002q.233 0 .838-.752t.804-.752zm-3.147 8.216h.022a9.438 9.438 0 0 0 3.814-.799l-.061.024c2.356-.994 4.193-2.831 5.163-5.124l.024-.063c.49-1.113.775-2.411.775-3.775s-.285-2.662-.799-3.837l.024.062c-.994-2.356-2.831-4.193-5.124-5.163l-.063-.024c-1.113-.49-2.411-.775-3.775-.775s-2.662.285-3.837.799l.062-.024c-2.356.994-4.193 2.831-5.163 5.124l-.024.063a9.483 9.483 0 0 0-.775 3.787a9.6 9.6 0 0 0 1.879 5.72l-.019-.026l-1.225 3.613l3.752-1.194a9.45 9.45 0 0 0 5.305 1.612h.047zm0-21.426h.033c1.628 0 3.176.342 4.575.959L16.659.93c2.825 1.197 5.028 3.4 6.196 6.149l.029.076c.588 1.337.93 2.896.93 4.535s-.342 3.198-.959 4.609l.029-.074c-1.197 2.825-3.4 5.028-6.149 6.196l-.076.029c-1.327.588-2.875.93-4.503.93h-.034h.002h-.053c-2.059 0-3.992-.541-5.664-1.488l.057.03L-.001 24l2.109-6.279a11.505 11.505 0 0 1-1.674-6.01c0-1.646.342-3.212.959-4.631l-.029.075C2.561 4.33 4.764 2.127 7.513.959L7.589.93A11.178 11.178 0 0 1 12.092 0h.033h-.002z"
  })))), /*#__PURE__*/external_react_default().createElement("li", {
    className: socialnetworks/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement("a", {
    className: socialnetworks/* default.link */.Z.link,
    target: "_blank",
    href: "https://vk.com/repetidor.na100"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: "".concat(socialnetworks/* default.svg */.Z.svg, " ").concat(socialnetworks/* default.vk */.Z.vk),
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.692 10.831s.849.838 1.058 1.227c.006.008.009.016.011.02c.085.143.105.254.063.337c-.07.138-.31.206-.392.212h-1.5c-.104 0-.322-.027-.586-.209c-.203-.142-.403-.375-.598-.602c-.291-.338-.543-.63-.797-.63a.305.305 0 0 0-.095.015c-.192.062-.438.336-.438 1.066c0 .228-.18.359-.307.359h-.687c-.234 0-1.453-.082-2.533-1.221c-1.322-1.395-2.512-4.193-2.522-4.219c-.075-.181.08-.278.249-.278h1.515c.202 0 .268.123.314.232c.054.127.252.632.577 1.2c.527.926.85 1.302 1.109 1.302a.3.3 0 0 0 .139-.036c.338-.188.275-1.393.26-1.643c0-.047-.001-.539-.174-.775c-.124-.171-.335-.236-.463-.26a.55.55 0 0 1 .199-.169c.232-.116.65-.133 1.065-.133h.231c.45.006.566.035.729.076c.33.079.337.292.308 1.021c-.009.207-.018.441-.018.717c0 .06-.003.124-.003.192c-.01.371-.022.792.24.965a.216.216 0 0 0 .114.033c.091 0 .365 0 1.107-1.273a9.718 9.718 0 0 0 .595-1.274c.015-.026.059-.106.111-.137a.266.266 0 0 1 .124-.029h1.781c.194 0 .327.029.352.104c.044.119-.008.482-.821 1.583l-.363.479c-.737.966-.737 1.015.046 1.748z"
  })))), /*#__PURE__*/external_react_default().createElement("li", {
    className: socialnetworks/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement("a", {
    className: socialnetworks/* default.link */.Z.link,
    target: "_blank",
    href: "https://t.me/repetidor"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: "".concat(socialnetworks/* default.svg */.Z.svg, " ").concat(socialnetworks/* default.tg */.Z.tg),
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"
  })))), /*#__PURE__*/external_react_default().createElement("li", {
    className: socialnetworks/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement("a", {
    className: "".concat(socialnetworks/* default.link */.Z.link, " ").concat(socialnetworks/* default.inst */.Z.inst),
    target: "_blank",
    href: "https://instagram.com/__repetidor.na100?igshid=MDE2OWE1N2Q="
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: "".concat(socialnetworks/* default.svg */.Z.svg, " ").concat(socialnetworks/* default.inst */.Z.inst),
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default().createElement("linearGradient", {
    id: "grad",
    x1: "24%",
    y1: "100%",
    x2: "72%",
    y2: "0%"
  }, /*#__PURE__*/external_react_default().createElement("stop", {
    offset: "0%",
    stopColor: "#f9ed32",
    className: "stop-1"
  }), /*#__PURE__*/external_react_default().createElement("stop", {
    offset: "50%",
    stopColor: "#ee2a7b",
    className: "stop-2"
  }), /*#__PURE__*/external_react_default().createElement("stop", {
    offset: "60%",
    stopColor: "#ee2a7b",
    className: "stop-3"
  }), /*#__PURE__*/external_react_default().createElement("stop", {
    offset: "100%",
    stopColor: "#002aff",
    className: "stop-4"
  })), /*#__PURE__*/external_react_default().createElement("path", {
    d: "M10.1074 12.5C10.1074 13.8214 11.1786 14.8926 12.5 14.8926C13.8214 14.8926 14.8926 13.8214 14.8926 12.5C14.8926 11.1786 13.8214 10.1074 12.5 10.1074C11.1786 10.1074 10.1074 11.1786 10.1074 12.5Z"
  }), /*#__PURE__*/external_react_default().createElement("path", {
    d: "M6.9046 8.26691C7.01962 7.95525 7.2031 7.67316 7.44152 7.4416C7.67307 7.20319 7.95498 7.0197 8.26683 6.90469C8.51974 6.80646 8.89969 6.68954 9.59949 6.65768C10.3565 6.62316 10.5835 6.61572 12.5 6.61572C14.4167 6.61572 14.6437 6.62297 15.4005 6.65749C16.1003 6.68954 16.4804 6.80646 16.7332 6.90469C17.045 7.0197 17.3271 7.20319 17.5585 7.4416C17.7969 7.67316 17.9804 7.95506 18.0956 8.26691C18.1938 8.51983 18.3107 8.89996 18.3426 9.59977C18.3771 10.3566 18.3846 10.5836 18.3846 12.5003C18.3846 14.4168 18.3771 14.6438 18.3426 15.4008C18.3107 16.1006 18.1938 16.4805 18.0956 16.7334C17.9804 17.0453 17.7971 17.3272 17.5587 17.5588C17.3271 17.7972 17.0452 17.9807 16.7334 18.0957C16.4804 18.1941 16.1003 18.311 15.4005 18.3429C14.6437 18.3774 14.4169 18.3846 12.5002 18.3846C10.5833 18.3846 10.3563 18.3774 9.59969 18.3429C8.89988 18.311 8.51974 18.1941 8.26683 18.0957C7.64084 17.8542 7.14607 17.3594 6.9046 16.7334C6.80637 16.4805 6.68945 16.1006 6.65741 15.4008C6.62289 14.6438 6.61564 14.4168 6.61564 12.5003C6.61564 10.5836 6.62289 10.3566 6.65741 9.59977C6.68926 8.89996 6.80618 8.51983 6.9046 8.26691ZM12.5 16.1858C14.5357 16.1858 16.186 14.5358 16.186 12.5001C16.186 10.4644 14.5357 8.81432 12.5 8.81432C10.4645 8.81432 8.81424 10.4644 8.81424 12.5001C8.81424 14.5358 10.4645 16.1858 12.5 16.1858ZM8.66852 9.52996C9.14421 9.52996 9.52988 9.1443 9.52988 8.6686C9.52988 8.19291 9.14421 7.80724 8.66852 7.80724C8.19283 7.80724 7.80716 8.19291 7.80716 8.6686C7.80735 9.1443 8.19283 9.52996 8.66852 9.52996Z"
  }), /*#__PURE__*/external_react_default().createElement("path", {
    d: "M12.5 0C19.4025 0 25 5.5975 25 12.5C25 19.4025 19.4025 25 12.5 25C5.5975 25 0 19.4025 0 12.5C0 5.5975 5.5975 0 12.5 0ZM5.36556 15.4593C5.40028 16.2233 5.52177 16.745 5.69916 17.2016C6.07204 18.1658 6.83422 18.928 7.79839 19.3008C8.25481 19.4782 8.77666 19.5995 9.54056 19.6344C10.306 19.6693 10.5505 19.6777 12.4998 19.6777C14.4493 19.6777 14.6936 19.6693 15.4593 19.6344C16.2231 19.5995 16.745 19.4782 17.2014 19.3008C17.6805 19.1206 18.1143 18.8381 18.4729 18.4729C18.8379 18.1145 19.1204 17.6805 19.3007 17.2016C19.478 16.7452 19.5995 16.2233 19.6342 15.4594C19.6695 14.6938 19.6777 14.4493 19.6777 12.5C19.6777 10.5507 19.6695 10.3062 19.6344 9.54075C19.5997 8.77666 19.4784 8.255 19.301 7.79839C19.1208 7.31945 18.8381 6.88553 18.4729 6.52714C18.1145 6.16188 17.6805 5.8794 17.2016 5.69916C16.745 5.52177 16.2233 5.40047 15.4593 5.36556C14.6938 5.33066 14.4493 5.32227 12.5 5.32227C10.5507 5.32227 10.3062 5.33066 9.54075 5.36575C8.77666 5.40047 8.255 5.52177 7.79839 5.69897C7.31945 5.87921 6.88553 6.16188 6.52695 6.52714C6.16188 6.88572 5.87921 7.31945 5.69916 7.79839C5.52158 8.255 5.40028 8.77666 5.36537 9.54075C5.33047 10.3062 5.32227 10.5507 5.32227 12.5C5.32227 14.4493 5.33047 14.6938 5.36556 15.4593Z"
  })))), /*#__PURE__*/external_react_default().createElement("li", {
    className: socialnetworks/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement("a", {
    className: socialnetworks/* default.link */.Z.link,
    href: "mailto:Nadenka.kudlaeva@mail.ru"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: "".concat(socialnetworks/* default.svg */.Z.svg, " ").concat(socialnetworks/* default.mail */.Z.mail),
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M15.448 7.021c2.443 0 4.745 1.083 6.432 2.776v.005c0-.813.547-1.428 1.303-1.428h.192c1.193 0 1.432 1.125 1.432 1.48l.005 12.635c-.083.828.855 1.256 1.376.724c2.025-2.083 4.452-10.719-1.261-15.719c-5.328-4.667-12.479-3.896-16.281-1.276c-4.041 2.792-6.624 8.959-4.115 14.755c2.74 6.319 10.573 8.204 15.235 6.324c2.36-.953 3.448 2.233.995 3.276c-3.697 1.577-14 1.416-18.812-6.917C-1.302 18.027-1.13 8.125 7.496 2.995C14.089-.932 22.788.156 28.032 5.631c5.48 5.729 5.163 16.448-.187 20.615c-2.423 1.895-6.021.052-5.995-2.709l-.027-.9c-1.687 1.671-3.932 2.651-6.375 2.651c-4.833 0-9.088-4.256-9.088-9.084c0-4.88 4.255-9.181 9.088-9.181zm6.079 8.834c-.183-3.537-2.808-5.667-5.98-5.667h-.12c-3.656 0-5.687 2.88-5.687 6.145c0 3.661 2.453 5.973 5.672 5.973c3.593 0 5.952-2.629 6.124-5.739z"
  })))), /*#__PURE__*/external_react_default().createElement("li", {
    className: socialnetworks/* default.listItem */.Z.listItem
  }, /*#__PURE__*/external_react_default().createElement("a", {
    className: socialnetworks/* default.link */.Z.link,
    href: "tel:+79295207280"
  }, /*#__PURE__*/external_react_default().createElement("svg", {
    className: "".concat(socialnetworks/* default.svg */.Z.svg, " ").concat(socialnetworks/* default.phone */.Z.phone),
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    preserveAspectRatio: "xMidYMid meet",
    viewBox: "0 0 1200 1200"
  }, /*#__PURE__*/external_react_default().createElement("path", {
    d: "M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0zM384.375 238.33c12.362-.729 23.536 6.66 32.007 19.775l82.031 155.566c8.637 18.434 3.729 38.172-9.155 51.343l-37.573 37.573c-2.319 3.178-3.845 6.757-3.882 10.693c14.409 55.775 58.117 107.223 96.681 142.603c38.562 35.38 80.009 83.281 133.812 94.629c6.65 1.855 14.797 2.52 19.556-1.903l43.652-44.458c15.068-11.421 36.866-16.956 52.954-7.617h.732l148.021 87.378c21.728 13.619 23.979 39.944 8.423 55.957L849.683 941.016c-15.056 15.44-35.058 20.631-54.491 20.654c-85.948-2.575-167.158-44.759-233.862-88.11c-109.49-79.653-209.923-178.446-272.975-297.803c-24.182-50.05-52.589-113.91-49.878-169.774c.242-21.016 5.928-41.605 20.728-55.151l101.953-101.953c7.942-6.758 15.799-10.111 23.217-10.549z"
  }))))));
}
;// CONCATENATED MODULE: ./src/shared/Content/SocialNetworks/index.ts

// EXTERNAL MODULE: ./src/shared/Content/Subjects/subjects.scss
var subjects = __webpack_require__(949);
// EXTERNAL MODULE: ./src/shared/Content/Subjects/SubjectContent/subjectcontent.scss
var subjectcontent = __webpack_require__(472);
;// CONCATENATED MODULE: ./src/shared/Content/Subjects/SubjectContent/SubjectContent.tsx



function SubjectContent(_ref) {
  var title = _ref.title,
      text = _ref.text,
      price = _ref.price,
      children = _ref.children;
  var textBool = text ? true : false;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: subjectcontent/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("h3", {
    className: subjectcontent/* default.name */.Z.name
  }, title), textBool && /*#__PURE__*/external_react_default().createElement("p", {
    className: subjectcontent/* default.text */.Z.text
  }, text), children, /*#__PURE__*/external_react_default().createElement("div", {
    className: subjectcontent/* default.box */.Z.box
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: subjectcontent/* default.priceBox */.Z.priceBox
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: subjectcontent/* default.from */.Z.from
  }, "\u043E\u0442"), /*#__PURE__*/external_react_default().createElement("span", {
    className: subjectcontent/* default.price */.Z.price
  }, price), /*#__PURE__*/external_react_default().createElement("span", {
    className: subjectcontent/* default.rub */.Z.rub
  }, "\u0440/\u0447")), /*#__PURE__*/external_react_default().createElement(BtnScroll, {
    to: "contacts",
    text: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F",
    duration: 1000
  })));
}
;// CONCATENATED MODULE: ./src/shared/Content/Subjects/SubjectContent/index.ts

;// CONCATENATED MODULE: ./src/shared/Content/Subjects/Subjects.tsx






function Subjects() {
  var refMathematics = (0,external_react_namespaceObject.useRef)(null);
  var refEnglish = (0,external_react_namespaceObject.useRef)(null);
  var refSocialScience = (0,external_react_namespaceObject.useRef)(null);
  (0,external_react_namespaceObject.useEffect)(function () {
    var animationFunc = function animationFunc() {
      external_gsap_default().timeline().to(refMathematics.current, {
        duration: 0.5,
        translateX: 0,
        opacity: 1
      }).to(refEnglish.current, {
        duration: 0.5,
        translateX: 0,
        opacity: 1
      }).to(refSocialScience.current, {
        duration: 0.5,
        translateX: 0,
        opacity: 1
      });
    };

    animation(animationFunc, popUpMenuDisplay, popUpMenuDuration);
  }, []);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: subjects/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("h2", {
    className: subjects/* default.heading */.Z.heading
  }, "\u0421\u0434\u0430\u044E\u0449\u0438\u043C \u0415\u0413\u042D"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: subjects/* default.list */.Z.list
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: "".concat(subjects/* default.item */.Z.item, " ").concat(subjects/* default.mathematics */.Z.mathematics),
    ref: refMathematics
  }, /*#__PURE__*/external_react_default().createElement(SubjectContent, {
    title: "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430 \u0431\u0430\u0437\u0430",
    text: "\u042D\u0442\u043E\u0442 \u0440\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0431\u044F, \u0435\u0441\u043B\u0438 \u0442\u044B \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C\u0441\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u0442\u044C \u0432 \u0444\u0438\u0437\u043C\u0430\u0442, \u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0443 \u0441\u0434\u0430\u0442\u044C \u043D\u0430\u0434\u043E. \u041D\u0430\u0448\u0438 \u0437\u0430\u043D\u044F\u0442\u0438\u044F - \u044D\u0442\u043E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0431\u0435\u0437 \u0432\u043E\u0434\u044B! \u041D\u0435 \u0442\u0440\u0430\u0442\u0438\u043C \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432, \u043D\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0415\u0413\u042D, \u043A\u0430\u043A \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u044E\u0442 \u0432 \u0448\u043A\u043E\u043B\u0435. \u041C\u044B \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u043E, \u0447\u0442\u043E \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u0440\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u043D\u0430 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0435 \u0438 \u044F \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u044E \u0435\u0433\u043E \u0442\u0430\u043A, \u0447\u0442\u043E \u0442\u044B \u0441\u043C\u043E\u0436\u0435\u0448\u044C \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0434\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430 \u0431\u044B\u043B\u0430 \u0442\u0432\u043E\u0438\u043C \u043D\u0435\u043B\u044E\u0431\u0438\u043C\u044B\u043C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u043C.",
    price: "1100"
  })), /*#__PURE__*/external_react_default().createElement("li", {
    className: "".concat(subjects/* default.item */.Z.item, " ").concat(subjects/* default.mathematicsBase */.Z.mathematicsBase),
    ref: refEnglish
  }, /*#__PURE__*/external_react_default().createElement(SubjectContent, {
    title: "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u044C",
    text: "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0441\u043E \u043C\u043D\u043E\u0439 - \u044D\u0442\u043E \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0430, \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430, \u043A\u0430\u043A \u0440\u0430\u0437 \u0432\u0441\u0435 \u0442\u043E, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \xAB\u041F\u0440\u043E\u0444\u0438\u043B\u044E\xBB. \u042F \u043E\u0442\u0434\u0430\u044E \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u043C\u0443, \u043C\u043E\u0438 \u0443\u0447\u0435\u043D\u0438\u043A\u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u044E\u0442 \u043A \u043C\u0430\u044E. \u0417\u043D\u0430\u044F \u0442\u0435\u043E\u0440\u0438\u044E, \u043C\u043E\u0436\u043D\u043E \u043B\u0435\u0433\u043A\u043E \u0440\u0435\u0448\u0438\u0442\u044C \u043B\u044E\u0431\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435, \u0430 \u0435\u0441\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0448\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 \u0431\u0435\u0437 \u043F\u043E\u043C\u043E\u0449\u0438 \u043A\u0430\u043A\u043E\u0439-\u043B\u0438\u0431\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u044B? \u0414\u0430 \u043B\u0435\u0433\u043A\u043E! \u0418\u043C\u0435\u043D\u043D\u043E \u044D\u0442\u043E\u043C\u0443 \u044F \u0442\u0435\u0431\u044F \u0438 \u043D\u0430\u0443\u0447\u0443, \u0432\u0435\u0434\u044C \u0434\u0430\u043D\u043D\u0430\u044F \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0430 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0442\u0435\u0431\u0435 \u043D\u0430 \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0435 \u0432 \u0441\u0442\u0440\u0435\u0441\u0441\u043E\u0432\u043E\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043D\u043E \u0438 \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0442\u0432\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0432 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0435 \u043F\u0440\u043E\u0449\u0435 \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0435\u0435.",
    price: "1300"
  })), /*#__PURE__*/external_react_default().createElement("li", {
    className: "".concat(subjects/* default.item */.Z.item, " ").concat(subjects/* default.socialScience */.Z.socialScience),
    ref: refSocialScience
  }, /*#__PURE__*/external_react_default().createElement(SubjectContent, {
    title: "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u043E\u0437\u043D\u0430\u043D\u0438\u0435",
    text: "\u042F \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E \u0442\u0435\u0431\u0435:",
    price: "1300"
  }, /*#__PURE__*/external_react_default().createElement("ul", {
    className: subjects/* default.socialList */.Z.socialList
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: subjects/* default.socialListItem */.Z.socialListItem
  }, "\u041A\u043E\u043D\u0441\u043F\u0435\u043A\u0442\u044B \u043A\u0430\u0436\u0434\u044B\u0445 \u0437\u0430\u043D\u044F\u0442\u0438\u0439 \u0432 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435."), /*#__PURE__*/external_react_default().createElement("li", {
    className: subjects/* default.socialListItem */.Z.socialListItem
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0437\u043D\u0430\u043D\u0438\u0439 \u0440\u0430\u0437 \u0432 \u043C\u0435\u0441\u044F\u0446: \u0443\u0441\u0442\u043D\u044B\u0435 \u0437\u0430\u0447\u0451\u0442\u044B, \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043D\u0438\u043A\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0440\u0430\u0437\u0431\u043E\u0440 \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0438\u0437\u0443\u0447\u0435\u043D\u043D\u043E\u0439 \u0442\u0435\u043E\u0440\u0438\u0438."), /*#__PURE__*/external_react_default().createElement("li", {
    className: subjects/* default.socialListItem */.Z.socialListItem
  }, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C."), /*#__PURE__*/external_react_default().createElement("li", {
    className: subjects/* default.socialListItem */.Z.socialListItem
  }, "\u0420\u0430\u0437\u0431\u043E\u0440 \u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u0435\u0431\u0435 \u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C!"))))));
}
;// CONCATENATED MODULE: ./src/shared/Content/Subjects/index.ts

// EXTERNAL MODULE: ./src/shared/Content/SubjectsMSE/subjectsmse.scss
var subjectsmse = __webpack_require__(5622);
;// CONCATENATED MODULE: ./src/shared/Content/SubjectsMSE/SubjectsMSE.tsx






function SubjectsMSE() {
  var refMathematics = (0,external_react_namespaceObject.useRef)(null);
  var refSocialScience = (0,external_react_namespaceObject.useRef)(null);
  (0,external_react_namespaceObject.useEffect)(function () {
    var animationFunc = function animationFunc() {
      external_gsap_default().timeline().to(refMathematics.current, {
        duration: 0.5,
        translateX: 0,
        opacity: 1
      }).to(refSocialScience.current, {
        duration: 0.5,
        translateX: 0,
        opacity: 1
      });
    };

    animation(animationFunc, popUpMenuDisplay, popUpMenuDuration);
  }, []);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: subjectsmse/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("h2", {
    className: subjectsmse/* default.heading */.Z.heading
  }, "\u0421\u0434\u0430\u044E\u0449\u0438\u043C \u041E\u0413\u042D"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: subjectsmse/* default.list */.Z.list
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: "".concat(subjectsmse/* default.item */.Z.item, " ").concat(subjectsmse/* default.mathematics */.Z.mathematics),
    ref: refMathematics
  }, /*#__PURE__*/external_react_default().createElement(SubjectContent, {
    title: "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430",
    text: "\u041E\u0413\u042D \u0441\u043D\u043E\u0432\u0430 \u043E\u0442\u043C\u0435\u043D\u044F\u0442? \u0410 \u0432\u043E\u0442 \u0438 \u043D\u0435 \u043D\u0430\u0434\u0435\u0439\u0442\u0435\u0441\u044C. \u0412 2023 \u0433\u043E\u0434\u0443 \u0432\u0441\u0435 \u0434\u0435\u0432\u044F\u0442\u0438\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0435\u0433\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0430\u0442\u0442\u0435\u0441\u0442\u0430\u0442. \u0412 2020 \u0433\u043E\u0434\u0443 \u041E\u0413\u042D \u0441\u0438\u043B\u044C\u043D\u043E \u043F\u043E\u043C\u0435\u043D\u044F\u043B\u043E\u0441\u044C, \u0438\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0432\u0441\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F: \u0432 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0438, \u0432 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0430\u0445, \u0432 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u0445. \u0415\u0441\u043B\u0438 \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C, \u0442\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C \u0432\u0430\u0436\u043D\u044B\u0435 \u0431\u0430\u043B\u043B\u044B. \u0427\u0442\u043E\u0431\u044B \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E, \u044F \u0443\u0447\u0443 \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0438\u0442\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0442\u044C \u043E\u0442\u0432\u0435\u0442\u044B \u0432 \u0441\u0442\u0440\u043E\u0433\u043E\u043C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C\u0438. \u041D\u0443 \u0438, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u0441 \u043B\u0435\u0433\u043A\u043E\u0441\u0442\u044C\u044E \xAB\u0449\u0435\u043B\u043A\u0430\u0442\u044C\xBB \u0437\u0430\u0434\u0430\u043D\u0438\u044F.",
    price: "1100"
  })), /*#__PURE__*/external_react_default().createElement("li", {
    className: "".concat(subjectsmse/* default.item */.Z.item, " ").concat(subjectsmse/* default.socialScience */.Z.socialScience),
    ref: refSocialScience
  }, /*#__PURE__*/external_react_default().createElement(SubjectContent, {
    title: "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u043E\u0437\u043D\u0430\u043D\u0438\u0435",
    text: "\u0427\u0442\u043E \u0432\u0430\u0436\u043D\u043E\u0433\u043E \u0442\u0435\u0431\u0435 \u043D\u0443\u0436\u043D\u043E \u0437\u043D\u0430\u0442\u044C?",
    price: "1100"
  }, /*#__PURE__*/external_react_default().createElement("ul", {
    className: subjectsmse/* default.socialList */.Z.socialList
  }, /*#__PURE__*/external_react_default().createElement("li", {
    className: subjectsmse/* default.socialListItem */.Z.socialListItem
  }, "\u041D\u0435 \u0431\u043E\u044F\u0442\u044C\u0441\u044F \u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043C\u0430 \u0442\u0435\u043E\u0440\u0438\u0438. \u0424\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0435 \u043D\u0430 \u0437\u0430\u0443\u0447\u0438\u0432\u0430\u043D\u0438\u0438, \u0430 \u043D\u0430 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0438 \u0442\u0435\u0440\u043C\u0438\u043D\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u0438\u043B\u0438 \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0438."), /*#__PURE__*/external_react_default().createElement("li", {
    className: subjectsmse/* default.socialListItem */.Z.socialListItem
  }, "\u041E\u0431\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0442\u0435\u043E\u0440\u0438\u044E, \u043D\u043E \u0438 \u043D\u0430 \u0444\u043E\u0440\u043C\u0430\u0442 \u0437\u0430\u0434\u0430\u043D\u0438\u0439, \u0432\u0435\u0434\u044C \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u043B\u044E\u0431\u044F\u0442 \u043B\u043E\u0432\u0438\u0442\u044C \u043D\u0435\u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432."), /*#__PURE__*/external_react_default().createElement("li", {
    className: subjectsmse/* default.socialListItem */.Z.socialListItem
  }, "\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043D\u044B\u0435 \u041E\u0413\u042D, \u0447\u0442\u043E\u0431\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C \u0437\u0430\u043A\u0430\u043B\u0438\u043B\u0441\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u043E\u0439 \u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0435 \u0443\u0436\u0435 \u043D\u0435 \u043D\u0435\u0440\u0432\u043D\u0438\u0447\u0430\u043B. \u0412\u0441\u0435\u043C\u0443 \u044D\u0442\u043E\u043C\u0443 \u044F \u043D\u0430\u0443\u0447\u0443 \u0442\u0435\u0431\u044F \u043D\u0430 \u0441\u0432\u043E\u0438\u0445 \u0437\u0430\u043D\u044F\u0442\u0438\u044F\u0445! \u0412 \u0438\u0442\u043E\u0433\u0435 \u044D\u043A\u0437\u0430\u043C\u0435\u043D \u0431\u0443\u0434\u0435\u0442 \u0441\u0434\u0430\u043D \u043D\u0430 \u043E\u0442\u043B\u0438\u0447\u043D\u043E \u0438 \u0442\u044B \u0431\u0443\u0434\u0435\u0448\u044C \u0445\u043E\u0440\u043E\u0448\u043E \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432\u043E \u0432\u0441\u0435\u0445 \u0441\u0444\u0435\u0440\u0430\u0445 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E\u0437\u043D\u0430\u043D\u0438\u044F, \u0447\u0442\u043E \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u0441\u044F \u0442\u0435\u0431\u0435 \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0439 \u0436\u0438\u0437\u043D\u0438."))))));
}
;// CONCATENATED MODULE: ./src/shared/Content/SubjectsMSE/index.ts

;// CONCATENATED MODULE: ./src/shared/Content/Content.tsx










function Content() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: content/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: content/* default.renderBox */.Z.renderBox
  }, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Routes, null, /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Route, {
    path: "/home",
    element: /*#__PURE__*/external_react_default().createElement(Home, null)
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Route, {
    path: "/aboutme",
    element: /*#__PURE__*/external_react_default().createElement(AboutMe, null)
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Route, {
    path: "/howiwork",
    element: /*#__PURE__*/external_react_default().createElement(HowIWork, null)
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Route, {
    path: "/use",
    element: /*#__PURE__*/external_react_default().createElement(Subjects, null)
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Route, {
    path: "/mse",
    element: /*#__PURE__*/external_react_default().createElement(SubjectsMSE, null)
  }), /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Route, {
    path: "*",
    element: /*#__PURE__*/external_react_default().createElement(external_react_router_dom_namespaceObject.Navigate, {
      to: "/home"
    })
  }))), /*#__PURE__*/external_react_default().createElement("div", {
    className: content/* default.questions */.Z.questions
  }, /*#__PURE__*/external_react_default().createElement(Accordion, null)), /*#__PURE__*/external_react_default().createElement("div", {
    className: content/* default.contacts */.Z.contacts
  }, /*#__PURE__*/external_react_default().createElement(SocialNetworks, null)));
}
;// CONCATENATED MODULE: ./src/shared/Content/index.ts

// EXTERNAL MODULE: ./src/shared/Footer/footer.scss
var footer = __webpack_require__(2157);
;// CONCATENATED MODULE: ./src/shared/Footer/Footer.tsx




function Footer() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: footer/* default.footer */.Z.footer
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: footer/* default.container */.Z.container
  }, /*#__PURE__*/external_react_default().createElement(Logo, null), /*#__PURE__*/external_react_default().createElement("div", {
    className: footer/* default.box */.Z.box
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: footer/* default.text */.Z.text
  }, "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A \u0415\u0413\u042D \u0438 \u041E\u0413\u042D \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E"), /*#__PURE__*/external_react_default().createElement("span", {
    className: footer/* default.name */.Z.name
  }, "\u041D\u0438\u043A\u0443\u043B\u0438\u043D\u0430 \u041D\u0430\u0434\u0435\u0436\u0434\u0430 \u0410\u043D\u0434\u0440\u0435\u0435\u0432\u043D\u0430")), /*#__PURE__*/external_react_default().createElement(BtnScroll, {
    text: "\u041D\u0430\u0432\u0435\u0440\u0445",
    to: "top",
    duration: 1000
  })));
}
;// CONCATENATED MODULE: ./src/shared/Footer/index.ts

;// CONCATENATED MODULE: ./src/assets/img/png/favicon/favicon-32x32.png
const favicon_32x32_namespaceObject = __webpack_require__.p + "772602c92fd2dc484ea9.png";
;// CONCATENATED MODULE: ./src/assets/img/png/favicon/favicon-16x16.png
const favicon_16x16_namespaceObject = __webpack_require__.p + "8b8517ee82ebba932780.png";
;// CONCATENATED MODULE: ./src/assets/img/png/favicon/android-chrome-192x192.png
const android_chrome_192x192_namespaceObject = __webpack_require__.p + "7d9aaefdf7564e3bd9bc.png";
;// CONCATENATED MODULE: ./src/assets/img/png/favicon/android-chrome-512x512.png
const android_chrome_512x512_namespaceObject = __webpack_require__.p + "41a014ecacd34a8a2abf.png";
;// CONCATENATED MODULE: ./src/assets/img/png/favicon/apple-touch-icon.png
const apple_touch_icon_namespaceObject = __webpack_require__.p + "19d0a42f90a6b6576afc.png";
;// CONCATENATED MODULE: ./src/utils/ts/addFavico.ts




 // import ico from '../../assets/img/png/favicon/favicon.ico'

function addFavico() {
  function createLink(rel, href, type) {
    var link = document.createElement('link');
    link.rel = rel;
    link.type = type ? type : 'image/png';
    link.href = href;
    document.head.append(link);
  }

  createLink('icon', favicon_32x32_namespaceObject);
  createLink('icon', favicon_16x16_namespaceObject);
  createLink('android-touch-icon', android_chrome_192x192_namespaceObject);
  createLink('android-touch-icon', android_chrome_512x512_namespaceObject);
  createLink('apple-touch-icon', apple_touch_icon_namespaceObject); // createLink('icon', ico, 'image/x-ico')
}
;// CONCATENATED MODULE: ./src/App.tsx
function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }

function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }

function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function App_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










 // const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(thunk)
// ))

function AppComponent() {
  var _React$useState = external_react_namespaceObject.useState(false),
      _React$useState2 = App_slicedToArray(_React$useState, 2),
      mounted = _React$useState2[0],
      setMounted = _React$useState2[1];

  external_react_namespaceObject.useEffect(function () {
    setMounted(true);
    addFavico();
  }, []);
  return /*#__PURE__*/external_react_namespaceObject.createElement(external_react_namespaceObject.Fragment, null, mounted && /*#__PURE__*/external_react_namespaceObject.createElement(external_react_router_dom_namespaceObject.BrowserRouter, null, /*#__PURE__*/external_react_namespaceObject.createElement(Layout, null, /*#__PURE__*/external_react_namespaceObject.createElement(Header, null), /*#__PURE__*/external_react_namespaceObject.createElement(Content, null), /*#__PURE__*/external_react_namespaceObject.createElement(Footer, null))));
}

var App = (0,root_namespaceObject.hot)(function () {
  return /*#__PURE__*/external_react_namespaceObject.createElement(AppComponent, null);
});
;// CONCATENATED MODULE: ./src/server/indexTemplate.js
var indexTemplate = function indexTemplate(content) {
  return "\n<!doctype html>\n<html lang=\"ru\" data-theme=\"light\" data-textsize=\"normal\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Yoututor</title>\n    <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1.0\">\n    <meta name=\"description\" content=\"\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A \u0415\u0413\u042D \u0438 \u041E\u0413\u042D. \u0420\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440 \u043F\u043E \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0435 \u0438 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E\u0437\u043D\u0430\u043D\u0438\u044E\" />\n    <meta name=\"keywords\" itemprop=\"keywords\" content=\"\u0414\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u043E,\u041E\u0413\u042D,\u0415\u0413\u042D,\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430,\u0440\u0435\u043F\u0435\u0442\u0438\u0442\u043E\u0440,\u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430,\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E\u0437\u043D\u0430\u043D\u0438\u0435\" />\n    <link rel=\"shortcut icon\" type=\"image/ico\" href=\"/static/favicon/favicon.ico\"/>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  </head>\n  <body>\n    <div id=\"react-root\">".concat(content, "</div>\n    <div id=\"modal-root\"></div>\n  </body>\n</html>\n");
};
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
;// CONCATENATED MODULE: ./src/server/server.js
 //const express = require('express');





var PORT = process.env.PORT || 3000;
var app = external_express_default()();
app.use('/static', external_express_default()["static"]('./dist/client')); // app.get('/auth', (req, res) => {
//   // req.query.code;
//   axios. post(
//     'https://www.reddit.com/api/v1/access_token',
//     `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
//     {
//       auth: {username: process.env.CLIENT_ID, password: 'JpsAUyKIwscbeS0DMu1Hm2xbrWL10Q'},
//       headers: {'Content-type': 'application/x-www-form-urlencoded'}
//     }
//   )
//   .then(({data}) => {
//     res.send(
//       indexTemplate(ReactDOM.renderToString(App))
//     );
//   })
//   .catch(console.log)
// });

app.get('*', function (req, res) {
  res.send(indexTemplate(server_default().renderToString(App)));
});
app.listen(PORT, function () {
  console.log("Server started on http://localhost:".concat(PORT));
});
})();

/******/ })()
;