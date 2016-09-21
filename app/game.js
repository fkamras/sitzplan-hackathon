import React from 'react';

import { GameMap } from './game-map.js';
import { Sidebar } from './sidebar.js';

export const Game = React.createClass({
  render() {
    return (
        <div className="wrapper wrapper--fs game">
          <Sidebar/>
          <GameMap/>
        </div>
      )
  }
});
