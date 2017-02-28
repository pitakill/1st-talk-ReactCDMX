'use strict';

var MyComponent = React.createClass({
  getDefaultProps: function() {
    return {
      message: "Esto es un 'default prop'"
    };
  },
  propTypes: {
    message: React.PropTypes.string
  },
  render: function() {
    return (
      <div>
        <h1>Hola ReactCDMX</h1>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
});

var WrapperComponent = React.createClass({
  render: function() {
    return (
      <div>
        <MyComponent />
        <MyComponent message="Mira mamá, otro componente" />
      </div>
    );
  }
});

ReactDOM.render(
  <WrapperComponent />,
  document.getElementById('root')
);
