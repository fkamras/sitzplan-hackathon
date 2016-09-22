import React from 'react';

import { Avatar } from './avatar.js';

export const UserBlock = React.createClass({

  render() {

    return (
        <div className="user-block" >
          <Avatar character="baker" />
          <p className="user-block__label" > Ferenc <small>Front-End Developer - Creative Services</small></p>
        </div>
      )

  }

});
