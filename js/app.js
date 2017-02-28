'use strict';

var MyComponent = React.createClass({
  render: function() {
    return  <h1>Hola ReactCDMX</h1>
            <h2>Segundo encabezdo</h2>;
  }
});

ReactDOM.render(<MyComponent/>, document.getElementById('root'));
