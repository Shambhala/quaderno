import React, { PropTypes, Component } from 'react';
import NavLink from './common/navlink';

export default class Users extends Component {
  constructor()
  {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const project = event.target.elements[1].value;
    const path = `/users/${userName}/${project}`;
    console.log(path);
    this.context.router.push(path);
  }

  render() {
    return (
      <div><h2>Users</h2>
        {/* Add some links */}
        <ul>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="project"/>{' '}
              <button type="submit">Submit</button>
            </form>
          </li>
          <li><NavLink to="/users/admin/installation">Admin Installation Project</NavLink></li>
          <li><NavLink to="/users/manager/upgrade">Manager's Upgrade Project</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

Users.contextTypes= {
  router: PropTypes.object.isRequired
};
