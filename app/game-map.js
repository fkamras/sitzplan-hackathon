import React from 'react';
import tiled from './lib/tiled.js';
import pixi from 'pixi.js';
import _ from 'lodash';

const desert = JSON.parse(require('raw!./example/desert.json'));
const desertTileset = require('xml!./example/desert.tsx');
const image = '/' + require('file!./example/tmw_desert_spacing.png');
const jun =  '/' + require('file!./example/jun.jpg');

import textureBuilder from './lib/texture-builder.js';
import stageBuilder from './lib/stage-builder.js';

const tilesetsMap = {
  'desert.tsx': desertTileset
};

const tilesetImagesMap = {
  'tmw_desert_spacing.png': image
};

const stage = new pixi.Container();

const desertParsed = tiled.parse(desert);
const loader = pixi.loader
        .add(image)
        .add(jun);

var renderer;

const container = document.getElementById('map-container');
const parkingSpace = document.getElementById('map-parking-space');

const startRendering = () => {

  renderer = pixi.autoDetectRenderer();

  const setup = () => {

    const junTexture = pixi.utils.TextureCache[jun];
    const junSprite = new pixi.Sprite(junTexture);

    const update = (time) => {
      const timeInSeconds = time / 1000;

      junSprite.x = (junSprite.x + (50 * timeInSeconds)) % 300;
      junSprite.y = (junSprite.y + (50 * timeInSeconds)) % 300;
      junSprite.rotation += (timeInSeconds * 0.5);
    };

    let lastTime;
    const renderLoop = (timestamp) => {
      const timePassed = timestamp - lastTime;
      lastTime = timestamp;

      update(timePassed || 0);
      renderer.render(stage);
      requestAnimationFrame(renderLoop);
    };

    const dict = textureBuilder.buildTilesetDict(desertParsed.tilesets, tilesetsMap, tilesetImagesMap);
    const map = stageBuilder.buildStage(desertParsed, dict);

    stage.addChild(map);
    stage.addChild(junSprite);

    container.appendChild(renderer.view);
    renderLoop();
  };

  loader.load(setup);
};

startRendering();

export const GameMap = React.createClass({

  handleResize() {
    renderer.resize(container.offsetWidth, container.offsetHeight);
  },

  componentDidMount() {
    const internalContainer = this.refs.container;
    internalContainer.appendChild(container);
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount() {
    parkingSpace.appendChild(container);
    window.removeEventListener('resize', this.handleResize);
  },

  render() {
    return (
        <div ref='container' className="container game__main"></div>
    );
  }

});
