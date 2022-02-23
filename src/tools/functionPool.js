'use strict';


import { calculator } from '../render/page.js';

export function numberButtonEvent(button) {
    let numberButtons = [button];
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
            calculator.render();
        })
    })
}

export function clearButtonEvent(button) {
    button.addEventListener('click', () => {
        calculator.clear();
        calculator.render();
    })
}

export function operationButtonEvent(button) {
    let operationButtons = [button];
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText);
            calculator.render();
        })
    })
}

export function equalButtonEvent(button) {
    button.addEventListener('click', () => {
        calculator.compute();
        calculator.render();
    })
}

export function deleteButtonEvent(button) {
    button.addEventListener('click', () => {
        calculator.delete();
        calculator.render();
    })
}