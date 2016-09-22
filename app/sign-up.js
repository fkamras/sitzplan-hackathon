import React from 'react';

import UserService from './services/user.js';

export const SignUp = React.createClass({

  signUp(e, data) {
    e.preventDefault();
    var data = new FormData(this.refs.signUpForm);
    UserService.create(data).then(function(data){
      this.props.setCurrentUser(data);
    }.bind(this), (err) => {

    });
  },

  render() {

    return (
        <div className="wrapper wrapper--pos-center">
          <h3>Sign Up</h3>
          <form ref="signUpForm" onSubmit={this.signUp}>
            <label>
              Full Name
              <input type="text" name="user[name]" />
            </label>
            <label>
              Work Title
              <input type="text" name="user[work_title]" />
            </label>
            <label>
              Phone Number
              <input type="text" name="user[phone]" />
            </label>
            <label>
              Email
              <input type="text" name="user[email]" />
            </label>
            <label>
              Quote
              <textarea name="user[quote]" >

              </textarea>
            </label>
            <button className="button button--primary" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      )

  }

});
