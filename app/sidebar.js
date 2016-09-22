import React from 'react';
import { Link } from 'react-router';

import { Avatar } from './shared/avatar.js';
import { UserBlock } from './shared/user-block.js';

export const Sidebar = React.createClass({

  user: false,

  render() {

    return (
        <aside className="game__aside">
          <Link to="/">Back...</Link>
          <p>
            Welcome to the <strong>Berlin</strong> office.
            Nerf guns are not allowed! Put your dirty dishes in the dishwasher...
          </p>
          <form>
            <input type="" placeholder="Search..." />
          </form>
          <div>
            <UserBlock />
            <UserBlock />
            <UserBlock />
            <UserBlock />
            <UserBlock />
          </div>
        </aside>
      );

  }

});
