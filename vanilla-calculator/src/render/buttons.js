'use strict';


import { clearButtonEvent, numberButtonEvent, operationButtonEvent, equalButtonEvent, deleteButtonEvent } from '../tools/functionPool.js';
import { buttonValues } from "../tools/constants.js";
import { calcGrid } from "./page.js";

export function renderButton () {
    buttonValues.forEach(el => {
        let button = document.createElement('button');
        button.innerText = `${el}`;
        switch (el) {
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
        button.setAttribute('tabindex', '-1'); // preventing tab indexing
        calcGrid.appendChild(button);
    })
}
