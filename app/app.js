require('./styles/main.scss');

require('file?name=[name].[ext]!./index.html');
import tiled from './lib/tiled.js';
import textureBuilder from './lib/texture-builder.js';
import pixi from 'pixi.js';

import _ from 'lodash';

const desert = JSON.parse(require('raw!./example/desert.json'));
const desertTileset = require('xml!./example/desert.tsx');
const image = require('file!./example/tmw_desert_spacing.png');

const tilesetsMap = {
  'desert.tsx': desertTileset
};

const tilesetImagesMap = {
  'tmw_desert_spacing.png': image
};

const container = document.getElementsByClassName('container')[0];

const renderer = pixi.autoDetectRenderer(2000, 2000);

const stage = new pixi.Container();

const desertParsed = tiled.parse(desert);

const background = new pixi.Container();

const fillBackground = (tilemap, textureDict, container) => {
  const fillLayer = (layer) => {
    _.times(tilemap.height, (y) => {
      _.times(tilemap.width, (x) => {
        const tilePosition = x + tilemap.width * y;

        const tileNumber = layer.data[tilePosition];

        const texture = textureDict[tileNumber];
        const sprite = new pixi.Sprite(texture);

        sprite.x = x * tilemap.tilewidth;
        sprite.y = y * tilemap.tileheight;

        container.addChild(sprite);
      });
    });
  };

  _.each(tilemap.layers, fillLayer);
};

const setup = () => {
  const dict = textureBuilder.buildTilesetDict(desertParsed.tilesets, tilesetsMap, tilesetImagesMap);
  fillBackground(desertParsed, dict, background);

  stage.addChild(background);

  container.appendChild(renderer.view);
  renderer.render(stage);
};

pixi.loader
  .add(image)
  .load(setup);
