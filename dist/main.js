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
html,body {
  height: 100%;
  width: 100%;
  overflow: hidden;
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
  margin: 6rem 2rem;
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
  padding: 5rem 0 0 4rem;
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
  position: relative;
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
  border: none;
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
  max-height: 65%;
  overflow-y: auto;
}
.project-todoList-container::-webkit-scrollbar {
  display: none; /* Adjust as needed */
}

.todo-container {
  display: grid;
  grid-template-columns: 1fr 1rem 1rem 1rem;
  grid-template-rows: 2rem 1fr;
  column-gap: 2rem;
  align-items: center;
  width: 60%;
  padding: 0.5rem 1rem;
  border-radius: 0 1rem 1rem 0;
  box-shadow: #959da533 0px 8px 24px;
  border-left: 3px solid var(--priority-color);
  transition: 1s ease-out;
}

.todo-container:hover{
  box-shadow: #00000059 0px 5px 15px;
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

.toast-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.toast {
  background-color: #f0ad4e;;
  color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.show-toast {
  opacity: 1;
}

.checkbox-wrapper .checkbox-label {
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}
.checkbox-wrapper .checkbox-label span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper .checkbox-label span:first-child {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #B9B8C3;
  transition: all 0.2s ease;
}
.checkbox-wrapper .checkbox-label span:first-child svg {
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 3px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper .checkbox-label span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #506EEC;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
  transition-delay: 0.2s;
}
.checkbox-wrapper .checkbox-label span:last-child {
  margin-left: 8px;
}
.checkbox-wrapper .checkbox-label span:last-child:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  height: 1px;
  width: 100%;
  background: #B9B8C3;
  transform-origin: 0 0;
  transform: scaleX(0);
}
.checkbox-wrapper .checkbox-label:hover span:first-child {
  border-color: #3c53c7;
}

.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child {
  border-color: #3c53c7;
  background: #3c53c7;
  animation: check-15 0.6s ease;
}
.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child svg {
  stroke-dashoffset: 0;
}
.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child:before {
  transform: scale(2.2);
  opacity: 0;
  transition: all 0.6s ease;
}
.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:last-child {
  color: #B9B8C3;
  transition: all 0.3s ease;
}
.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:last-child:after {
  transform: scaleX(1);
  transition: all 0.3s ease;
}

@keyframes check-15 {
  50% {
    transform: scale(1.2);
  }
}

.todo-container-edit-button{
  cursor: pointer;
}
.todo-container-delete-button{
  cursor: pointer;
}
.todo-container-expand-button{
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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;AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,+BAA+B;AACjC;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB;EACzB,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,UAAU;EACV,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;EACtB,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,qBAAqB;EACrB,oBAAoB;AACtB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,oBAAoB;AACtB;AACA;EACE,qBAAqB;EACrB,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&family=Ubuntu:wght@400;500;700&display=swap\");\n\n:root {\n  --primary-white: #ffffff;\n  --accent-color: #146cc4;\n  --primary-gray: #f4f4f4;\n  --secondary-gray: #505050;\n  --primary-red: #ff0000;\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml,body {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\nbody {\n  font-family: \"Ubuntu\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.sidebar {\n  background-color: var(--primary-gray);\n}\n\n.projects {\n  margin: 6rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.project-button {\n  cursor: pointer;\n}\n\n.project-create-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.project-create-container > input {\n  font-size: 1rem;\n  width: 70%;\n  padding: 0.2rem;\n  border: none;\n  color: var(--secondary-gray);\n  outline: none;\n}\n\n.project-create-container > button {\n  width: 1.5rem;\n  height: 1.5rem;\n  border: none;\n}\n\n.create-new-project-button {\n  border: none;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 2rem;\n  background-color: var(--accent-color);\n  cursor: pointer;\n  position: fixed;\n  bottom: 1rem;\n  left: 1rem;\n}\n\n.create-new-project-icon {\n  filter: invert();\n}\n\n/* Project page */\n.main {\n  background-color: var(--primary-white);\n  padding: 5rem 0 0 4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.project-name {\n  font-size: 2rem;\n  font-weight: 500;\n  color: var(--accent-color);\n}\n\n.project-description {\n  font-size: 1.05rem;\n  color: var(--secondary-gray);\n}\n\n#create-new-todo {\n  cursor: pointer;\n  width: 6rem;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  text-align: center;\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n}\n\n#todoModal {\n  border: none;\n  margin: auto;\n  width: 40rem;\n  aspect-ratio: 16/9;\n  border-radius: 1rem;\n}\n\n#todoModalForm {\n  height: 100%;\n  position: relative;\n}\n\n.todo-create-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: 0.5rem;\n  height: 100%;\n  padding: 1rem;\n}\n\n.todo-create-container-input {\n  font-size: 1rem;\n  width: 50%;\n  padding: 0.2rem;\n  border: none;\n  border-bottom: 1px solid var(--accent-color);\n  color: var(--secondary-gray);\n  outline: none;\n}\n\n.todo-create-container-input::placeholder {\n  color: var(--secondary-gray);\n  opacity: 0.6;\n  font-family: \"Inconsolata\", monospace;\n  font-style: italic;\n}\n\n#todo-create-container-priority{\n  width: 7rem;\n  outline: none;\n  border: none;\n  border-radius: 1rem;\n  padding: 0.3rem 1rem;\n  background-color: #146cc4;\n  color: #f1f1f1;\n}\n\n.save-todo-button {\n  border: none;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  width: 5rem;\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n}\n\n.cancel-todo-button {\n  border: none;\n  border-radius: 1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--primary-white);\n  background-color: var(--primary-red);\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem;\n}\n\n.cancel-todo-button-icon {\n  height: 1rem;\n  width: 1rem;\n  filter: invert();\n  opacity: 0;\n}\n\n.cancel-todo-button-icon:hover {\n  opacity: 1;\n}\n.project-todoList-container{\n  display: grid;\n  row-gap: 1rem;\n  max-height: 65%;\n  overflow-y: auto;\n}\n.project-todoList-container::-webkit-scrollbar {\n  display: none; /* Adjust as needed */\n}\n\n.todo-container {\n  display: grid;\n  grid-template-columns: 1fr 1rem 1rem 1rem;\n  grid-template-rows: 2rem 1fr;\n  column-gap: 2rem;\n  align-items: center;\n  width: 60%;\n  padding: 0.5rem 1rem;\n  border-radius: 0 1rem 1rem 0;\n  box-shadow: #959da533 0px 8px 24px;\n  border-left: 3px solid var(--priority-color);\n  transition: 1s ease-out;\n}\n\n.todo-container:hover{\n  box-shadow: #00000059 0px 5px 15px;\n}\n\n.todo-container[data-priority=\"low\"] {\n  --priority-color: green;\n}\n.todo-container[data-priority=\"medium\"] {\n  --priority-color: yellow;\n}\n.todo-container[data-priority=\"high\"] {\n  --priority-color: orange;\n}\n.todo-container[data-priority=\"critical\"] {\n  --priority-color: red;\n}\n\n.todo-container-name {\n  color: var(--primary-red);\n}\n.todo-container-description {\n  grid-column: 1/span 3;\n  text-align: justify;\n  color: var(--primary-red);\n  height: 0;\n  overflow: hidden;\n  transition: 0.2s ease-out;\n  /* background-color: #f1f1f1; */\n}\n\n.todo-description-hidden{\n  height: 0;\n}\n.todo-description-expanded{\n  padding: 1rem;\n  height: max-content;\n}\n\n.todo-container-expand-button{\n  justify-self: end;\n}\n\n.todo-container-delete-button {\n  border: none;\n}\n\n.toast-container {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.toast {\n  background-color: #f0ad4e;;\n  color: #333;\n  padding: 10px 20px;\n  border-radius: 5px;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.show-toast {\n  opacity: 1;\n}\n\n.checkbox-wrapper .checkbox-label {\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n}\n.checkbox-wrapper .checkbox-label span {\n  display: inline-block;\n  vertical-align: middle;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper .checkbox-label span:first-child {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  transform: scale(1);\n  vertical-align: middle;\n  border: 1px solid #B9B8C3;\n  transition: all 0.2s ease;\n}\n.checkbox-wrapper .checkbox-label span:first-child svg {\n  position: absolute;\n  z-index: 1;\n  top: 5px;\n  left: 3px;\n  fill: none;\n  stroke: white;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16px;\n  stroke-dashoffset: 16px;\n  transition: all 0.3s ease;\n  transition-delay: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper .checkbox-label span:first-child:before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #506EEC;\n  display: block;\n  transform: scale(0);\n  opacity: 1;\n  border-radius: 50%;\n  transition-delay: 0.2s;\n}\n.checkbox-wrapper .checkbox-label span:last-child {\n  margin-left: 8px;\n}\n.checkbox-wrapper .checkbox-label span:last-child:after {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  height: 1px;\n  width: 100%;\n  background: #B9B8C3;\n  transform-origin: 0 0;\n  transform: scaleX(0);\n}\n.checkbox-wrapper .checkbox-label:hover span:first-child {\n  border-color: #3c53c7;\n}\n\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child {\n  border-color: #3c53c7;\n  background: #3c53c7;\n  animation: check-15 0.6s ease;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child svg {\n  stroke-dashoffset: 0;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child:before {\n  transform: scale(2.2);\n  opacity: 0;\n  transition: all 0.6s ease;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:last-child {\n  color: #B9B8C3;\n  transition: all 0.3s ease;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:last-child:after {\n  transform: scaleX(1);\n  transition: all 0.3s ease;\n}\n\n@keyframes check-15 {\n  50% {\n    transform: scale(1.2);\n  }\n}\n\n.todo-container-edit-button{\n  cursor: pointer;\n}\n.todo-container-delete-button{\n  cursor: pointer;\n}\n.todo-container-expand-button{\n  cursor: pointer;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _notificationController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificationController */ "./src/modules/notificationController.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");






class DisplayController {
  static currentTodo = null;
  static loadHomePage() {
    DisplayController.loadProjects();
    DisplayController.openProject(_storage__WEBPACK_IMPORTED_MODULE_4__["default"].getProjectList().getProjects()[0]);
    DisplayController.initProjectButtons();
  }

  static loadProjects() {
    _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getProjectList().getProjects().forEach((project) =>DisplayController.addProjectButtons(project.getName()));
  }

  static openProject(project) {
    DisplayController.loadProjectName(project);
    DisplayController.loadProjectDescription(project);    
    DisplayController.loadProjectTodoList(project);
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
      // Create the outer div element
      var checkboxWrapper = document.createElement('div');
      checkboxWrapper.classList.add('checkbox-wrapper');

      // Create the input element
      var checkboxInput = document.createElement('input');
      checkboxInput.classList.add('checkbox-input');
      checkboxInput.type = 'checkbox';
      checkboxInput.style.display = 'none';
      checkboxInput.id = todo.getName();

      // Create the label element
      var checkboxLabel = document.createElement('label');
      checkboxLabel.classList.add('checkbox-label');
      checkboxLabel.setAttribute('for', todo.getName());

      // Create the first span element inside the label
      var checkboxSvgWrapper = document.createElement('span');

      // Create the svg element inside the first span
      var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.setAttribute('width', '12px');
      svgElement.setAttribute('height', '9px');
      svgElement.setAttribute('viewBox', '0 0 12 9');

      // Create the polyline element inside the svg
      var polylineElement = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      polylineElement.setAttribute('points', '1 5 4 8 11 1');

      // Append the polyline to the svg, and svg to the first span
      svgElement.appendChild(polylineElement);
      checkboxSvgWrapper.appendChild(svgElement);

      // Create the second span element inside the label
      var todoName = document.createElement('span');
      todoName.classList.add('todo-container-name');
      todoName.textContent = todo.getName();

      // Append spans to the label
      checkboxLabel.appendChild(checkboxSvgWrapper);
      checkboxLabel.appendChild(todoName);

      // Append input and label to the outer div
      checkboxWrapper.appendChild(checkboxInput);
      checkboxWrapper.appendChild(checkboxLabel);

      
      const editButton = document.createElement('img');
      editButton.classList.add('todo-container-edit-button');
      editButton.src = './img/edit-icon.svg';
      editButton.addEventListener('click',DisplayController.handleEditTodoContainerButton);

      const deleteButton = document.createElement('img');
      deleteButton.classList.add('todo-container-delete-button');
      deleteButton.src = './img/delete-icon.svg';
      deleteButton.addEventListener('click', DisplayController.handleDeleteTodoButton);

      const expandButton = document.createElement('img');
      expandButton.classList.add('todo-container-expand-button');
      expandButton.src = './img/expand-more-icon.svg';
      expandButton.addEventListener('click',DisplayController.handleExpandTodoButton);

      const todoDescription = document.createElement('div');
      todoDescription.classList.add('todo-container-description');
      todoDescription.textContent = todo.getDescription();

      const todoContainer = document.createElement('div');      
      todoContainer.classList.add('todo-container');
      todoContainer.dataset.priority = todo.getPriority();
      todoContainer.append(checkboxWrapper,editButton,deleteButton,expandButton,todoDescription);

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
    DisplayController.openProject(_storage__WEBPACK_IMPORTED_MODULE_4__["default"].getProjectList().getProject(this.textContent));
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
      _storage__WEBPACK_IMPORTED_MODULE_4__["default"].addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectName));
      DisplayController.openProject(_storage__WEBPACK_IMPORTED_MODULE_4__["default"].getProjectList().getProject(projectName));
    }
  }

  static addProjectButtons(projectName) {
    const outputDiv = document.createElement('div');
    outputDiv.textContent = projectName;
    outputDiv.className = 'sidebar-user-project project-button';
    outputDiv.addEventListener('click', DisplayController.handleProjectButtons); 
    document.getElementById('projects-container').appendChild(outputDiv); 
  }

  static createNewTodo() {
    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = document.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = document.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = document.querySelector('#todo-create-container-priority');
    const saveTodoButton = document.querySelector('.save-todo-button');
    const cancelTodoButton = document.querySelector('.cancel-todo-button');
    todoCreateContainerName.focus();
    todoModal.showModal();
    
    saveTodoButton.addEventListener('click',DisplayController.handleSaveTodoButton);
    
    cancelTodoButton.addEventListener('click', function () {
      todoCreateContainerName.value = '';
      todoCreateContainerDescription.value = '';
      todoCreateContainerPriority.value = 'low';
      todoModal.close();
    });
  }
  
  static handleEditTodoContainerButton() {
    let currentProject = DisplayController.getCurrentProject();
    const currentTodo = currentProject.getTodo(this.parentNode.querySelector('.todo-container-name').textContent);
    DisplayController.currentTodo = currentTodo;
    const todoName = currentTodo.getName();
    const todoDescription = currentTodo.getDescription();
    const todoPriority = currentTodo.getPriority();

    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = todoModal.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = todoModal.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = todoModal.querySelector('#todo-create-container-priority');
    const saveTodoButton = todoModal.querySelector('.save-todo-button');

    todoModal.showModal();
    todoCreateContainerName.value = todoName;
    todoCreateContainerDescription.value = todoDescription;
    todoCreateContainerPriority.value = todoPriority;
    
    saveTodoButton.addEventListener('click',DisplayController.handleSaveTodoButton);
    
  }
  static getCurrentProject() {
    return _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getProjectList().getProject(document.querySelector('.project-name').textContent);
  }
  
  static handleSaveTodoButton(e) {
    let currentTodo = DisplayController.currentTodo;
    e.preventDefault();
    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = todoModal.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = todoModal.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = todoModal.querySelector('#todo-create-container-priority');
    let currentProject = DisplayController.getCurrentProject();
    if (todoCreateContainerName.value === "") {
      _notificationController__WEBPACK_IMPORTED_MODULE_3__["default"].showToast('Todo name must not be empty');
    }
    else {
      if (currentTodo === null) {
        if (currentProject.getTodo(todoCreateContainerName.value) !== undefined) {
          _notificationController__WEBPACK_IMPORTED_MODULE_3__["default"].showToast('Todo name already exists');
        }
        else {
          let todo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]();
          todo.setName(todoCreateContainerName.value);
          todo.setDescription(todoCreateContainerDescription.value)
          todo.setPriority(todoCreateContainerPriority.value)
          _storage__WEBPACK_IMPORTED_MODULE_4__["default"].addTodo(currentProject,todo);
          todoModal.close();
          todoCreateContainerName.value = '';
          todoCreateContainerDescription.value = '';
          todoCreateContainerPriority.value = 'low';
        }
      }
      else {
        if (currentTodo.getName() !== todoCreateContainerName.value) {
          if (currentProject.getTodo(todoCreateContainerName.value) !== undefined) {
            
            _notificationController__WEBPACK_IMPORTED_MODULE_3__["default"].showToast('Todo name already exists');
          }
          else {
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].editTodo(currentProject,currentTodo.getName(),todoCreateContainerName.value,todoCreateContainerDescription.value,todoCreateContainerPriority.value);
            todoModal.close();
            todoCreateContainerName.value = '';
            todoCreateContainerDescription.value = '';
            todoCreateContainerPriority.value = 'low';
            DisplayController.currentTodo = null;
          }
        }
        else {
          _storage__WEBPACK_IMPORTED_MODULE_4__["default"].editTodo(currentProject,currentTodo.getName(),todoCreateContainerName.value,todoCreateContainerDescription.value,todoCreateContainerPriority.value);
          todoModal.close();
          todoCreateContainerName.value = '';
          todoCreateContainerDescription.value = '';
          todoCreateContainerPriority.value = 'low';
          DisplayController.currentTodo = null;
        }
      }
    }
    DisplayController.loadProjectTodoList(DisplayController.getCurrentProject());
  }

  static handleDeleteTodoButton() {
    _storage__WEBPACK_IMPORTED_MODULE_4__["default"].removeTodo(DisplayController.getCurrentProject(),this.parentNode.children[0].textContent);
    this.parentNode.remove();
    // DisplayController.openProject(DisplayController.getCurrentProject());
  }
}



/***/ }),

/***/ "./src/modules/notificationController.js":
/*!***********************************************!*\
  !*** ./src/modules/notificationController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationController)
/* harmony export */ });
class NotificationController{
  static showToast(message) {
    const toast = document.querySelector(".toast");
    toast.textContent = message;
    toast.classList.add("show-toast");

    setTimeout(function() {
      toast.classList.remove("show-toast");
    }, 3000); // Hide after 3 seconds
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

  addTodo(todo) {
    this.todoList.push(todo);
  }

  removeTodo(todo) {
    this.setTodoList(this.todoList.filter(item => item !== this.getTodo(todo)));
  }

  getTodo(todoName) {
    return this.todoList.find((todo) => todo.getName() === todoName);
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
    this.projects = [];
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'));
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('This Week'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  addProject(project) {
    this.projects.push(project);
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  
}

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/modules/projectList.js");




class Storage{
  static saveProjectList(data) {
    localStorage.setItem('ProjectList', JSON.stringify(data));
  }

  static getProjectList() {
    const projectList = Object.assign(
      new _projectList__WEBPACK_IMPORTED_MODULE_2__["default"](),
      JSON.parse(localStorage.getItem('ProjectList'))
    );
    projectList.setProjects(
      projectList.getProjects().map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](), project))
    );
    projectList.getProjects().forEach((project) => project.setTodoList(project.getTodoList().map((todo) => Object.assign(new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](), todo))));
    return projectList;
  }

  static addProject(project) {
    const projectList = Storage.getProjectList();
    projectList.addProject(project);
    Storage.saveProjectList(projectList);
  }

  static addTodo(project, todo) {
    const projectList = Storage.getProjectList();
    projectList.getProject(project.getName()).addTodo(todo);
    Storage.saveProjectList(projectList);
  }
  static removeTodo(project, todo) {
    const projectList = Storage.getProjectList();
    projectList.getProject(project.getName()).removeTodo(todo);
    Storage.saveProjectList(projectList);
  }
  static editTodo(project, todoName,newName,newDescription,newPriority) {
    const projectList = Storage.getProjectList();
    let tempTodo = projectList.getProject(project.getName()).getTodo(todoName);
    tempTodo.setName(newName);
    tempTodo.setDescription(newDescription);
    tempTodo.setPriority(newPriority);
    Storage.saveProjectList(projectList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSCxJQUFJLDJCQUEyQixJQUFJLGtCQUFrQjtBQUN6SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUs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QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjBCO0FBQ007QUFDUTtBQUNzQjtBQUM5Qjs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQU87QUFDekM7QUFDQTs7QUFFQTtBQUNBLElBQUksZ0RBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsZ0RBQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBNEQ7QUFDdkM7O0FBRXJCLGtFQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9ub3RpZmljYXRpb25Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5jb25zb2xhdGE6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9VWJ1bnR1OndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tcHJpbWFyeS13aGl0ZTogI2ZmZmZmZjtcbiAgLS1hY2NlbnQtY29sb3I6ICMxNDZjYzQ7XG4gIC0tcHJpbWFyeS1ncmF5OiAjZjRmNGY0O1xuICAtLXNlY29uZGFyeS1ncmF5OiAjNTA1MDUwO1xuICAtLXByaW1hcnktcmVkOiAjZmYwMDAwO1xufVxuXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5odG1sLGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn1cblxuLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyYXkpO1xufVxuXG4ucHJvamVjdHMge1xuICBtYXJnaW46IDZyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdC1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIgPiBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIgPiBidXR0b24ge1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY3JlYXRlLW5ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMXJlbTtcbn1cblxuLmNyZWF0ZS1uZXctcHJvamVjdC1pY29uIHtcbiAgZmlsdGVyOiBpbnZlcnQoKTtcbn1cblxuLyogUHJvamVjdCBwYWdlICovXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBwYWRkaW5nOiA1cmVtIDAgMCA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcbn1cblxuI2NyZWF0ZS1uZXctdG9kbyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDZyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbiN0b2RvTW9kYWwge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDQwcmVtO1xuICBhc3BlY3QtcmF0aW86IDE2Lzk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbiN0b2RvTW9kYWxGb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50b2RvLWNyZWF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdhcDogMC41cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi50b2RvLWNyZWF0ZS1jb250YWluZXItaW5wdXQge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4jdG9kby1jcmVhdGUtY29udGFpbmVyLXByaW9yaXR5e1xuICB3aWR0aDogN3JlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NmNjNDtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5zYXZlLXRvZG8tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogNXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xuICBib3R0b206IDFyZW07XG59XG5cbi5jYW5jZWwtdG9kby1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHdpZHRoOiAxLjFyZW07XG4gIGhlaWdodDogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC41cmVtO1xuICB0b3A6IDAuNXJlbTtcbn1cblxuLmNhbmNlbC10b2RvLWJ1dHRvbi1pY29uIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgZmlsdGVyOiBpbnZlcnQoKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNhbmNlbC10b2RvLWJ1dHRvbi1pY29uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcntcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogMXJlbTtcbiAgbWF4LWhlaWdodDogNjUlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMXJlbSAxcmVtIDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xuICBib3gtc2hhZG93OiAjOTU5ZGE1MzMgMHB4IDhweCAyNHB4O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXByaW9yaXR5LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi50b2RvLWNvbnRhaW5lcjpob3ZlcntcbiAgYm94LXNoYWRvdzogIzAwMDAwMDU5IDBweCA1cHggMTVweDtcbn1cblxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJsb3dcIl0ge1xuICAtLXByaW9yaXR5LWNvbG9yOiBncmVlbjtcbn1cbi50b2RvLWNvbnRhaW5lcltkYXRhLXByaW9yaXR5PVwibWVkaXVtXCJdIHtcbiAgLS1wcmlvcml0eS1jb2xvcjogeWVsbG93O1xufVxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJoaWdoXCJdIHtcbiAgLS1wcmlvcml0eS1jb2xvcjogb3JhbmdlO1xufVxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJjcml0aWNhbFwiXSB7XG4gIC0tcHJpb3JpdHktY29sb3I6IHJlZDtcbn1cblxuLnRvZG8tY29udGFpbmVyLW5hbWUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xufVxuLnRvZG8tY29udGFpbmVyLWRlc2NyaXB0aW9uIHtcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAzO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7ICovXG59XG5cbi50b2RvLWRlc2NyaXB0aW9uLWhpZGRlbntcbiAgaGVpZ2h0OiAwO1xufVxuLnRvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWR7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG5cbi50b2RvLWNvbnRhaW5lci1leHBhbmQtYnV0dG9ue1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLnRvZG8tY29udGFpbmVyLWRlbGV0ZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi50b2FzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7O1xuICBjb2xvcjogIzMzMztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNob3ctdG9hc3Qge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjlCOEMzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDVweDtcbiAgbGVmdDogM3B4O1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IHdoaXRlO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTZweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNTA2RUVDO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0I5QjhDMztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbDpob3ZlciBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2M1M2M3O1xufVxuXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2M1M2M3O1xuICBiYWNrZ3JvdW5kOiAjM2M1M2M3O1xuICBhbmltYXRpb246IGNoZWNrLTE1IDAuNnMgZWFzZTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQgc3ZnIHtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMi4yKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjQjlCOEMzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgY2hlY2stMTUge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxufVxuXG4udG9kby1jb250YWluZXItZWRpdC1idXR0b257XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG9kby1jb250YWluZXItZXhwYW5kLWJ1dHRvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wi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QXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5jb25zb2xhdGE6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9VWJ1bnR1OndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1hY2NlbnQtY29sb3I6ICMxNDZjYzQ7XFxuICAtLXByaW1hcnktZ3JheTogI2Y0ZjRmNDtcXG4gIC0tc2Vjb25kYXJ5LWdyYXk6ICM1MDUwNTA7XFxuICAtLXByaW1hcnktcmVkOiAjZmYwMDAwO1xcbn1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaHRtbCxib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ncmF5KTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIG1hcmdpbjogNnJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciA+IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA3MCU7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDFyZW07XFxuICBsZWZ0OiAxcmVtO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1wcm9qZWN0LWljb24ge1xcbiAgZmlsdGVyOiBpbnZlcnQoKTtcXG59XFxuXFxuLyogUHJvamVjdCBwYWdlICovXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICBwYWRkaW5nOiA1cmVtIDAgMCA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbn1cXG5cXG4jY3JlYXRlLW5ldy10b2RvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbiN0b2RvTW9kYWwge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuI3RvZG9Nb2RhbEZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1jcmVhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9kby1jcmVhdGUtY29udGFpbmVyLWlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby1jcmVhdGUtY29udGFpbmVyLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmNvbnNvbGF0YVxcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eXtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDZjYzQ7XFxuICBjb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLnNhdmUtdG9kby1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uY2FuY2VsLXRvZG8tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogMS4xcmVtO1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMC41cmVtO1xcbiAgdG9wOiAwLjVyZW07XFxufVxcblxcbi5jYW5jZWwtdG9kby1idXR0b24taWNvbiB7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGZpbHRlcjogaW52ZXJ0KCk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY2FuY2VsLXRvZG8tYnV0dG9uLWljb246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDFyZW07XFxuICBtYXgtaGVpZ2h0OiA2NSU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ucHJvamVjdC10b2RvTGlzdC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxcmVtIDFyZW0gMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMnJlbSAxZnI7XFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMXJlbSAxcmVtIDA7XFxuICBib3gtc2hhZG93OiAjOTU5ZGE1MzMgMHB4IDhweCAyNHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyOmhvdmVye1xcbiAgYm94LXNoYWRvdzogIzAwMDAwMDU5IDBweCA1cHggMTVweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdIHtcXG4gIC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xcbn1cXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cXFwibWVkaXVtXFxcIl0ge1xcbiAgLS1wcmlvcml0eS1jb2xvcjogeWVsbG93O1xcbn1cXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdIHtcXG4gIC0tcHJpb3JpdHktY29sb3I6IG9yYW5nZTtcXG59XFxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XFxcImNyaXRpY2FsXFxcIl0ge1xcbiAgLS1wcmlvcml0eS1jb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1jb250YWluZXItbmFtZSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbn1cXG4udG9kby1jb250YWluZXItZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAzO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxuICBoZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7ICovXFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uLWhpZGRlbntcXG4gIGhlaWdodDogMDtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWR7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyLWV4cGFuZC1idXR0b257XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyLWRlbGV0ZS1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9hc3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuLnRvYXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7O1xcbiAgY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2hvdy10b2FzdCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjQjlCOEMzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQgc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDNweDtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IHdoaXRlO1xcbiAgc3Ryb2tlLXdpZHRoOiAyO1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE2cHg7XFxuICBzdHJva2UtZGFzaG9mZnNldDogMTZweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjNTA2RUVDO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI0I5QjhDMztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWw6aG92ZXIgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItY29sb3I6ICMzYzUzYzc7XFxufVxcblxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWNvbG9yOiAjM2M1M2M3O1xcbiAgYmFja2dyb3VuZDogIzNjNTNjNztcXG4gIGFuaW1hdGlvbjogY2hlY2stMTUgMC42cyBlYXNlO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHN2ZyB7XFxuICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjIpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46bGFzdC1jaGlsZCB7XFxuICBjb2xvcjogI0I5QjhDMztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46bGFzdC1jaGlsZDphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hlY2stMTUge1xcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgfVxcbn1cXG5cXG4udG9kby1jb250YWluZXItZWRpdC1idXR0b257XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9ue1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9kby1jb250YWluZXItZXhwYW5kLWJ1dHRvbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUb0RvIGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vbm90aWZpY2F0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XG4gIHN0YXRpYyBjdXJyZW50VG9kbyA9IG51bGw7XG4gIHN0YXRpYyBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIubG9hZFByb2plY3RzKCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3RzKClbMF0pO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmluaXRQcm9qZWN0QnV0dG9ucygpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRQcm9qZWN0cygpIHtcbiAgICBTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PkRpc3BsYXlDb250cm9sbGVyLmFkZFByb2plY3RCdXR0b25zKHByb2plY3QuZ2V0TmFtZSgpKSk7XG4gIH1cblxuICBzdGF0aWMgb3BlblByb2plY3QocHJvamVjdCkge1xuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRQcm9qZWN0TmFtZShwcm9qZWN0KTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5sb2FkUHJvamVjdERlc2NyaXB0aW9uKHByb2plY3QpOyAgICBcbiAgICBEaXNwbGF5Q29udHJvbGxlci5sb2FkUHJvamVjdFRvZG9MaXN0KHByb2plY3QpO1xuICB9XG4gIFxuICBzdGF0aWMgbG9hZFByb2plY3ROYW1lKHByb2plY3QpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgfVxuICBcbiAgc3RhdGljIGxvYWRQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XG4gIH1cblxuICBzdGF0aWMgbG9hZFByb2plY3RUb2RvTGlzdChwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvTGlzdC1jb250YWluZXInKTtcbiAgICB0b2RvTGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHByb2plY3QuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgdGhlIG91dGVyIGRpdiBlbGVtZW50XG4gICAgICB2YXIgY2hlY2tib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjaGVja2JveFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtd3JhcHBlcicpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgIHZhciBjaGVja2JveElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNoZWNrYm94SW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtaW5wdXQnKTtcbiAgICAgIGNoZWNrYm94SW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICBjaGVja2JveElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjaGVja2JveElucHV0LmlkID0gdG9kby5nZXROYW1lKCk7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgbGFiZWwgZWxlbWVudFxuICAgICAgdmFyIGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1sYWJlbCcpO1xuICAgICAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRvZG8uZ2V0TmFtZSgpKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBmaXJzdCBzcGFuIGVsZW1lbnQgaW5zaWRlIHRoZSBsYWJlbFxuICAgICAgdmFyIGNoZWNrYm94U3ZnV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBzdmcgZWxlbWVudCBpbnNpZGUgdGhlIGZpcnN0IHNwYW5cbiAgICAgIHZhciBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTJweCcpO1xuICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc5cHgnKTtcbiAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAxMiA5Jyk7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgcG9seWxpbmUgZWxlbWVudCBpbnNpZGUgdGhlIHN2Z1xuICAgICAgdmFyIHBvbHlsaW5lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicG9seWxpbmVcIik7XG4gICAgICBwb2x5bGluZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCAnMSA1IDQgOCAxMSAxJyk7XG5cbiAgICAgIC8vIEFwcGVuZCB0aGUgcG9seWxpbmUgdG8gdGhlIHN2ZywgYW5kIHN2ZyB0byB0aGUgZmlyc3Qgc3BhblxuICAgICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChwb2x5bGluZUVsZW1lbnQpO1xuICAgICAgY2hlY2tib3hTdmdXcmFwcGVyLmFwcGVuZENoaWxkKHN2Z0VsZW1lbnQpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIHNlY29uZCBzcGFuIGVsZW1lbnQgaW5zaWRlIHRoZSBsYWJlbFxuICAgICAgdmFyIHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItbmFtZScpO1xuICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSB0b2RvLmdldE5hbWUoKTtcblxuICAgICAgLy8gQXBwZW5kIHNwYW5zIHRvIHRoZSBsYWJlbFxuICAgICAgY2hlY2tib3hMYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveFN2Z1dyYXBwZXIpO1xuICAgICAgY2hlY2tib3hMYWJlbC5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG5cbiAgICAgIC8vIEFwcGVuZCBpbnB1dCBhbmQgbGFiZWwgdG8gdGhlIG91dGVyIGRpdlxuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94SW5wdXQpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpO1xuXG4gICAgICBcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZWRpdC1idXR0b24nKTtcbiAgICAgIGVkaXRCdXR0b24uc3JjID0gJy4vaW1nL2VkaXQtaWNvbi5zdmcnO1xuICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRWRpdFRvZG9Db250YWluZXJCdXR0b24pO1xuXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9uJyk7XG4gICAgICBkZWxldGVCdXR0b24uc3JjID0gJy4vaW1nL2RlbGV0ZS1pY29uLnN2Zyc7XG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVEZWxldGVUb2RvQnV0dG9uKTtcblxuICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZXhwYW5kLWJ1dHRvbicpO1xuICAgICAgZXhwYW5kQnV0dG9uLnNyYyA9ICcuL2ltZy9leHBhbmQtbW9yZS1pY29uLnN2Zyc7XG4gICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpc3BsYXlDb250cm9sbGVyLmhhbmRsZUV4cGFuZFRvZG9CdXR0b24pO1xuXG4gICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1kZXNjcmlwdGlvbicpO1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgXG4gICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgICB0b2RvQ29udGFpbmVyLmRhdGFzZXQucHJpb3JpdHkgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZChjaGVja2JveFdyYXBwZXIsZWRpdEJ1dHRvbixkZWxldGVCdXR0b24sZXhwYW5kQnV0dG9uLHRvZG9EZXNjcmlwdGlvbik7XG5cbiAgICAgIHRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgc3RhdGljIGhhbmRsZUV4cGFuZFRvZG9CdXR0b24oKSB7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWQnKSl7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgndG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZCcpO1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24taGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2RvLWRlc2NyaXB0aW9uLWhpZGRlbicpO1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWQnKTtcbiAgICB9IFxuICB9XG5cblxuICBzdGF0aWMgaW5pdFByb2plY3RCdXR0b25zKCkge1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtbmV3LXByb2plY3QnKTtcbiAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvJyk7XG5cbiAgICBwcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChwcm9qZWN0QnV0dG9uKSA9PiBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVQcm9qZWN0QnV0dG9ucykpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5jcmVhdGVOZXdQcm9qZWN0KTtcbiAgICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlTmV3VG9kbyk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3QodGhpcy50ZXh0Q29udGVudCkpO1xuICB9XG4gIFxuICBzdGF0aWMgY3JlYXRlTmV3UHJvamVjdCgpIHtcbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3RDcmVhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jcmVhdGUtY29udGFpbmVyJyk7XG4gIFxuICAgIGlmICghZXhpc3RpbmdQcm9qZWN0Q3JlYXRlQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY29uc3Qgc2F2ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIFxuICAgICAgcHJvamVjdENvbnRhaW5lcklucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICBzYXZlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgY2FuY2VsUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgIHByb2plY3RDb250YWluZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lci1pbnB1dCcpO1xuICAgICAgc2F2ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXItc2F2ZS1idXR0b24nKTtcbiAgICAgIGNhbmNlbFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXItY2FuY2VsLWJ1dHRvbicpO1xuICAgICAgcHJvamVjdENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNyZWF0ZS1jb250YWluZXInKTtcbiAgICAgIHByb2plY3RDb250YWluZXJEaXYuYXBwZW5kKHByb2plY3RDb250YWluZXJJbnB1dCwgc2F2ZVByb2plY3RCdXR0b24sIGNhbmNlbFByb2plY3RCdXR0b24pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXJEaXYpOyAgICBcbiAgICAgIHByb2plY3RDb250YWluZXJJbnB1dC5mb2N1cygpO1xuICAgICAgXG4gICAgICBzYXZlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVNhdmVQcm9qZWN0QnV0dG9uKTtcbiAgICAgIFxuICAgICAgY2FuY2VsUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyRGl2LnJlbW92ZSgpO1xuICAgICAgfSk7IFxuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZ1Byb2plY3RDcmVhdGVDb250YWluZXIuY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgXG4gIHN0YXRpYyBoYW5kbGVTYXZlUHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyLWlucHV0JykudmFsdWU7XG4gICAgY29uc3Qgb3V0cHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgcHJvamVjdENvbnRhaW5lckRpdi5yZXBsYWNlV2l0aChvdXRwdXREaXYpO1xuICAgICAgb3V0cHV0RGl2LmNsYXNzTmFtZSA9ICdzaWRlYmFyLXVzZXItcHJvamVjdCBwcm9qZWN0LWJ1dHRvbic7XG4gICAgICBvdXRwdXREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVQcm9qZWN0QnV0dG9ucyk7XG4gICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICAgIERpc3BsYXlDb250cm9sbGVyLm9wZW5Qcm9qZWN0KFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3RCdXR0b25zKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3Qgb3V0cHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgb3V0cHV0RGl2LmNsYXNzTmFtZSA9ICdzaWRlYmFyLXVzZXItcHJvamVjdCBwcm9qZWN0LWJ1dHRvbic7XG4gICAgb3V0cHV0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlUHJvamVjdEJ1dHRvbnMpOyBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQob3V0cHV0RGl2KTsgXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTmV3VG9kbygpIHtcbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb01vZGFsJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLW5hbWUnKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eScpO1xuICAgIGNvbnN0IHNhdmVUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtdG9kby1idXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC10b2RvLWJ1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVDb250YWluZXJOYW1lLmZvY3VzKCk7XG4gICAgdG9kb01vZGFsLnNob3dNb2RhbCgpO1xuICAgIFxuICAgIHNhdmVUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVTYXZlVG9kb0J1dHRvbik7XG4gICAgXG4gICAgY2FuY2VsVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgIHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgdG9kb01vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBoYW5kbGVFZGl0VG9kb0NvbnRhaW5lckJ1dHRvbigpIHtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gY3VycmVudFByb2plY3QuZ2V0VG9kbyh0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyLW5hbWUnKS50ZXh0Q29udGVudCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIuY3VycmVudFRvZG8gPSBjdXJyZW50VG9kbztcbiAgICBjb25zdCB0b2RvTmFtZSA9IGN1cnJlbnRUb2RvLmdldE5hbWUoKTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBjdXJyZW50VG9kby5nZXREZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGN1cnJlbnRUb2RvLmdldFByaW9yaXR5KCk7XG5cbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb01vZGFsJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUgPSB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1uYW1lJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkgPSB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eScpO1xuICAgIGNvbnN0IHNhdmVUb2RvQnV0dG9uID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLXRvZG8tYnV0dG9uJyk7XG5cbiAgICB0b2RvTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUgPSB0b2RvTmFtZTtcbiAgICB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUgPSB0b2RvRGVzY3JpcHRpb247XG4gICAgdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5LnZhbHVlID0gdG9kb1ByaW9yaXR5O1xuICAgIFxuICAgIHNhdmVUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVTYXZlVG9kb0J1dHRvbik7XG4gICAgXG4gIH1cbiAgc3RhdGljIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiBTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZ2V0UHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQpO1xuICB9XG4gIFxuICBzdGF0aWMgaGFuZGxlU2F2ZVRvZG9CdXR0b24oZSkge1xuICAgIGxldCBjdXJyZW50VG9kbyA9IERpc3BsYXlDb250cm9sbGVyLmN1cnJlbnRUb2RvO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb01vZGFsJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUgPSB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1uYW1lJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkgPSB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IERpc3BsYXlDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgaWYgKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBOb3RpZmljYXRpb25Db250cm9sbGVyLnNob3dUb2FzdCgnVG9kbyBuYW1lIG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGN1cnJlbnRUb2RvID09PSBudWxsKSB7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5nZXRUb2RvKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgTm90aWZpY2F0aW9uQ29udHJvbGxlci5zaG93VG9hc3QoJ1RvZG8gbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxldCB0b2RvID0gbmV3IFRvRG8oKTtcbiAgICAgICAgICB0b2RvLnNldE5hbWUodG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUpO1xuICAgICAgICAgIHRvZG8uc2V0RGVzY3JpcHRpb24odG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlKVxuICAgICAgICAgIHRvZG8uc2V0UHJpb3JpdHkodG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5LnZhbHVlKVxuICAgICAgICAgIFN0b3JhZ2UuYWRkVG9kbyhjdXJyZW50UHJvamVjdCx0b2RvKTtcbiAgICAgICAgICB0b2RvTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUb2RvLmdldE5hbWUoKSAhPT0gdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUpIHtcbiAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QuZ2V0VG9kbyh0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBOb3RpZmljYXRpb25Db250cm9sbGVyLnNob3dUb2FzdCgnVG9kbyBuYW1lIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgU3RvcmFnZS5lZGl0VG9kbyhjdXJyZW50UHJvamVjdCxjdXJyZW50VG9kby5nZXROYW1lKCksdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUsdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlLHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSk7XG4gICAgICAgICAgICB0b2RvTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgICAgRGlzcGxheUNvbnRyb2xsZXIuY3VycmVudFRvZG8gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBTdG9yYWdlLmVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0LGN1cnJlbnRUb2RvLmdldE5hbWUoKSx0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSx0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUsdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgICB0b2RvTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICAgIERpc3BsYXlDb250cm9sbGVyLmN1cnJlbnRUb2RvID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBEaXNwbGF5Q29udHJvbGxlci5sb2FkUHJvamVjdFRvZG9MaXN0KERpc3BsYXlDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZURlbGV0ZVRvZG9CdXR0b24oKSB7XG4gICAgU3RvcmFnZS5yZW1vdmVUb2RvKERpc3BsYXlDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCksdGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgLy8gRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QoRGlzcGxheUNvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uQ29udHJvbGxlcntcbiAgc3RhdGljIHNob3dUb2FzdChtZXNzYWdlKSB7XG4gICAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvYXN0XCIpO1xuICAgIHRvYXN0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB0b2FzdC5jbGFzc0xpc3QuYWRkKFwic2hvdy10b2FzdFwiKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0b2FzdC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy10b2FzdFwiKTtcbiAgICB9LCAzMDAwKTsgLy8gSGlkZSBhZnRlciAzIHNlY29uZHNcbn1cbn0iLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2RvXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGBLZWVwIFRoZSB0YWxrIGFuZCB0aGUgc2xpZGVzIHNpbXBsZTogd2hhdCBhcmUgdGhlIHRocmVlIHRoaW5ncyBhYm91dCB0aGVzZSB0aGF0IGV2ZXJ5b25lIHNob3VsZCByZW1lbWJlcj9gO1xuICAgIHRoaXMudG9kb0xpc3QgPSBbXTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0VG9kb0xpc3QodG9kb0xpc3QpIHtcbiAgICB0aGlzLnRvZG9MaXN0ID0gdG9kb0xpc3Q7XG4gIH1cblxuICBnZXRUb2RvTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvTGlzdDtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgfVxuXG4gIHJlbW92ZVRvZG8odG9kbykge1xuICAgIHRoaXMuc2V0VG9kb0xpc3QodGhpcy50b2RvTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0aGlzLmdldFRvZG8odG9kbykpKTtcbiAgfVxuXG4gIGdldFRvZG8odG9kb05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvTGlzdC5maW5kKCh0b2RvKSA9PiB0b2RvLmdldE5hbWUoKSA9PT0gdG9kb05hbWUpO1xuICB9XG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0luYm94JykpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVG9kYXknKSk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUaGlzIFdlZWsnKSk7XG4gIH1cblxuICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gIH1cblxuICBcbn0iLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZXtcbiAgc3RhdGljIHNhdmVQcm9qZWN0TGlzdChkYXRhKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgc3RhdGljIGdldFByb2plY3RMaXN0KCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBQcm9qZWN0TGlzdCgpLFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdExpc3QnKSlcbiAgICApO1xuICAgIHByb2plY3RMaXN0LnNldFByb2plY3RzKFxuICAgICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG4gICAgKTtcbiAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3Quc2V0VG9kb0xpc3QocHJvamVjdC5nZXRUb2RvTGlzdCgpLm1hcCgodG9kbykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVG9EbygpLCB0b2RvKSkpKTtcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBTdG9yYWdlLmdldFByb2plY3RMaXN0KCk7XG4gICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cblxuICBzdGF0aWMgYWRkVG9kbyhwcm9qZWN0LCB0b2RvKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBTdG9yYWdlLmdldFByb2plY3RMaXN0KCk7XG4gICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSkuYWRkVG9kbyh0b2RvKTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cbiAgc3RhdGljIHJlbW92ZVRvZG8ocHJvamVjdCwgdG9kbykge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIHByb2plY3RMaXN0LmdldFByb2plY3QocHJvamVjdC5nZXROYW1lKCkpLnJlbW92ZVRvZG8odG9kbyk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICB9XG4gIHN0YXRpYyBlZGl0VG9kbyhwcm9qZWN0LCB0b2RvTmFtZSxuZXdOYW1lLG5ld0Rlc2NyaXB0aW9uLG5ld1ByaW9yaXR5KSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBTdG9yYWdlLmdldFByb2plY3RMaXN0KCk7XG4gICAgbGV0IHRlbXBUb2RvID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSkuZ2V0VG9kbyh0b2RvTmFtZSk7XG4gICAgdGVtcFRvZG8uc2V0TmFtZShuZXdOYW1lKTtcbiAgICB0ZW1wVG9kby5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbik7XG4gICAgdGVtcFRvZG8uc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpO1xuICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXREdWVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0UHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBEaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5EaXNwbGF5Q29udHJvbGxlci5sb2FkSG9tZVBhZ2UoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9