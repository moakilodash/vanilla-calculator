'use strict';


import { toolBar } from "../render/toolBar";
import Calculator from "../entity/Calculator";


const root = document.getElementById('root');
const main = document.createElement('main');
const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.innerText = 'Calculator';
const section = document.createElement('section');
export const calcGrid = document.createElement('div');

const output = document.createElement('div');
const outputPrevious = document.createElement('div');
const outputCurrent = document.createElement('div');

main.setAttribute('class', 'container');
section.setAttribute('class', 'flex-2');
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

export const calculator = new Calculator(outputPrevious, outputCurrent);
