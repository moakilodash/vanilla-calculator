'use strict';


import { changeColorButtonFunc } from "./randomColorGenerator";

export const toolBar = document.createElement('div');
toolBar.setAttribute('class', 'tool-bar floating-plate');

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
    button.setAttribute('tabindex', '-1'); // preventing tab indexing
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
