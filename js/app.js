'use strict';


import {clearButtonEvent, numberButtonEvent, operationButtonEvent, equalButtonEvent, deleteButtonEvent} from './functionPool.js';
import Calculator from "./Calculator.js";


const root = document.getElementById('root');
const main = document.createElement('main');
const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.innerText = 'Calculator';
const section = document.createElement('section');
const calcGrid = document.createElement('div');
const output = document.createElement('div');
export const outputPrevious = document.createElement('div');
export const outputCurrent = document.createElement('div');

main.setAttribute('class', 'container');
calcGrid.setAttribute('class', 'calc-grid');
outputPrevious.setAttribute('class', 'output-previous');
outputCurrent.setAttribute('class', 'output-current');
output.setAttribute('class', 'output');

output.appendChild(outputPrevious);
output.appendChild(outputCurrent);
section.appendChild(calcGrid);
calcGrid.appendChild(output);
header.appendChild(h1);
main.appendChild(header);
main.appendChild(section);
root.appendChild(main);

const buttonValues = ['C', '(', ')', 'x', '√', '%', '±', '÷', 7, 8, 9, '-', 4, 5, 6, '+', 1, 2, 3, '=', '.', 0, 'del'];

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
