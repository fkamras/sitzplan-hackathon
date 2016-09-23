import React from 'react';
import { Link } from 'react-router';

import OfficeService from './services/office.js';

export const Offices = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    var data = new FormData(this.refs.officeForm);
    OfficeService.create(data).then((res) => {
      console.log(res);
      this.refs.officeForm.reset();
    });
    //this.props.addOffice({
      //name: this.refs.officeName.value
    //});
  },

  renderOffice(office, i) {
    return (
        <li key={i} ><Link to={`/offices/${i}`}>{office.name}</Link></li>
      );
  },

  render() {

    return (

      <div className="wrapper wrapper--pos-center">
        <h3>Offices</h3>
        <ul>
          {this.props.offices.map(this.renderOffice)}
        </ul>
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
