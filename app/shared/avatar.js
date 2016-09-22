import React from 'react';

export const Avatar = React.createClass({

  render() {

    const avatarUrl = require(`../assets/avatars/${this.props.character}.png`);

    var setCharacter = {
      backgroundImage: `url(${avatarUrl})`
    };

    return (
      <span style={setCharacter} className="avatar"></span>
      );

  }

});
