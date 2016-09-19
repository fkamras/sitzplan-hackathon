require('file?name=[name].[ext]!./index.html');
import tiled from './lib/tiled.js';
import pixi from 'pixi.js';

const desert = JSON.parse(require('raw!./example/desert.json'));
const container = document.getElementsByClassName('container')[0];

const renderer = pixi.autoDetectRenderer(640, 480);

const stage = new pixi.Container();

container.appendChild(renderer.view);
renderer.render(stage);

console.log(tiled.parse(desert));
