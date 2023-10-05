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
  grid-template-rows: 2rem 1fr;
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
  grid-column: 1/span 3;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&family=Ubuntu:wght@400;500;700&display=swap\");\n\n:root {\n  --primary-white: #ffffff;\n  --accent-color: #146cc4;\n  --primary-gray: #f4f4f4;\n  --secondary-gray: #505050;\n  --primary-red: #ff0000;\n}\n\n/* Default Styles */\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml,body {\n  height: 100%;\n  width: 100%;\n}\nbody {\n  font-family: \"Ubuntu\", sans-serif;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n/* Sidebar Styles */\n.sidebar {\n  background-color: var(--primary-gray);\n}\n.projects {\n  margin: 6rem 0rem;\n  margin-left: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.sidebar-default-project:nth-child(3){\n  padding-bottom: 1rem;\n  border-bottom: 2px solid rgb(204, 204, 204);\n}\n.sidebar-project-button {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1rem;\n}\n.sidebar-project-name{\n  padding: 5px 10px;\n  border-radius: 1rem;\n  transition: all 0.5s ease;\n}\n.sidebar-project-name:hover{\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n}\n.sidebar-project-name-selected{\n  background-color: var(--accent-color);\n  color: var(--primary-white);\n}\n.sidebar-project-delete-icon{\n  opacity: 0;\n  transition: 0.5s ease;\n}\n.sidebar-project-button:hover .sidebar-project-delete-icon{\n  opacity: 1;\n}\n.project-create-container {\n  display: flex;\n  justify-content: space-between;\n}\n.project-create-container > input {\n  font-size: 1rem;\n  width: 70%;\n  padding: 0.2rem;\n  border: none;\n  color: var(--secondary-gray);\n  outline: none;\n}\n.project-create-container > button {\n  width: 1.5rem;\n  height: 1.5rem;\n  border: none;\n}\n.create-new-project-button {\n  border: none;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 2rem;\n  background-color: var(--accent-color);\n  cursor: pointer;\n  position: fixed;\n  bottom: 1rem;\n  left: 1rem;\n}\n\n/* Project Page */\n.main {\n  background-color: var(--primary-white);\n  margin: 5rem;\n  margin-bottom: 1rem;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.project-name-container{\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.project-name {\n  font-size: 2rem;\n  font-weight: 500;\n  color: var(--accent-color);\n  margin-right: 2rem;\n  word-wrap: break-word;\n  word-break: break-all;\n  max-width: 70%;\n}\n.project-description {\n  font-size: 1.05rem;\n  color: var(--secondary-gray);\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.project-buttons{\n  align-self: flex-start;\n  display: flex;\n  gap: 1rem;\n}\n.project-edit-icon,.project-delete-icon,.project-edit-save-icon{\n  cursor: pointer;\n}\n.editable {\n  outline: none;\n  width: fit-content;\n  border-bottom: 2px dashed var(--accent-color);\n}\n\n/* New Todo Button */\n#create-new-todo {\n  cursor: pointer;\n  width: 6rem;\n  padding: 0.5rem;\n  border-radius: 1rem;\n  text-align: center;\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n}\n\n/* Todo Modal */\n#todoModal {\n  border: none;\n  margin: auto;\n  width: 40rem;\n  aspect-ratio: 16/9;\n  border-radius: 1rem;\n}\n#todoModalForm {\n  height: 100%;\n  position: relative;\n}\n.todo-create-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: 0.5rem;\n  height: 100%;\n  padding: 1rem;\n}\n.todo-create-container-input {\n  font-size: 1rem;\n  width: 50%;\n  padding: 0.2rem;\n  border: none;\n  border-bottom: 1px solid var(--accent-color);\n  color: var(--secondary-gray);\n  outline: none;\n}\n.todo-create-container-input::placeholder {\n  color: var(--secondary-gray);\n  opacity: 0.6;\n  font-family: \"Inconsolata\", monospace;\n  font-style: italic;\n}\n#todo-create-container-priority{\n  width: 7rem;\n  outline: none;\n  border: none;\n  border-radius: 1rem;\n  padding: 0.3rem 1rem;\n  background-color: #146cc4;\n  color: #f1f1f1;\n  cursor: pointer;\n}\n.save-todo-button {\n  border: none;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  width: 5rem;\n  color: var(--primary-white);\n  background-color: var(--accent-color);\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  cursor: pointer;\n}\n.cancel-todo-button {\n  border: none;\n  border-radius: 1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--primary-white);\n  background-color: var(--primary-red);\n  position: absolute;\n  right: 0.5rem;\n  top: 0.5rem;\n  cursor: pointer;\n}\n.cancel-todo-button-icon {\n  height: 1rem;\n  width: 1rem;\n  opacity: 0;\n}\n.cancel-todo-button-icon:hover {\n  opacity: 1;\n}\n.project-todoList-container{\n  display: grid;\n  row-gap: 1rem;\n  max-height: 65%;\n  overflow-y: auto;\n  padding: 1rem 0;\n  scrollbar-width: thin; /* Set the width of the scrollbar */\n  scrollbar-color: transparent transparent;\n}\n.project-todoList-container:empty{\n  max-height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.project-todoList-container::-webkit-scrollbar {\n  display: none;\n}\n.project-todoList-container:hover::-webkit-scrollbar {\n  display: none;\n}\n\n/* Todo Container */\n.todo-container {\n  display: grid;\n  grid-template-columns: 1fr 1rem 1rem 1rem 1rem;\n  grid-template-rows: 2rem 1fr;\n  column-gap: 1.6rem;\n  align-items: center;\n  width: 60%;\n  padding: 0.5rem 1rem;\n  border-radius: 0 1rem 1rem 0;\n  cursor: move;\n  box-shadow: #959da533 0px 8px 24px;\n  border-left: 4px solid var(--priority-color);\n  transition: 1s ease;\n}\n.todo-container:hover{\n  box-shadow: #e7e2e259 0px 0px 15px 2px;\n}\n\n.todo-container[data-priority=\"low\"] {\n  --priority-color: green;\n}\n.todo-container[data-priority=\"medium\"] {\n  --priority-color: yellow;\n}\n.todo-container[data-priority=\"high\"] {\n  --priority-color: orange;\n}\n.todo-container[data-priority=\"critical\"] {\n  --priority-color: red;\n}\n\n.todo-container-name {\n  color: var(--secondary-gray);\n  font-size: 1rem;\n}\n.todo-container-description {\n  grid-column: 1/span 3;\n  text-align: justify;\n  color: var(--secondary-gray);\n  height: 0;\n  overflow: hidden;\n  transition: 0.2s ease-out;\n}\n.todo-description-hidden{\n  height: 0;\n}\n.todo-description-expanded{\n  padding: 1rem;\n  height: max-content;\n}\n.todo-container-edit-button, .todo-container-delete-button,.todo-container-expand-button{\n  cursor: pointer;\n  height: 1.3rem;\n  opacity: 0;\n  transition: 0.6s ease;\n}\n.todo-container:hover .todo-container-edit-button,.todo-container:hover .todo-container-delete-button,.todo-container:hover .todo-container-expand-button{\n  opacity: 1;\n}\n\n/* Todo Checkbox */\n.checkbox-wrapper .checkbox-label {\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n}\n.checkbox-wrapper .checkbox-label span {\n  display: inline-block;\n  vertical-align: middle;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper .checkbox-label span:first-child {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  transform: scale(1);\n  vertical-align: middle;\n  border: 1px solid #B9B8C3;\n  transition: all 0.2s ease;\n}\n.checkbox-wrapper .checkbox-label span:first-child svg {\n  position: absolute;\n  z-index: 1;\n  top: 5px;\n  left: 3px;\n  fill: none;\n  stroke: white;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 16px;\n  stroke-dashoffset: 16px;\n  transition: all 0.3s ease;\n  transition-delay: 0.1s;\n  transform: translate3d(0, 0, 0);\n}\n.checkbox-wrapper .checkbox-label span:first-child:before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: #506EEC;\n  display: block;\n  transform: scale(0);\n  opacity: 1;\n  border-radius: 50%;\n  transition-delay: 0.2s;\n}\n.checkbox-wrapper .checkbox-label span:last-child {\n  margin-left: 15px;\n}\n.checkbox-wrapper .checkbox-label span:last-child:after {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  left: 0;\n  height: 1px;\n  width: 100%;\n  background: #B9B8C3;\n  transform-origin: 0 0;\n  transform: scaleX(0);\n}\n.checkbox-wrapper .checkbox-label:hover span:first-child {\n  border-color: #3c53c7;\n}\n\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child {\n  border-color: #3c53c7;\n  background: #3c53c7;\n  animation: check-15 0.6s ease;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child svg {\n  stroke-dashoffset: 0;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:first-child:before {\n  transform: scale(2.2);\n  opacity: 0;\n  transition: all 0.6s ease;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:last-child {\n  color: #B9B8C3;\n  transition: all 0.3s ease;\n}\n.checkbox-wrapper .checkbox-input:checked + .checkbox-label span:last-child:after {\n  transform: scaleX(1);\n  transition: all 0.3s ease;\n}\n\n@keyframes check-15 {\n  50% {\n    transform: scale(1.2);\n  }\n}\n\n/* Toast Notification */\n.toast-container {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.toast {\n  background-color: #f0ad4e;;\n  color: #333;\n  padding: 10px 20px;\n  border-radius: 5px;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n.show-toast {\n  opacity: 1;\n}\n\n\n/* Add these CSS rules to enable dragging */\n.draggable {\n  cursor: move;\n}\n\n.draggable.dragging {\n  position: absolute;\n  z-index: 1000;\n  opacity: 0.8;\n  box-shadow: none;\n}\n"],"sourceRoot":""}]);
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
      editButton.draggable = false;
      editButton.addEventListener('click',DisplayController.handleEditTodoContainerButton);

      const deleteButton = document.createElement('img');
      deleteButton.classList.add('todo-container-delete-button');
      deleteButton.src = './img/delete-icon.svg';
      deleteButton.draggable = false;
      deleteButton.addEventListener('click', DisplayController.handleDeleteTodoButton);

      const expandButton = document.createElement('img');
      expandButton.classList.add('todo-container-expand-button');
      expandButton.src = './img/expand-more-icon.svg';
      expandButton.draggable = false;
      expandButton.addEventListener('click', DisplayController.handleExpandTodoButton);
      
      const dragButton = document.createElement('img');
      dragButton.classList.add('todo-container-drag-button');
      dragButton.src = './img/drag-icon.svg';
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
      deleteProject.classList.add('sidebar-project-delete-icon');
      deleteProject.addEventListener('click',DisplayController.handleDeleteSidebarProjectButton);
      outputDiv.append(projectName, deleteProject);
      projectContainerDiv.replaceWith(outputDiv);
      outputDiv.className = 'sidebar-user-project sidebar-project-button';
      projectName.addEventListener('click', DisplayController.handleProjectButtons);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSCxJQUFJLDJCQUEyQixJQUFJLGtCQUFrQjtBQUN6SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksUUFBUSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyx3QkFBd0IsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxh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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBTztBQUNYO0FBQ0E7QUFDQSxrQ0FBa0MsZ0RBQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWDtBQUNBLGtDQUFrQyxnREFBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTREO0FBQ3ZDOztBQUVyQixrRUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvbm90aWZpY2F0aW9uQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhOndnaHRAMzAwOzQwMDs1MDAmZmFtaWx5PVVidW50dTp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXByaW1hcnktd2hpdGU6ICNmZmZmZmY7XG4gIC0tYWNjZW50LWNvbG9yOiAjMTQ2Y2M0O1xuICAtLXByaW1hcnktZ3JheTogI2Y0ZjRmNDtcbiAgLS1zZWNvbmRhcnktZ3JheTogIzUwNTA1MDtcbiAgLS1wcmltYXJ5LXJlZDogI2ZmMDAwMDtcbn1cblxuLyogRGVmYXVsdCBTdHlsZXMgKi9cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmh0bWwsYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn1cblxuLyogU2lkZWJhciBTdHlsZXMgKi9cbi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ncmF5KTtcbn1cbi5wcm9qZWN0cyB7XG4gIG1hcmdpbjogNnJlbSAwcmVtO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59XG4uc2lkZWJhci1kZWZhdWx0LXByb2plY3Q6bnRoLWNoaWxkKDMpe1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcbn1cbi5zaWRlYmFyLXByb2plY3QtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbi5zaWRlYmFyLXByb2plY3QtbmFtZXtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4uc2lkZWJhci1wcm9qZWN0LW5hbWU6aG92ZXJ7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cbi5zaWRlYmFyLXByb2plY3QtbmFtZS1zZWxlY3RlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xufVxuLnNpZGViYXItcHJvamVjdC1kZWxldGUtaWNvbntcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuLnNpZGViYXItcHJvamVjdC1idXR0b246aG92ZXIgLnNpZGViYXItcHJvamVjdC1kZWxldGUtaWNvbntcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvamVjdC1jcmVhdGUtY29udGFpbmVyID4gaW5wdXQge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY3JlYXRlLW5ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMXJlbTtcbn1cblxuLyogUHJvamVjdCBQYWdlICovXG4ubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBtYXJnaW46IDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cbi5wcm9qZWN0LW5hbWUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxcmVtO1xufVxuLnByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIG1heC13aWR0aDogNzAlO1xufVxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLnByb2plY3QtYnV0dG9uc3tcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xufVxuLnByb2plY3QtZWRpdC1pY29uLC5wcm9qZWN0LWRlbGV0ZS1pY29uLC5wcm9qZWN0LWVkaXQtc2F2ZS1pY29ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZWRpdGFibGUge1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogTmV3IFRvZG8gQnV0dG9uICovXG4jY3JlYXRlLW5ldy10b2RvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNnJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLyogVG9kbyBNb2RhbCAqL1xuI3RvZG9Nb2RhbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNDByZW07XG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbiN0b2RvTW9kYWxGb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9kby1jcmVhdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBnYXA6IDAuNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRvZG8tY3JlYXRlLWNvbnRhaW5lci1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBvcGFjaXR5OiAwLjY7XG4gIGZvbnQtZmFtaWx5OiBcIkluY29uc29sYXRhXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eXtcbiAgd2lkdGg6IDdyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDZjYzQ7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2F2ZS10b2RvLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDVyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbiAgYm90dG9tOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FuY2VsLXRvZG8tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB3aWR0aDogMS4xcmVtO1xuICBoZWlnaHQ6IDEuMXJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgdG9wOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYW5jZWwtdG9kby1idXR0b24taWNvbiB7XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDFyZW07XG4gIG9wYWNpdHk6IDA7XG59XG4uY2FuY2VsLXRvZG8tYnV0dG9uLWljb246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVye1xuICBkaXNwbGF5OiBncmlkO1xuICByb3ctZ2FwOiAxcmVtO1xuICBtYXgtaGVpZ2h0OiA2NSU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgKi9cbiAgc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcjplbXB0eXtcbiAgbWF4LWhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVyOmhvdmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFRvZG8gQ29udGFpbmVyICovXG4udG9kby1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxcmVtIDFyZW0gMXJlbSAxcmVtO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xuICBjb2x1bW4tZ2FwOiAxLjZyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xuICBjdXJzb3I6IG1vdmU7XG4gIGJveC1zaGFkb3c6ICM5NTlkYTUzMyAwcHggOHB4IDI0cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpb3JpdHktY29sb3IpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xufVxuLnRvZG8tY29udGFpbmVyOmhvdmVye1xuICBib3gtc2hhZG93OiAjZTdlMmUyNTkgMHB4IDBweCAxNXB4IDJweDtcbn1cblxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJsb3dcIl0ge1xuICAtLXByaW9yaXR5LWNvbG9yOiBncmVlbjtcbn1cbi50b2RvLWNvbnRhaW5lcltkYXRhLXByaW9yaXR5PVwibWVkaXVtXCJdIHtcbiAgLS1wcmlvcml0eS1jb2xvcjogeWVsbG93O1xufVxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJoaWdoXCJdIHtcbiAgLS1wcmlvcml0eS1jb2xvcjogb3JhbmdlO1xufVxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XCJjcml0aWNhbFwiXSB7XG4gIC0tcHJpb3JpdHktY29sb3I6IHJlZDtcbn1cblxuLnRvZG8tY29udGFpbmVyLW5hbWUge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xuICBmb250LXNpemU6IDFyZW07XG59XG4udG9kby1jb250YWluZXItZGVzY3JpcHRpb24ge1xuICBncmlkLWNvbHVtbjogMS9zcGFuIDM7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcbn1cbi50b2RvLWRlc2NyaXB0aW9uLWhpZGRlbntcbiAgaGVpZ2h0OiAwO1xufVxuLnRvZG8tZGVzY3JpcHRpb24tZXhwYW5kZWR7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG59XG4udG9kby1jb250YWluZXItZWRpdC1idXR0b24sIC50b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9uLC50b2RvLWNvbnRhaW5lci1leHBhbmQtYnV0dG9ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMS4zcmVtO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XG59XG4udG9kby1jb250YWluZXI6aG92ZXIgLnRvZG8tY29udGFpbmVyLWVkaXQtYnV0dG9uLC50b2RvLWNvbnRhaW5lcjpob3ZlciAudG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbiwudG9kby1jb250YWluZXI6aG92ZXIgLnRvZG8tY29udGFpbmVyLWV4cGFuZC1idXR0b257XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIFRvZG8gQ2hlY2tib3ggKi9cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOUI4QzM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAzcHg7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogd2hpdGU7XG4gIHN0cm9rZS13aWR0aDogMjtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICBzdHJva2UtZGFzaGFycmF5OiAxNnB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM1MDZFRUM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0I5QjhDMztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbDpob3ZlciBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2M1M2M3O1xufVxuXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2M1M2M3O1xuICBiYWNrZ3JvdW5kOiAjM2M1M2M3O1xuICBhbmltYXRpb246IGNoZWNrLTE1IDAuNnMgZWFzZTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQgc3ZnIHtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG59XG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMi4yKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcbn1cbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjQjlCOEMzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbkBrZXlmcmFtZXMgY2hlY2stMTUge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxufVxuXG4vKiBUb2FzdCBOb3RpZmljYXRpb24gKi9cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4udG9hc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlOztcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uc2hvdy10b2FzdCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuLyogQWRkIHRoZXNlIENTUyBydWxlcyB0byBlbmFibGUgZHJhZ2dpbmcgKi9cbi5kcmFnZ2FibGUge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6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Q0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7OztBQUdBLDJDQUEyQztBQUMzQztFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmNvbnNvbGF0YTp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1VYnVudHU6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktd2hpdGU6ICNmZmZmZmY7XFxuICAtLWFjY2VudC1jb2xvcjogIzE0NmNjNDtcXG4gIC0tcHJpbWFyeS1ncmF5OiAjZjRmNGY0O1xcbiAgLS1zZWNvbmRhcnktZ3JheTogIzUwNTA1MDtcXG4gIC0tcHJpbWFyeS1yZWQ6ICNmZjAwMDA7XFxufVxcblxcbi8qIERlZmF1bHQgU3R5bGVzICovXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwsYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4vKiBTaWRlYmFyIFN0eWxlcyAqL1xcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JheSk7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBtYXJnaW46IDZyZW0gMHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnNpZGViYXItZGVmYXVsdC1wcm9qZWN0Om50aC1jaGlsZCgzKXtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcXG59XFxuLnNpZGViYXItcHJvamVjdC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuLnNpZGViYXItcHJvamVjdC1uYW1le1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuLnNpZGViYXItcHJvamVjdC1uYW1lOmhvdmVye1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuLnNpZGViYXItcHJvamVjdC1uYW1lLXNlbGVjdGVke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG59XFxuLnNpZGViYXItcHJvamVjdC1kZWxldGUtaWNvbntcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxufVxcbi5zaWRlYmFyLXByb2plY3QtYnV0dG9uOmhvdmVyIC5zaWRlYmFyLXByb2plY3QtZGVsZXRlLWljb257XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJvamVjdC1jcmVhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIgPiBpbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogNzAlO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1ncmF5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXIgPiBidXR0b24ge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uY3JlYXRlLW5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgbGVmdDogMXJlbTtcXG59XFxuXFxuLyogUHJvamVjdCBQYWdlICovXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICBtYXJnaW46IDVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4ucHJvamVjdC1uYW1lLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4ucHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIG1heC13aWR0aDogNzAlO1xcbn1cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG4ucHJvamVjdC1idXR0b25ze1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcbi5wcm9qZWN0LWVkaXQtaWNvbiwucHJvamVjdC1kZWxldGUtaWNvbiwucHJvamVjdC1lZGl0LXNhdmUtaWNvbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmVkaXRhYmxlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi8qIE5ldyBUb2RvIEJ1dHRvbiAqL1xcbiNjcmVhdGUtbmV3LXRvZG8ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDZyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLyogVG9kbyBNb2RhbCAqL1xcbiN0b2RvTW9kYWwge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgYXNwZWN0LXJhdGlvOiAxNi85O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuI3RvZG9Nb2RhbEZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udG9kby1jcmVhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4udG9kby1jcmVhdGUtY29udGFpbmVyLWlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4udG9kby1jcmVhdGUtY29udGFpbmVyLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmNvbnNvbGF0YVxcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eXtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDZjYzQ7XFxuICBjb2xvcjogI2YxZjFmMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNhdmUtdG9kby1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FuY2VsLXRvZG8tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogMS4xcmVtO1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMC41cmVtO1xcbiAgdG9wOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYW5jZWwtdG9kby1idXR0b24taWNvbiB7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5jYW5jZWwtdG9kby1idXR0b24taWNvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucHJvamVjdC10b2RvTGlzdC1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogMXJlbTtcXG4gIG1heC1oZWlnaHQ6IDY1JTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhciAqL1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuLnByb2plY3QtdG9kb0xpc3QtY29udGFpbmVyOmVtcHR5e1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucHJvamVjdC10b2RvTGlzdC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcjpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogVG9kbyBDb250YWluZXIgKi9cXG4udG9kby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFyZW0gMXJlbSAxcmVtIDFyZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xcbiAgY29sdW1uLWdhcDogMS42cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMXJlbSAxcmVtIDA7XFxuICBjdXJzb3I6IG1vdmU7XFxuICBib3gtc2hhZG93OiAjOTU5ZGE1MzMgMHB4IDhweCAyNHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xcbn1cXG4udG9kby1jb250YWluZXI6aG92ZXJ7XFxuICBib3gtc2hhZG93OiAjZTdlMmUyNTkgMHB4IDBweCAxNXB4IDJweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdIHtcXG4gIC0tcHJpb3JpdHktY29sb3I6IGdyZWVuO1xcbn1cXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cXFwibWVkaXVtXFxcIl0ge1xcbiAgLS1wcmlvcml0eS1jb2xvcjogeWVsbG93O1xcbn1cXG4udG9kby1jb250YWluZXJbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdIHtcXG4gIC0tcHJpb3JpdHktY29sb3I6IG9yYW5nZTtcXG59XFxuLnRvZG8tY29udGFpbmVyW2RhdGEtcHJpb3JpdHk9XFxcImNyaXRpY2FsXFxcIl0ge1xcbiAgLS1wcmlvcml0eS1jb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1jb250YWluZXItbmFtZSB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWdyYXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4udG9kby1jb250YWluZXItZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiAzO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZ3JheSk7XFxuICBoZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG59XFxuLnRvZG8tZGVzY3JpcHRpb24taGlkZGVue1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4udG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG4udG9kby1jb250YWluZXItZWRpdC1idXR0b24sIC50b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9uLC50b2RvLWNvbnRhaW5lci1leHBhbmQtYnV0dG9ue1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbn1cXG4udG9kby1jb250YWluZXI6aG92ZXIgLnRvZG8tY29udGFpbmVyLWVkaXQtYnV0dG9uLC50b2RvLWNvbnRhaW5lcjpob3ZlciAudG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbiwudG9kby1jb250YWluZXI6aG92ZXIgLnRvZG8tY29udGFpbmVyLWV4cGFuZC1idXR0b257XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBUb2RvIENoZWNrYm94ICovXFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWxhYmVsIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0I5QjhDMztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkIHN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAzcHg7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiB3aGl0ZTtcXG4gIHN0cm9rZS13aWR0aDogMjtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxuICBzdHJva2UtZGFzaGFycmF5OiAxNnB4O1xcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzUwNkVFQztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjQjlCOEMzO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1sYWJlbDpob3ZlciBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1jb2xvcjogIzNjNTNjNztcXG59XFxuXFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItY29sb3I6ICMzYzUzYzc7XFxuICBiYWNrZ3JvdW5kOiAjM2M1M2M3O1xcbiAgYW5pbWF0aW9uOiBjaGVjay0xNSAwLjZzIGVhc2U7XFxufVxcbi5jaGVja2JveC13cmFwcGVyIC5jaGVja2JveC1pbnB1dDpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsIHNwYW46Zmlyc3QtY2hpbGQgc3ZnIHtcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbn1cXG4uY2hlY2tib3gtd3JhcHBlciAuY2hlY2tib3gtaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveC1sYWJlbCBzcGFuOmZpcnN0LWNoaWxkOmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIuMik7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkIHtcXG4gIGNvbG9yOiAjQjlCOEMzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLmNoZWNrYm94LXdyYXBwZXIgLmNoZWNrYm94LWlucHV0OmNoZWNrZWQgKyAuY2hlY2tib3gtbGFiZWwgc3BhbjpsYXN0LWNoaWxkOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuQGtleWZyYW1lcyBjaGVjay0xNSB7XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICB9XFxufVxcblxcbi8qIFRvYXN0IE5vdGlmaWNhdGlvbiAqL1xcbi50b2FzdC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4udG9hc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTs7XFxuICBjb2xvcjogIzMzMztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5zaG93LXRvYXN0IHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi8qIEFkZCB0aGVzZSBDU1MgcnVsZXMgdG8gZW5hYmxlIGRyYWdnaW5nICovXFxuLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9ub3RpZmljYXRpb25Db250cm9sbGVyXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlDb250cm9sbGVyIHtcbiAgc3RhdGljIGN1cnJlbnRUb2RvID0gbnVsbDtcbiAgc3RhdGljIGxvYWRIb21lUGFnZSgpIHtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5sb2FkUHJvamVjdHMoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5vcGVuUHJvamVjdChTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZ2V0UHJvamVjdHMoKVswXSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItcHJvamVjdC1uYW1lJykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LW5hbWUtc2VsZWN0ZWQnKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5pbml0UHJvamVjdEJ1dHRvbnMoKTtcbiAgICBcbiAgfVxuXG4gIHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWNvbnRhaW5lcicpLmlubmVySFRNTD0nJztcbiAgICBTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PkRpc3BsYXlDb250cm9sbGVyLmFkZFByb2plY3RCdXR0b25zKHByb2plY3QpKTtcbiAgfVxuXG4gIHN0YXRpYyBvcGVuUHJvamVjdChwcm9qZWN0KSB7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIubG9hZFByb2plY3ROYW1lKHByb2plY3QpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRFZGl0UHJvamVjdEJ1dHRvbigpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWREZWxldGVQcm9qZWN0QnV0dG9uKCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIubG9hZFByb2plY3REZXNjcmlwdGlvbihwcm9qZWN0KTsgICAgXG4gICAgRGlzcGxheUNvbnRyb2xsZXIubG9hZFByb2plY3RUb2RvTGlzdChwcm9qZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICByZXR1cm4gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpLnRleHRDb250ZW50KTtcbiAgfVxuICBcbiAgc3RhdGljIGxvYWRQcm9qZWN0TmFtZShwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICBwcm9qZWN0TmFtZS5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJyk7XG4gIH1cbiAgXG4gIHN0YXRpYyBsb2FkRWRpdFByb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnV0dG9ucycpO1xuICAgIGNvbnN0IGV4aXN0aW5nRWRpdEJ1dHRvbiA9IHByb2plY3ROYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWVkaXQtaWNvbicpO1xuICAgIGNvbnN0IHByb2plY3RFZGl0U2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWVkaXQtc2F2ZS1pY29uJyk7XG4gICAgXG4gICAgaWYgKHByb2plY3RFZGl0U2F2ZUJ1dHRvbikge1xuICAgICAgcHJvamVjdEVkaXRTYXZlQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0TmFtZXNUb0V4Y2x1ZGUgPSBbJ0luYm94JywgJ1RoaXMgV2VlaycsICdUb2RheSddO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdE5hbWVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpLnRleHRDb250ZW50O1xuICAgIFxuICAgIGlmIChwcm9qZWN0TmFtZXNUb0V4Y2x1ZGUuaW5jbHVkZXMocHJvamVjdE5hbWUpKSB7XG4gICAgICAvLyBQcm9qZWN0IG5hbWUgaXMgb25lIG9mIHRoZSBzcGVjaWZpZWQgb25lcywgZG8gbm90aGluZ1xuICAgICAgaWYgKGV4aXN0aW5nRWRpdEJ1dHRvbikge1xuICAgICAgICBleGlzdGluZ0VkaXRCdXR0b24ucmVtb3ZlKCk7IC8vIFJlbW92ZSBlZGl0IGJ1dHRvbiBpZiBpdCBleGlzdHNcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFleGlzdGluZ0VkaXRCdXR0b24pIHtcbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgZWRpdCBidXR0b24gb25seSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICAgIGNvbnN0IHByb2plY3RFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHByb2plY3RFZGl0QnV0dG9uLnNyYyA9ICcuL2ltZy9lZGl0LWljb24uc3ZnJztcbiAgICAgICAgcHJvamVjdEVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0LWljb24nKTtcbiAgICAgICAgcHJvamVjdEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVFZGl0UHJvamVjdEJ1dHRvbik7XG4gICAgICAgIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnV0dG9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHN0YXRpYyBsb2FkRGVsZXRlUHJvamVjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1idXR0b25zJyk7XG4gICAgY29uc3QgZXhpc3RpbmdEZWxldGVCdXR0b24gPSBwcm9qZWN0TmFtZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZWxldGUtaWNvbicpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIHByb2plY3QgbmFtZSBpcyBvbmUgb2YgdGhlIHNwZWNpZmllZCBvbmVzXG4gICAgY29uc3QgcHJvamVjdE5hbWVzVG9FeGNsdWRlID0gWydJbmJveCcsICdUaGlzIFdlZWsnLCAnVG9kYXknXTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBpZiAocHJvamVjdE5hbWVzVG9FeGNsdWRlLmluY2x1ZGVzKHByb2plY3ROYW1lKSkge1xuICAgICAgLy8gUHJvamVjdCBuYW1lIGlzIG9uZSBvZiB0aGUgc3BlY2lmaWVkIG9uZXMsIGRvIG5vdGhpbmdcbiAgICAgIGlmIChleGlzdGluZ0RlbGV0ZUJ1dHRvbikge1xuICAgICAgICBleGlzdGluZ0RlbGV0ZUJ1dHRvbi5yZW1vdmUoKTsgLy8gUmVtb3ZlIGRlbGV0ZSBidXR0b24gaWYgaXQgZXhpc3RzXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKCFleGlzdGluZ0RlbGV0ZUJ1dHRvbikge1xuICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCBkZWxldGUgYnV0dG9uIG9ubHkgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgICAgICBjb25zdCBwcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uc3JjID0gJy4vaW1nL2RlbGV0ZS1pY29uLnN2Zyc7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtaWNvbicpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIHByb2plY3RCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdXR0b24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgc3RhdGljIGhhbmRsZUVkaXRQcm9qZWN0QnV0dG9uKCkge1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnV0dG9ucycpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpO1xuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0RWRpdFNhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1lZGl0LXNhdmUtaWNvbicpO1xuICAgIFxuICAgIGlmICghZXhpc3RpbmdQcm9qZWN0RWRpdFNhdmVCdXR0b24pIHtcbiAgICAgIGNvbnN0IHByb2plY3RFZGl0U2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgcHJvamVjdEVkaXRTYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdC1zYXZlLWljb24nKTtcbiAgICAgIHByb2plY3RFZGl0U2F2ZUJ1dHRvbi5zcmMgPSAnLi9pbWcvc2F2ZS1pY29uLnN2Zyc7XG4gICAgICBwcm9qZWN0RWRpdFNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVQcm9qZWN0RWRpdFNhdmVCdXR0b24oY3VycmVudFByb2plY3ROYW1lKSk7XG4gICAgICBwcm9qZWN0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdFNhdmVCdXR0b24pO1xuICAgICAgXG4gIH1cbiAgXG4gIFxuICBwcm9qZWN0TmFtZS5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gIHByb2plY3REZXNjcmlwdGlvbi5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gIHByb2plY3ROYW1lLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnZWRpdGFibGUnKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRhYmxlJyk7XG4gIFxuICBcbiAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHByb2plY3REZXNjcmlwdGlvbik7XG4gIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgXG4gICAgbGV0IHJhbmdlMiA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2UyLnNlbGVjdE5vZGVDb250ZW50cyhwcm9qZWN0TmFtZSk7XG4gICAgcmFuZ2UyLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBsZXQgc2VsZWN0aW9uMiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICBzZWxlY3Rpb24yLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbjIuYWRkUmFuZ2UocmFuZ2UyKTtcbiAgfVxuICBcbiAgXG4gIHN0YXRpYyBoYW5kbGVEZWxldGVQcm9qZWN0QnV0dG9uKCkge1xuICAgIFN0b3JhZ2UucmVtb3ZlUHJvamVjdChEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLmdldE5hbWUoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWNvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmxvYWRQcm9qZWN0cygpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLm9wZW5Qcm9qZWN0KFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKS5nZXRQcm9qZWN0cygpWzBdKTtcbiAgfVxuICBcbiAgc3RhdGljIGhhbmRsZVByb2plY3RFZGl0U2F2ZUJ1dHRvbihjdXJyZW50UHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgIFN0b3JhZ2UuZWRpdFByb2plY3QoY3VycmVudFByb2plY3ROYW1lLCBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCwgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50KTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5sb2FkUHJvamVjdHMoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5vcGVuUHJvamVjdChTdG9yYWdlLmdldFByb2plY3RMaXN0KCkuZ2V0UHJvamVjdChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCkpO1xuICB9XG4gIFxuICBzdGF0aWMgbG9hZFByb2plY3REZXNjcmlwdGlvbihwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldERlc2NyaXB0aW9uKCk7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmNvbnRlbnRFZGl0YWJsZSA9ICdmYWxzZSc7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRhYmxlJyk7XG4gIH1cbiAgXG4gIHN0YXRpYyBsb2FkUHJvamVjdFRvZG9MaXN0KHByb2plY3QpIHtcbiAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG9MaXN0LWNvbnRhaW5lcicpO1xuICAgIHRvZG9MaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgcHJvamVjdC5nZXRUb2RvTGlzdCgpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgb3V0ZXIgZGl2IGVsZW1lbnRcbiAgICAgIGNvbnN0IGNoZWNrYm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2hlY2tib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LXdyYXBwZXInKTtcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICBjb25zdCBjaGVja2JveElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNoZWNrYm94SW5wdXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtaW5wdXQnKTtcbiAgICAgIGNoZWNrYm94SW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICBjaGVja2JveElucHV0LmNoZWNrZWQgPSB0b2RvLmdldENoZWNrU3RhdHVzKCk7XG4gICAgICBjaGVja2JveElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjaGVja2JveElucHV0LmlkID0gdG9kby5nZXROYW1lKCk7XG4gICAgICBjaGVja2JveElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlVG9nZ2xlQ2hlY2spO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIGxhYmVsIGVsZW1lbnRcbiAgICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1sYWJlbCcpO1xuICAgICAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRvZG8uZ2V0TmFtZSgpKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBmaXJzdCBzcGFuIGVsZW1lbnQgaW5zaWRlIHRoZSBsYWJlbFxuICAgICAgY29uc3QgY2hlY2tib3hTdmdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIHN2ZyBlbGVtZW50IGluc2lkZSB0aGUgZmlyc3Qgc3BhblxuICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEycHgnKTtcbiAgICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnOXB4Jyk7XG4gICAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMTIgOScpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIHBvbHlsaW5lIGVsZW1lbnQgaW5zaWRlIHRoZSBzdmdcbiAgICAgIGNvbnN0IHBvbHlsaW5lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicG9seWxpbmVcIik7XG4gICAgICBwb2x5bGluZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdwb2ludHMnLCAnMSA1IDQgOCAxMSAxJyk7XG5cbiAgICAgIC8vIEFwcGVuZCB0aGUgcG9seWxpbmUgdG8gdGhlIHN2ZywgYW5kIHN2ZyB0byB0aGUgZmlyc3Qgc3BhblxuICAgICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChwb2x5bGluZUVsZW1lbnQpO1xuICAgICAgY2hlY2tib3hTdmdXcmFwcGVyLmFwcGVuZENoaWxkKHN2Z0VsZW1lbnQpO1xuXG4gICAgICAvLyBDcmVhdGUgdGhlIHNlY29uZCBzcGFuIGVsZW1lbnQgaW5zaWRlIHRoZSBsYWJlbFxuICAgICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0b2RvTmFtZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1uYW1lJyk7XG4gICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0TmFtZSgpO1xuXG4gICAgICAvLyBBcHBlbmQgc3BhbnMgdG8gdGhlIGxhYmVsXG4gICAgICBjaGVja2JveExhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94U3ZnV3JhcHBlcik7XG4gICAgICBjaGVja2JveExhYmVsLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcblxuICAgICAgLy8gQXBwZW5kIGlucHV0IGFuZCBsYWJlbCB0byB0aGUgb3V0ZXIgZGl2XG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hJbnB1dCk7XG4gICAgICBjaGVja2JveFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hMYWJlbCk7XG4gICAgIFxuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1lZGl0LWJ1dHRvbicpO1xuICAgICAgZWRpdEJ1dHRvbi5zcmMgPSAnLi9pbWcvZWRpdC1pY29uLnN2Zyc7XG4gICAgICBlZGl0QnV0dG9uLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRWRpdFRvZG9Db250YWluZXJCdXR0b24pO1xuXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9uJyk7XG4gICAgICBkZWxldGVCdXR0b24uc3JjID0gJy4vaW1nL2RlbGV0ZS1pY29uLnN2Zyc7XG4gICAgICBkZWxldGVCdXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVEZWxldGVUb2RvQnV0dG9uKTtcblxuICAgICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXItZXhwYW5kLWJ1dHRvbicpO1xuICAgICAgZXhwYW5kQnV0dG9uLnNyYyA9ICcuL2ltZy9leHBhbmQtbW9yZS1pY29uLnN2Zyc7XG4gICAgICBleHBhbmRCdXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVFeHBhbmRUb2RvQnV0dG9uKTtcbiAgICAgIFxuICAgICAgY29uc3QgZHJhZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgZHJhZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lci1kcmFnLWJ1dHRvbicpO1xuICAgICAgZHJhZ0J1dHRvbi5zcmMgPSAnLi9pbWcvZHJhZy1pY29uLnN2Zyc7XG4gICAgICBkcmFnQnV0dG9uLmRyYWdnYWJsZSA9IGZhbHNlO1xuXG5cbiAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyLWRlc2NyaXB0aW9uJyk7XG4gICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgICBcbiAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcbiAgICAgIHRvZG9Db250YWluZXIuZGF0YXNldC5wcmlvcml0eSA9IHRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgICAgIHRvZG9Db250YWluZXIuZGF0YXNldC50b2RvTmFtZSA9IHRvZG8uZ2V0TmFtZSgpOyBcbiAgICAgIHRvZG9Db250YWluZXIuZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoY2hlY2tib3hXcmFwcGVyLGVkaXRCdXR0b24sZGVsZXRlQnV0dG9uLGV4cGFuZEJ1dHRvbixkcmFnQnV0dG9uLHRvZG9EZXNjcmlwdGlvbik7XG5cbiAgICAgIHRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICAgIERpc3BsYXlDb250cm9sbGVyLmluaXREcmFnQW5kRHJvcCgpOyBcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVUb2dnbGVDaGVjaygpIHtcbiAgICBTdG9yYWdlLnRvZG9Ub2dnbGVDaGVja1N0YXR1cyhEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLCB0aGlzLmlkKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0LW5hbWUnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1uZXctcHJvamVjdCcpO1xuICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8nKTtcblxuICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKHByb2plY3RCdXR0b24pID0+IHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVByb2plY3RCdXR0b25zKSk7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmNyZWF0ZU5ld1Byb2plY3QpO1xuICAgIG5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5jcmVhdGVOZXdUb2RvKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVQcm9qZWN0QnV0dG9ucygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0LW5hbWUnKS5mb3JFYWNoKChpdGVtKT0+aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLXByb2plY3QtbmFtZS1zZWxlY3RlZCcpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdC1uYW1lLXNlbGVjdGVkJyk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3QodGhpcy50ZXh0Q29udGVudCkpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0Q3JlYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY3JlYXRlLWNvbnRhaW5lcicpO1xuICBcbiAgICBpZiAoIWV4aXN0aW5nUHJvamVjdENyZWF0ZUNvbnRhaW5lcikge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNvbnN0IHNhdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBcbiAgICAgIHByb2plY3RDb250YWluZXJJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgc2F2ZVByb2plY3RCdXR0b24uc3JjID0gJy4vaW1nL2NoZWNrLWljb24uc3ZnJztcbiAgICAgIGNhbmNlbFByb2plY3RCdXR0b24uc3JjID0gJy4vaW1nL2NhbmNlbC1pY29uLnN2Zyc7XG4gICAgICBwcm9qZWN0Q29udGFpbmVySW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXItaW5wdXQnKTtcbiAgICAgIHNhdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyLXNhdmUtYnV0dG9uJyk7XG4gICAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyLWNhbmNlbC1idXR0b24nKTtcbiAgICAgIHByb2plY3RDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jcmVhdGUtY29udGFpbmVyJyk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyRGl2LmFwcGVuZChwcm9qZWN0Q29udGFpbmVySW5wdXQsIHNhdmVQcm9qZWN0QnV0dG9uLCBjYW5jZWxQcm9qZWN0QnV0dG9uKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1jb250YWluZXInKS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyRGl2KTsgICAgXG4gICAgICBwcm9qZWN0Q29udGFpbmVySW5wdXQuZm9jdXMoKTtcbiAgICAgIFxuICAgICAgc2F2ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVTYXZlUHJvamVjdEJ1dHRvbik7XG4gICAgICBcbiAgICAgIGNhbmNlbFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lckRpdi5yZW1vdmUoKTtcbiAgICAgIH0pOyBcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmdQcm9qZWN0Q3JlYXRlQ29udGFpbmVyLmNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIFxuICBzdGF0aWMgaGFuZGxlU2F2ZVByb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNyZWF0ZS1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyLWlucHV0JykudmFsdWU7XG4gICAgXG4gICAgaWYgKHByb2plY3ROYW1lLnRleHRDb250ZW50KSB7XG4gICAgICBjb25zdCBvdXRwdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdC1uYW1lJyk7XG5cbiAgICAgIGRlbGV0ZVByb2plY3Quc3JjID0gJy4vaW1nL2RlbGV0ZS1pY29uLnN2Zyc7XG4gICAgICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdC1kZWxldGUtaWNvbicpO1xuICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRGVsZXRlU2lkZWJhclByb2plY3RCdXR0b24pO1xuICAgICAgb3V0cHV0RGl2LmFwcGVuZChwcm9qZWN0TmFtZSwgZGVsZXRlUHJvamVjdCk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyRGl2LnJlcGxhY2VXaXRoKG91dHB1dERpdik7XG4gICAgICBvdXRwdXREaXYuY2xhc3NOYW1lID0gJ3NpZGViYXItdXNlci1wcm9qZWN0IHNpZGViYXItcHJvamVjdC1idXR0b24nO1xuICAgICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVQcm9qZWN0QnV0dG9ucyk7XG4gICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdE5hbWUudGV4dENvbnRlbnQpKTtcbiAgICAgIERpc3BsYXlDb250cm9sbGVyLm9wZW5Qcm9qZWN0KFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lLnRleHRDb250ZW50KSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFByb2plY3RCdXR0b25zKHByb2plY3QpIHtcbiAgICBjb25zdCBvdXRwdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1wcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVByb2plY3RCdXR0b25zKTsgXG5cbiAgICBpZiAocHJvamVjdE5hbWUudGV4dENvbnRlbnQgIT09ICdJbmJveCcgJiYgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgIT09ICdUb2RheScgJiYgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgIT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBkZWxldGVQcm9qZWN0LnNyYyA9ICcuL2ltZy9kZWxldGUtaWNvbi5zdmcnO1xuICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXByb2plY3QtZGVsZXRlLWljb24nKTtcbiAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpc3BsYXlDb250cm9sbGVyLmhhbmRsZURlbGV0ZVNpZGViYXJQcm9qZWN0QnV0dG9uKTtcbiAgICAgIG91dHB1dERpdi5hcHBlbmQocHJvamVjdE5hbWUsIGRlbGV0ZVByb2plY3QpO1xuICAgICAgb3V0cHV0RGl2LmNsYXNzTmFtZSA9ICdzaWRlYmFyLXVzZXItcHJvamVjdCBzaWRlYmFyLXByb2plY3QtYnV0dG9uJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdXRwdXREaXYuYXBwZW5kKHByb2plY3ROYW1lKTtcbiAgICAgIG91dHB1dERpdi5jbGFzc05hbWUgPSAnc2lkZWJhci1kZWZhdWx0LXByb2plY3Qgc2lkZWJhci1wcm9qZWN0LWJ1dHRvbic7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1jb250YWluZXInKS5hcHBlbmRDaGlsZChvdXRwdXREaXYpOyBcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVEZWxldGVTaWRlYmFyUHJvamVjdEJ1dHRvbigpIHtcbiAgICBTdG9yYWdlLnJlbW92ZVByb2plY3QoU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpLmdldFByb2plY3QodGhpcy5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQpLmdldE5hbWUoKSk7XG4gICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLm9wZW5Qcm9qZWN0KFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKS5nZXRQcm9qZWN0cygpWzBdKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOZXdUb2RvKCkge1xuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvTW9kYWwnKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItbmFtZScpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLXByaW9yaXR5Jyk7XG4gICAgY29uc3Qgc2F2ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS10b2RvLWJ1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbFRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXRvZG8tYnV0dG9uJyk7XG4gICAgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUuZm9jdXMoKTtcbiAgICB0b2RvTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgXG4gICAgc2F2ZVRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpc3BsYXlDb250cm9sbGVyLmhhbmRsZVNhdmVUb2RvQnV0dG9uKTtcbiAgICBcbiAgICBjYW5jZWxUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUgPSAnJztcbiAgICAgIHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5LnZhbHVlID0gJ2xvdyc7XG4gICAgICB0b2RvTW9kYWwuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVTYXZlVG9kb0J1dHRvbihlKSB7XG4gICAgbGV0IGN1cnJlbnRUb2RvID0gRGlzcGxheUNvbnRyb2xsZXIuY3VycmVudFRvZG87XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvTW9kYWwnKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZSA9IHRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLW5hbWUnKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24gPSB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eSA9IHRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jcmVhdGUtY29udGFpbmVyLXByaW9yaXR5Jyk7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gRGlzcGxheUNvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBpZiAodG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIE5vdGlmaWNhdGlvbkNvbnRyb2xsZXIuc2hvd1RvYXN0KCdUb2RvIG5hbWUgbXVzdCBub3QgYmUgZW1wdHknKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoY3VycmVudFRvZG8gPT09IG51bGwpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LmdldFRvZG8odG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUpICE9PSB1bmRlZmluZWQgJiYgY3VycmVudFByb2plY3QuZ2V0VG9kbyh0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSkuZ2V0Q2hlY2tTdGF0dXMoKT09PWZhbHNlKSB7XG4gICAgICAgICAgTm90aWZpY2F0aW9uQ29udHJvbGxlci5zaG93VG9hc3QoJ1RvZG8gbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxldCB0b2RvID0gbmV3IFRvRG8oKTtcbiAgICAgICAgICB0b2RvLnNldE5hbWUodG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUpO1xuICAgICAgICAgIHRvZG8uc2V0RGVzY3JpcHRpb24odG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlKVxuICAgICAgICAgIHRvZG8uc2V0UHJpb3JpdHkodG9kb0NyZWF0ZUNvbnRhaW5lclByaW9yaXR5LnZhbHVlKVxuICAgICAgICAgIFN0b3JhZ2UuYWRkVG9kbyhjdXJyZW50UHJvamVjdCx0b2RvKTtcbiAgICAgICAgICB0b2RvTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSA9ICdsb3cnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUb2RvLmdldE5hbWUoKSAhPT0gdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUpIHtcbiAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QuZ2V0VG9kbyh0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSkgIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50UHJvamVjdC5nZXRUb2RvKHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlKS5nZXRDaGVja1N0YXR1cygpPT09ZmFsc2UpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgTm90aWZpY2F0aW9uQ29udHJvbGxlci5zaG93VG9hc3QoJ1RvZG8gbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFN0b3JhZ2UuZWRpdFRvZG8oY3VycmVudFByb2plY3QsY3VycmVudFRvZG8uZ2V0TmFtZSgpLHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlLHRvZG9DcmVhdGVDb250YWluZXJEZXNjcmlwdGlvbi52YWx1ZSx0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUpO1xuICAgICAgICAgICAgdG9kb01vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgICAgIERpc3BsYXlDb250cm9sbGVyLmN1cnJlbnRUb2RvID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgU3RvcmFnZS5lZGl0VG9kbyhjdXJyZW50UHJvamVjdCxjdXJyZW50VG9kby5nZXROYW1lKCksdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUsdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlLHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSk7XG4gICAgICAgICAgdG9kb01vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkudmFsdWUgPSAnbG93JztcbiAgICAgICAgICBEaXNwbGF5Q29udHJvbGxlci5jdXJyZW50VG9kbyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgRGlzcGxheUNvbnRyb2xsZXIubG9hZFByb2plY3RUb2RvTGlzdChEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVFZGl0VG9kb0NvbnRhaW5lckJ1dHRvbigpIHtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSBEaXNwbGF5Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvID0gY3VycmVudFByb2plY3QuZ2V0VG9kbyh0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyLW5hbWUnKS50ZXh0Q29udGVudCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIuY3VycmVudFRvZG8gPSBjdXJyZW50VG9kbztcbiAgICBjb25zdCB0b2RvTmFtZSA9IGN1cnJlbnRUb2RvLmdldE5hbWUoKTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBjdXJyZW50VG9kby5nZXREZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGN1cnJlbnRUb2RvLmdldFByaW9yaXR5KCk7XG5cbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb01vZGFsJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lck5hbWUgPSB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1uYW1lJyk7XG4gICAgY29uc3QgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNyZWF0ZS1jb250YWluZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB0b2RvQ3JlYXRlQ29udGFpbmVyUHJpb3JpdHkgPSB0b2RvTW9kYWwucXVlcnlTZWxlY3RvcignI3RvZG8tY3JlYXRlLWNvbnRhaW5lci1wcmlvcml0eScpO1xuICAgIGNvbnN0IHNhdmVUb2RvQnV0dG9uID0gdG9kb01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLXRvZG8tYnV0dG9uJyk7XG4gICAgXG4gICAgdG9kb01vZGFsLnNob3dNb2RhbCgpO1xuICAgIHRvZG9DcmVhdGVDb250YWluZXJOYW1lLnZhbHVlID0gdG9kb05hbWU7XG4gICAgdG9kb0NyZWF0ZUNvbnRhaW5lckRlc2NyaXB0aW9uLnZhbHVlID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgIHRvZG9DcmVhdGVDb250YWluZXJQcmlvcml0eS52YWx1ZSA9IHRvZG9Qcmlvcml0eTtcbiAgICBcbiAgICBzYXZlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlU2F2ZVRvZG9CdXR0b24pO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZURlbGV0ZVRvZG9CdXR0b24oKSB7XG4gICAgU3RvcmFnZS5yZW1vdmVUb2RvKERpc3BsYXlDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCksdGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLnRleHRDb250ZW50KTtcbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgLy8gRGlzcGxheUNvbnRyb2xsZXIub3BlblByb2plY3QoRGlzcGxheUNvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBoYW5kbGVFeHBhbmRUb2RvQnV0dG9uKCkge1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAodG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5jb250YWlucygndG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZCcpKXtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2RvLWRlc2NyaXB0aW9uLWV4cGFuZGVkJyk7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbi1oaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZG8tZGVzY3JpcHRpb24taGlkZGVuJyk7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbi1leHBhbmRlZCcpO1xuICAgIH0gXG4gIH1cbiAgXG4gIHN0YXRpYyBpbml0RHJhZ0FuZERyb3AoKSB7XG4gIGNvbnN0IHRvZG9Db250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29udGFpbmVyJyk7XG4gIFxuICB0b2RvQ29udGFpbmVycy5mb3JFYWNoKCh0b2RvQ29udGFpbmVyKSA9PiB7XG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVEcmFnU3RhcnQpO1xuICAgIHRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBEaXNwbGF5Q29udHJvbGxlci5oYW5kbGVEcmFnT3Zlcik7XG4gICAgdG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgRGlzcGxheUNvbnRyb2xsZXIuaGFuZGxlRHJvcCk7XG4gIH0pO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmRhdGFzZXQudG9kb05hbWUpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRHJhZ092ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVEcm9wKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0b2RvTmFtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgY29uc3QgZHJvcHBlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZG8tbmFtZT1cIiR7dG9kb05hbWV9XCJdYCk7XG4gIFxuICBpZiAoZHJvcHBlZENvbnRhaW5lciAhPT0gdGhpcykge1xuICAgIGNvbnN0IGNvbnRhaW5lclBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBkcmFnZ2VkSW5kZXggPSBBcnJheS5mcm9tKGNvbnRhaW5lclBhcmVudC5jaGlsZHJlbikuaW5kZXhPZihkcm9wcGVkQ29udGFpbmVyKTtcbiAgICBjb25zdCBkcm9wSW5kZXggPSBBcnJheS5mcm9tKGNvbnRhaW5lclBhcmVudC5jaGlsZHJlbikuaW5kZXhPZih0aGlzKTtcblxuICAgIGlmIChkcm9wSW5kZXggPCBkcmFnZ2VkSW5kZXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBpbmRleCBpcyBsZXNzIHRoYW4gcGljayBpbmRleFwiKTtcbiAgICAgIGNvbnRhaW5lclBhcmVudC5pbnNlcnRCZWZvcmUoZHJvcHBlZENvbnRhaW5lciwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lclBhcmVudC5pbnNlcnRCZWZvcmUoZHJvcHBlZENvbnRhaW5lciwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgfVxuICAgIC8vIFVwZGF0ZSB0aGUgcHJvamVjdCdzIHRvZG8gbGlzdFxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gRGlzcGxheUNvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCB1cGRhdGVkVG9kb0xpc3QgPSBbLi4uY3VycmVudFByb2plY3QuZ2V0VG9kb0xpc3QoKV07XG4gICAgY29uc3QgbW92ZWRUb2RvID0gdXBkYXRlZFRvZG9MaXN0LmZpbmQodG9kbyA9PiB0b2RvLmdldE5hbWUoKSA9PT0gdG9kb05hbWUpO1xuICAgIFxuICAgIHVwZGF0ZWRUb2RvTGlzdC5zcGxpY2UodXBkYXRlZFRvZG9MaXN0LmluZGV4T2YobW92ZWRUb2RvKSwgMSk7XG4gICAgdXBkYXRlZFRvZG9MaXN0LnNwbGljZShBcnJheS5mcm9tKGNvbnRhaW5lclBhcmVudC5jaGlsZHJlbikuaW5kZXhPZihkcm9wcGVkQ29udGFpbmVyKSwgMCwgbW92ZWRUb2RvKTtcbiAgICBjdXJyZW50UHJvamVjdC5zZXRUb2RvTGlzdCh1cGRhdGVkVG9kb0xpc3QpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBwcm9qZWN0IGRhdGEgaW4gU3RvcmFnZVxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IHByb2plY3RMaXN0LmdldFByb2plY3RzKCkubWFwKHByb2plY3QgPT4ge1xuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpID09PSBjdXJyZW50UHJvamVjdC5nZXROYW1lKCkpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfSk7XG4gICAgcHJvamVjdExpc3Quc2V0UHJvamVjdHModXBkYXRlZFByb2plY3RzKTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xufVxuXG5cblxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbkNvbnRyb2xsZXJ7XG4gIHN0YXRpYyBzaG93VG9hc3QobWVzc2FnZSkge1xuICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2FzdFwiKTtcbiAgICB0b2FzdC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgdG9hc3QuY2xhc3NMaXN0LmFkZChcInNob3ctdG9hc3RcIik7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdG9hc3QuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctdG9hc3RcIik7XG4gICAgfSwgMzAwMCk7IC8vIEhpZGUgYWZ0ZXIgMyBzZWNvbmRzXG59XG59IiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBgS2VlcCBUaGUgdGFsayBhbmQgdGhlIHNsaWRlcyBzaW1wbGU6IHdoYXQgYXJlIHRoZSB0aHJlZSB0aGluZ3MgYWJvdXQgdGhlc2UgdGhhdCBldmVyeW9uZSBzaG91bGQgcmVtZW1iZXI/YDtcbiAgICB0aGlzLnRvZG9MaXN0ID0gW107XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldFRvZG9MaXN0KHRvZG9MaXN0KSB7XG4gICAgdGhpcy50b2RvTGlzdCA9IHRvZG9MaXN0O1xuICB9XG5cbiAgZ2V0VG9kb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0xpc3Q7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kbyk7XG4gIH1cblxuICByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnNldFRvZG9MaXN0KHRoaXMudG9kb0xpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcy5nZXRUb2RvKHRvZG8pKSk7XG4gIH1cblxuICBnZXRUb2RvKHRvZG9OYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0xpc3QuZmluZCgodG9kbykgPT4gdG9kby5nZXROYW1lKCkgPT09IHRvZG9OYW1lKTtcbiAgfVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdJbmJveCcpKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1RvZGF5JykpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVGhpcyBXZWVrJykpO1xuICB9XG5cbiAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnNldFByb2plY3RzKHRoaXMucHJvamVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKSkpO1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gIH1cblxuICBcbn0iLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZXtcbiAgc3RhdGljIHNhdmVQcm9qZWN0TGlzdChkYXRhKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgc3RhdGljIGdldFByb2plY3RMaXN0KCkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBQcm9qZWN0TGlzdCgpLFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdExpc3QnKSlcbiAgICApO1xuICAgIHByb2plY3RMaXN0LnNldFByb2plY3RzKFxuICAgICAgcHJvamVjdExpc3QuZ2V0UHJvamVjdHMoKS5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG4gICAgKTtcbiAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3Quc2V0VG9kb0xpc3QocHJvamVjdC5nZXRUb2RvTGlzdCgpLm1hcCgodG9kbykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVG9EbygpLCB0b2RvKSkpKTtcbiAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBTdG9yYWdlLmdldFByb2plY3RMaXN0KCk7XG4gICAgcHJvamVjdExpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cbiAgc3RhdGljIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBwcm9qZWN0TGlzdC5yZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cbiAgc3RhdGljIGFkZFRvZG8ocHJvamVjdCwgdG9kbykge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIHByb2plY3RMaXN0LmdldFByb2plY3QocHJvamVjdC5nZXROYW1lKCkpLmFkZFRvZG8odG9kbyk7XG4gICAgU3RvcmFnZS5zYXZlUHJvamVjdExpc3QocHJvamVjdExpc3QpO1xuICB9XG4gIHN0YXRpYyByZW1vdmVUb2RvKHByb2plY3QsIHRvZG8pIHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFN0b3JhZ2UuZ2V0UHJvamVjdExpc3QoKTtcbiAgICBwcm9qZWN0TGlzdC5nZXRQcm9qZWN0KHByb2plY3QuZ2V0TmFtZSgpKS5yZW1vdmVUb2RvKHRvZG8pO1xuICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcbiAgfVxuICBzdGF0aWMgZWRpdFByb2plY3QocHJvamVjdE5hbWUsbmV3TmFtZSxuZXdEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIGxldCB0ZW1wUHJvamVjdCA9IHByb2plY3RMaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHRlbXBQcm9qZWN0LnNldE5hbWUobmV3TmFtZSk7XG4gICAgdGVtcFByb2plY3Quc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xuICAgIFN0b3JhZ2Uuc2F2ZVByb2plY3RMaXN0KHByb2plY3RMaXN0KTtcbiAgfVxuICBzdGF0aWMgZWRpdFRvZG8ocHJvamVjdCwgdG9kb05hbWUsbmV3TmFtZSxuZXdEZXNjcmlwdGlvbixuZXdQcmlvcml0eSkge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gU3RvcmFnZS5nZXRQcm9qZWN0TGlzdCgpO1xuICAgIGxldCB0ZW1wVG9kbyA9IHByb2plY3RMaXN0LmdldFByb2plY3QocHJvamVjdC5nZXROYW1lKCkpLmdldFRvZG8odG9kb05hbWUpO1xuICAgIHRlbXBUb2RvLnNldE5hbWUobmV3TmFtZSk7XG4gICAgdGVtcFRvZG8uc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xuICAgIHRlbXBUb2RvLnNldFByaW9yaXR5KG5ld1ByaW9yaXR5KTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cblxuICBzdGF0aWMgdG9kb1RvZ2dsZUNoZWNrU3RhdHVzKHByb2plY3QsIHRvZG9OYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBTdG9yYWdlLmdldFByb2plY3RMaXN0KCk7XG4gICAgbGV0IHRlbXBUb2RvID0gcHJvamVjdExpc3QuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSkuZ2V0VG9kbyh0b2RvTmFtZSk7XG4gICAgdGVtcFRvZG8udG9nZ2xlQ2hlY2tTdGF0dXMoKTtcbiAgICBTdG9yYWdlLnNhdmVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jaGVjayA9IGZhbHNlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXREZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldER1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSB2YWx1ZTtcbiAgfVxuICBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXRQcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGdldENoZWNrU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrO1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2tTdGF0dXMoKSB7XG4gICAgdGhpcy5jaGVjayA9ICF0aGlzLmNoZWNrO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgRGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuRGlzcGxheUNvbnRyb2xsZXIubG9hZEhvbWVQYWdlKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==