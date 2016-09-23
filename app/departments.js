import React from 'react';

export const Departments = React.createClass({

  render() {

    return(
        <div className="wrapper wrapper--pos-center">
          <h3>Departments</h3>
          <form ref="departmentForm">
            <label>
            Name
            <input type="text" name="department[name]" />
            </label>
            <label>
            Parent
            <select name="department[parent]">
              <option></option>
            </select>
            </label>
            <button className="button button--primary" type="submit">Save</button>
          </form>
        </div>
      )

  }

});
