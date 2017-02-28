import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    const {message} = props;

    this.state = {
      message
    };

    Object.assign(this, props);
  }

  updateText(event) {
    this.setState({
      message: event.target.value
    });
  }

  render() {
    return (
      <div>
      <input
        type="text"
        onChange={this.updateText.bind(this)}
        />
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  message: 'Mensaje por defecto'
};

class WrapperComponent extends React.Component {
  render() {
    return(
      <div>
        <MyComponent message="Esto es un 'default prop'"/>
        <MyComponent />
      </div>
    );
  }
}

ReactDOM.render(
  <WrapperComponent />,
  document.getElementById('root')
);
