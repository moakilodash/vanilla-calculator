'use strict';


import {outputPrevious, outputCurrent} from './app.js';

export default class Calculator {
    constructor (outputPrevious, outputCurrent) {
        this.outputPrevious = outputPrevious;
        this.outputCurrent = outputCurrent;
        
        this.outputCurrentText = '';
        this.outputPreviousText = '';
    }
    
    clear() {
        this.outputCurrentText = '';
        this.outputPreviousText = '';
        this.operation = undefined;
    }

    appendNumber(number) {
        if (number === '.' && this.outputCurrentText.includes('.')) return;
        if (number === '.' && this.outputCurrentText === '') this.outputCurrentText = '0';
        this.outputCurrentText += number;
    }

    chooseOperation(operation) {
        if (this.outputCurrentText === '') return;
        if (this.outputPreviousText !== '') this.compute();
        this.operation = operation;
        this.outputPreviousText = this.outputCurrentText;

        this.outputCurrentText = '';
    }

    compute() {
        let output;
        const previous = parseFloat(this.outputPreviousText);
        const current = parseFloat(this.outputCurrentText);
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

    delete() {
        this.outputCurrentText = this.outputCurrentText.toString().slice(0, -1);
    }

    render() {
        this.outputCurrent.innerText = this.outputCurrentText;
        if (this.operation !== undefined) {
            this.outputPrevious.innerText = `${this.outputPreviousText} ${this.operation}`
        } else {
            this.outputPrevious.innerText = this.outputPreviousText;
        }
    }
}

