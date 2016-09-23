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
          content: React.cloneElement({...this.props}.children, {...this.props})
        })
      });
    })

  },

  renderLoading() {
    return (
        <div className="hero">
          <h1 className="hero__title"> Loading </h1>
        </div>
      )
  },

  getInitialState() {
    return {
      content: this.renderLoading()
    };
  },

  render() {
    return (
      <div className="app">
        {this.state.content}

      </div>
      )
  }

})
