import React from 'react';

import { GameMapFactory } from './game-map.js';
import { Sidebar } from './sidebar.js';

export const GameFactory = (store) => {
  const GameMap = GameMapFactory(store);
  const Game = React.createClass({
    render() {
      return (
          <div className="wrapper wrapper--fs game">
          <Sidebar/>
          <GameMap/>
          </div>
      );
    }
  });

  return Game;
};
