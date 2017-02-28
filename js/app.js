'use strict';

var MyComponent = React.createClass({
  getInitialState: function() {
    return {
      message: 'Mensaje por defecto'
    };
  },
  updateText: function(event) {
    this.setState({
      message: event.target.value
    });
  },
  render: function() {
    return (
      <div>
      <input
        type="text"
        onChange={this.updateText}
        />
        <h2>{this.state.message}</h2>
      </div>
    );
  }
});

var WrapperComponent = React.createClass({
  render: function() {
    return (
      <div>
        <MyComponent />
        <MyComponent />
      </div>
    );
  }
});

ReactDOM.render(
  <WrapperComponent />,
  document.getElementById('root')
);
