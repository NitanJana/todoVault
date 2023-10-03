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
      checkboxInput.checked = todo.getCheckStatus();
      checkboxInput.style.display = 'none';
      checkboxInput.id = todo.getName();
      checkboxInput.addEventListener('click', DisplayController.handleToggleCheck);

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

  static handleToggleCheck() {
    _storage__WEBPACK_IMPORTED_MODULE_4__["default"].todoToggleCheckStatus(DisplayController.getCurrentProject(), this.id);
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

  static todoToggleCheckStatus(project, todoName) {
    const projectList = Storage.getProjectList();
    let tempTodo = projectList.getProject(project.getName()).getTodo(todoName);
    tempTodo.toggleCheckStatus();
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
    this.check = false;
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

  getCheckStatus() {
    return this.check;
  }

  toggleCheckStatus() {
    this.check = !this.check;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSCxJQUFJLDJCQUEyQixJQUFJLGtCQUFrQjtBQUN6SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUs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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzVDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E0RDtBQUN2Qzs7QUFFckIsa0VBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL25vdGlmaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmNvbnNvbGF0YTp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1VYnVudHU6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1wcmltYXJ5LXdoaXRlOiAjZmZmZmZmO1xuICAtLWFjY2VudC1jb2xvcjogIzE0NmNjNDtcbiAgLS1wcmltYXJ5LWdyYXk6ICNmNGY0ZjQ7XG4gIC0tc2Vjb25kYXJ5LWdyYXk6ICM1MDUwNTA7XG4gIC0tcHJpbWFyeS1yZWQ6ICNmZjAwMDA7XG59XG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmh0bWwsYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufVxuXG4uc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JheSk7XG59XG5cbi5wcm9qZWN0cyB7XG4gIG1hcmdpbjogNnJlbSAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5wcm9qZWN0LWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciA+IGlucHV0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jcmVhdGUtbmV3LXByb2plY3QtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxcmVtO1xuICBsZWZ0OiAxcmVtO1xufVxuXG4uY3JlYXRlLW5ldy1wcm9qZWN0LWljb24ge1xuICBmaWx0ZXI6IGludmVydCgpO1xufVxuXG4vKiBQcm9qZWN0IHBhZ2UgKi9cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XG4gIHBhZGRpbmc6IDVyZW0gMCAwIDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xufVxuXG4jY3JlYXRlLW5ldy10b2RvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNnJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuI3RvZG9Nb2RhbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNDByZW07XG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuI3RvZG9Nb2RhbEZvcm0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ2FwOiAwLjVyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udG9kby1jcmVhdGUtY29udGFpbmVyLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGFcIiwgbW9ub3NwYWNlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbiN0b2RvLWNyZWF0ZS1jb250YWluZXItcHJpb3JpdHl7XG4gIHdpZHRoOiA3cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2Y2M0O1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLnNhdmUtdG9kby1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdpZHRoOiA1cmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG4gIGJvdHRvbTogMXJlbTtcbn1cblxuLmNhbmNlbC10b2RvLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgd2lkdGg6IDEuMXJlbTtcbiAgaGVpZ2h0OiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwLjVyZW07XG4gIHRvcDogMC41cmVtO1xufVxuXG4uY2FuY2VsLXRvZG8tYnV0dG9uLWljb24ge1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBmaWx0ZXI6IGludmVydCgpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FuY2VsLXRvZG8tYnV0dG9uLWljb246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVye1xuICBkaXNwbGF5OiBncmlkO1xuICByb3ctZ2FwOiAxcmVtO1xuICBtYXgtaGVpZ2h0OiA2NSU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ucHJvamVjdC10b2RvTGlzdC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xufVxuXG4udG9kby1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxcmVtIDFyZW0gMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgMXJlbSAxcmVtIDA7XG4gIGJveC1zaGFkb3c6ICM5NTlkYTUzMyAwcHggOHB4IDI0cHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tcHJpb3JpdHktY29sb3IpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLnRvZG8tY29udGFpbmVyOmhvdmVye1xuICBib3gtc2hhZG93OiAjMDAwMDAwNTkgMHB4IDVweCAxNXB4O1xufVxuXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cImxvd1wiXSB7XG4gIC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xufVxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJtZWRpdW1cIl0ge1xuICAtLXByaW9yaXR5LWNvbG9yOiB5ZWxsb3c7XG59XG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cImhpZ2hcIl0ge1xuICAtLXByaW9yaXR5LWNvbG9yOiBvcmFuZ2U7XG59XG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cImNyaXRpY2FsXCJdIHtcbiAgLS1wcmlvcml0eS1jb2xvcjogcmVkO1xufVxuXG4udG9kby1jb250YWluZXItbmFtZSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XG59XG4udG9kby1jb250YWluZXItZGVzY3JpcHRpb24ge1xuICBncmlkLWNvbHVtbjogMS9zcGFuIDM7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgKi9cbn1cblxuLnRvZG8tZGVzY3JpcHRpb24taGlkZGVue1xuICBoZWlnaHQ6IDA7XG59XG4udG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZHtcbiAgcGFkZGluZzogMXJlbTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cblxuLnRvZG8tY29udGFpbmVyLWV4cGFuZC1idXR0b257XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4udG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRvYXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnRvYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTs7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvdy10b2FzdCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUI4QzM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAzcHg7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogd2hpdGU7XG4gIHN0cm9rZS13aWR0aDogMjtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICBzdHJva2UtZGFzaGFycmF5OiAxNnB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM1MDZFRUM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjQjlCOEMzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsOmhvdmVyIHNwYW46Zmlyc3QtY2hpbGQge1xuICBib3JkZXItY29sb3I6ICMzYzUzYzc7XG59XG5cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQge1xuICBib3JkZXItY29sb3I6ICMzYzUzYzc7XG4gIGJhY2tncm91bmQ6ICMzYzUzYzc7XG4gIGFuaW1hdGlvbjogY2hlY2stMTUgMC42cyBlYXNlO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCBzdmcge1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjIpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICNCOUI4QzM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBjaGVjay0xNSB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG59XG5cbi50b2RvLWNvbnRhaW5lci1lZGl0LWJ1dHRvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvZG8tY29udGFpbmVyLWRlbGV0ZS1idXR0b257XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b2RvLWNvbnRhaW5lci1leHBhbmQtYnV0dG9ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtB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RSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmNvbnNvbGF0YTp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1VYnVudHU6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktd2hpdGU6ICNmZmZmZmY7XFxuICAtLWFjY2VudC1jb2xvcjogIzE0NmNjNDtcXG4gIC0tcHJpbWFyeS1ncmF5OiAjZjRmNGY0O1xcbiAgLS1zZWNvbmRhcnktZ3JheTogIzUwNTA1MDtcXG4gIC0tcHJpbWFyeS1yZWQ6ICNmZjAwMDA7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1sLGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyYXkpO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgbWFyZ2luOiA2cmVtIDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdGUtY29udGFpbmVyID4gaW5wdXQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jcmVhdGUtY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS1uZXctcHJvamVjdC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIGxlZnQ6IDFyZW07XFxufVxcblxcbi5jcmVhdGUtbmV3LXByb2plY3QtaWNvbiB7XFxuICBmaWx0ZXI6IGludmVydCgpO1xcbn1cXG5cXG4vKiBQcm9qZWN0IHBhZ2UgKi9cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIHBhZGRpbmc6IDVyZW0gMCAwIDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XFxufVxcblxcbiNjcmVhdGUtbmV3LXRvZG8ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDZyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuI3RvZG9Nb2RhbCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNDByZW07XFxuICBhc3BlY3QtcmF0aW86IDE2Lzk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4jdG9kb01vZGFsRm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWNyZWF0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b2RvLWNyZWF0ZS1jb250YWluZXItaW5wdXQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50b2RvLWNyZWF0ZS1jb250YWluZXItaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBmb250LWZhbWlseTogXFxcIkluY29uc29sYXRhXFxcIiwgbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jdG9kby1jcmVhdGUtY29udGFpbmVyLXByaW9yaXR5e1xcbiAgd2lkdGg6IDdyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NmNjNDtcXG4gIGNvbG9yOiAjZjFmMWYxO1xcbn1cXG5cXG4uc2F2ZS10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgd2lkdGg6IDVyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBib3R0b206IDFyZW07XFxufVxcblxcbi5jYW5jZWwtdG9kby1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHdpZHRoOiAxLjFyZW07XFxuICBoZWlnaHQ6IDEuMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwLjVyZW07XFxuICB0b3A6IDAuNXJlbTtcXG59XFxuXFxuLmNhbmNlbC10b2RvLWJ1dHRvbi1pY29uIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgZmlsdGVyOiBpbnZlcnQoKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jYW5jZWwtdG9kby1idXR0b24taWNvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJvamVjdC10b2RvTGlzdC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogMXJlbTtcXG4gIG1heC1oZWlnaHQ6IDY1JTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFyZW0gMXJlbSAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAycmVtIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMCAxcmVtIDFyZW0gMDtcXG4gIGJveC1zaGFkb3c6ICM5NTlkYTUzMyAwcHggOHB4IDI0cHg7XFxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXByaW9yaXR5LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xcbn1cXG5cXG4udG9kby1jb250YWluZXI6aG92ZXJ7XFxuICBib3gtc2hhZG93OiAjMDAwMDAwNTkgMHB4IDVweCAxNXB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0ge1xcbiAgLS1wcmlvcml0eS1jb2xvcjogZ3JlZW47XFxufVxcbi50b2RvLWNvbnRhaW5lcltkYXRhLXByaW9yaXR5PVxcXCJtZWRpdW1cXFwiXSB7XFxuICAtLXByaW9yaXR5LWNvbG9yOiB5ZWxsb3c7XFxufVxcbi50b2RvLWNvbnRhaW5lcltkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcbiAgLS1wcmlvcml0eS1jb2xvcjogb3JhbmdlO1xcbn1cXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cXFwiY3JpdGljYWxcXFwiXSB7XFxuICAtLXByaW9yaXR5LWNvbG9yOiByZWQ7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lci1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxufVxcbi50b2RvLWNvbnRhaW5lci1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMS9zcGFuIDM7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktcmVkKTtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgKi9cXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24taGlkZGVue1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4udG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG5cXG4udG9kby1jb250YWluZXItZXhwYW5kLWJ1dHRvbntcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4udG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2FzdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG4udG9hc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTs7XFxuICBjb2xvcjogIzMzMztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zaG93LXRvYXN0IHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUI4QzM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogM3B4O1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogd2hpdGU7XFxuICBzdHJva2Utd2lkdGg6IDI7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTZweDtcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxNnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICM1MDZFRUM7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjQjlCOEMzO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbDpob3ZlciBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1jb2xvcjogIzNjNTNjNztcXG59XFxuXFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItY29sb3I6ICMzYzUzYzc7XFxuICBiYWNrZ3JvdW5kOiAjM2M1M2M3O1xcbiAgYW5pbWF0aW9uOiBjaGVjay0xNSAwLjZzIGVhc2U7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQgc3ZnIHtcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIuMik7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkIHtcXG4gIGNvbG9yOiAjQjlCOEMzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuQGtleWZyYW1lcyBjaGVjay0xNSB7XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICB9XFxufVxcblxcbi50b2RvLWNvbnRhaW5lci1lZGl0LWJ1dHRvbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvZG8tY29udGFpbmVyLWRlbGV0ZS1idXR0b257XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2RvLWNvbnRhaW5lci1leHBhbmQtYnV0dG9ue1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9ub3RpZmljYXRpb25Db250cm9sbGVyXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlDb250cm9sbGVyIHtcbiAgc3RhdGljIGN1cnJlbnRUb2RvID0gbnVsbDtcbiAgc3RhdGljIGxvYWRIb21lUGFnZSgpIHtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5sb2FkUHJvamVjdHMoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5vcGVuUHJvamVjdChTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZ2V0UHJvamVjdHMoKVswXSk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIuaW5pdFByb2plY3RCdXR0b25zKCk7XG4gIH1cblxuICBzdGF0aWMgbG9hZFByb2plY3RzKCkge1xuICAgIFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+RGlzcGxheUNvbnRyb2xsZXIuYWRkUHJvamVjdEJ1dHRvbnMocHJvamVjdC5nZXROYW1lKCkpKTtcbiAgfVxuXG4gIHN0YXRpYyBvcGVuUHJvamVjdChwcm9qZWN0KSB7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIubG9hZFByb2plY3ROYW1lKHByb2plY3QpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdCk7ICAgIFxuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRQcm9qZWN0VG9kb0xpc3QocHJvamVjdCk7XG4gIH1cbiAgXG4gIHN0YXRpYyBsb2FkUHJvamVjdE5hbWUocHJvamVjdCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICB9XG4gIFxuICBzdGF0aWMgbG9hZFByb2plY3REZXNjcmlwdGlvbihwcm9qZWN0KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkUHJvamVjdFRvZG9MaXN0KHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcicpO1xuICAgIHRvZG9MaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgcHJvamVjdC5nZXRUb2RvTGlzdCgpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgb3V0ZXIgZGl2IGVsZW1lbnRcbiAgICAgIHZhciBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNoZWNrYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC13cmFwcGVyJyk7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZWxlbWVudFxuICAgICAgdmFyIGNoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY2hlY2tib3hJbnB1dC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1pbnB1dCcpO1xuICAgICAgY2hlY2tib3hJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IHRvZG8uZ2V0Q2hlY2tTdGF0dXMoKTtcbiAgICAgIGNoZWNrYm94SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNoZWNrYm94SW5wdXQuaWQgPSB0b2RvLmdldE5hbWUoKTtcbiAgICAgIGNoZWNrYm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVUb2dnbGVDaGVjayk7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgbGFiZWwgZWxlbWVudFxuICAgICAgdmFyIGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1sYWJlbCcpO1xuICAgICAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRvZG8uZ2V0TmFtZSgpKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBmaXJzdCBzcGFuIGVsZW1lbnQgaW5zaWRlIHRoZSBsYWJlbFxuICAgICAgdmFyIGNoZWNrYm94U3ZnV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBzdmcgZWxlbWVudCBpbnNpZGUgdGhlIGZpcnN0IHNwYW5cbiAgICAgIHZhciBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTJweCcpO1xuICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc5cHgnKTtcbiAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAxMiA5Jyk7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgcG9seWxpbmUgZWxlbWVudCBpbnNpZGUgdGhlIHN2Z1xuICAgICAgdmFyIHBvbHlsaW5lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicG9seWxpbmVcIik7XG4gICAgICBwb2x5bGluZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCAnMSA1IDQgOCAxMSAxJyk7XG5cbiAgICAgIC8vIEFwcGVuZCB0aGUgcG9seWxpbmUgdG8gdGhlIHN2ZywgYW5kIHN2ZyB0byB0aGUgZmlyc3Qgc3BhblxuICAgICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChwb2x5bGluZUVsZW1lbnQpO1xuICAgICAgY2hlY2tib3hTdmdXcmFwcGVyLmFwcGVuZENoaWxkKHN2Z0VsZW1lbnQpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIHNlY29uZCBzcGFuIGVsZW1lbnQgaW5zaWRlIHRoZSBsYWJlbFxuICAgICAgdmFyIHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItbmFtZScpO1xuICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSB0b2RvLmdldE5hbWUoKTtcblxuICAgICAgLy8gQXBwZW5kIHNwYW5zIHRvIHRoZSBsYWJlbFxuICAgICAgY2hlY2tib3hMYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveFN2Z1dyYXBwZXIpO1xuICAgICAgY2hlY2tib3hMYWJlbC5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG5cbiAgICAgIC8vIEFwcGVuZCBpbnB1dCBhbmQgbGFiZWwgdG8gdGhlIG91dGVyIGRpdlxuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94SW5wdXQpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpO1xuXG4gICAgICBcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZWRpdC1idXR0b24nKTtcbiAgICAgIGVkaXRCdXR0b24uc3JjID0gJy4vaW1nL2VkaXQtaWNvbi5zdmcnO1xuICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRWRpdFRvZG9Db250YWluZXJCdXR0b24pO1xuXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9uJyk7XG4gICAgICBkZWxldGVCdXR0b24uc3JjID0gJy4vaW1nL2RlbGV0ZS1pY29uLnN2Zyc7XG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVEZWxldGVUb2RvQnV0dG9uKTtcblxuICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZXhwYW5kLWJ1dHRvbicpO1xuICAgICAgZXhwYW5kQnV0dG9uLnNyYyA9ICcuL2ltZy9leHBhbmQtbW9yZS1pY29uLnN2Zyc7XG4gICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpc3BsYXlDb250cm9sbGVyLmhhbmRsZUV4cGFuZFRvZG9CdXR0b24pO1xuXG4gICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1kZXNjcmlwdGlvbicpO1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5nZXREZXNjcmlwdGlvbigpO1xuXG4gICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgXG4gICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgICB0b2RvQ29udGFpbmVyLmRhdGFzZXQucHJpb3JpdHkgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZChjaGVja2JveFdyYXBwZXIsZWRpdEJ1dHRvbixkZWxldGVCdXR0b24sZXhwYW5kQnV0dG9uLHRvZG9EZXNjcmlwdGlvbik7XG5cbiAgICAgIHRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVUb2dnbGVDaGVjaygpIHtcbiAgICBTdG9yYWdlLnRvZG9Ub2dnbGVDaGVja1N0YXR1cyhEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLCB0aGlzLmlkKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVFeHBhbmRUb2RvQnV0dG9uKCkge1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGlmICh0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWRlc2NyaXB0aW9uLWV4cGFuZGVkJykpe1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWQnKTtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgndG9kby1kZXNjcmlwdGlvbi1oaWRkZW4nKTtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uLWV4cGFuZGVkJyk7XG4gICAgfSBcbiAgfVxuXG5cbiAgc3RhdGljIGluaXRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLW5ldy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kbycpO1xuXG4gICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgocHJvamVjdEJ1dHRvbikgPT4gcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlUHJvamVjdEJ1dHRvbnMpKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlTmV3UHJvamVjdCk7XG4gICAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmNyZWF0ZU5ld1RvZG8pO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZVByb2plY3RCdXR0b25zKCkge1xuICAgIERpc3BsYXlDb250cm9sbGVyLm9wZW5Qcm9qZWN0KFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKS5nZXRQcm9qZWN0KHRoaXMudGV4dENvbnRlbnQpKTtcbiAgfVxuICBcbiAgc3RhdGljIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0Q3JlYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lcicpO1xuICBcbiAgICBpZiAoIWV4aXN0aW5nUHJvamVjdENyZWF0ZUNvbnRhaW5lcikge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNvbnN0IHNhdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBcbiAgICAgIHByb2plY3RDb250YWluZXJJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgc2F2ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICAgIGNhbmNlbFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICBwcm9qZWN0Q29udGFpbmVySW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXItaW5wdXQnKTtcbiAgICAgIHNhdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyLXNhdmUtYnV0dG9uJyk7XG4gICAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyLWNhbmNlbC1idXR0b24nKTtcbiAgICAgIHByb2plY3RDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jcmVhdGUtY29udGFpbmVyJyk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyRGl2LmFwcGVuZChwcm9qZWN0Q29udGFpbmVySW5wdXQsIHNhdmVQcm9qZWN0QnV0dG9uLCBjYW5jZWxQcm9qZWN0QnV0dG9uKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1jb250YWluZXInKS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyRGl2KTsgICAgXG4gICAgICBwcm9qZWN0Q29udGFpbmVySW5wdXQuZm9jdXMoKTtcbiAgICAgIFxuICAgICAgc2F2ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVTYXZlUHJvamVjdEJ1dHRvbik7XG4gICAgICBcbiAgICAgIGNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lckRpdi5yZW1vdmUoKTtcbiAgICAgIH0pOyBcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmdQcm9qZWN0Q3JlYXRlQ29udGFpbmVyLmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIFxuICBzdGF0aWMgaGFuZGxlU2F2ZVByb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lci1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgIHByb2plY3RDb250YWluZXJEaXYucmVwbGFjZVdpdGgob3V0cHV0RGl2KTtcbiAgICAgIG91dHB1dERpdi5jbGFzc05hbWUgPSAnc2lkZWJhci11c2VyLXByb2plY3QgcHJvamVjdC1idXR0b24nO1xuICAgICAgb3V0cHV0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlUHJvamVjdEJ1dHRvbnMpO1xuICAgICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gICAgICBEaXNwbGF5Q29udHJvbGxlci5vcGVuUHJvamVjdChTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRQcm9qZWN0QnV0dG9ucyhwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG91dHB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIG91dHB1dERpdi5jbGFzc05hbWUgPSAnc2lkZWJhci11c2VyLXByb2plY3QgcHJvamVjdC1idXR0b24nO1xuICAgIG91dHB1dERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVByb2plY3RCdXR0b25zKTsgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG91dHB1dERpdik7IFxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5ld1RvZG8oKSB7XG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9Nb2RhbCcpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1uYW1lJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItcHJpb3JpdHknKTtcbiAgICBjb25zdCBzYXZlVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLXRvZG8tYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdG9kby1idXR0b24nKTtcbiAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS5mb2N1cygpO1xuICAgIHRvZG9Nb2RhbC5zaG93TW9kYWwoKTtcbiAgICBcbiAgICBzYXZlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlU2F2ZVRvZG9CdXR0b24pO1xuICAgIFxuICAgIGNhbmNlbFRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgIHRvZG9Nb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG4gIFxuICBzdGF0aWMgaGFuZGxlRWRpdFRvZG9Db250YWluZXJCdXR0b24oKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gRGlzcGxheUNvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IGN1cnJlbnRQcm9qZWN0LmdldFRvZG8odGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lci1uYW1lJykudGV4dENvbnRlbnQpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmN1cnJlbnRUb2RvID0gY3VycmVudFRvZG87XG4gICAgY29uc3QgdG9kb05hbWUgPSBjdXJyZW50VG9kby5nZXROYW1lKCk7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gY3VycmVudFRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBjdXJyZW50VG9kby5nZXRQcmlvcml0eSgpO1xuXG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9Nb2RhbCcpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJOYW1lID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItbmFtZScpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbiA9IHRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5ID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItcHJpb3JpdHknKTtcbiAgICBjb25zdCBzYXZlVG9kb0J1dHRvbiA9IHRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS10b2RvLWJ1dHRvbicpO1xuXG4gICAgdG9kb01vZGFsLnNob3dNb2RhbCgpO1xuICAgIHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlID0gdG9kb05hbWU7XG4gICAgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgIHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSA9IHRvZG9Qcmlvcml0eTtcbiAgICBcbiAgICBzYXZlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlU2F2ZVRvZG9CdXR0b24pO1xuICAgIFxuICB9XG4gIHN0YXRpYyBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICByZXR1cm4gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpLnRleHRDb250ZW50KTtcbiAgfVxuICBcbiAgc3RhdGljIGhhbmRsZVNhdmVUb2RvQnV0dG9uKGUpIHtcbiAgICBsZXQgY3VycmVudFRvZG8gPSBEaXNwbGF5Q29udHJvbGxlci5jdXJyZW50VG9kbztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9Nb2RhbCcpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJOYW1lID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItbmFtZScpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbiA9IHRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5ID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItcHJpb3JpdHknKTtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGlmICh0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgTm90aWZpY2F0aW9uQ29udHJvbGxlci5zaG93VG9hc3QoJ1RvZG8gbmFtZSBtdXN0IG5vdCBiZSBlbXB0eScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50VG9kbyA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3QuZ2V0VG9kbyh0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIE5vdGlmaWNhdGlvbkNvbnRyb2xsZXIuc2hvd1RvYXN0KCdUb2RvIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb0RvKCk7XG4gICAgICAgICAgdG9kby5zZXROYW1lKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKTtcbiAgICAgICAgICB0b2RvLnNldERlc2NyaXB0aW9uKHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSlcbiAgICAgICAgICB0b2RvLnNldFByaW9yaXR5KHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSlcbiAgICAgICAgICBTdG9yYWdlLmFkZFRvZG8oY3VycmVudFByb2plY3QsdG9kbyk7XG4gICAgICAgICAgdG9kb01vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50VG9kby5nZXROYW1lKCkgIT09IHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LmdldFRvZG8odG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgTm90aWZpY2F0aW9uQ29udHJvbGxlci5zaG93VG9hc3QoJ1RvZG8gbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFN0b3JhZ2UuZWRpdFRvZG8oY3VycmVudFByb2plY3QsY3VycmVudFRvZG8uZ2V0TmFtZSgpLHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlLHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSx0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUpO1xuICAgICAgICAgICAgdG9kb01vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgIERpc3BsYXlDb250cm9sbGVyLmN1cnJlbnRUb2RvID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgU3RvcmFnZS5lZGl0VG9kbyhjdXJyZW50UHJvamVjdCxjdXJyZW50VG9kby5nZXROYW1lKCksdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUsdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlLHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSk7XG4gICAgICAgICAgdG9kb01vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgICBEaXNwbGF5Q29udHJvbGxlci5jdXJyZW50VG9kbyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgRGlzcGxheUNvbnRyb2xsZXIubG9hZFByb2plY3RUb2RvTGlzdChEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVEZWxldGVUb2RvQnV0dG9uKCkge1xuICAgIFN0b3JhZ2UucmVtb3ZlVG9kbyhEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XG4gICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIC8vIERpc3BsYXlDb250cm9sbGVyLm9wZW5Qcm9qZWN0KERpc3BsYXlDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbkNvbnRyb2xsZXJ7XG4gIHN0YXRpYyBzaG93VG9hc3QobWVzc2FnZSkge1xuICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2FzdFwiKTtcbiAgICB0b2FzdC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgdG9hc3QuY2xhc3NMaXN0LmFkZChcInNob3ctdG9hc3RcIik7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdG9hc3QuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctdG9hc3RcIik7XG4gICAgfSwgMzAwMCk7IC8vIEhpZGUgYWZ0ZXIgMyBzZWNvbmRzXG59XG59IiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBgS2VlcCBUaGUgdGFsayBhbmQgdGhlIHNsaWRlcyBzaW1wbGU6IHdoYXQgYXJlIHRoZSB0aHJlZSB0aGluZ3MgYWJvdXQgdGhlc2UgdGhhdCBldmVyeW9uZSBzaG91bGQgcmVtZW1iZXI/YDtcbiAgICB0aGlzLnRvZG9MaXN0ID0gW107XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldFRvZG9MaXN0KHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IHRvZG9MaXN0O1xuICB9XG5cbiAgZ2V0VG9kb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0xpc3Q7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kbyk7XG4gIH1cblxuICByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnNldFRvZG9MaXN0KHRoaXMudG9kb0xpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcy5nZXRUb2RvKHRvZG8pKSk7XG4gIH1cblxuICBnZXRUb2RvKHRvZG9OYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0xpc3QuZmluZCgodG9kbykgPT4gdG9kby5nZXROYW1lKCkgPT09IHRvZG9OYW1lKTtcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdJbmJveCcpKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvZGF5JykpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVGhpcyBXZWVrJykpO1xuICB9XG5cbiAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9XG5cbiAgXG59IiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2V7XG4gIHN0YXRpYyBzYXZlUHJvamVjdExpc3QoZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgUHJvamVjdExpc3QoKSxcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RMaXN0JykpXG4gICAgKTtcbiAgICBwcm9qZWN0TGlzdC5zZXRQcm9qZWN0cyhcbiAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3RzKCkubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICk7XG4gICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNldFRvZG9MaXN0KHByb2plY3QuZ2V0VG9kb0xpc3QoKS5tYXAoKHRvZG8pID0+IE9iamVjdC5hc3NpZ24obmV3IFRvRG8oKSwgdG9kbykpKSk7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIHByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRvZG8ocHJvamVjdCwgdG9kbykge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIHByb2plY3RMaXN0LmdldFByb2plY3QocHJvamVjdC5nZXROYW1lKCkpLmFkZFRvZG8odG9kbyk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICB9XG4gIHN0YXRpYyByZW1vdmVUb2RvKHByb2plY3QsIHRvZG8pIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KHByb2plY3QuZ2V0TmFtZSgpKS5yZW1vdmVUb2RvKHRvZG8pO1xuICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcbiAgfVxuICBzdGF0aWMgZWRpdFRvZG8ocHJvamVjdCwgdG9kb05hbWUsbmV3TmFtZSxuZXdEZXNjcmlwdGlvbixuZXdQcmlvcml0eSkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIGxldCB0ZW1wVG9kbyA9IHByb2plY3RMaXN0LmdldFByb2plY3QocHJvamVjdC5nZXROYW1lKCkpLmdldFRvZG8odG9kb05hbWUpO1xuICAgIHRlbXBUb2RvLnNldE5hbWUobmV3TmFtZSk7XG4gICAgdGVtcFRvZG8uc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xuICAgIHRlbXBUb2RvLnNldFByaW9yaXR5KG5ld1ByaW9yaXR5KTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cblxuICBzdGF0aWMgdG9kb1RvZ2dsZUNoZWNrU3RhdHVzKHByb2plY3QsIHRvZG9OYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBTdG9yYWdlLmdldFByb2plY3RMaXN0KCk7XG4gICAgbGV0IHRlbXBUb2RvID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSkuZ2V0VG9kbyh0b2RvTmFtZSk7XG4gICAgdGVtcFRvZG8udG9nZ2xlQ2hlY2tTdGF0dXMoKTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jaGVjayA9IGZhbHNlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldER1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXRQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGdldENoZWNrU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrO1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2tTdGF0dXMoKSB7XG4gICAgdGhpcy5jaGVjayA9ICF0aGlzLmNoZWNrO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgRGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuRGlzcGxheUNvbnRyb2xsZXIubG9hZEhvbWVQYWdlKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==