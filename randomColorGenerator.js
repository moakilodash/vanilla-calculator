'use strict';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '';
    for (var i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function request(method = 'GET', url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error('Error'));
            }
        }
        xhr.send();
    })
}

request('GET', `https://www.thecolorapi.com/scheme?hex=${getRandomColor()}`)
    .then(data => {
        let colors = [];
        data.colors.forEach(el => {
            colors.push(el.hex.value);
        })
        changeRandomColor(colors)
    }).catch(err => console.log(err));


function changeRandomColor(colors) {
    const cssRootStyle = getComputedStyle(cssRoot);
    cssRoot.style.setProperty('--random-color-primary', '#ffffff')
    cssRoot.style.setProperty('--random-bg-color-primary', colors[1])
    cssRoot.style.setProperty('--random-bg-color-primary-shadow', colors[0])
    cssRoot.style.setProperty('--random-color-accent', colors[0])
    cssRoot.style.setProperty('--random-bg-color-accent', colors[4])
    cssRoot.style.setProperty('--random-bg-color-accent-shadow', colors[1])
}

const cssRoot = document.querySelector(':root');