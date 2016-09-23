import React from 'react';
import { Link } from 'react-router';

import OfficeService from './services/office.js';

export const Offices = React.createClass({

  handleSubmit(e) {

    e.preventDefault();
    var data = new FormData(this.refs.officeForm);



    OfficeService.create(data).then((res) => {
      res.json().then((body) => {
        this.props.addOffice(body.data);
        this.refs.officeForm.reset();
      })
    });

  },

  renderOffice(office, i) {
    return (
        <li key={i} ><Link to={`/offices/${office.id}`}>{office.name}</Link></li>
      );
  },

  render() {

    return (

      <div className="wrapper wrapper--pos-center">
        <h3>Offices</h3>
        <ul>
          {this.props.offices.map(this.renderOffice)}
        </ul>
        <h4>Add new office</h4>
        <form ref="officeForm" onSubmit={this.handleSubmit} >
          <label>
            Name
            <input ref="officeName" name="office[name]" />
          </label>
          <button className="button button--primary" type="submit">ADD</button>
        </form>
      </div>

      )

  }

});
