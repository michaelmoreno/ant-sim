import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 'white',
}) as any;

document.body.appendChild(app.view);