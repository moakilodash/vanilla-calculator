'use strict';


import { clearButtonEvent, numberButtonEvent, operationButtonEvent, equalButtonEvent, deleteButtonEvent } from './tools/functionPool.js';
import { changeColorButtonFunc } from './render/randomColorGenerator.js';
import Calculator from "./entity/Calculator.js";
import { buttonValues } from "./tools/constants.js";
import './assets/css/style.css';
import './assets/css/hover.css';
import './assets/css/active.css';
import './assets/css/animation.css';
import './assets/css/media-query.css';


const root = document.getElementById('root');
const main = document.createElement('main');
const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.innerText = 'Calculator';
const section = document.createElement('section');
const calcGrid = document.createElement('div');
const toolBar = document.createElement('div');

const output = document.createElement('div');
export const outputPrevious = document.createElement('div');
export const outputCurrent = document.createElement('div');

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
section.appendChild(toolBar)
calcGrid.appendChild(output);
header.appendChild(h1);
main.appendChild(header);
main.appendChild(section);
root.appendChild(main);

buttonValues.forEach(el => {
    let button = document.createElement('button');
    button.innerText = `${el}`;
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
})


export const calculator = new Calculator(outputPrevious, outputCurrent);


/* ----------------------- TOOLBAR ----------------------- */

function removeToolBarButtons() {
    toolBar.childNodes.forEach(el => {
        if (initialBtns.includes(el)) return;
        el.remove();
    });
    // childNodes = toolBar.childNodes;
}    

function addBtnFunc() {
    let innerText = prompt("innerText: ");
    if (innerText === '' || innerText === undefined) return;
    renderBtn(innerText, 'non-functionable');
    // memory.push(toolBar.lastChild);
    // console.log(memory);
    // let currentChildNodes = Array.from(toolBar.childNodes)
}


const addBtn = renderBtn('+', '', '', addBtnFunc);
const clearBtn = renderBtn('-', '', '', removeToolBarButtons);
const changeColorBtn = renderBtn('CC', 'change-color-button', 'change-color-button', changeColorButtonFunc);
// const initialChildNodes = Array.from(toolBar.childNodes)

const initialBtns = [addBtn, clearBtn, changeColorBtn];
// let memory = [];

function renderBtn(innerText, className, idName, callback) {
    const button = document.createElement('button');
    button.setAttribute('class', ` ${className} tool-button`);
    button.setAttribute('id', idName);
    button.innerText = innerText;
    button.addEventListener('click', callback);
    toolBar.appendChild(button);
    return button;
}

// function restoreBtns() {
//     console.log('y');
//     memory.forEach(el => {
//         renderBtn(el.innerText, el.className, el.idName);
//     })
// }
// if (initialChildNodes.length === 3) restoreBtns();

