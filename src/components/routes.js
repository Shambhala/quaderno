import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './app';
import Projects from './projects';
import Users from './users';
import User from './user';
import Home from './home';

module.exports = (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/users" component={Users}/>
      <Route path="/users/:userName/:projectName" component={User}/>
    </Route>
);
