import React from 'react';
import tiled from './lib/tiled.js';
import pixi from 'pixi.js';
import _ from 'lodash';

const desert = JSON.parse(require('raw!./example/desert.json'));
const desertTileset = require('xml!./example/desert.tsx');
const image = '/' + require('file!./example/tmw_desert_spacing.png');

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
        .add(image);

const container = document.getElementById('map-container');
const parkingSpace = document.getElementById('map-parking-space');

const startRendering = () => {

  const renderer = pixi.autoDetectRenderer(2000, 2000);

  const setup = () => {
    const dict = textureBuilder.buildTilesetDict(desertParsed.tilesets, tilesetsMap, tilesetImagesMap);
    const map = stageBuilder.buildStage(desertParsed, dict);

    stage.addChild(map);

    container.appendChild(renderer.view);
    renderer.render(stage);
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
        <div ref='container' className="container"></div>
    );
  }

});
