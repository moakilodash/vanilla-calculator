'use strict';


import { clearButtonEvent, numberButtonEvent, operationButtonEvent, equalButtonEvent, deleteButtonEvent } from './tools/functionPool.js';
import { buttonValues } from "./tools/constants.js";
import { calcGrid } from "./render/page.js";
import './assets/css/style.css';
import './assets/css/hover.css';
import './assets/css/active.css';
import './assets/css/animation.css';
import './assets/css/media-query.css';


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
