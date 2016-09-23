import { Sprite, Texture, Rectangle } from 'pixi.js';
import { map, each } from 'lodash';

const buildAvatarSprites = (avatars, tilesize) => {
  const avatarSprites = map(avatars, ({image, position}) => {
    const avatarTexture = new Texture.fromImage(image);
    avatarTexture.frame = new Rectangle(0,0,32,48);
    const avatarSprite = new Sprite(avatarTexture);

    avatarSprite.x = position.x * tilesize;
    avatarSprite.y = position.y * tilesize;
    avatarTexture.baseTexture.width = tilesize * 4;

    const animationCycle = {
      current: 0,
      animations: [
        new Rectangle(0,0,32,48),
        new Rectangle(32,0,32,48),
        new Rectangle(64,0,32,48),
        new Rectangle(96,0,32,48),
      ]
    };

    let sinceLastAnim = 0;
    const animEvery = 0.3;
    avatarSprite.update = (timeInSeconds) => {
      sinceLastAnim += timeInSeconds;
      if(sinceLastAnim > animEvery) {
        sinceLastAnim -= animEvery;
        animationCycle.current = (animationCycle.current + 1) % 4;
        avatarTexture.frame = animationCycle.animations[animationCycle.current];
      }
    };

    avatarSprite.interactive = true;
    avatarSprite.on('click', () => console.log(image));

    return avatarSprite;
  });

  return avatarSprites;
};

const populateStage = ({stage, avatars, tilesize = 32}) => {

  const avatarSprites = buildAvatarSprites(avatars, tilesize);
  
  each(avatarSprites, (avatar) => {
    stage.addChild(avatar);
  });
};


const avatars = {
  populateStage
};

export default avatars;
