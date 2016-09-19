require('file?name=[name].[ext]!./index.html');
import pixi from 'pixi.js';

const container = document.getElementsByClassName('container')[0];

const renderer = pixi.autoDetectRenderer(256, 256);

const stage = new pixi.Container();

container.appendChild(renderer.view);
renderer.render(stage);
