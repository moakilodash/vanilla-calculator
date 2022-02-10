/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mb": () => (/* binding */ calculator)
});

// UNUSED EXPORTS: outputCurrent, outputPrevious

;// CONCATENATED MODULE: ./src/tools/functionPool.js



function numberButtonEvent(button) {
  var numberButtons = [button];
  numberButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      calculator.appendNumber(button.innerText);
      calculator.render();
    });
  });
}
function clearButtonEvent(button) {
  button.addEventListener('click', function () {
    calculator.clear();
    calculator.render();
  });
}
function operationButtonEvent(button) {
  var operationButtons = [button];
  operationButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      calculator.chooseOperation(button.innerText);
      calculator.render();
    });
  });
}
function equalButtonEvent(button) {
  button.addEventListener('click', function () {
    calculator.compute();
    calculator.render();
  });
}
function deleteButtonEvent(button) {
  button.addEventListener('click', function () {
    calculator["delete"]();
    calculator.render();
  });
}
;// CONCATENATED MODULE: ./src/render/randomColorGenerator.js
 // const cssRoot = document.querySelector(':root');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function request() {
  var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
  var url = arguments.length > 1 ? arguments[1] : undefined;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error('Error'));
      }
    };

    xhr.send();
  });
}

function changeRandomColor(colors) {
  // cssRoot.style.setProperty('--random-color-primary', '#FEFEFE');
  // cssRoot.style.setProperty('--random-bg-color-primary', colors[1]);
  // cssRoot.style.setProperty('--random-bg-color-primary-shadow', colors[0]);
  // cssRoot.style.setProperty('--random-color-accent', colors[0]);
  // cssRoot.style.setProperty('--random-bg-color-accent', colors[4]);
  // cssRoot.style.setProperty('--random-bg-color-accent-shadow', colors[1]);
  // cssRoot.style.setProperty('--random-heading-color', colors[0]);
  $(document).ready(function () {
    $(':root').css('--random-heading-color', colors[0]);
    $(':root').css('--random-color-primary', '#FEFEFECC');
    $(':root').css('--random-bg-color-primary', "".concat(colors[1]));
    $(':root').css('--random-bg-color-primary-shadow', "".concat(colors[0], "AA"));
    $(':root').css('--random-color-accent', "".concat(colors[0]));
    $(':root').css('--random-bg-color-accent-shadow', "".concat(colors[3], "AA"));
    $(':root').css('--random-bg-color-accent', "".concat(colors[4], "44"));
    $(':root').css('--random-bg-color-primary-tool', "#".concat(colors[5], "50"));
    $(':root').css('--random-bg-color-accent-tool', "#".concat(colors[5], "10"));
  });
}

function changeColorButtonFunc() {
  var randomColor = getRandomColor();
  request('GET', "https://www.thecolorapi.com/scheme?hex=".concat(randomColor)).then(function (data) {
    var colors = [];
    data.colors.forEach(function (el) {
      colors.push(el.hex.value);
    });
    colors.push(randomColor);
    changeRandomColor(colors);
  })["catch"](function (err) {
    return console.log(err);
  });
}
;// CONCATENATED MODULE: ./src/entity/Calculator.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Calculator = /*#__PURE__*/function () {
  function Calculator(outputPrevious, outputCurrent) {
    _classCallCheck(this, Calculator);

    this.outputPrevious = outputPrevious;
    this.outputCurrent = outputCurrent;
    this.outputCurrentText = '';
    this.outputPreviousText = '';
  }

  _createClass(Calculator, [{
    key: "clear",
    value: function clear() {
      this.outputCurrentText = '';
      this.outputPreviousText = '';
      this.operation = undefined;
    }
  }, {
    key: "appendNumber",
    value: function appendNumber(number) {
      if (number === '.' && this.outputCurrentText.includes('.')) return;
      if (number === '.' && this.outputCurrentText === '') this.outputCurrentText = '0';
      this.outputCurrentText += number;
    }
  }, {
    key: "chooseOperation",
    value: function chooseOperation(operation) {
      if (this.outputCurrentText === '') return;
      if (this.outputPreviousText !== '') this.compute();
      this.operation = operation;
      this.outputPreviousText = this.outputCurrentText;
      this.outputCurrentText = '';
    }
  }, {
    key: "compute",
    value: function compute() {
      var output;
      var previous = parseFloat(this.outputPreviousText);
      var current = parseFloat(this.outputCurrentText);
      if (isNaN(previous) || isNaN(current)) return;

      switch (this.operation) {
        case '-':
          output = previous - current;
          break;

        case '+':
          output = previous + current;
          break;

        case '÷':
          output = previous / current;
          break;

        case 'x':
          output = previous * current;
          break;

        default:
          return;
      }

      this.outputCurrentText = output;
      this.operation = undefined;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.outputCurrentText = this.outputCurrentText.toString().slice(0, -1);
    }
  }, {
    key: "render",
    value: function render() {
      this.outputCurrent.innerText = this.outputCurrentText;

      if (this.operation !== undefined) {
        this.outputPrevious.innerText = "".concat(this.outputPreviousText, " ").concat(this.operation);
      } else {
        this.outputPrevious.innerText = this.outputPreviousText;
      }
    }
  }]);

  return Calculator;
}();


;// CONCATENATED MODULE: ./src/tools/constants.js
var buttonValues = ['C', '(', ')', 'x', '√', '%', '±', '÷', 7, 8, 9, '-', 4, 5, 6, '+', 1, 2, 3, '=', '.', 0, 'del'];
;// CONCATENATED MODULE: ./src/index.js











var root = document.getElementById('root');
var main = document.createElement('main');
var header = document.createElement('header');
var h1 = document.createElement('h1');
h1.innerText = 'Calculator';
var section = document.createElement('section');
var calcGrid = document.createElement('div');
var toolBar = document.createElement('div');
var output = document.createElement('div');
var outputPrevious = document.createElement('div');
var outputCurrent = document.createElement('div');
main.setAttribute('class', 'container');
section.setAttribute('class', 'flex-2');
toolBar.setAttribute('class', 'tool-bar floating-plate');
calcGrid.setAttribute('class', 'calc-grid floating-plate');
outputPrevious.setAttribute('class', 'output-previous');
outputCurrent.setAttribute('class', 'output-current');
output.setAttribute('class', 'output');
output.appendChild(outputPrevious);
output.appendChild(outputCurrent);
section.appendChild(calcGrid);
section.appendChild(toolBar);
calcGrid.appendChild(output);
header.appendChild(h1);
main.appendChild(header);
main.appendChild(section);
root.appendChild(main);
buttonValues.forEach(function (el) {
  var button = document.createElement('button');
  button.innerText = "".concat(el);

  switch (button.innerText) {
    case 'C':
      button.setAttribute('class', 'clear-button');
      clearButtonEvent(button);
      break;

    case ')':
    case '(':
    case '√':
    case '%':
    case '±':
      button.setAttribute('class', 'non-functionable');
      break;

    case 'x':
    case '÷':
    case '-':
    case '+':
      button.setAttribute('class', 'math_operation-button');
      operationButtonEvent(button);
      break;

    case '=':
      button.setAttribute('class', 'span-2-vertical equal-button');
      equalButtonEvent(button);
      break;

    case 'del':
      deleteButtonEvent(button);
      break;

    default:
      button.setAttribute('id', 'number-buttons');
      numberButtonEvent(button);
  }

  calcGrid.appendChild(button);
});
var calculator = new Calculator(outputPrevious, outputCurrent);
/* ----------------------- TOOLBAR ----------------------- */

function removeToolBarButtons() {
  toolBar.childNodes.forEach(function (el) {
    if (initialBtns.includes(el)) return;
    el.remove();
  }); // childNodes = toolBar.childNodes;
}

function addBtnFunc() {
  var innerText = prompt("innerText: ");
  if (innerText === '' || innerText === undefined) return;
  renderBtn(innerText, 'non-functionable'); // memory.push(toolBar.lastChild);
  // console.log(memory);
  // let currentChildNodes = Array.from(toolBar.childNodes)
}

var addBtn = renderBtn('+', '', '', addBtnFunc);
var clearBtn = renderBtn('-', '', '', removeToolBarButtons);
var changeColorBtn = renderBtn('CC', 'change-color-button', 'change-color-button', changeColorButtonFunc); // const initialChildNodes = Array.from(toolBar.childNodes)

var initialBtns = [addBtn, clearBtn, changeColorBtn]; // let memory = [];

function renderBtn(innerText, className, idName, callback) {
  var button = document.createElement('button');
  button.setAttribute('class', " ".concat(className, " tool-button"));
  button.setAttribute('id', idName);
  button.innerText = innerText;
  button.addEventListener('click', callback);
  toolBar.appendChild(button);
  return button;
} // function restoreBtns() {
//     console.log('y');
//     memory.forEach(el => {
//         renderBtn(el.innerText, el.className, el.idName);
//     })
// }
// if (initialChildNodes.length === 3) restoreBtns();
/******/ })()
;