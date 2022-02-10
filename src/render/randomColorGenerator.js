'use strict';


// const cssRoot = document.querySelector(':root');

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

function changeRandomColor(colors) {
    // cssRoot.style.setProperty('--random-color-primary', '#FEFEFE');
    // cssRoot.style.setProperty('--random-bg-color-primary', colors[1]);
    // cssRoot.style.setProperty('--random-bg-color-primary-shadow', colors[0]);
    // cssRoot.style.setProperty('--random-color-accent', colors[0]);
    // cssRoot.style.setProperty('--random-bg-color-accent', colors[4]);
    // cssRoot.style.setProperty('--random-bg-color-accent-shadow', colors[1]);
    // cssRoot.style.setProperty('--random-heading-color', colors[0]);

    $(document).ready(() => {
        $(':root').css('--random-heading-color', colors[0]);
        $(':root').css('--random-color-primary', '#FEFEFECC');
        $(':root').css('--random-bg-color-primary', `${colors[1]}`);
        $(':root').css('--random-bg-color-primary-shadow', `${colors[0]}AA`);
        $(':root').css('--random-color-accent', `${colors[0]}`);
        $(':root').css('--random-bg-color-accent-shadow', `${colors[3]}AA`);
        $(':root').css('--random-bg-color-accent', `${colors[4]}44`);
        $(':root').css('--random-bg-color-primary-tool', `#${colors[5]}50`)
        $(':root').css('--random-bg-color-accent-tool', `#${colors[5]}10`);
    })
}

export function changeColorButtonFunc() {
    let randomColor = getRandomColor();
    request('GET', `https://www.thecolorapi.com/scheme?hex=${randomColor}`)
    .then(data => {
        let colors = [];
        data.colors.forEach(el => {
            colors.push(el.hex.value);
        })
        colors.push(randomColor);
        changeRandomColor(colors)
    }).catch(err => console.log(err));
}