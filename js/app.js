'use strict';

var MyComponent = React.createClass({
  render: function() {
    return React.DOM.h1(null, 'Hola ReactCDMX');
  }
});

ReactDOM.render(React.createElement(MyComponent), document.getElementById('root'));
