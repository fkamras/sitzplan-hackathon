import React from 'react';

export const Avatar = React.createClass({

  render() {

    var setCharacter = {
      backgroundImage: `url(/app/assets/avatars/${this.props.character}.png)`
    };

    return (
      <span style={setCharacter} className="avatar"></span>
      );

  }

});
