'use strict';

var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hola ReactCDMX</h1>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent message="Mi segundo encabezado" />,
  document.getElementById('root')
);
