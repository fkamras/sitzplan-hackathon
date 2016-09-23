import React from 'react';
import { push } from 'react-router-redux';
import UserService from './services/user.js';

export const SignUp = React.createClass({

  signUp(e, data) {
    e.preventDefault();
    var data = new FormData(this.refs.signUpForm);
    UserService.create(data).then(function(data){
      this.props.setCurrentUser(data);
      window.location.hash = '#/avatars/';
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
      ...this.state,
      mapSelect
    });
  },

  getInitialState() {
    return {
      mapSelect: '',
      socialLinks: []
    };
  },

  addSocial() {
    const socialKey = this.refs.socialLinkSelect.value;
    const alreadyIn = this.state.socialLinks.find((i) => i.key === socialKey );
    if(!alreadyIn) {
      this.setState({
        ...this.state,
        socialLinks: [...this.state.socialLinks, { key: socialKey } ]
      });
    }
  },

  renderSocialInputs(val, key) {
    return (
      <label key={key} >
        {val.key}
        <input type="url" name={`user[social][${val.key}]`}  />
      </label>
      );
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
              Department
              <input type="text" name="user[department]" />
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
              Social
              <select ref="socialLinkSelect">
                <option>Facebook</option>
                <option>YouTube</option>
                <option>Twitter</option>
                <option>LinkedIn</option>
                <option>Xing</option>
                <option>Pinterest</option>
                <option>Tumblr</option>
                <option>Vine</option>
                <option>Instagram</option>
                <option>GNU Social</option>
                <option>Diaspora</option>
              </select>
            </label>
            <label>
              <button onClick={this.addSocial} type="button" className="button" >
                Add
              </button>
            </label>
            {this.state.socialLinks.map(this.renderSocialInputs)}
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
