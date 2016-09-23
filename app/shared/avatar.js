import React from 'react';

export const Avatar = React.createClass({

  render() {

    const avatarUrl = this.props.url;

    var setCharacter = {
      backgroundImage: `url(${avatarUrl})`
    };

    return (
      <span style={setCharacter} className="avatar"></span>
      );

  }

});
