require('file?name=[name].[ext]!./index.html');
import tiled from './lib/tiled.js';
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

const buildTilesetDict = (tilesets) => {
  const dict = {};

  _.each(tilesets, (tileset) => {
    const realTileset = tilesetsMap[tileset.source];
    const realImage = tilesetImagesMap[realTileset.tileset.image[0].$.source];
    const tileWidth = _.parseInt(realTileset.tileset.$.tilewidth);
    const imageWidth = _.parseInt(realTileset.tileset.image[0].$.width);
    const margin = _.parseInt(realTileset.tileset.$.margin);
    const spacing = _.parseInt(realTileset.tileset.$.spacing);
    const imagesPerRow = (imageWidth - ((2 * margin) - spacing)) / (tileWidth + spacing);

    const textureForTile = (tileNumber) => {
      const xPos = tileNumber % imagesPerRow;
      const yPos = (tileNumber - xPos) / imagesPerRow;

      const rect = new pixi.Rectangle(1 + (xPos * tileWidth) + xPos, 1 + (yPos * tileWidth) + yPos, tileWidth, tileWidth);
      const texture = new pixi.Texture(pixi.utils.TextureCache[realImage], rect);

      return texture;
    };

    _.times(realTileset.tileset.tile.length, (i) => {
      const texture = textureForTile(i);
      dict[tileset.firstgid + i] = texture;
    });
  });

  return dict;
};

const setup = () => {
  const dict = buildTilesetDict(desertParsed.tilesets);
  fillBackground(desertParsed, dict, background);

  stage.addChild(background);

  container.appendChild(renderer.view);
  renderer.render(stage);
};

pixi.loader
  .add(image)
  .load(setup);
