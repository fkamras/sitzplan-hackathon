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

  getMapOptions(officeKey) {
    return (
        <select>
          {this.props.offices[officeKey].maps.map((map, key) => <option key={key} >{map.name}</option>)}
        </select>
      );
  },

  setMapsSelect() {
    const mapSelect = this.props.offices[this.refs.officeSelect.value] ?  this.getMapOptions(this.refs.officeSelect.value) : '';
    this.setState({
      mapSelect
    });
  },

  getInitialState() {
    return {
      mapSelect: ''
    };
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
              Office
              <select ref="officeSelect" name="office" onChange={this.setMapsSelect} >
                <option></option>
                {this.props.offices.map((item, key) => <option value={key} key={key} >{item.name}</option>)}
              </select>
              {this.state.mapSelect}
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
