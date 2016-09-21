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

const container = document.getElementById('map-container');
const parkingSpace = document.getElementById('map-parking-space');

const startRendering = () => {

  console.log(container.offsetWidth, container.offsetHeight);

  const renderer = pixi.autoDetectRenderer(container.offsetWidth, container.offsetHeight);

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

  componentDidMount() {
    const internalContainer = this.refs.container;
    internalContainer.appendChild(container);
  },

  componentWillUnmount() {
    parkingSpace.appendChild(container);
  },

  render() {
    return (
        <div ref='container' className="container game__main"></div>
    );
  }

});
