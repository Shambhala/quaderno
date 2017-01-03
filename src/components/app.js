import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import NavLink from './common/navlink';

export default class App extends Component {
    render() {
        return (
          <div>
          <div className="header">
          <nav>
              <ul role="nav">
                  <li>
                      <IndexLink to="/" activeClassName="active">Home</IndexLink>
                  </li>
                  <li>
                      <NavLink to="/projects">Projects</NavLink>
                  </li>
                  <li>
                      <NavLink to="/users">Users</NavLink>
                  </li>
              </ul>
          </nav>
        </div>
            <div className="container">
                <div className="row">
                  <div className="hero">
                    {this.props.children}
                  </div>
                </div>
            </div>
          </div>
        );
    }
}
