'use strict';


import { calculator } from "../render/page.js";
import { digits } from "./constants.js";


export function keyLogger(key) {
    switch (key) {
        case 'c':
        case 'Delete':
            calculator.clear();
            calculator.render();
        case 'x':
        case '*':
            calculator.chooseOperation('x');
            calculator.render();
            break;
        case '/':
            calculator.chooseOperation('÷');
            calculator.render();
            break;
        case '-':
            calculator.chooseOperation('-');
            calculator.render();
            break;
        case '+':
            calculator.chooseOperation('+');
            calculator.render();
            break;
        case 'Enter':
        case '=':
            calculator.compute();
            calculator.render();
            break;
        case 'Backspace':
            calculator.delete();
            calculator.render();
            break;
        // case ')':
        // case '(':
        // case '√':
        // case '%':
        // case '±':
        default:
            if (key.includes('.') || digits.includes(key)) {
                calculator.appendNumber(key);
                calculator.render();
            }
    }
}
