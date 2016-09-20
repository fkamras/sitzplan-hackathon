require('./styles/main.scss');

require('file?name=[name].[ext]!./index.html');
import tiled from './lib/tiled.js';
import pixi from 'pixi.js';

import _ from 'lodash';

const desert = JSON.parse(require('raw!./example/desert.json'));
const desertTileset = require('xml!./example/desert.tsx');

const tilesets = {
  'desert.tsx': desertTileset
};

const container = document.getElementsByClassName('container')[0];
const renderer = pixi.autoDetectRenderer(container.offsetWidth, container.offsetHeight);

const stage = new pixi.Container();

const image = require('file!./example/tmw_desert_spacing.png');

const desertParsed = tiled.parse(desert);

const background = new pixi.Container();

const fillBackground = (tilemap, tileset, tileimage, container) => {
  const tileWidth = _.parseInt(tileset.tileset.$.tilewidth);
  const imageWidth = _.parseInt(tileset.tileset.image[0].$.width);
  const margin = _.parseInt(tileset.tileset.$.margin);
  const spacing = _.parseInt(tileset.tileset.$.spacing);
  const imagesPerRow = (imageWidth - ((2 * margin) - spacing)) / (tileWidth + spacing);

  const textureCache = {};

  const textureForTile = (tileNumber) => {
    if (textureCache[tileNumber]) {
      return textureCache[tileNumber];
    }

    const xPos = tileNumber % imagesPerRow;
    const yPos = (tileNumber - xPos) / imagesPerRow;

    const rect = new pixi.Rectangle(1 + (xPos * tileWidth) + xPos, 1 + (yPos * tileWidth) + yPos, tileWidth, tileWidth);
    const texture = new pixi.Texture(pixi.utils.TextureCache[tileimage], rect);

    textureCache[tileNumber] = texture;

    return texture;
  };

  const fillLayer = (layer) => {
    _.times(tilemap.height, (y) => {
      _.times(tilemap.width, (x) => {
        const tilePosition = x + tilemap.width * y;

        const tileNumber = layer.data[tilePosition] - 1; // WHY?

        const texture = textureForTile(tileNumber);
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
  fillBackground(desertParsed, desertTileset, image, background);

  stage.addChild(background);

  container.appendChild(renderer.view);

  renderer.render(stage);
};

pixi.loader
  .add(image)
  .load(setup);

