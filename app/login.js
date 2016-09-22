import React from 'react';

export const LogIn = React.createClass({

  render() {

    return (
        <div className="wrapper wrapper--pos-center">
          <h3>Sitzplan Login</h3>
          <form>
            <label>
              What's your username?
              <input type="text" />
            </label>
            <button className="button button--primary" type="submit">
              Enter
            </button>
          </form>
        </div>
      )

  }

});
