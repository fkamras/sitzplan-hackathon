import React from 'react';
import tiled from './lib/tiled.js';
import pixi from 'pixi.js';
import _ from 'lodash';

import avatars from './lib/avatars.js';

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

let renderer;

const container = document.getElementById('map-container');
const parkingSpace = document.getElementById('map-parking-space');

const avatarStage = new pixi.Container();

const startRendering = () => {

  renderer = pixi.autoDetectRenderer();

  const setup = () => {

    const update = (time) => {
      const timeInSeconds = time / 1000;
      _.map(avatarStage.children, (child) => {
        child.update(timeInSeconds);
      });
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

    container.appendChild(renderer.view);

    stage.addChild(avatarStage);

    // Interactivty

    stage.interactive = true;
    let dragging = false;
    let position = undefined;

    stage.on('mousedown', ({data}) => {
      dragging = true;
      position = {...data.global};
    });
    stage.on('mouseup', () => dragging = false);
    stage.on('mousemove', ({data}) => {
      if(dragging) {
        const newPosition = data.global;
        const dx = newPosition.x - position.x;
        const dy = newPosition.y - position.y;

        position = {...newPosition};
        stage.x += dx;
        stage.y += dy;
      };
    });

    renderLoop();
  };

  loader.load(setup);
};

startRendering();

const avatarfiles =[];


fetch('/api/avatars')
  .then((data) => data.json())
  .then((data) => {
    const mockAvatarData = _.map(data, (avatarfile) => {
      return {
        position: {
          x: Math.floor(Math.random() * 32),
          y: Math.floor(Math.random() * 32)
        },
        image: avatarfile
      };
    });

    avatars.populateStage({stage: avatarStage, avatars: mockAvatarData});
  });


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
