import React from 'react';

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
    this.props.addMap(this.props.params.officeKey, {
      name: this.refs.newMapName.value
    });
    this.refs.mapForm.reset();
  },

  render() {

    const { officeKey } = this.props.params;
    const theOffice = this.props.offices[officeKey];

    return (
      <div className="wrapper wrapper--pos-center">
        <h3>{theOffice.name}</h3>
        <ul>
          {theOffice.maps.map(this.renderMap)}
        </ul>
        <form ref="mapForm" onSubmit={this.handleSubmit} >
          <label>
            Name:
            <input ref="newMapName" type="text" name="name" />
          </label>
          <label>
            Map file:
            <input type="file" name="name" />
          </label>
          <button type="submit" className="button button--primary" >
            Save
          </button>
        </form>
      </div>
      )

  }

});
