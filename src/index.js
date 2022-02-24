'use strict';


import { keyLogger } from './tools/keylogger.js';
import { renderButton } from './render/buttons.js';
import './assets/css/style.css';
import './assets/css/hover.css';
import './assets/css/active.css';
import './assets/css/animation.css';
import './assets/css/media-query.css';

// rendering buttons
renderButton();

// preventing enter key to submit
document.addEventListener('keydown', el => {
    if (el.keyCode == 13) {
        el.preventDefault();
    }
});

// keyLogger
document.addEventListener('keydown', (el) => {
    keyLogger(el.key);
})
