import { Container, Sprite } from 'pixi.js';
import _ from 'lodash';

const buildStage = (tiledMap, textureDict) => {
  const stage = new Container();

  const fillLayer = (layer) => {
    _.times(tiledMap.height, (y) => {
      _.times(tiledMap.width, (x) => {
        const tilePosition = x + tiledMap.width * y;

        const tileNumber = layer.data[tilePosition];

        const texture = textureDict[tileNumber];
        const sprite = new Sprite(texture);

        sprite.x = x * tiledMap.tilewidth;
        sprite.y = y * tiledMap.tileheight;

        stage.addChild(sprite);
      });
    });
  };

  _.each(tiledMap.layers, fillLayer);

  return stage;
};

const stageBuilder = {
  buildStage
};

export default stageBuilder;
