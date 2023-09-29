/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&family=Ubuntu:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-white: #ffffff;
  --accent-color: #146cc4;
  --primary-gray: #f4f4f4;
  --secondary-gray: #505050;
  --primary-red: #ff0000;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Ubuntu", sans-serif;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
}

.sidebar {
  background-color: var(--primary-gray);
}

.projects {
  margin: 6.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-button {
  cursor: pointer;
}

.project-create-container {
  display: flex;
  justify-content: space-between;
}

.project-create-container > input {
  font-size: 1rem;
  width: 70%;
  padding: 0.2rem;
  border: none;
  color: var(--secondary-gray);
  outline: none;
}

.project-create-container > button {
  width: 1.5rem;
  height: 1.5rem;
  border: none;
}

.create-new-project-button {
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: var(--accent-color);
  cursor: pointer;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
}

.create-new-project-icon {
  filter: invert();
}

/* Project page */
.main {
  background-color: var(--primary-white);
  padding: 6rem 15rem 0rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-name {
  font-size: 2rem;
  font-weight: 500;
  color: var(--accent-color);
}

.project-description {
  font-size: 1.05rem;
  color: var(--secondary-gray);
}

#create-new-todo {
  cursor: pointer;
  width: 6rem;
  padding: 0.5rem;
  border-radius: 1rem;
  text-align: center;
  color: var(--primary-white);
  background-color: var(--accent-color);
}

#todoModal {
  border: none;
  margin: auto;
  width: 40rem;
  aspect-ratio: 16/9;
  border-radius: 1rem;
}

#todoModalForm {
  height: 100%;
}

.todo-create-container {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.5rem;
  height: 100%;
  padding: 1rem;
}

.todo-create-container-input {
  font-size: 1rem;
  width: 50%;
  padding: 0.2rem;
  border: none;
  border-bottom: 1px solid var(--accent-color);
  color: var(--secondary-gray);
  outline: none;
}

.todo-create-container-input::placeholder {
  color: var(--secondary-gray);
  opacity: 0.6;
  font-family: "Inconsolata", monospace;
  font-style: italic;
}

#todo-create-container-priority{
  width: 7rem;
  outline: none;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  background-color: #146cc4;
  color: #f1f1f1;
}

.save-todo-button {
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  width: 5rem;
  color: var(--primary-white);
  background-color: var(--accent-color);
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

.cancel-todo-button {
  border: none;
  border-radius: 1rem;
  width: 1.1rem;
  height: 1.1rem;
  color: var(--primary-white);
  background-color: var(--primary-red);
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}

.cancel-todo-button-icon {
  height: 1rem;
  width: 1rem;
  filter: invert();
  opacity: 0;
}

.cancel-todo-button-icon:hover {
  opacity: 1;
}
.project-todoList-container{
  display: grid;
  row-gap: 1rem;
}

.todo-container {
  display: grid;
  grid-template-columns: 1fr 1rem 1rem;
  grid-template-rows: 2rem 1fr;
  column-gap: 2rem;
  align-items: center;
  width: 60%;
  padding: 0 1rem;
  border-radius: 0 1rem 1rem 0;
  box-shadow: #959da533 0px 8px 24px;
  border-left: 3px solid var(--priority-color);
}

.todo-container[data-priority="low"] {
  --priority-color: green;
}
.todo-container[data-priority="medium"] {
  --priority-color: yellow;
}
.todo-container[data-priority="high"] {
  --priority-color: orange;
}
.todo-container[data-priority="critical"] {
  --priority-color: red;
}

.todo-container-name {
  color: var(--primary-red);
}
.todo-container-description {
  grid-column: 1/span 3;
  text-align: justify;
  color: var(--primary-red);
  height: 0;
  overflow: hidden;
  transition: 0.2s ease-out;
  /* background-color: #f1f1f1; */
}

.todo-description-hidden{
  height: 0;
}
.todo-description-expanded{
  padding: 1rem;
  height: max-content;
}

.todo-container-expand-button{
  justify-self: end;
}

.todo-container-delete-button {
  border: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&family=Ubuntu:wght@400;500;700&display=swap\");\n\n:root {\n  --primary-white: #ffffff;\n  --accent-color: #146cc4;\n  --primary-gray: #f4f4f4;\n  --secondary-gray: #505050;\n  --primary-red: #ff0000;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Ubuntu\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.sidebar {\n  background-color: var(--primary-gray);\n}\n\n.projects {\n  margin: 6.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.project-button {\n  cursor: pointer;\n}\n\n.project-create-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.project-create-container > input {\n  font-size: 1rem;\n  width: 70%;\n  padding: 0.2rem;\n  border: none;\n  color: var(--secondary-gray);\n  outline: none;\n}\n\n.project-create-container > button {\n  width: 1.5rem;\n  height: 1.5rem;\n  border: none;\n}\n\n.create-new-project-button {\n  border: none;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 2rem;\n  background-color: var(--accent-color);\n  cursor: pointer;\n  position: fixed;\n  bottom: 1rem;\n  left: 1rem;\n}\n\n.create-new-project-icon {\n  filter: invert();\n}\n\n/* Project page */\n.main {\n  background-color: var(--primary-white);\n  padding: 6rem 15rem 0rem 4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.project-name {\n  font-size: 2rem;\n  font-weight: 500;\n  color: var(--accent-color);\n}\n\n.project-description {\n  font-size: 1.05rem;\n  color: var(--secondary-gray);\n}\n\n#create-new-todo {\n  cursor: pointer;\n  width: 6rem;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  text-align: center;\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n}\n\n#todoModal {\n  border: none;\n  margin: auto;\n  width: 40rem;\n  aspect-ratio: 16/9;\n  border-radius: 1rem;\n}\n\n#todoModalForm {\n  height: 100%;\n}\n\n.todo-create-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: 0.5rem;\n  height: 100%;\n  padding: 1rem;\n}\n\n.todo-create-container-input {\n  font-size: 1rem;\n  width: 50%;\n  padding: 0.2rem;\n  border: none;\n  border-bottom: 1px solid var(--accent-color);\n  color: var(--secondary-gray);\n  outline: none;\n}\n\n.todo-create-container-input::placeholder {\n  color: var(--secondary-gray);\n  opacity: 0.6;\n  font-family: \"Inconsolata\", monospace;\n  font-style: italic;\n}\n\n#todo-create-container-priority{\n  width: 7rem;\n  outline: none;\n  border-radius: 1rem;\n  padding: 0.3rem 1rem;\n  background-color: #146cc4;\n  color: #f1f1f1;\n}\n\n.save-todo-button {\n  border: none;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  width: 5rem;\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n}\n\n.cancel-todo-button {\n  border: none;\n  border-radius: 1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--primary-white);\n  background-color: var(--primary-red);\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem;\n}\n\n.cancel-todo-button-icon {\n  height: 1rem;\n  width: 1rem;\n  filter: invert();\n  opacity: 0;\n}\n\n.cancel-todo-button-icon:hover {\n  opacity: 1;\n}\n.project-todoList-container{\n  display: grid;\n  row-gap: 1rem;\n}\n\n.todo-container {\n  display: grid;\n  grid-template-columns: 1fr 1rem 1rem;\n  grid-template-rows: 2rem 1fr;\n  column-gap: 2rem;\n  align-items: center;\n  width: 60%;\n  padding: 0 1rem;\n  border-radius: 0 1rem 1rem 0;\n  box-shadow: #959da533 0px 8px 24px;\n  border-left: 3px solid var(--priority-color);\n}\n\n.todo-container[data-priority=\"low\"] {\n  --priority-color: green;\n}\n.todo-container[data-priority=\"medium\"] {\n  --priority-color: yellow;\n}\n.todo-container[data-priority=\"high\"] {\n  --priority-color: orange;\n}\n.todo-container[data-priority=\"critical\"] {\n  --priority-color: red;\n}\n\n.todo-container-name {\n  color: var(--primary-red);\n}\n.todo-container-description {\n  grid-column: 1/span 3;\n  text-align: justify;\n  color: var(--primary-red);\n  height: 0;\n  overflow: hidden;\n  transition: 0.2s ease-out;\n  /* background-color: #f1f1f1; */\n}\n\n.todo-description-hidden{\n  height: 0;\n}\n.todo-description-expanded{\n  padding: 1rem;\n  height: max-content;\n}\n\n.todo-container-expand-button{\n  justify-self: end;\n}\n\n.todo-container-delete-button {\n  border: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisplayController)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");




const list = new _projectList__WEBPACK_IMPORTED_MODULE_2__["default"]();

class DisplayController {
  static loadHomePage() {
    this.openProject(list.getProjectList()[0]);
    this.initProjectButtons();
  }

  static openProject(project) {
    this.loadProjectName(project);
    this.loadProjectDescription(project);    
    this.loadProjectTodoList(project);
  }
  
  static loadProjectName(project) {
    document.querySelector('.project-name').textContent = project.getName();
  }
  
  static loadProjectDescription(project) {
    document.querySelector('.project-description').textContent = project.getDescription();
  }

  static loadProjectTodoList(project) {
    const todoListContainer = document.querySelector('.project-todoList-container');
    todoListContainer.textContent = '';
    project.getTodoList().forEach((todo) => {
      const todoName = document.createElement('div');
      const deleteButton = document.createElement('img');
      const expandButton = document.createElement('img');
      const todoDescription = document.createElement('div');
      const todoContainer = document.createElement('div');

      todoName.classList.add('todo-container-name');
      todoDescription.classList.add('todo-container-description');
      expandButton.classList.add('todo-container-expand-button');
      deleteButton.classList.add('todo-container-delete-button');
      todoContainer.classList.add('todo-container');
      todoContainer.dataset.priority = todo.getPriority();

      todoName.textContent = todo.getName();
      deleteButton.src = './img/delete-icon.svg';
      expandButton.src = './img/expand-more-icon.svg';
      todoDescription.textContent = todo.getDescription();

      expandButton.addEventListener('click',DisplayController.handleExpandTodoButton);
      deleteButton.addEventListener('click', DisplayController.handleDeleteTodoButton);
  
      todoContainer.append(todoName,deleteButton,expandButton,todoDescription);
      todoListContainer.append(todoContainer);
    });
  }

  static handleExpandTodoButton() {
    const todoDescription = this.nextElementSibling;
    if (todoDescription.classList.contains('todo-description-expanded')){
      todoDescription.classList.remove('todo-description-expanded');
      todoDescription.classList.add('todo-description-hidden');
    } else {
      todoDescription.classList.remove('todo-description-hidden');
      todoDescription.classList.add('todo-description-expanded');
    } 
  }


  static initProjectButtons() {
    const projectButtons = document.querySelectorAll('.project-button');
    const newProjectButton = document.querySelector('#create-new-project');
    const newTodoButton = document.querySelector('.new-todo');

    projectButtons.forEach((projectButton) => projectButton.addEventListener('click',DisplayController.handleProjectButtons));
    newProjectButton.addEventListener('click', DisplayController.createNewProject);
    newTodoButton.addEventListener('click', DisplayController.createNewTodo);
  }

  static handleProjectButtons() {
    DisplayController.openProject(list.getProject(this.textContent));
  }
  
  static createNewProject() {
    const existingProjectCreateContainer = document.querySelector('.project-create-container');
  
    if (!existingProjectCreateContainer) {
      const projectContainerInput = document.createElement('input');
      const saveProjectButton = document.createElement('button');
      const cancelProjectButton = document.createElement('button');
      const projectContainerDiv = document.createElement('div');
      
      projectContainerInput.type = 'text';
      saveProjectButton.textContent = '✓';
      cancelProjectButton.textContent = 'x';
      projectContainerInput.classList.add('project-container-input');
      saveProjectButton.classList.add('project-container-save-button');
      cancelProjectButton.classList.add('project-container-cancel-button');
      projectContainerDiv.classList.add('project-create-container');
      projectContainerDiv.append(projectContainerInput, saveProjectButton, cancelProjectButton);
      document.getElementById('projects-container').appendChild(projectContainerDiv);    
      projectContainerInput.focus();
      
      saveProjectButton.addEventListener('click', DisplayController.handleSaveProjectButton);
      
      cancelProjectButton.addEventListener('click', function() {
        projectContainerDiv.remove();
      }); 
    } else {
      existingProjectCreateContainer.children[0].focus();
    }
  }
  
  static handleSaveProjectButton() {
    const projectContainerDiv = document.querySelector('.project-create-container');
    const projectName = document.querySelector('.project-container-input').value;
    const outputDiv = document.createElement('div');

    if (projectName) {
      outputDiv.textContent = projectName;
      projectContainerDiv.replaceWith(outputDiv);
      outputDiv.className = 'sidebar-user-project project-button';
      outputDiv.addEventListener('click', DisplayController.handleProjectButtons);
      list.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectName));
      DisplayController.openProject(list.getProject(projectName));
    }
  }

  static createNewTodo() {
    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = document.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = document.querySelector('#todo-create-container-description');
    const saveTodoButton = document.querySelector('.save-todo-button');
    const cancelTodoButton = document.querySelector('.cancel-todo-button');
    todoCreateContainerName.focus();
    todoModal.showModal();
    
    saveTodoButton.addEventListener('click', DisplayController.handleSaveTodoButton);
    
    cancelTodoButton.addEventListener('click', function () {
      todoCreateContainerName.value = '';
      todoCreateContainerDescription.value = '';
      todoModal.close();
    });
  }
  
  static handleSaveTodoButton() {
    const todoCreateContainerName = document.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = document.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = document.querySelector('#todo-create-container-priority');
    
    if (todoCreateContainerName.value) {
      todoModal.close();
      list.getCurrentProject().addTodo(todoCreateContainerName.value);
      list.getCurrentProject().getTodo(todoCreateContainerName.value).setDescription(todoCreateContainerDescription.value)
      list.getCurrentProject().getTodo(todoCreateContainerName.value).setPriority(todoCreateContainerPriority.value)
    }
    todoCreateContainerName.value = '';
    todoCreateContainerDescription.value = '';
    DisplayController.loadProjectTodoList(list.getCurrentProject());

  }

  static handleDeleteTodoButton() {
    list.getCurrentProject().removeTodo(this.parentNode.children[0].textContent);
    this.parentNode.remove();
    // DisplayController.openProject(list.getCurrentProject());
  }
}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");

class Project {
  constructor(name) {
    this.name = name;
    this.description = `Keep The talk and the slides simple: what are the three things about these that everyone should remember?`;
    this.todoList = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setTodoList(todoList) {
    this.todoList = todoList;
  }

  getTodoList() {
    return this.todoList;
  }

  addTodo(todoName) {
    this.todoList.push(new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](todoName));
  }

  removeTodo(todo) {
    this.setTodoList(this.todoList.filter(item => item !== this.getTodo(todo)));
  }

  getTodo(todoName) {
    return this.todoList.find((todo) => todo.getName() === todoName)
  }
}

/***/ }),

/***/ "./src/modules/projectList.js":
/*!************************************!*\
  !*** ./src/modules/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");


class ProjectList {
  constructor() {
    this.projectList = [];
    this.projectList.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'));
    this.projectList.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
    this.projectList.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('This Week'));
  }

  setProjectList(projectList) {
    this.projectList = projectList;
  }

  getProjectList() {
    return this.projectList;
  }

  addProject(project) {
    this.projectList.push(project);
  }

  getProject(projectName) {
    return this.projectList.find((project) => project.getName() === projectName);
  }

  getCurrentProject() {
    return this.getProject(document.querySelector('.project-name').textContent);
  }
}

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  setDescription(value) {
    this.description = value;
  }
  getDescription() {
    return this.description;
  }

  setDueDate(value) {
    this.dueDate = value;
  }
  getDueDate() {
    return this.dueDate;
  }

  setPriority(value) {
    this.priority = value;
  }
  getPriority() {
    return this.priority;
  }
}


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayController */ "./src/modules/displayController.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



_modules_displayController__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomePage();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSCxJQUFJLDJCQUEyQixJQUFJLGtCQUFrQjtBQUN6SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFB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Z0RBQU87QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E0RDtBQUN2Qzs7QUFFckIsa0VBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmNvbnNvbGF0YTp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1VYnVudHU6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1wcmltYXJ5LXdoaXRlOiAjZmZmZmZmO1xuICAtLWFjY2VudC1jb2xvcjogIzE0NmNjNDtcbiAgLS1wcmltYXJ5LWdyYXk6ICNmNGY0ZjQ7XG4gIC0tc2Vjb25kYXJ5LWdyYXk6ICM1MDUwNTA7XG4gIC0tcHJpbWFyeS1yZWQ6ICNmZjAwMDA7XG59XG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG59XG5cbi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ncmF5KTtcbn1cblxuLnByb2plY3RzIHtcbiAgbWFyZ2luOiA2LjVyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdC1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIgPiBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIgPiBidXR0b24ge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY3JlYXRlLW5ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMXJlbTtcbn1cblxuLmNyZWF0ZS1uZXctcHJvamVjdC1pY29uIHtcbiAgZmlsdGVyOiBpbnZlcnQoKTtcbn1cblxuLyogUHJvamVjdCBwYWdlICovXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBwYWRkaW5nOiA2cmVtIDE1cmVtIDByZW0gNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XG59XG5cbiNjcmVhdGUtbmV3LXRvZG8ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA2cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4jdG9kb01vZGFsIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MHJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4jdG9kb01vZGFsRm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ2FwOiAwLjVyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udG9kby1jcmVhdGUtY29udGFpbmVyLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGFcIiwgbW9ub3NwYWNlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbiN0b2RvLWNyZWF0ZS1jb250YWluZXItcHJpb3JpdHl7XG4gIHdpZHRoOiA3cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NmNjNDtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5zYXZlLXRvZG8tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogNXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xuICBib3R0b206IDFyZW07XG59XG5cbi5jYW5jZWwtdG9kby1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHdpZHRoOiAxLjFyZW07XG4gIGhlaWdodDogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC41cmVtO1xuICB0b3A6IDAuNXJlbTtcbn1cblxuLmNhbmNlbC10b2RvLWJ1dHRvbi1pY29uIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZmlsdGVyOiBpbnZlcnQoKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNhbmNlbC10b2RvLWJ1dHRvbi1pY29uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcntcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogMXJlbTtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMXJlbSAxcmVtO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgMXJlbSAxcmVtIDA7XG4gIGJveC1zaGFkb3c6ICM5NTlkYTUzMyAwcHggOHB4IDI0cHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tcHJpb3JpdHktY29sb3IpO1xufVxuXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cImxvd1wiXSB7XG4gIC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xufVxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJtZWRpdW1cIl0ge1xuICAtLXByaW9yaXR5LWNvbG9yOiB5ZWxsb3c7XG59XG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cImhpZ2hcIl0ge1xuICAtLXByaW9yaXR5LWNvbG9yOiBvcmFuZ2U7XG59XG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cImNyaXRpY2FsXCJdIHtcbiAgLS1wcmlvcml0eS1jb2xvcjogcmVkO1xufVxuXG4udG9kby1jb250YWluZXItbmFtZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XG59XG4udG9kby1jb250YWluZXItZGVzY3JpcHRpb24ge1xuICBncmlkLWNvbHVtbjogMS9zcGFuIDM7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgKi9cbn1cblxuLnRvZG8tZGVzY3JpcHRpb24taGlkZGVue1xuICBoZWlnaHQ6IDA7XG59XG4udG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZHtcbiAgcGFkZGluZzogMXJlbTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cblxuLnRvZG8tY29udGFpbmVyLWV4cGFuZC1idXR0b257XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4udG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7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dGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PVVidW50dTp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tcHJpbWFyeS13aGl0ZTogI2ZmZmZmZjtcXG4gIC0tYWNjZW50LWNvbG9yOiAjMTQ2Y2M0O1xcbiAgLS1wcmltYXJ5LWdyYXk6ICNmNGY0ZjQ7XFxuICAtLXNlY29uZGFyeS1ncmF5OiAjNTA1MDUwO1xcbiAgLS1wcmltYXJ5LXJlZDogI2ZmMDAwMDtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JheSk7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW46IDYuNXJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA3MCU7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDFyZW07XFxuICBsZWZ0OiAxcmVtO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1wcm9qZWN0LWljb24ge1xcbiAgZmlsdGVyOiBpbnZlcnQoKTtcXG59XFxuXFxuLyogUHJvamVjdCBwYWdlICovXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICBwYWRkaW5nOiA2cmVtIDE1cmVtIDByZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcXG59XFxuXFxuI2NyZWF0ZS1uZXctdG9kbyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNnJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4jdG9kb01vZGFsIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbiN0b2RvTW9kYWxGb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdhcDogMC41cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5jb25zb2xhdGFcXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiN0b2RvLWNyZWF0ZS1jb250YWluZXItcHJpb3JpdHl7XFxuICB3aWR0aDogN3JlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2Y2M0O1xcbiAgY29sb3I6ICNmMWYxZjE7XFxufVxcblxcbi5zYXZlLXRvZG8tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aWR0aDogNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXJlbTtcXG4gIGJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmNhbmNlbC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEuMXJlbTtcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDAuNXJlbTtcXG4gIHRvcDogMC41cmVtO1xcbn1cXG5cXG4uY2FuY2VsLXRvZG8tYnV0dG9uLWljb24ge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDFyZW07XFxuICBmaWx0ZXI6IGludmVydCgpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNhbmNlbC10b2RvLWJ1dHRvbi1pY29uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFyZW0gMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xcbiAgYm94LXNoYWRvdzogIzk1OWRhNTMzIDBweCA4cHggMjRweDtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tcHJpb3JpdHktY29sb3IpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0ge1xcbiAgLS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XFxufVxcbi50b2RvLWNvbnRhaW5lcltkYXRhLXByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSB7XFxuICAtLXByaW9yaXR5LWNvbG9yOiB5ZWxsb3c7XFxufVxcbi50b2RvLWNvbnRhaW5lcltkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcbiAgLS1wcmlvcml0eS1jb2xvcjogb3JhbmdlO1xcbn1cXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cXFwiY3JpdGljYWxcXFwiXSB7XFxuICAtLXByaW9yaXR5LWNvbG9yOiByZWQ7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lci1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxufVxcbi50b2RvLWNvbnRhaW5lci1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDM7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgKi9cXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24taGlkZGVue1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4udG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG5cXG4udG9kby1jb250YWluZXItZXhwYW5kLWJ1dHRvbntcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuY29uc3QgbGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XG4gIHN0YXRpYyBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgdGhpcy5vcGVuUHJvamVjdChsaXN0LmdldFByb2plY3RMaXN0KClbMF0pO1xuICAgIHRoaXMuaW5pdFByb2plY3RCdXR0b25zKCk7XG4gIH1cblxuICBzdGF0aWMgb3BlblByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMubG9hZFByb2plY3ROYW1lKHByb2plY3QpO1xuICAgIHRoaXMubG9hZFByb2plY3REZXNjcmlwdGlvbihwcm9qZWN0KTsgICAgXG4gICAgdGhpcy5sb2FkUHJvamVjdFRvZG9MaXN0KHByb2plY3QpO1xuICB9XG4gIFxuICBzdGF0aWMgbG9hZFByb2plY3ROYW1lKHByb2plY3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgfVxuICBcbiAgc3RhdGljIGxvYWRQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XG4gIH1cblxuICBzdGF0aWMgbG9hZFByb2plY3RUb2RvTGlzdChwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvTGlzdC1jb250YWluZXInKTtcbiAgICB0b2RvTGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHByb2plY3QuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1uYW1lJyk7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZGVzY3JpcHRpb24nKTtcbiAgICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1leHBhbmQtYnV0dG9uJyk7XG4gICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbicpO1xuICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuICAgICAgdG9kb0NvbnRhaW5lci5kYXRhc2V0LnByaW9yaXR5ID0gdG9kby5nZXRQcmlvcml0eSgpO1xuXG4gICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0TmFtZSgpO1xuICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9ICcuL2ltZy9kZWxldGUtaWNvbi5zdmcnO1xuICAgICAgZXhwYW5kQnV0dG9uLnNyYyA9ICcuL2ltZy9leHBhbmQtbW9yZS1pY29uLnN2Zyc7XG4gICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRXhwYW5kVG9kb0J1dHRvbik7XG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVEZWxldGVUb2RvQnV0dG9uKTtcbiAgXG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvTmFtZSxkZWxldGVCdXR0b24sZXhwYW5kQnV0dG9uLHRvZG9EZXNjcmlwdGlvbik7XG4gICAgICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmQodG9kb0NvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRXhwYW5kVG9kb0J1dHRvbigpIHtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAodG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5jb250YWlucygndG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZCcpKXtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2RvLWRlc2NyaXB0aW9uLWV4cGFuZGVkJyk7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbi1oaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZG8tZGVzY3JpcHRpb24taGlkZGVuJyk7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZCcpO1xuICAgIH0gXG4gIH1cblxuXG4gIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1uZXctcHJvamVjdCcpO1xuICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKTtcblxuICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKHByb2plY3RCdXR0b24pID0+IHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVByb2plY3RCdXR0b25zKSk7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmNyZWF0ZU5ld1Byb2plY3QpO1xuICAgIG5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5jcmVhdGVOZXdUb2RvKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5vcGVuUHJvamVjdChsaXN0LmdldFByb2plY3QodGhpcy50ZXh0Q29udGVudCkpO1xuICB9XG4gIFxuICBzdGF0aWMgY3JlYXRlTmV3UHJvamVjdCgpIHtcbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3RDcmVhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jcmVhdGUtY29udGFpbmVyJyk7XG4gIFxuICAgIGlmICghZXhpc3RpbmdQcm9qZWN0Q3JlYXRlQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY29uc3Qgc2F2ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIFxuICAgICAgcHJvamVjdENvbnRhaW5lcklucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICBzYXZlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgY2FuY2VsUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgIHByb2plY3RDb250YWluZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lci1pbnB1dCcpO1xuICAgICAgc2F2ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXItc2F2ZS1idXR0b24nKTtcbiAgICAgIGNhbmNlbFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXItY2FuY2VsLWJ1dHRvbicpO1xuICAgICAgcHJvamVjdENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNyZWF0ZS1jb250YWluZXInKTtcbiAgICAgIHByb2plY3RDb250YWluZXJEaXYuYXBwZW5kKHByb2plY3RDb250YWluZXJJbnB1dCwgc2F2ZVByb2plY3RCdXR0b24sIGNhbmNlbFByb2plY3RCdXR0b24pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXJEaXYpOyAgICBcbiAgICAgIHByb2plY3RDb250YWluZXJJbnB1dC5mb2N1cygpO1xuICAgICAgXG4gICAgICBzYXZlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVNhdmVQcm9qZWN0QnV0dG9uKTtcbiAgICAgIFxuICAgICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyRGl2LnJlbW92ZSgpO1xuICAgICAgfSk7IFxuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZ1Byb2plY3RDcmVhdGVDb250YWluZXIuY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgXG4gIHN0YXRpYyBoYW5kbGVTYXZlUHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyLWlucHV0JykudmFsdWU7XG4gICAgY29uc3Qgb3V0cHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgcHJvamVjdENvbnRhaW5lckRpdi5yZXBsYWNlV2l0aChvdXRwdXREaXYpO1xuICAgICAgb3V0cHV0RGl2LmNsYXNzTmFtZSA9ICdzaWRlYmFyLXVzZXItcHJvamVjdCBwcm9qZWN0LWJ1dHRvbic7XG4gICAgICBvdXRwdXREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVQcm9qZWN0QnV0dG9ucyk7XG4gICAgICBsaXN0LmFkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICAgIERpc3BsYXlDb250cm9sbGVyLm9wZW5Qcm9qZWN0KGxpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOZXdUb2RvKCkge1xuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvTW9kYWwnKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItbmFtZScpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzYXZlVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLXRvZG8tYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdG9kby1idXR0b24nKTtcbiAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS5mb2N1cygpO1xuICAgIHRvZG9Nb2RhbC5zaG93TW9kYWwoKTtcbiAgICBcbiAgICBzYXZlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVNhdmVUb2RvQnV0dG9uKTtcbiAgICBcbiAgICBjYW5jZWxUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUgPSAnJztcbiAgICAgIHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgdG9kb01vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBoYW5kbGVTYXZlVG9kb0J1dHRvbigpIHtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItbmFtZScpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLXByaW9yaXR5Jyk7XG4gICAgXG4gICAgaWYgKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKSB7XG4gICAgICB0b2RvTW9kYWwuY2xvc2UoKTtcbiAgICAgIGxpc3QuZ2V0Q3VycmVudFByb2plY3QoKS5hZGRUb2RvKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKTtcbiAgICAgIGxpc3QuZ2V0Q3VycmVudFByb2plY3QoKS5nZXRUb2RvKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKS5zZXREZXNjcmlwdGlvbih0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUpXG4gICAgICBsaXN0LmdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VG9kbyh0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSkuc2V0UHJpb3JpdHkodG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5LnZhbHVlKVxuICAgIH1cbiAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSA9ICcnO1xuICAgIHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRQcm9qZWN0VG9kb0xpc3QobGlzdC5nZXRDdXJyZW50UHJvamVjdCgpKTtcblxuICB9XG5cbiAgc3RhdGljIGhhbmRsZURlbGV0ZVRvZG9CdXR0b24oKSB7XG4gICAgbGlzdC5nZXRDdXJyZW50UHJvamVjdCgpLnJlbW92ZVRvZG8odGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgLy8gRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QobGlzdC5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgfVxufSIsImltcG9ydCBUb0RvIGZyb20gXCIuL3RvZG9cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gYEtlZXAgVGhlIHRhbGsgYW5kIHRoZSBzbGlkZXMgc2ltcGxlOiB3aGF0IGFyZSB0aGUgdGhyZWUgdGhpbmdzIGFib3V0IHRoZXNlIHRoYXQgZXZlcnlvbmUgc2hvdWxkIHJlbWVtYmVyP2A7XG4gICAgdGhpcy50b2RvTGlzdCA9IFtdO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXRUb2RvTGlzdCh0b2RvTGlzdCkge1xuICAgIHRoaXMudG9kb0xpc3QgPSB0b2RvTGlzdDtcbiAgfVxuXG4gIGdldFRvZG9MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9MaXN0O1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvTmFtZSkge1xuICAgIHRoaXMudG9kb0xpc3QucHVzaChuZXcgVG9Ebyh0b2RvTmFtZSkpO1xuICB9XG5cbiAgcmVtb3ZlVG9kbyh0b2RvKSB7XG4gICAgdGhpcy5zZXRUb2RvTGlzdCh0aGlzLnRvZG9MaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMuZ2V0VG9kbyh0b2RvKSkpO1xuICB9XG5cbiAgZ2V0VG9kbyh0b2RvTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRvZG9MaXN0LmZpbmQoKHRvZG8pID0+IHRvZG8uZ2V0TmFtZSgpID09PSB0b2RvTmFtZSlcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KCdJbmJveCcpKTtcbiAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QoJ1RvZGF5JykpO1xuICAgIHRoaXMucHJvamVjdExpc3QucHVzaChuZXcgUHJvamVjdCgnVGhpcyBXZWVrJykpO1xuICB9XG5cbiAgc2V0UHJvamVjdExpc3QocHJvamVjdExpc3QpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0ID0gcHJvamVjdExpc3Q7XG4gIH1cblxuICBnZXRQcm9qZWN0TGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldER1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXRQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IERpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbkRpc3BsYXlDb250cm9sbGVyLmxvYWRIb21lUGFnZSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=