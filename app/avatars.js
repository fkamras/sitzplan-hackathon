import React from 'react';

import UserService from './services/user.js';
import { Avatar } from './shared/avatar.js';

export const Avatars = React.createClass({

  componentWillMount() {

    UserService.getAvatarList().then((res) => {
      res.json().then(function(json) {
        this.setState({
          avatarList: json
        });
      }.bind(this));
    });

  },

  getInitialState() {
    return {
      avatarList: []
    }
  },

  setAvatar(url) {
    UserService.update({avatar: url});
  },

  render() {

    return (
        <div className="wrapper wrapper--pos-center">
          <h3>Choose an Avatar</h3>
          <ul className="avatar-selector" >
          {this.state.avatarList.map((url, key) => <li onClick={this.setAvatar.bind(this, url)} className="avatar-selector__item" key={key} ><Avatar url={url} /></li>)}
          </ul>
        </div>
      )

  }


});
