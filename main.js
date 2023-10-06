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

/* Default Styles */
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
}
body {
  font-family: "Ubuntu", sans-serif;
  display: grid;
  grid-template-columns: 1fr 4fr;
}

/* Sidebar Styles */
.sidebar {
  background-color: var(--primary-gray);
}
.projects {
  margin: 6rem 0rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.sidebar-default-project:nth-child(3){
  padding-bottom: 1rem;
  border-bottom: 2px solid rgb(204, 204, 204);
}
.sidebar-project-button {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}
.sidebar-project-name{
  padding: 5px 10px;
  border-radius: 1rem;
  transition: all 0.5s ease;
}
.sidebar-project-name:hover{
  color: var(--primary-white);
  background-color: var(--accent-color);
}
.sidebar-project-name-selected{
  background-color: var(--accent-color);
  color: var(--primary-white);
}
.sidebar-project-delete-icon{
  opacity: 0;
  transition: 0.5s ease;
}
.sidebar-project-button:hover .sidebar-project-delete-icon{
  opacity: 1;
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

/* Project Page */
.main {
  background-color: var(--primary-white);
  margin: 5rem;
  margin-bottom: 1rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.project-name-container{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.project-name {
  font-size: 2rem;
  font-weight: 500;
  color: var(--accent-color);
  margin-right: 2rem;
  word-wrap: break-word;
  word-break: break-all;
  max-width: 70%;
}
.project-description {
  font-size: 1.05rem;
  color: var(--secondary-gray);
  word-wrap: break-word;
  word-break: break-all;
}
.project-buttons{
  align-self: flex-start;
  display: flex;
  gap: 1rem;
}
.project-edit-icon,.project-delete-icon,.project-edit-save-icon{
  cursor: pointer;
}
.editable {
  outline: none;
  width: fit-content;
  border-bottom: 2px dashed var(--accent-color);
}

/* New Todo Button */
#create-new-todo {
  cursor: pointer;
  width: 6rem;
  padding: 0.5rem;
  border-radius: 1rem;
  text-align: center;
  color: var(--primary-white);
  background-color: var(--accent-color);
}

/* Todo Modal */
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
  cursor: pointer;
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
  cursor: pointer;
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
  cursor: pointer;
}
.cancel-todo-button-icon {
  height: 1rem;
  width: 1rem;
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
  padding: 1rem 0;
  scrollbar-width: thin; /* Set the width of the scrollbar */
  scrollbar-color: transparent transparent;
}
.project-todoList-container:empty{
  max-height: 0;
  padding: 0;
  overflow: hidden;
}
.project-todoList-container::-webkit-scrollbar {
  display: none;
}
.project-todoList-container:hover::-webkit-scrollbar {
  display: none;
}

/* Todo Container */
.todo-container {
  display: grid;
  grid-template-columns: 1fr 1rem 1rem 1rem 1rem;
  grid-template-rows: min-content;
  column-gap: 1.6rem;
  align-items: center;
  width: 60%;
  padding: 0.5rem 1rem;
  border-radius: 0 1rem 1rem 0;
  cursor: move;
  box-shadow: #959da533 0px 8px 24px;
  border-left: 4px solid var(--priority-color);
  transition: 1s ease;
}
.todo-container:hover{
  box-shadow: #e7e2e259 0px 0px 15px 2px;
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
  color: var(--secondary-gray);
  font-size: 1rem;
}
.todo-container-description {
  grid-column: 1/span 5;
  text-align: justify;
  color: var(--secondary-gray);
  height: 0;
  overflow: hidden;
  transition: 0.2s ease-out;
}
.todo-description-hidden{
  height: 0;
}
.todo-description-expanded{
  padding: 1rem;
  height: max-content;
}
.todo-container-edit-button, .todo-container-delete-button,.todo-container-expand-button{
  cursor: pointer;
  height: 1.3rem;
  opacity: 0;
  transition: 0.6s ease;
}
.todo-container:hover .todo-container-edit-button,.todo-container:hover .todo-container-delete-button,.todo-container:hover .todo-container-expand-button{
  opacity: 1;
}

/* Todo Checkbox */
.checkbox-wrapper .checkbox-label {
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1rem 1fr;
  align-items: center;
  align-content: center;
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
  margin-left: 15px;
}

.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:last-child {
  text-decoration: line-through;
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
@keyframes check-15 {
  50% {
    transform: scale(1.2);
  }
}

/* Toast Notification */
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


/* Add these CSS rules to enable dragging */
.draggable {
  cursor: move;
}

.draggable.dragging {
  position: absolute;
  z-index: 1000;
  opacity: 0.8;
  box-shadow: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&family=Ubuntu:wght@400;500;700&display=swap\");\n\n:root {\n  --primary-white: #ffffff;\n  --accent-color: #146cc4;\n  --primary-gray: #f4f4f4;\n  --secondary-gray: #505050;\n  --primary-red: #ff0000;\n}\n\n/* Default Styles */\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml,body {\n  height: 100%;\n  width: 100%;\n}\nbody {\n  font-family: \"Ubuntu\", sans-serif;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n/* Sidebar Styles */\n.sidebar {\n  background-color: var(--primary-gray);\n}\n.projects {\n  margin: 6rem 0rem;\n  margin-left: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.sidebar-default-project:nth-child(3){\n  padding-bottom: 1rem;\n  border-bottom: 2px solid rgb(204, 204, 204);\n}\n.sidebar-project-button {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1rem;\n}\n.sidebar-project-name{\n  padding: 5px 10px;\n  border-radius: 1rem;\n  transition: all 0.5s ease;\n}\n.sidebar-project-name:hover{\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n}\n.sidebar-project-name-selected{\n  background-color: var(--accent-color);\n  color: var(--primary-white);\n}\n.sidebar-project-delete-icon{\n  opacity: 0;\n  transition: 0.5s ease;\n}\n.sidebar-project-button:hover .sidebar-project-delete-icon{\n  opacity: 1;\n}\n.project-create-container {\n  display: flex;\n  justify-content: space-between;\n}\n.project-create-container > input {\n  font-size: 1rem;\n  width: 70%;\n  padding: 0.2rem;\n  border: none;\n  color: var(--secondary-gray);\n  outline: none;\n}\n.project-create-container > button {\n  width: 1.5rem;\n  height: 1.5rem;\n  border: none;\n}\n.create-new-project-button {\n  border: none;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 2rem;\n  background-color: var(--accent-color);\n  cursor: pointer;\n  position: fixed;\n  bottom: 1rem;\n  left: 1rem;\n}\n\n/* Project Page */\n.main {\n  background-color: var(--primary-white);\n  margin: 5rem;\n  margin-bottom: 1rem;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.project-name-container{\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.project-name {\n  font-size: 2rem;\n  font-weight: 500;\n  color: var(--accent-color);\n  margin-right: 2rem;\n  word-wrap: break-word;\n  word-break: break-all;\n  max-width: 70%;\n}\n.project-description {\n  font-size: 1.05rem;\n  color: var(--secondary-gray);\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.project-buttons{\n  align-self: flex-start;\n  display: flex;\n  gap: 1rem;\n}\n.project-edit-icon,.project-delete-icon,.project-edit-save-icon{\n  cursor: pointer;\n}\n.editable {\n  outline: none;\n  width: fit-content;\n  border-bottom: 2px dashed var(--accent-color);\n}\n\n/* New Todo Button */\n#create-new-todo {\n  cursor: pointer;\n  width: 6rem;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  text-align: center;\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n}\n\n/* Todo Modal */\n#todoModal {\n  border: none;\n  margin: auto;\n  width: 40rem;\n  aspect-ratio: 16/9;\n  border-radius: 1rem;\n}\n#todoModalForm {\n  height: 100%;\n  position: relative;\n}\n.todo-create-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: 0.5rem;\n  height: 100%;\n  padding: 1rem;\n}\n.todo-create-container-input {\n  font-size: 1rem;\n  width: 50%;\n  padding: 0.2rem;\n  border: none;\n  border-bottom: 1px solid var(--accent-color);\n  color: var(--secondary-gray);\n  outline: none;\n}\n.todo-create-container-input::placeholder {\n  color: var(--secondary-gray);\n  opacity: 0.6;\n  font-family: \"Inconsolata\", monospace;\n  font-style: italic;\n}\n#todo-create-container-priority{\n  width: 7rem;\n  outline: none;\n  border: none;\n  border-radius: 1rem;\n  padding: 0.3rem 1rem;\n  background-color: #146cc4;\n  color: #f1f1f1;\n  cursor: pointer;\n}\n.save-todo-button {\n  border: none;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  width: 5rem;\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  cursor: pointer;\n}\n.cancel-todo-button {\n  border: none;\n  border-radius: 1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--primary-white);\n  background-color: var(--primary-red);\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem;\n  cursor: pointer;\n}\n.cancel-todo-button-icon {\n  height: 1rem;\n  width: 1rem;\n  opacity: 0;\n}\n.cancel-todo-button-icon:hover {\n  opacity: 1;\n}\n.project-todoList-container{\n  display: grid;\n  row-gap: 1rem;\n  max-height: 65%;\n  overflow-y: auto;\n  padding: 1rem 0;\n  scrollbar-width: thin; /* Set the width of the scrollbar */\n  scrollbar-color: transparent transparent;\n}\n.project-todoList-container:empty{\n  max-height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.project-todoList-container::-webkit-scrollbar {\n  display: none;\n}\n.project-todoList-container:hover::-webkit-scrollbar {\n  display: none;\n}\n\n/* Todo Container */\n.todo-container {\n  display: grid;\n  grid-template-columns: 1fr 1rem 1rem 1rem 1rem;\n  grid-template-rows: min-content;\n  column-gap: 1.6rem;\n  align-items: center;\n  width: 60%;\n  padding: 0.5rem 1rem;\n  border-radius: 0 1rem 1rem 0;\n  cursor: move;\n  box-shadow: #959da533 0px 8px 24px;\n  border-left: 4px solid var(--priority-color);\n  transition: 1s ease;\n}\n.todo-container:hover{\n  box-shadow: #e7e2e259 0px 0px 15px 2px;\n}\n\n.todo-container[data-priority=\"low\"] {\n  --priority-color: green;\n}\n.todo-container[data-priority=\"medium\"] {\n  --priority-color: yellow;\n}\n.todo-container[data-priority=\"high\"] {\n  --priority-color: orange;\n}\n.todo-container[data-priority=\"critical\"] {\n  --priority-color: red;\n}\n\n.todo-container-name {\n  color: var(--secondary-gray);\n  font-size: 1rem;\n}\n.todo-container-description {\n  grid-column: 1/span 5;\n  text-align: justify;\n  color: var(--secondary-gray);\n  height: 0;\n  overflow: hidden;\n  transition: 0.2s ease-out;\n}\n.todo-description-hidden{\n  height: 0;\n}\n.todo-description-expanded{\n  padding: 1rem;\n  height: max-content;\n}\n.todo-container-edit-button, .todo-container-delete-button,.todo-container-expand-button{\n  cursor: pointer;\n  height: 1.3rem;\n  opacity: 0;\n  transition: 0.6s ease;\n}\n.todo-container:hover .todo-container-edit-button,.todo-container:hover .todo-container-delete-button,.todo-container:hover .todo-container-expand-button{\n  opacity: 1;\n}\n\n/* Todo Checkbox */\n.checkbox-wrapper .checkbox-label {\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 1rem 1fr;\n  align-items: center;\n  align-content: center;\n}\n.checkbox-wrapper .checkbox-label span {\n  display: inline-block;\n  vertical-align: middle;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper .checkbox-label span:first-child {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  transform: scale(1);\n  vertical-align: middle;\n  border: 1px solid #B9B8C3;\n  transition: all 0.2s ease;\n}\n.checkbox-wrapper .checkbox-label span:first-child svg {\n  position: absolute;\n  z-index: 1;\n  top: 5px;\n  left: 3px;\n  fill: none;\n  stroke: white;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16px;\n  stroke-dashoffset: 16px;\n  transition: all 0.3s ease;\n  transition-delay: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper .checkbox-label span:first-child:before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #506EEC;\n  display: block;\n  transform: scale(0);\n  opacity: 1;\n  border-radius: 50%;\n  transition-delay: 0.2s;\n}\n.checkbox-wrapper .checkbox-label span:last-child {\n  margin-left: 15px;\n}\n\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:last-child {\n  text-decoration: line-through;\n}\n.checkbox-wrapper .checkbox-label:hover span:first-child {\n  border-color: #3c53c7;\n}\n\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child {\n  border-color: #3c53c7;\n  background: #3c53c7;\n  animation: check-15 0.6s ease;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child svg {\n  stroke-dashoffset: 0;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child:before {\n  transform: scale(2.2);\n  opacity: 0;\n  transition: all 0.6s ease;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:last-child {\n  color: #B9B8C3;\n  transition: all 0.3s ease;\n}\n@keyframes check-15 {\n  50% {\n    transform: scale(1.2);\n  }\n}\n\n/* Toast Notification */\n.toast-container {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.toast {\n  background-color: #f0ad4e;;\n  color: #333;\n  padding: 10px 20px;\n  border-radius: 5px;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.show-toast {\n  opacity: 1;\n}\n\n\n/* Add these CSS rules to enable dragging */\n.draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  position: absolute;\n  z-index: 1000;\n  opacity: 0.8;\n  box-shadow: none;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _notificationController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificationController */ "./src/modules/notificationController.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");





class DisplayController {
  static currentTodo = null;
  static loadHomePage() {
    DisplayController.loadProjects();
    DisplayController.openProject(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().getProjects()[0]);
    document.querySelector('.sidebar-project-name').classList.add('sidebar-project-name-selected');
    DisplayController.initProjectButtons();
    
  }

  static loadProjects() {
    document.querySelector('#projects-container').innerHTML='';
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().getProjects().forEach((project) =>DisplayController.addProjectButtons(project));
  }

  static openProject(project) {
    DisplayController.loadProjectName(project);
    DisplayController.loadEditProjectButton();
    DisplayController.loadDeleteProjectButton();
    DisplayController.loadProjectDescription(project);    
    DisplayController.loadProjectTodoList(project);
  }

  static getCurrentProject() {
    return _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().getProject(document.querySelector('.project-name').textContent);
  }
  
  static loadProjectName(project) {
    const projectName = document.querySelector('.project-name');
    projectName.textContent = project.getName();
    projectName.contentEditable = 'false';
    projectName.classList.remove('editable');
  }
  
  static loadEditProjectButton() {
    const projectNameContainer = document.querySelector('.project-name-container');
    const projectButtonsContainer = document.querySelector('.project-buttons');
    const existingEditButton = projectNameContainer.querySelector('.project-edit-icon');
    const projectEditSaveButton = document.querySelector('.project-edit-save-icon');
    
    if (projectEditSaveButton) {
      projectEditSaveButton.remove();
    }
    
    const projectNamesToExclude = ['Inbox', 'This Week', 'Today'];
    const projectName = projectNameContainer.querySelector('.project-name').textContent;
    
    if (projectNamesToExclude.includes(projectName)) {
      // Project name is one of the specified ones, do nothing
      if (existingEditButton) {
        existingEditButton.remove(); // Remove edit button if it exists
      }
    } else {
      if (!existingEditButton) {
        // Create and add edit button only if it doesn't exist
        const projectEditButton = document.createElement('img');
        projectEditButton.src = './img/edit-icon.svg';
        projectEditButton.title = 'Edit Project';
        projectEditButton.classList.add('project-edit-icon');
        projectEditButton.addEventListener('click', DisplayController.handleEditProjectButton);
        projectButtonsContainer.appendChild(projectEditButton);
      }
    }
  }
  
  static loadDeleteProjectButton() {
    const projectNameContainer = document.querySelector('.project-name-container');
    const projectButtonsContainer = document.querySelector('.project-buttons');
    const existingDeleteButton = projectNameContainer.querySelector('.project-delete-icon');
    
    // Check if project name is one of the specified ones
    const projectNamesToExclude = ['Inbox', 'This Week', 'Today'];
    const projectName = projectNameContainer.querySelector('.project-name').textContent;
    
    if (projectNamesToExclude.includes(projectName)) {
      // Project name is one of the specified ones, do nothing
      if (existingDeleteButton) {
        existingDeleteButton.remove(); // Remove delete button if it exists
      }
    }
    else {
      if (!existingDeleteButton) {
        // Create and add delete button only if it doesn't exist
        const projectDeleteButton = document.createElement('img');
        projectDeleteButton.src = './img/delete-icon.svg';
        projectDeleteButton.title = 'Delete Project';
        projectDeleteButton.classList.add('project-delete-icon');
        projectDeleteButton.addEventListener('click', DisplayController.handleDeleteProjectButton);
        projectButtonsContainer.appendChild(projectDeleteButton);
      }
    }
  }
  
  static handleEditProjectButton() {
    const projectButtonsContainer = document.querySelector('.project-buttons');
    const projectName = document.querySelector('.project-name');
    const projectDescription = document.querySelector('.project-description');
    const currentProjectName = projectName.textContent;
    const existingProjectEditSaveButton = document.querySelector('.project-edit-save-icon');
    
    if (!existingProjectEditSaveButton) {
      const projectEditSaveButton = document.createElement('img');
      projectEditSaveButton.classList.add('project-edit-save-icon');
      projectEditSaveButton.src = './img/save-icon.svg';
      projectEditSaveButton.title = 'Save Changes';
      projectEditSaveButton.addEventListener('click', () => DisplayController.handleProjectEditSaveButton(currentProjectName));
      projectButtonsContainer.appendChild(projectEditSaveButton);
      
  }
  
  
  projectName.contentEditable = 'true';
  projectDescription.contentEditable = 'true';
  projectName.spellcheck = false;
  projectDescription.spellcheck = false;
  projectName.classList.add('editable');
  projectDescription.classList.add('editable');
  
  
  let range = document.createRange();
  range.selectNodeContents(projectDescription);
  range.collapse(false);
  let selection = window.getSelection();
  selection.removeAllRanges();
    selection.addRange(range);
    
    let range2 = document.createRange();
    range2.selectNodeContents(projectName);
    range2.collapse(false);
    let selection2 = window.getSelection();
    selection2.removeAllRanges();
    selection2.addRange(range2);
  }
  
  
  static handleDeleteProjectButton() {
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].removeProject(DisplayController.getCurrentProject().getName());
    document.querySelector('#projects-container').innerHTML = '';
    DisplayController.loadProjects();
    DisplayController.openProject(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().getProjects()[0]);
  }
  
  static handleProjectEditSaveButton(currentProjectName) {
    const projectName = document.querySelector('.project-name');
    const projectDescription = document.querySelector('.project-description');
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].editProject(currentProjectName, projectName.textContent, projectDescription.textContent);
    DisplayController.loadProjects();
    DisplayController.openProject(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().getProject(projectName.textContent));
  }
  
  static loadProjectDescription(project) {
    const projectDescription = document.querySelector('.project-description');
    projectDescription.textContent = project.getDescription();
    projectDescription.contentEditable = 'false';
    projectDescription.classList.remove('editable');
  }
  
  static loadProjectTodoList(project) {
    const todoListContainer = document.querySelector('.project-todoList-container');
    todoListContainer.textContent = '';
    project.getTodoList().forEach((todo) => {
      // Create the outer div element
      const checkboxWrapper = document.createElement('div');
      checkboxWrapper.classList.add('checkbox-wrapper');
      
      // Create the input element
      const checkboxInput = document.createElement('input');
      checkboxInput.classList.add('checkbox-input');
      checkboxInput.type = 'checkbox';
      checkboxInput.checked = todo.getCheckStatus();
      checkboxInput.style.display = 'none';
      checkboxInput.id = todo.getName();
      checkboxInput.addEventListener('click', DisplayController.handleToggleCheck);

      // Create the label element
      const checkboxLabel = document.createElement('label');
      checkboxLabel.classList.add('checkbox-label');
      checkboxLabel.setAttribute('for', todo.getName());

      // Create the first span element inside the label
      const checkboxSvgWrapper = document.createElement('span');

      // Create the svg element inside the first span
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.setAttribute('width', '12px');
      svgElement.setAttribute('height', '9px');
      svgElement.setAttribute('viewBox', '0 0 12 9');

      // Create the polyline element inside the svg
      const polylineElement = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      polylineElement.setAttribute('points', '1 5 4 8 11 1');

      // Append the polyline to the svg, and svg to the first span
      svgElement.appendChild(polylineElement);
      checkboxSvgWrapper.appendChild(svgElement);

      // Create the second span element inside the label
      const todoName = document.createElement('span');
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
      editButton.title = 'Edit Todo';
      editButton.draggable = false;
      editButton.addEventListener('click',DisplayController.handleEditTodoContainerButton);

      const deleteButton = document.createElement('img');
      deleteButton.classList.add('todo-container-delete-button');
      deleteButton.src = './img/delete-icon.svg';
      deleteButton.title = 'Delete Todo';
      deleteButton.draggable = false;
      deleteButton.addEventListener('click', DisplayController.handleDeleteTodoButton);

      const expandButton = document.createElement('img');
      expandButton.classList.add('todo-container-expand-button');
      expandButton.src = './img/expand-more-icon.svg';
      expandButton.title = 'Expand Todo';
      expandButton.draggable = false;
      expandButton.addEventListener('click', DisplayController.handleExpandTodoButton);
      
      const dragButton = document.createElement('img');
      dragButton.classList.add('todo-container-drag-button');
      dragButton.src = './img/drag-icon.svg';
      dragButton.title = 'Drag Todo';
      dragButton.draggable = false;


      const todoDescription = document.createElement('div');
      todoDescription.classList.add('todo-container-description');
      todoDescription.textContent = todo.getDescription();

      const todoContainer = document.createElement('div');      
      todoContainer.classList.add('todo-container');
      todoContainer.dataset.priority = todo.getPriority();
      todoContainer.dataset.todoName = todo.getName(); 
      todoContainer.draggable = true;

      todoContainer.append(checkboxWrapper,editButton,deleteButton,expandButton,dragButton,todoDescription);

      todoListContainer.append(todoContainer);
      DisplayController.initDragAndDrop(); 
    });
  }

  static handleToggleCheck() {
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].todoToggleCheckStatus(DisplayController.getCurrentProject(), this.id);
  }

  static initProjectButtons() {
    const projectButtons = document.querySelectorAll('.sidebar-project-name');
    const newProjectButton = document.querySelector('#create-new-project');
    const newTodoButton = document.querySelector('.new-todo');

    projectButtons.forEach((projectButton) => projectButton.addEventListener('click',DisplayController.handleProjectButtons));
    newProjectButton.addEventListener('click', DisplayController.createNewProject);
    newTodoButton.addEventListener('click', DisplayController.createNewTodo);
  }

  static handleProjectButtons() {
    document.querySelectorAll('.sidebar-project-name').forEach((item)=>item.classList.remove('sidebar-project-name-selected'));
    this.classList.add('sidebar-project-name-selected');
    DisplayController.openProject(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().getProject(this.textContent));
  }

  static createNewProject() {
    const existingProjectCreateContainer = document.querySelector('.project-create-container');
  
    if (!existingProjectCreateContainer) {
      const projectContainerInput = document.createElement('input');
      const saveProjectButton = document.createElement('img');
      const cancelProjectButton = document.createElement('img');
      const projectContainerDiv = document.createElement('div');
      
      projectContainerInput.type = 'text';
      saveProjectButton.src = './img/check-icon.svg';
      cancelProjectButton.src = './img/cancel-icon.svg';
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
    const projectName = document.createElement('div');
    projectName.textContent = document.querySelector('.project-container-input').value;
    
    if (projectName.textContent) {
      const outputDiv = document.createElement('div');
      const deleteProject = document.createElement('img');
      projectName.classList.add('sidebar-project-name');

      deleteProject.src = './img/delete-icon.svg';
      deleteProject.title = 'Delete Project';
      deleteProject.classList.add('sidebar-project-delete-icon');
      deleteProject.addEventListener('click',DisplayController.handleDeleteSidebarProjectButton);
      outputDiv.append(projectName, deleteProject);
      projectContainerDiv.replaceWith(outputDiv);
      outputDiv.className = 'sidebar-user-project sidebar-project-button';
      projectName.addEventListener('click', DisplayController.handleProjectButtons);
      document.querySelectorAll('.sidebar-project-name').forEach((item)=>item.classList.remove('sidebar-project-name-selected'));
      projectName.classList.add('sidebar-project-name-selected');
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectName.textContent));
      DisplayController.openProject(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().getProject(projectName.textContent));
    }
  }

  static addProjectButtons(project) {
    const outputDiv = document.createElement('div');
    const projectName = document.createElement('div');
    
    projectName.textContent = project.getName();
    projectName.classList.add('sidebar-project-name');
    projectName.addEventListener('click', DisplayController.handleProjectButtons); 

    if (projectName.textContent !== 'Inbox' && projectName.textContent !== 'Today' && projectName.textContent !== 'This Week') {
      const deleteProject = document.createElement('img');
      deleteProject.src = './img/delete-icon.svg';
      deleteProject.title = 'Delete Project';
      deleteProject.classList.add('sidebar-project-delete-icon');
      deleteProject.addEventListener('click',DisplayController.handleDeleteSidebarProjectButton);
      outputDiv.append(projectName, deleteProject);
      outputDiv.className = 'sidebar-user-project sidebar-project-button';
    }
    else {
      outputDiv.append(projectName);
      outputDiv.className = 'sidebar-default-project sidebar-project-button';
    }
    document.getElementById('projects-container').appendChild(outputDiv); 
  }

  static handleDeleteSidebarProjectButton() {
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].removeProject(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().getProject(this.previousSibling.textContent).getName());
    this.parentNode.remove();
    DisplayController.openProject(_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList().getProjects()[0]);
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

  static handleSaveTodoButton(e) {
    let currentTodo = DisplayController.currentTodo;
    e.preventDefault();
    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = todoModal.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = todoModal.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = todoModal.querySelector('#todo-create-container-priority');
    let currentProject = DisplayController.getCurrentProject();
    if (todoCreateContainerName.value === "") {
      _notificationController__WEBPACK_IMPORTED_MODULE_2__["default"].showToast('Todo name must not be empty');
    }
    else {
      if (currentTodo === null) {
        if (currentProject.getTodo(todoCreateContainerName.value) !== undefined && currentProject.getTodo(todoCreateContainerName.value).getCheckStatus()===false) {
          _notificationController__WEBPACK_IMPORTED_MODULE_2__["default"].showToast('Todo name already exists');
        }
        else {
          let todo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]();
          todo.setName(todoCreateContainerName.value);
          todo.setDescription(todoCreateContainerDescription.value)
          todo.setPriority(todoCreateContainerPriority.value)
          _storage__WEBPACK_IMPORTED_MODULE_3__["default"].addTodo(currentProject,todo);
          todoModal.close();
          todoCreateContainerName.value = '';
          todoCreateContainerDescription.value = '';
          todoCreateContainerPriority.value = 'low';
        }
      }
      else {
        if (currentTodo.getName() !== todoCreateContainerName.value) {
          if (currentProject.getTodo(todoCreateContainerName.value) !== undefined && currentProject.getTodo(todoCreateContainerName.value).getCheckStatus()===false) {
            
            _notificationController__WEBPACK_IMPORTED_MODULE_2__["default"].showToast('Todo name already exists');
          }
          else {
            _storage__WEBPACK_IMPORTED_MODULE_3__["default"].editTodo(currentProject,currentTodo.getName(),todoCreateContainerName.value,todoCreateContainerDescription.value,todoCreateContainerPriority.value);
            todoModal.close();
            todoCreateContainerName.value = '';
            todoCreateContainerDescription.value = '';
            todoCreateContainerPriority.value = 'low';
            DisplayController.currentTodo = null;
          }
        }
        else {
          _storage__WEBPACK_IMPORTED_MODULE_3__["default"].editTodo(currentProject,currentTodo.getName(),todoCreateContainerName.value,todoCreateContainerDescription.value,todoCreateContainerPriority.value);
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

  static handleDeleteTodoButton() {
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].removeTodo(DisplayController.getCurrentProject(),this.parentNode.children[0].textContent);
    this.parentNode.remove();
    // DisplayController.openProject(DisplayController.getCurrentProject());
  }
  
  static handleExpandTodoButton() {
    const todoDescription = this.nextElementSibling.nextElementSibling;
    if (todoDescription.classList.contains('todo-description-expanded')){
      todoDescription.classList.remove('todo-description-expanded');
      todoDescription.classList.add('todo-description-hidden');
    } else {
      todoDescription.classList.remove('todo-description-hidden');
      todoDescription.classList.add('todo-description-expanded');
    } 
  }
  
  static initDragAndDrop() {
  const todoContainers = document.querySelectorAll('.todo-container');
  
  todoContainers.forEach((todoContainer) => {
    todoContainer.addEventListener('dragstart', DisplayController.handleDragStart);
    todoContainer.addEventListener('dragover', DisplayController.handleDragOver);
    todoContainer.addEventListener('drop', DisplayController.handleDrop);
  });
  }

  static handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.todoName);
    e.target.classList.add('dragging');
  }

  static handleDragOver(e) {
    e.preventDefault();
  }

  static handleDrop(e) {
  e.preventDefault();
  const todoName = e.dataTransfer.getData('text/plain');
  const droppedContainer = document.querySelector(`[data-todo-name="${todoName}"]`);
  
  if (droppedContainer !== this) {
    const containerParent = this.parentElement;
    const draggedIndex = Array.from(containerParent.children).indexOf(droppedContainer);
    const dropIndex = Array.from(containerParent.children).indexOf(this);

    if (dropIndex < draggedIndex) {
      console.log("Drop index is less than pick index");
      containerParent.insertBefore(droppedContainer, this);
    } else {
      containerParent.insertBefore(droppedContainer, this.nextSibling);
    }
    // Update the project's todo list
    const currentProject = DisplayController.getCurrentProject();
    const updatedTodoList = [...currentProject.getTodoList()];
    const movedTodo = updatedTodoList.find(todo => todo.getName() === todoName);
    
    updatedTodoList.splice(updatedTodoList.indexOf(movedTodo), 1);
    updatedTodoList.splice(Array.from(containerParent.children).indexOf(droppedContainer), 0, movedTodo);
    currentProject.setTodoList(updatedTodoList);

    // Update the project data in Storage
    const projectList = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectList();
    const updatedProjects = projectList.getProjects().map(project => {
      if (project.getName() === currentProject.getName()) {
        return currentProject;
      }
      return project;
    });
    projectList.setProjects(updatedProjects);
    _storage__WEBPACK_IMPORTED_MODULE_3__["default"].saveProjectList(projectList);
  }
    e.target.classList.remove('dragging');
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

  removeProject(projectName) {
    this.setProjects(this.projects.filter(item => item !== this.getProject(projectName)));
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
  static removeProject(projectName) {
    const projectList = Storage.getProjectList();
    projectList.removeProject(projectName);
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
  static editProject(projectName,newName,newDescription) {
    const projectList = Storage.getProjectList();
    let tempProject = projectList.getProject(projectName);
    tempProject.setName(newName);
    tempProject.setDescription(newDescription);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSCxJQUFJLDJCQUEyQixJQUFJLGtCQUFrQjtBQUN6SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxRQUFRLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLHdCQUF3QixhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7QUFDQTtBQUNBLGtDQUFrQyxnREFBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBTztBQUNYO0FBQ0Esa0NBQWtDLGdEQUFPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSxnREFBTztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnREFBTztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTREO0FBQ3ZDOztBQUVyQixrRUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvbm90aWZpY2F0aW9uQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PVVidW50dTp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXByaW1hcnktd2hpdGU6ICNmZmZmZmY7XG4gIC0tYWNjZW50LWNvbG9yOiAjMTQ2Y2M0O1xuICAtLXByaW1hcnktZ3JheTogI2Y0ZjRmNDtcbiAgLS1zZWNvbmRhcnktZ3JheTogIzUwNTA1MDtcbiAgLS1wcmltYXJ5LXJlZDogI2ZmMDAwMDtcbn1cblxuLyogRGVmYXVsdCBTdHlsZXMgKi9cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmh0bWwsYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn1cblxuLyogU2lkZWJhciBTdHlsZXMgKi9cbi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ncmF5KTtcbn1cbi5wcm9qZWN0cyB7XG4gIG1hcmdpbjogNnJlbSAwcmVtO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59XG4uc2lkZWJhci1kZWZhdWx0LXByb2plY3Q6bnRoLWNoaWxkKDMpe1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcbn1cbi5zaWRlYmFyLXByb2plY3QtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbi5zaWRlYmFyLXByb2plY3QtbmFtZXtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4uc2lkZWJhci1wcm9qZWN0LW5hbWU6aG92ZXJ7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cbi5zaWRlYmFyLXByb2plY3QtbmFtZS1zZWxlY3RlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xufVxuLnNpZGViYXItcHJvamVjdC1kZWxldGUtaWNvbntcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuLnNpZGViYXItcHJvamVjdC1idXR0b246aG92ZXIgLnNpZGViYXItcHJvamVjdC1kZWxldGUtaWNvbntcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvamVjdC1jcmVhdGUtY29udGFpbmVyID4gaW5wdXQge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY3JlYXRlLW5ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMXJlbTtcbn1cblxuLyogUHJvamVjdCBQYWdlICovXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBtYXJnaW46IDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cbi5wcm9qZWN0LW5hbWUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxcmVtO1xufVxuLnByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIG1heC13aWR0aDogNzAlO1xufVxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLnByb2plY3QtYnV0dG9uc3tcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xufVxuLnByb2plY3QtZWRpdC1pY29uLC5wcm9qZWN0LWRlbGV0ZS1pY29uLC5wcm9qZWN0LWVkaXQtc2F2ZS1pY29ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZWRpdGFibGUge1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogTmV3IFRvZG8gQnV0dG9uICovXG4jY3JlYXRlLW5ldy10b2RvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNnJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogVG9kbyBNb2RhbCAqL1xuI3RvZG9Nb2RhbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNDByZW07XG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbiN0b2RvTW9kYWxGb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9kby1jcmVhdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBnYXA6IDAuNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eXtcbiAgd2lkdGg6IDdyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDZjYzQ7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2F2ZS10b2RvLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDVyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbiAgYm90dG9tOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FuY2VsLXRvZG8tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB3aWR0aDogMS4xcmVtO1xuICBoZWlnaHQ6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgdG9wOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYW5jZWwtdG9kby1idXR0b24taWNvbiB7XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDFyZW07XG4gIG9wYWNpdHk6IDA7XG59XG4uY2FuY2VsLXRvZG8tYnV0dG9uLWljb246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVye1xuICBkaXNwbGF5OiBncmlkO1xuICByb3ctZ2FwOiAxcmVtO1xuICBtYXgtaGVpZ2h0OiA2NSU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgKi9cbiAgc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcjplbXB0eXtcbiAgbWF4LWhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVyOmhvdmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFRvZG8gQ29udGFpbmVyICovXG4udG9kby1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxcmVtIDFyZW0gMXJlbSAxcmVtO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xuICBjb2x1bW4tZ2FwOiAxLjZyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xuICBjdXJzb3I6IG1vdmU7XG4gIGJveC1zaGFkb3c6ICM5NTlkYTUzMyAwcHggOHB4IDI0cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpb3JpdHktY29sb3IpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xufVxuLnRvZG8tY29udGFpbmVyOmhvdmVye1xuICBib3gtc2hhZG93OiAjZTdlMmUyNTkgMHB4IDBweCAxNXB4IDJweDtcbn1cblxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJsb3dcIl0ge1xuICAtLXByaW9yaXR5LWNvbG9yOiBncmVlbjtcbn1cbi50b2RvLWNvbnRhaW5lcltkYXRhLXByaW9yaXR5PVwibWVkaXVtXCJdIHtcbiAgLS1wcmlvcml0eS1jb2xvcjogeWVsbG93O1xufVxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJoaWdoXCJdIHtcbiAgLS1wcmlvcml0eS1jb2xvcjogb3JhbmdlO1xufVxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJjcml0aWNhbFwiXSB7XG4gIC0tcHJpb3JpdHktY29sb3I6IHJlZDtcbn1cblxuLnRvZG8tY29udGFpbmVyLW5hbWUge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBmb250LXNpemU6IDFyZW07XG59XG4udG9kby1jb250YWluZXItZGVzY3JpcHRpb24ge1xuICBncmlkLWNvbHVtbjogMS9zcGFuIDU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcbn1cbi50b2RvLWRlc2NyaXB0aW9uLWhpZGRlbntcbiAgaGVpZ2h0OiAwO1xufVxuLnRvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWR7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG4udG9kby1jb250YWluZXItZWRpdC1idXR0b24sIC50b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9uLC50b2RvLWNvbnRhaW5lci1leHBhbmQtYnV0dG9ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4zcmVtO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XG59XG4udG9kby1jb250YWluZXI6aG92ZXIgLnRvZG8tY29udGFpbmVyLWVkaXQtYnV0dG9uLC50b2RvLWNvbnRhaW5lcjpob3ZlciAudG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbiwudG9kby1jb250YWluZXI6aG92ZXIgLnRvZG8tY29udGFpbmVyLWV4cGFuZC1idXR0b257XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIFRvZG8gQ2hlY2tib3ggKi9cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QjhDMztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDNweDtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiB3aGl0ZTtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE2cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzUwNkVFQztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWw6aG92ZXIgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1jb2xvcjogIzNjNTNjNztcbn1cblxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1jb2xvcjogIzNjNTNjNztcbiAgYmFja2dyb3VuZDogIzNjNTNjNztcbiAgYW5pbWF0aW9uOiBjaGVjay0xNSAwLjZzIGVhc2U7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHN2ZyB7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIuMik7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmxhc3QtY2hpbGQge1xuICBjb2xvcjogI0I5QjhDMztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbkBrZXlmcmFtZXMgY2hlY2stMTUge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxufVxuXG4vKiBUb2FzdCBOb3RpZmljYXRpb24gKi9cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4udG9hc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlOztcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uc2hvdy10b2FzdCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuLyogQWRkIHRoZXNlIENTUyBydWxlcyB0byBlbmFibGUgZHJhZ2dpbmcgKi9cbi5kcmFnZ2FibGUge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUEsbUJBQW1CO0FBQ25COzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FB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LG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsVUFBVTtBQUNaOzs7QUFHQSwyQ0FBMkM7QUFDM0M7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5jb25zb2xhdGE6d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9VWJ1bnR1OndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1hY2NlbnQtY29sb3I6ICMxNDZjYzQ7XFxuICAtLXByaW1hcnktZ3JheTogI2Y0ZjRmNDtcXG4gIC0tc2Vjb25kYXJ5LWdyYXk6ICM1MDUwNTA7XFxuICAtLXByaW1hcnktcmVkOiAjZmYwMDAwO1xcbn1cXG5cXG4vKiBEZWZhdWx0IFN0eWxlcyAqL1xcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1sLGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG59XFxuXFxuLyogU2lkZWJhciBTdHlsZXMgKi9cXG4uc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyYXkpO1xcbn1cXG4ucHJvamVjdHMge1xcbiAgbWFyZ2luOiA2cmVtIDByZW07XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5zaWRlYmFyLWRlZmF1bHQtcHJvamVjdDpudGgtY2hpbGQoMyl7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7XFxufVxcbi5zaWRlYmFyLXByb2plY3QtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcbi5zaWRlYmFyLXByb2plY3QtbmFtZXtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcbi5zaWRlYmFyLXByb2plY3QtbmFtZTpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcbi5zaWRlYmFyLXByb2plY3QtbmFtZS1zZWxlY3RlZHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxufVxcbi5zaWRlYmFyLXByb2plY3QtZGVsZXRlLWljb257XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcbn1cXG4uc2lkZWJhci1wcm9qZWN0LWJ1dHRvbjpob3ZlciAuc2lkZWJhci1wcm9qZWN0LWRlbGV0ZS1pY29ue1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvamVjdC1jcmVhdGUtY29udGFpbmVyID4gaW5wdXQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4ucHJvamVjdC1jcmVhdGUtY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmNyZWF0ZS1uZXctcHJvamVjdC1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIGxlZnQ6IDFyZW07XFxufVxcblxcbi8qIFByb2plY3QgUGFnZSAqL1xcbi5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgbWFyZ2luOiA1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuLnByb2plY3QtbmFtZS1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBtYXgtd2lkdGg6IDcwJTtcXG59XFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuLnByb2plY3QtYnV0dG9uc3tcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4ucHJvamVjdC1lZGl0LWljb24sLnByb2plY3QtZGVsZXRlLWljb24sLnByb2plY3QtZWRpdC1zYXZlLWljb257XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5lZGl0YWJsZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBOZXcgVG9kbyBCdXR0b24gKi9cXG4jY3JlYXRlLW5ldy10b2RvIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi8qIFRvZG8gTW9kYWwgKi9cXG4jdG9kb01vZGFsIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA0MHJlbTtcXG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbiN0b2RvTW9kYWxGb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdhcDogMC41cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5jb25zb2xhdGFcXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbiN0b2RvLWNyZWF0ZS1jb250YWluZXItcHJpb3JpdHl7XFxuICB3aWR0aDogN3JlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2Y2M0O1xcbiAgY29sb3I6ICNmMWYxZjE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zYXZlLXRvZG8tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aWR0aDogNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXJlbTtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhbmNlbC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEuMXJlbTtcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDAuNXJlbTtcXG4gIHRvcDogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FuY2VsLXRvZG8tYnV0dG9uLWljb24ge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDFyZW07XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uY2FuY2VsLXRvZG8tYnV0dG9uLWljb246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDFyZW07XFxuICBtYXgtaGVpZ2h0OiA2NSU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgKi9cXG4gIHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcjplbXB0eXtcXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdC10b2RvTGlzdC1jb250YWluZXI6aG92ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFRvZG8gQ29udGFpbmVyICovXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gIGNvbHVtbi1nYXA6IDEuNnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgYm94LXNoYWRvdzogIzk1OWRhNTMzIDBweCA4cHggMjRweDtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpb3JpdHktY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogMXMgZWFzZTtcXG59XFxuLnRvZG8tY29udGFpbmVyOmhvdmVye1xcbiAgYm94LXNoYWRvdzogI2U3ZTJlMjU5IDBweCAwcHggMTVweCAycHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lcltkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxuICAtLXByaW9yaXR5LWNvbG9yOiBncmVlbjtcXG59XFxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XFxcIm1lZGl1bVxcXCJdIHtcXG4gIC0tcHJpb3JpdHktY29sb3I6IHllbGxvdztcXG59XFxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXSB7XFxuICAtLXByaW9yaXR5LWNvbG9yOiBvcmFuZ2U7XFxufVxcbi50b2RvLWNvbnRhaW5lcltkYXRhLXByaW9yaXR5PVxcXCJjcml0aWNhbFxcXCJdIHtcXG4gIC0tcHJpb3JpdHktY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyLW5hbWUge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnRvZG8tY29udGFpbmVyLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gNTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XFxufVxcbi50b2RvLWRlc2NyaXB0aW9uLWhpZGRlbntcXG4gIGhlaWdodDogMDtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWR7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuLnRvZG8tY29udGFpbmVyLWVkaXQtYnV0dG9uLCAudG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbiwudG9kby1jb250YWluZXItZXhwYW5kLWJ1dHRvbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMS4zcmVtO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG59XFxuLnRvZG8tY29udGFpbmVyOmhvdmVyIC50b2RvLWNvbnRhaW5lci1lZGl0LWJ1dHRvbiwudG9kby1jb250YWluZXI6aG92ZXIgLnRvZG8tY29udGFpbmVyLWRlbGV0ZS1idXR0b24sLnRvZG8tY29udGFpbmVyOmhvdmVyIC50b2RvLWNvbnRhaW5lci1leHBhbmQtYnV0dG9ue1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogVG9kbyBDaGVja2JveCAqL1xcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMXJlbSAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUI4QzM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCBzdmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogM3B4O1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogd2hpdGU7XFxuICBzdHJva2Utd2lkdGg6IDI7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTZweDtcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxNnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICM1MDZFRUM7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHNwYW46bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWw6aG92ZXIgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItY29sb3I6ICMzYzUzYzc7XFxufVxcblxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWNvbG9yOiAjM2M1M2M3O1xcbiAgYmFja2dyb3VuZDogIzNjNTNjNztcXG4gIGFuaW1hdGlvbjogY2hlY2stMTUgMC42cyBlYXNlO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHN2ZyB7XFxuICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjIpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46bGFzdC1jaGlsZCB7XFxuICBjb2xvcjogI0I5QjhDMztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbkBrZXlmcmFtZXMgY2hlY2stMTUge1xcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgfVxcbn1cXG5cXG4vKiBUb2FzdCBOb3RpZmljYXRpb24gKi9cXG4udG9hc3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLnRvYXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7O1xcbiAgY29sb3I6ICMzMzM7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2hvdy10b2FzdCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG4vKiBBZGQgdGhlc2UgQ1NTIHJ1bGVzIHRvIGVuYWJsZSBkcmFnZ2luZyAqL1xcbi5kcmFnZ2FibGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vbm90aWZpY2F0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XG4gIHN0YXRpYyBjdXJyZW50VG9kbyA9IG51bGw7XG4gIHN0YXRpYyBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIubG9hZFByb2plY3RzKCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3RzKClbMF0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXByb2plY3QtbmFtZScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdC1uYW1lLXNlbGVjdGVkJyk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIuaW5pdFByb2plY3RCdXR0b25zKCk7XG4gICAgXG4gIH1cblxuICBzdGF0aWMgbG9hZFByb2plY3RzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy1jb250YWluZXInKS5pbm5lckhUTUw9Jyc7XG4gICAgU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT5EaXNwbGF5Q29udHJvbGxlci5hZGRQcm9qZWN0QnV0dG9ucyhwcm9qZWN0KSk7XG4gIH1cblxuICBzdGF0aWMgb3BlblByb2plY3QocHJvamVjdCkge1xuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRQcm9qZWN0TmFtZShwcm9qZWN0KTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5sb2FkRWRpdFByb2plY3RCdXR0b24oKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5sb2FkRGVsZXRlUHJvamVjdEJ1dHRvbigpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdCk7ICAgIFxuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRQcm9qZWN0VG9kb0xpc3QocHJvamVjdCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKS5nZXRQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCk7XG4gIH1cbiAgXG4gIHN0YXRpYyBsb2FkUHJvamVjdE5hbWUocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgcHJvamVjdE5hbWUuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpO1xuICB9XG4gIFxuICBzdGF0aWMgbG9hZEVkaXRQcm9qZWN0QnV0dG9uKCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWJ1dHRvbnMnKTtcbiAgICBjb25zdCBleGlzdGluZ0VkaXRCdXR0b24gPSBwcm9qZWN0TmFtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1lZGl0LWljb24nKTtcbiAgICBjb25zdCBwcm9qZWN0RWRpdFNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1lZGl0LXNhdmUtaWNvbicpO1xuICAgIFxuICAgIGlmIChwcm9qZWN0RWRpdFNhdmVCdXR0b24pIHtcbiAgICAgIHByb2plY3RFZGl0U2F2ZUJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvamVjdE5hbWVzVG9FeGNsdWRlID0gWydJbmJveCcsICdUaGlzIFdlZWsnLCAnVG9kYXknXTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBpZiAocHJvamVjdE5hbWVzVG9FeGNsdWRlLmluY2x1ZGVzKHByb2plY3ROYW1lKSkge1xuICAgICAgLy8gUHJvamVjdCBuYW1lIGlzIG9uZSBvZiB0aGUgc3BlY2lmaWVkIG9uZXMsIGRvIG5vdGhpbmdcbiAgICAgIGlmIChleGlzdGluZ0VkaXRCdXR0b24pIHtcbiAgICAgICAgZXhpc3RpbmdFZGl0QnV0dG9uLnJlbW92ZSgpOyAvLyBSZW1vdmUgZWRpdCBidXR0b24gaWYgaXQgZXhpc3RzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZXhpc3RpbmdFZGl0QnV0dG9uKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIGVkaXQgYnV0dG9uIG9ubHkgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgICAgICBjb25zdCBwcm9qZWN0RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcm9qZWN0RWRpdEJ1dHRvbi5zcmMgPSAnLi9pbWcvZWRpdC1pY29uLnN2Zyc7XG4gICAgICAgIHByb2plY3RFZGl0QnV0dG9uLnRpdGxlID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3RFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdC1pY29uJyk7XG4gICAgICAgIHByb2plY3RFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRWRpdFByb2plY3RCdXR0b24pO1xuICAgICAgICBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBzdGF0aWMgbG9hZERlbGV0ZVByb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnV0dG9ucycpO1xuICAgIGNvbnN0IGV4aXN0aW5nRGVsZXRlQnV0dG9uID0gcHJvamVjdE5hbWVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVsZXRlLWljb24nKTtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBwcm9qZWN0IG5hbWUgaXMgb25lIG9mIHRoZSBzcGVjaWZpZWQgb25lc1xuICAgIGNvbnN0IHByb2plY3ROYW1lc1RvRXhjbHVkZSA9IFsnSW5ib3gnLCAnVGhpcyBXZWVrJywgJ1RvZGF5J107XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQ7XG4gICAgXG4gICAgaWYgKHByb2plY3ROYW1lc1RvRXhjbHVkZS5pbmNsdWRlcyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgIC8vIFByb2plY3QgbmFtZSBpcyBvbmUgb2YgdGhlIHNwZWNpZmllZCBvbmVzLCBkbyBub3RoaW5nXG4gICAgICBpZiAoZXhpc3RpbmdEZWxldGVCdXR0b24pIHtcbiAgICAgICAgZXhpc3RpbmdEZWxldGVCdXR0b24ucmVtb3ZlKCk7IC8vIFJlbW92ZSBkZWxldGUgYnV0dG9uIGlmIGl0IGV4aXN0c1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICghZXhpc3RpbmdEZWxldGVCdXR0b24pIHtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgZGVsZXRlIGJ1dHRvbiBvbmx5IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLnNyYyA9ICcuL2ltZy9kZWxldGUtaWNvbi5zdmcnO1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLnRpdGxlID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1pY29uJyk7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVEZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBzdGF0aWMgaGFuZGxlRWRpdFByb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1idXR0b25zJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3RFZGl0U2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWVkaXQtc2F2ZS1pY29uJyk7XG4gICAgXG4gICAgaWYgKCFleGlzdGluZ1Byb2plY3RFZGl0U2F2ZUJ1dHRvbikge1xuICAgICAgY29uc3QgcHJvamVjdEVkaXRTYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBwcm9qZWN0RWRpdFNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0LXNhdmUtaWNvbicpO1xuICAgICAgcHJvamVjdEVkaXRTYXZlQnV0dG9uLnNyYyA9ICcuL2ltZy9zYXZlLWljb24uc3ZnJztcbiAgICAgIHByb2plY3RFZGl0U2F2ZUJ1dHRvbi50aXRsZSA9ICdTYXZlIENoYW5nZXMnO1xuICAgICAgcHJvamVjdEVkaXRTYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlUHJvamVjdEVkaXRTYXZlQnV0dG9uKGN1cnJlbnRQcm9qZWN0TmFtZSkpO1xuICAgICAgcHJvamVjdEJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRTYXZlQnV0dG9uKTtcbiAgICAgIFxuICB9XG4gIFxuICBcbiAgcHJvamVjdE5hbWUuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICBwcm9qZWN0RGVzY3JpcHRpb24uY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICBwcm9qZWN0TmFtZS5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHByb2plY3REZXNjcmlwdGlvbi5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2VkaXRhYmxlJyk7XG4gIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpO1xuICBcbiAgXG4gIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhwcm9qZWN0RGVzY3JpcHRpb24pO1xuICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIFxuICAgIGxldCByYW5nZTIgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlMi5zZWxlY3ROb2RlQ29udGVudHMocHJvamVjdE5hbWUpO1xuICAgIHJhbmdlMi5jb2xsYXBzZShmYWxzZSk7XG4gICAgbGV0IHNlbGVjdGlvbjIgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgc2VsZWN0aW9uMi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24yLmFkZFJhbmdlKHJhbmdlMik7XG4gIH1cbiAgXG4gIFxuICBzdGF0aWMgaGFuZGxlRGVsZXRlUHJvamVjdEJ1dHRvbigpIHtcbiAgICBTdG9yYWdlLnJlbW92ZVByb2plY3QoRGlzcGxheUNvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKS5nZXROYW1lKCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcbiAgICBEaXNwbGF5Q29udHJvbGxlci5sb2FkUHJvamVjdHMoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5vcGVuUHJvamVjdChTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZ2V0UHJvamVjdHMoKVswXSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBoYW5kbGVQcm9qZWN0RWRpdFNhdmVCdXR0b24oY3VycmVudFByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJyk7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBTdG9yYWdlLmVkaXRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZSwgcHJvamVjdE5hbWUudGV4dENvbnRlbnQsIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIubG9hZFByb2plY3RzKCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3QocHJvamVjdE5hbWUudGV4dENvbnRlbnQpKTtcbiAgfVxuICBcbiAgc3RhdGljIGxvYWRQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0YWJsZScpO1xuICB9XG4gIFxuICBzdGF0aWMgbG9hZFByb2plY3RUb2RvTGlzdChwcm9qZWN0KSB7XG4gICAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvTGlzdC1jb250YWluZXInKTtcbiAgICB0b2RvTGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHByb2plY3QuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgdGhlIG91dGVyIGRpdiBlbGVtZW50XG4gICAgICBjb25zdCBjaGVja2JveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNoZWNrYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC13cmFwcGVyJyk7XG4gICAgICBcbiAgICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZWxlbWVudFxuICAgICAgY29uc3QgY2hlY2tib3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBjaGVja2JveElucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWlucHV0Jyk7XG4gICAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgY2hlY2tib3hJbnB1dC5jaGVja2VkID0gdG9kby5nZXRDaGVja1N0YXR1cygpO1xuICAgICAgY2hlY2tib3hJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY2hlY2tib3hJbnB1dC5pZCA9IHRvZG8uZ2V0TmFtZSgpO1xuICAgICAgY2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVRvZ2dsZUNoZWNrKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBsYWJlbCBlbGVtZW50XG4gICAgICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtbGFiZWwnKTtcbiAgICAgIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0b2RvLmdldE5hbWUoKSk7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZmlyc3Qgc3BhbiBlbGVtZW50IGluc2lkZSB0aGUgbGFiZWxcbiAgICAgIGNvbnN0IGNoZWNrYm94U3ZnV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBzdmcgZWxlbWVudCBpbnNpZGUgdGhlIGZpcnN0IHNwYW5cbiAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMnB4Jyk7XG4gICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzlweCcpO1xuICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDEyIDknKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBwb2x5bGluZSBlbGVtZW50IGluc2lkZSB0aGUgc3ZnXG4gICAgICBjb25zdCBwb2x5bGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBvbHlsaW5lXCIpO1xuICAgICAgcG9seWxpbmVFbGVtZW50LnNldEF0dHJpYnV0ZSgncG9pbnRzJywgJzEgNSA0IDggMTEgMScpO1xuXG4gICAgICAvLyBBcHBlbmQgdGhlIHBvbHlsaW5lIHRvIHRoZSBzdmcsIGFuZCBzdmcgdG8gdGhlIGZpcnN0IHNwYW5cbiAgICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQocG9seWxpbmVFbGVtZW50KTtcbiAgICAgIGNoZWNrYm94U3ZnV3JhcHBlci5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBzZWNvbmQgc3BhbiBlbGVtZW50IGluc2lkZSB0aGUgbGFiZWxcbiAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItbmFtZScpO1xuICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSB0b2RvLmdldE5hbWUoKTtcblxuICAgICAgLy8gQXBwZW5kIHNwYW5zIHRvIHRoZSBsYWJlbFxuICAgICAgY2hlY2tib3hMYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveFN2Z1dyYXBwZXIpO1xuICAgICAgY2hlY2tib3hMYWJlbC5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG5cbiAgICAgIC8vIEFwcGVuZCBpbnB1dCBhbmQgbGFiZWwgdG8gdGhlIG91dGVyIGRpdlxuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94SW5wdXQpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpO1xuICAgICBcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZWRpdC1idXR0b24nKTtcbiAgICAgIGVkaXRCdXR0b24uc3JjID0gJy4vaW1nL2VkaXQtaWNvbi5zdmcnO1xuICAgICAgZWRpdEJ1dHRvbi50aXRsZSA9ICdFZGl0IFRvZG8nO1xuICAgICAgZWRpdEJ1dHRvbi5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpc3BsYXlDb250cm9sbGVyLmhhbmRsZUVkaXRUb2RvQ29udGFpbmVyQnV0dG9uKTtcblxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbicpO1xuICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9ICcuL2ltZy9kZWxldGUtaWNvbi5zdmcnO1xuICAgICAgZGVsZXRlQnV0dG9uLnRpdGxlID0gJ0RlbGV0ZSBUb2RvJztcbiAgICAgIGRlbGV0ZUJ1dHRvbi5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmhhbmRsZURlbGV0ZVRvZG9CdXR0b24pO1xuXG4gICAgICBjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1leHBhbmQtYnV0dG9uJyk7XG4gICAgICBleHBhbmRCdXR0b24uc3JjID0gJy4vaW1nL2V4cGFuZC1tb3JlLWljb24uc3ZnJztcbiAgICAgIGV4cGFuZEJ1dHRvbi50aXRsZSA9ICdFeHBhbmQgVG9kbyc7XG4gICAgICBleHBhbmRCdXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVFeHBhbmRUb2RvQnV0dG9uKTtcbiAgICAgIFxuICAgICAgY29uc3QgZHJhZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgZHJhZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1kcmFnLWJ1dHRvbicpO1xuICAgICAgZHJhZ0J1dHRvbi5zcmMgPSAnLi9pbWcvZHJhZy1pY29uLnN2Zyc7XG4gICAgICBkcmFnQnV0dG9uLnRpdGxlID0gJ0RyYWcgVG9kbyc7XG4gICAgICBkcmFnQnV0dG9uLmRyYWdnYWJsZSA9IGZhbHNlO1xuXG5cbiAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyLWRlc2NyaXB0aW9uJyk7XG4gICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgICBcbiAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcbiAgICAgIHRvZG9Db250YWluZXIuZGF0YXNldC5wcmlvcml0eSA9IHRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgICAgIHRvZG9Db250YWluZXIuZGF0YXNldC50b2RvTmFtZSA9IHRvZG8uZ2V0TmFtZSgpOyBcbiAgICAgIHRvZG9Db250YWluZXIuZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoY2hlY2tib3hXcmFwcGVyLGVkaXRCdXR0b24sZGVsZXRlQnV0dG9uLGV4cGFuZEJ1dHRvbixkcmFnQnV0dG9uLHRvZG9EZXNjcmlwdGlvbik7XG5cbiAgICAgIHRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICAgIERpc3BsYXlDb250cm9sbGVyLmluaXREcmFnQW5kRHJvcCgpOyBcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVUb2dnbGVDaGVjaygpIHtcbiAgICBTdG9yYWdlLnRvZG9Ub2dnbGVDaGVja1N0YXR1cyhEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLCB0aGlzLmlkKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0LW5hbWUnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1uZXctcHJvamVjdCcpO1xuICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKTtcblxuICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKHByb2plY3RCdXR0b24pID0+IHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVByb2plY3RCdXR0b25zKSk7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmNyZWF0ZU5ld1Byb2plY3QpO1xuICAgIG5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5jcmVhdGVOZXdUb2RvKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0LW5hbWUnKS5mb3JFYWNoKChpdGVtKT0+aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLXByb2plY3QtbmFtZS1zZWxlY3RlZCcpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdC1uYW1lLXNlbGVjdGVkJyk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3QodGhpcy50ZXh0Q29udGVudCkpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0Q3JlYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lcicpO1xuICBcbiAgICBpZiAoIWV4aXN0aW5nUHJvamVjdENyZWF0ZUNvbnRhaW5lcikge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNvbnN0IHNhdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBcbiAgICAgIHByb2plY3RDb250YWluZXJJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgc2F2ZVByb2plY3RCdXR0b24uc3JjID0gJy4vaW1nL2NoZWNrLWljb24uc3ZnJztcbiAgICAgIGNhbmNlbFByb2plY3RCdXR0b24uc3JjID0gJy4vaW1nL2NhbmNlbC1pY29uLnN2Zyc7XG4gICAgICBwcm9qZWN0Q29udGFpbmVySW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXItaW5wdXQnKTtcbiAgICAgIHNhdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyLXNhdmUtYnV0dG9uJyk7XG4gICAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyLWNhbmNlbC1idXR0b24nKTtcbiAgICAgIHByb2plY3RDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jcmVhdGUtY29udGFpbmVyJyk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyRGl2LmFwcGVuZChwcm9qZWN0Q29udGFpbmVySW5wdXQsIHNhdmVQcm9qZWN0QnV0dG9uLCBjYW5jZWxQcm9qZWN0QnV0dG9uKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1jb250YWluZXInKS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyRGl2KTsgICAgXG4gICAgICBwcm9qZWN0Q29udGFpbmVySW5wdXQuZm9jdXMoKTtcbiAgICAgIFxuICAgICAgc2F2ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVTYXZlUHJvamVjdEJ1dHRvbik7XG4gICAgICBcbiAgICAgIGNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lckRpdi5yZW1vdmUoKTtcbiAgICAgIH0pOyBcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmdQcm9qZWN0Q3JlYXRlQ29udGFpbmVyLmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIFxuICBzdGF0aWMgaGFuZGxlU2F2ZVByb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyLWlucHV0JykudmFsdWU7XG4gICAgXG4gICAgaWYgKHByb2plY3ROYW1lLnRleHRDb250ZW50KSB7XG4gICAgICBjb25zdCBvdXRwdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdC1uYW1lJyk7XG5cbiAgICAgIGRlbGV0ZVByb2plY3Quc3JjID0gJy4vaW1nL2RlbGV0ZS1pY29uLnN2Zyc7XG4gICAgICBkZWxldGVQcm9qZWN0LnRpdGxlID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LWRlbGV0ZS1pY29uJyk7XG4gICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVEZWxldGVTaWRlYmFyUHJvamVjdEJ1dHRvbik7XG4gICAgICBvdXRwdXREaXYuYXBwZW5kKHByb2plY3ROYW1lLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgIHByb2plY3RDb250YWluZXJEaXYucmVwbGFjZVdpdGgob3V0cHV0RGl2KTtcbiAgICAgIG91dHB1dERpdi5jbGFzc05hbWUgPSAnc2lkZWJhci11c2VyLXByb2plY3Qgc2lkZWJhci1wcm9qZWN0LWJ1dHRvbic7XG4gICAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVByb2plY3RCdXR0b25zKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXByb2plY3QtbmFtZScpLmZvckVhY2goKGl0ZW0pPT5pdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItcHJvamVjdC1uYW1lLXNlbGVjdGVkJykpO1xuICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LW5hbWUtc2VsZWN0ZWQnKTtcbiAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChuZXcgUHJvamVjdChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCkpO1xuICAgICAgRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3QocHJvamVjdE5hbWUudGV4dENvbnRlbnQpKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdEJ1dHRvbnMocHJvamVjdCkge1xuICAgIGNvbnN0IG91dHB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXByb2plY3QtbmFtZScpO1xuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlUHJvamVjdEJ1dHRvbnMpOyBcblxuICAgIGlmIChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCAhPT0gJ0luYm94JyAmJiBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCAhPT0gJ1RvZGF5JyAmJiBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCAhPT0gJ1RoaXMgV2VlaycpIHtcbiAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGRlbGV0ZVByb2plY3Quc3JjID0gJy4vaW1nL2RlbGV0ZS1pY29uLnN2Zyc7XG4gICAgICBkZWxldGVQcm9qZWN0LnRpdGxlID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LWRlbGV0ZS1pY29uJyk7XG4gICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVEZWxldGVTaWRlYmFyUHJvamVjdEJ1dHRvbik7XG4gICAgICBvdXRwdXREaXYuYXBwZW5kKHByb2plY3ROYW1lLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgIG91dHB1dERpdi5jbGFzc05hbWUgPSAnc2lkZWJhci11c2VyLXByb2plY3Qgc2lkZWJhci1wcm9qZWN0LWJ1dHRvbic7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3V0cHV0RGl2LmFwcGVuZChwcm9qZWN0TmFtZSk7XG4gICAgICBvdXRwdXREaXYuY2xhc3NOYW1lID0gJ3NpZGViYXItZGVmYXVsdC1wcm9qZWN0IHNpZGViYXItcHJvamVjdC1idXR0b24nO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQob3V0cHV0RGl2KTsgXG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRGVsZXRlU2lkZWJhclByb2plY3RCdXR0b24oKSB7XG4gICAgU3RvcmFnZS5yZW1vdmVQcm9qZWN0KFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKS5nZXRQcm9qZWN0KHRoaXMucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50KS5nZXROYW1lKCkpO1xuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5vcGVuUHJvamVjdChTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZ2V0UHJvamVjdHMoKVswXSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTmV3VG9kbygpIHtcbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb01vZGFsJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLW5hbWUnKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eScpO1xuICAgIGNvbnN0IHNhdmVUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtdG9kby1idXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC10b2RvLWJ1dHRvbicpO1xuICAgIHRvZG9DcmVhdGVDb250YWluZXJOYW1lLmZvY3VzKCk7XG4gICAgdG9kb01vZGFsLnNob3dNb2RhbCgpO1xuICAgIFxuICAgIHNhdmVUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVTYXZlVG9kb0J1dHRvbik7XG4gICAgXG4gICAgY2FuY2VsVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgIHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgdG9kb01vZGFsLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlU2F2ZVRvZG9CdXR0b24oZSkge1xuICAgIGxldCBjdXJyZW50VG9kbyA9IERpc3BsYXlDb250cm9sbGVyLmN1cnJlbnRUb2RvO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb01vZGFsJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUgPSB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1uYW1lJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkgPSB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eScpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IERpc3BsYXlDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgaWYgKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBOb3RpZmljYXRpb25Db250cm9sbGVyLnNob3dUb2FzdCgnVG9kbyBuYW1lIG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGN1cnJlbnRUb2RvID09PSBudWxsKSB7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5nZXRUb2RvKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKSAhPT0gdW5kZWZpbmVkICYmIGN1cnJlbnRQcm9qZWN0LmdldFRvZG8odG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUpLmdldENoZWNrU3RhdHVzKCk9PT1mYWxzZSkge1xuICAgICAgICAgIE5vdGlmaWNhdGlvbkNvbnRyb2xsZXIuc2hvd1RvYXN0KCdUb2RvIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb0RvKCk7XG4gICAgICAgICAgdG9kby5zZXROYW1lKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKTtcbiAgICAgICAgICB0b2RvLnNldERlc2NyaXB0aW9uKHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSlcbiAgICAgICAgICB0b2RvLnNldFByaW9yaXR5KHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSlcbiAgICAgICAgICBTdG9yYWdlLmFkZFRvZG8oY3VycmVudFByb2plY3QsdG9kbyk7XG4gICAgICAgICAgdG9kb01vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50VG9kby5nZXROYW1lKCkgIT09IHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LmdldFRvZG8odG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUpICE9PSB1bmRlZmluZWQgJiYgY3VycmVudFByb2plY3QuZ2V0VG9kbyh0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSkuZ2V0Q2hlY2tTdGF0dXMoKT09PWZhbHNlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbkNvbnRyb2xsZXIuc2hvd1RvYXN0KCdUb2RvIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBTdG9yYWdlLmVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0LGN1cnJlbnRUb2RvLmdldE5hbWUoKSx0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSx0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUsdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgICAgIHRvZG9Nb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgICAgICAgICBEaXNwbGF5Q29udHJvbGxlci5jdXJyZW50VG9kbyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIFN0b3JhZ2UuZWRpdFRvZG8oY3VycmVudFByb2plY3QsY3VycmVudFRvZG8uZ2V0TmFtZSgpLHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlLHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSx0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUpO1xuICAgICAgICAgIHRvZG9Nb2RhbC5jbG9zZSgpO1xuICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgICAgICAgRGlzcGxheUNvbnRyb2xsZXIuY3VycmVudFRvZG8gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRQcm9qZWN0VG9kb0xpc3QoRGlzcGxheUNvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRWRpdFRvZG9Db250YWluZXJCdXR0b24oKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gRGlzcGxheUNvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBjdXJyZW50VG9kbyA9IGN1cnJlbnRQcm9qZWN0LmdldFRvZG8odGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lci1uYW1lJykudGV4dENvbnRlbnQpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmN1cnJlbnRUb2RvID0gY3VycmVudFRvZG87XG4gICAgY29uc3QgdG9kb05hbWUgPSBjdXJyZW50VG9kby5nZXROYW1lKCk7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gY3VycmVudFRvZG8uZ2V0RGVzY3JpcHRpb24oKTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBjdXJyZW50VG9kby5nZXRQcmlvcml0eSgpO1xuXG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9Nb2RhbCcpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJOYW1lID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItbmFtZScpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbiA9IHRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5ID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItcHJpb3JpdHknKTtcbiAgICBjb25zdCBzYXZlVG9kb0J1dHRvbiA9IHRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS10b2RvLWJ1dHRvbicpO1xuICAgIFxuICAgIHRvZG9Nb2RhbC5zaG93TW9kYWwoKTtcbiAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSA9IHRvZG9OYW1lO1xuICAgIHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG9EZXNjcmlwdGlvbjtcbiAgICB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUgPSB0b2RvUHJpb3JpdHk7XG4gICAgXG4gICAgc2F2ZVRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVNhdmVUb2RvQnV0dG9uKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVEZWxldGVUb2RvQnV0dG9uKCkge1xuICAgIFN0b3JhZ2UucmVtb3ZlVG9kbyhEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XG4gICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIC8vIERpc3BsYXlDb250cm9sbGVyLm9wZW5Qcm9qZWN0KERpc3BsYXlDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICB9XG4gIFxuICBzdGF0aWMgaGFuZGxlRXhwYW5kVG9kb0J1dHRvbigpIHtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSB0aGlzLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWQnKSl7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgndG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZCcpO1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24taGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2RvLWRlc2NyaXB0aW9uLWhpZGRlbicpO1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWQnKTtcbiAgICB9IFxuICB9XG4gIFxuICBzdGF0aWMgaW5pdERyYWdBbmREcm9wKCkge1xuICBjb25zdCB0b2RvQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWNvbnRhaW5lcicpO1xuICBcbiAgdG9kb0NvbnRhaW5lcnMuZm9yRWFjaCgodG9kb0NvbnRhaW5lcikgPT4ge1xuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICB0b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRHJhZ092ZXIpO1xuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIERpc3BsYXlDb250cm9sbGVyLmhhbmRsZURyb3ApO1xuICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLnRhcmdldC5kYXRhc2V0LnRvZG9OYW1lKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZURyYWdPdmVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRHJvcChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdG9kb05hbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gIGNvbnN0IGRyb3BwZWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2RvLW5hbWU9XCIke3RvZG9OYW1lfVwiXWApO1xuICBcbiAgaWYgKGRyb3BwZWRDb250YWluZXIgIT09IHRoaXMpIHtcbiAgICBjb25zdCBjb250YWluZXJQYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgZHJhZ2dlZEluZGV4ID0gQXJyYXkuZnJvbShjb250YWluZXJQYXJlbnQuY2hpbGRyZW4pLmluZGV4T2YoZHJvcHBlZENvbnRhaW5lcik7XG4gICAgY29uc3QgZHJvcEluZGV4ID0gQXJyYXkuZnJvbShjb250YWluZXJQYXJlbnQuY2hpbGRyZW4pLmluZGV4T2YodGhpcyk7XG5cbiAgICBpZiAoZHJvcEluZGV4IDwgZHJhZ2dlZEluZGV4KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRyb3AgaW5kZXggaXMgbGVzcyB0aGFuIHBpY2sgaW5kZXhcIik7XG4gICAgICBjb250YWluZXJQYXJlbnQuaW5zZXJ0QmVmb3JlKGRyb3BwZWRDb250YWluZXIsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXJQYXJlbnQuaW5zZXJ0QmVmb3JlKGRyb3BwZWRDb250YWluZXIsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIHByb2plY3QncyB0b2RvIGxpc3RcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IERpc3BsYXlDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY29uc3QgdXBkYXRlZFRvZG9MaXN0ID0gWy4uLmN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCldO1xuICAgIGNvbnN0IG1vdmVkVG9kbyA9IHVwZGF0ZWRUb2RvTGlzdC5maW5kKHRvZG8gPT4gdG9kby5nZXROYW1lKCkgPT09IHRvZG9OYW1lKTtcbiAgICBcbiAgICB1cGRhdGVkVG9kb0xpc3Quc3BsaWNlKHVwZGF0ZWRUb2RvTGlzdC5pbmRleE9mKG1vdmVkVG9kbyksIDEpO1xuICAgIHVwZGF0ZWRUb2RvTGlzdC5zcGxpY2UoQXJyYXkuZnJvbShjb250YWluZXJQYXJlbnQuY2hpbGRyZW4pLmluZGV4T2YoZHJvcHBlZENvbnRhaW5lciksIDAsIG1vdmVkVG9kbyk7XG4gICAgY3VycmVudFByb2plY3Quc2V0VG9kb0xpc3QodXBkYXRlZFRvZG9MaXN0KTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgcHJvamVjdCBkYXRhIGluIFN0b3JhZ2VcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdHMgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSA9PT0gY3VycmVudFByb2plY3QuZ2V0TmFtZSgpKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH0pO1xuICAgIHByb2plY3RMaXN0LnNldFByb2plY3RzKHVwZGF0ZWRQcm9qZWN0cyk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICB9XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbn1cblxuXG5cblxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RpZmljYXRpb25Db250cm9sbGVye1xuICBzdGF0aWMgc2hvd1RvYXN0KG1lc3NhZ2UpIHtcbiAgICBjb25zdCB0b2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9hc3RcIik7XG4gICAgdG9hc3QudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoXCJzaG93LXRvYXN0XCIpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHRvYXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LXRvYXN0XCIpO1xuICAgIH0sIDMwMDApOyAvLyBIaWRlIGFmdGVyIDMgc2Vjb25kc1xufVxufSIsImltcG9ydCBUb0RvIGZyb20gXCIuL3RvZG9cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gYEtlZXAgVGhlIHRhbGsgYW5kIHRoZSBzbGlkZXMgc2ltcGxlOiB3aGF0IGFyZSB0aGUgdGhyZWUgdGhpbmdzIGFib3V0IHRoZXNlIHRoYXQgZXZlcnlvbmUgc2hvdWxkIHJlbWVtYmVyP2A7XG4gICAgdGhpcy50b2RvTGlzdCA9IFtdO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXRUb2RvTGlzdCh0b2RvTGlzdCkge1xuICAgIHRoaXMudG9kb0xpc3QgPSB0b2RvTGlzdDtcbiAgfVxuXG4gIGdldFRvZG9MaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnRvZG9MaXN0O1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgdGhpcy50b2RvTGlzdC5wdXNoKHRvZG8pO1xuICB9XG5cbiAgcmVtb3ZlVG9kbyh0b2RvKSB7XG4gICAgdGhpcy5zZXRUb2RvTGlzdCh0aGlzLnRvZG9MaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMuZ2V0VG9kbyh0b2RvKSkpO1xuICB9XG5cbiAgZ2V0VG9kbyh0b2RvTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRvZG9MaXN0LmZpbmQoKHRvZG8pID0+IHRvZG8uZ2V0TmFtZSgpID09PSB0b2RvTmFtZSk7XG4gIH1cbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnKSk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb2RheScpKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RoaXMgV2VlaycpKTtcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5zZXRQcm9qZWN0cyh0aGlzLnByb2plY3RzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkpKTtcbiAgfVxuXG4gIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9XG5cbiAgXG59IiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2V7XG4gIHN0YXRpYyBzYXZlUHJvamVjdExpc3QoZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgUHJvamVjdExpc3QoKSxcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RMaXN0JykpXG4gICAgKTtcbiAgICBwcm9qZWN0TGlzdC5zZXRQcm9qZWN0cyhcbiAgICAgIHByb2plY3RMaXN0LmdldFByb2plY3RzKCkubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICk7XG4gICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNldFRvZG9MaXN0KHByb2plY3QuZ2V0VG9kb0xpc3QoKS5tYXAoKHRvZG8pID0+IE9iamVjdC5hc3NpZ24obmV3IFRvRG8oKSwgdG9kbykpKSk7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIHByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICB9XG4gIHN0YXRpYyByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBTdG9yYWdlLmdldFByb2plY3RMaXN0KCk7XG4gICAgcHJvamVjdExpc3QucmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICB9XG4gIHN0YXRpYyBhZGRUb2RvKHByb2plY3QsIHRvZG8pIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KHByb2plY3QuZ2V0TmFtZSgpKS5hZGRUb2RvKHRvZG8pO1xuICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcbiAgfVxuICBzdGF0aWMgcmVtb3ZlVG9kbyhwcm9qZWN0LCB0b2RvKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBTdG9yYWdlLmdldFByb2plY3RMaXN0KCk7XG4gICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSkucmVtb3ZlVG9kbyh0b2RvKTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cbiAgc3RhdGljIGVkaXRQcm9qZWN0KHByb2plY3ROYW1lLG5ld05hbWUsbmV3RGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBsZXQgdGVtcFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICB0ZW1wUHJvamVjdC5zZXROYW1lKG5ld05hbWUpO1xuICAgIHRlbXBQcm9qZWN0LnNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cbiAgc3RhdGljIGVkaXRUb2RvKHByb2plY3QsIHRvZG9OYW1lLG5ld05hbWUsbmV3RGVzY3JpcHRpb24sbmV3UHJpb3JpdHkpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBsZXQgdGVtcFRvZG8gPSBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KHByb2plY3QuZ2V0TmFtZSgpKS5nZXRUb2RvKHRvZG9OYW1lKTtcbiAgICB0ZW1wVG9kby5zZXROYW1lKG5ld05hbWUpO1xuICAgIHRlbXBUb2RvLnNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICB0ZW1wVG9kby5zZXRQcmlvcml0eShuZXdQcmlvcml0eSk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICB9XG5cbiAgc3RhdGljIHRvZG9Ub2dnbGVDaGVja1N0YXR1cyhwcm9qZWN0LCB0b2RvTmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIGxldCB0ZW1wVG9kbyA9IHByb2plY3RMaXN0LmdldFByb2plY3QocHJvamVjdC5nZXROYW1lKCkpLmdldFRvZG8odG9kb05hbWUpO1xuICAgIHRlbXBUb2RvLnRvZ2dsZUNoZWNrU3RhdHVzKCk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2hlY2sgPSBmYWxzZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXREdWVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gdmFsdWU7XG4gIH1cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG5cbiAgc2V0UHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbiAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gIH1cblxuICBnZXRDaGVja1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVjaztcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrU3RhdHVzKCkge1xuICAgIHRoaXMuY2hlY2sgPSAhdGhpcy5jaGVjaztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IERpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbkRpc3BsYXlDb250cm9sbGVyLmxvYWRIb21lUGFnZSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=