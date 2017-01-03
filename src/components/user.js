import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.params.userName}-{this.props.params.projectName}</h3>
      </div>
    )
  }};
