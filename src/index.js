import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import './stylesheets/index.scss';
import routes from './components/routes';

render((
  <Router routes={routes} history={browserHistory} />
), document.getElementById('app'));
