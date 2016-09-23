import React from 'react';

export const Main = React.createClass({

  render() {
    return (
      <div className="app">
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
      )
  }

})
