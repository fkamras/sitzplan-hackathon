import React from 'react';

import UserService from './services/user.js';

export const SignUp = React.createClass({

  signUp(e) {
    e.preventDefault();
    UserService.create().then(function(data){
      this.props.setCurrentUser(data);
    }.bind(this));
  },

  render() {

    return (
        <div className="wrapper wrapper--pos-center">
          <h3>Sign Up</h3>
          <form onSubmit={this.signUp}>
            <label>
              First Name
              <input type="text" />
            </label>
            <label>
              Last Name
              <input type="text" />
            </label>
            <label>
              Work Title
              <input type="text" />
            </label>
            <label>
              Department
              <input type="text" />
            </label>
            <label>
              Phone Number
              <input type="text" />
            </label>
            <label>
              Email
              <input type="text" />
            </label>
            <button className="button button--primary" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      )

  }

});
