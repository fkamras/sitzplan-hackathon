import React from 'react';

import OfficeService from './services/office.js';

export const Main = React.createClass({


  componentWillMount() {

    OfficeService.getAll().then((res) => {
      res.json().then((body) => {
        for(const i in body.data) {
          this.props.addOffice(body.data[i]);
        }
        this.setState({
          loading: ''
        })
      });
    })

  },

  renderLoading() {
    return (
        <div className="app-loading">
        <div className="hero">
          <h1 className="hero__title"> Loading </h1>
        </div>
        </div>
      )
  },

  getInitialState() {
    return {
      loading: this.renderLoading()
    };
  },

  render() {
    return (
      <div className="app">
        {React.cloneElement({...this.props}.children, {...this.props})}
        {this.state.loading}
      </div>
      )
  }

})
