import pixi from 'pixi.js';
import _ from 'lodash';

const buildTilesetDict = (tilesets, tilesetsMap, tilesetImagesMap) => {
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
const textureBuilder = {
  buildTilesetDict
};

export default textureBuilder;

