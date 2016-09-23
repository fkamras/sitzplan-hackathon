import React from 'react';

import OfficeService from './services/office.js';

export const Office = React.createClass({

  removeMap(officeKey, mapKey) {
    this.props.removeMap(officeKey, mapKey);
  },

  renderMap(map, key) {
    return (
        <li className="removable" onClick={this.removeMap.bind(this, this.props.params.officeKey, key)} key={key} >
          {map.name}
        </li>
      )
  },

  handleSubmit(e) {

    e.preventDefault();

    const data = new FormData(this.refs.mapForm);
    OfficeService.addMap(data).then((res) => {
      res.json().then((body) => {
        console.log(body.data);
        this.props.addMap(body.data);
        this.refs.mapForm.reset();
      });
    });

  },

  getInitialState() {
    return {
      fileFields: []
    };
  },

  addFileField() {
    console.log(this.state);
    this.setState({
      ...this.state,
      fileFields: [...this.state.fileFields, 'hack']
    });
  },

  fileField(val, key) {
    return (
        <label key={key}>
          <input type="text" name="map[files][]"  />
        </label>
    );
  },

  render() {

    const { officeId } = this.props.params;
    const theOffice = this.props.offices.find((item) => item.id === parseInt(officeId));

    return (
      <div className="wrapper wrapper--pos-center">
        <h3>{theOffice.name}</h3>
        <ul>
          {theOffice.maps.map(this.renderMap)}
        </ul>
        <form ref="mapForm" onSubmit={this.handleSubmit} >
          <input type="hidden" name="map[office_id]" value={officeId} />
          <label>
            Name:
            <input ref="newMapName" type="text" name="map[name]" />
          </label>
          <label>
            Floor:
            <input ref="newMapName" type="number" name="map[floor]" />
          </label>
          <label>
            <button  onClick={this.addFileField} type="button" className="button" >
              Add File
            </button>
          </label>
          {this.state.fileFields.map(this.fileField)}
          <button type="submit" className="button button--primary" >
            Save
          </button>
        </form>
      </div>
      )

  }

});
