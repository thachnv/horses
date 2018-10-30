import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={this.props.increaseCounter}>Click</button>
      </div>
    );
  }
}
