'use strict';

const root = document.getElementById('root');
const main = document.createElement('main');

const header = document.createElement('header');
const section = document.createElement('section');
const h1 = document.createElement('h1');
const calcGrid = document.createElement('div');
const output = document.createElement('div');
const outputHistory = document.createElement('div');
const outputResults = document.createElement('div');


main.setAttribute('class', 'container');
calcGrid.setAttribute('class', 'calc-grid');
output.setAttribute('class', 'output');
outputHistory.setAttribute('class', 'output-history');
outputResults.setAttribute('class', 'output-results');

h1.innerText = 'Calculator';

root.appendChild(main);
main.appendChild(h1);
main.appendChild(section);
section.appendChild(calcGrid);
output.appendChild(outputHistory);
output.appendChild(outputResults);
calcGrid.appendChild(output);

const buttonValues = ['C', '(', ')', 'x', '√', '%', '±', '÷', 7, 8, 9, '-', 4, 5, 6, '+', 1, 2, 3, '=', '.', 0, 'del'];

buttonValues.forEach(el => {
    let button = document.createElement('button');
    button.innerText = `${el}`;
    
    switch (button.innerText) {
        case 'C':
            button.setAttribute('class', 'clear-button');
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
                        break;
                        case '=':
            button.setAttribute('class', 'span-2-vertical equal-button');
            break;
    }
    calcGrid.appendChild(button);
})
