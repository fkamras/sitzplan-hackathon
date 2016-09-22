import React from 'react';

export const SignUp = React.createClass({

  signUp(e) {
    e.preventDefault();
    this.props.signUp();
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
