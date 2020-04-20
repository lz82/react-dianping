import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/index.less';
import App from '@/pages/app';
import store from '@/store';

import Home from '@/pages/home'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <Router>
          <Switch>
            <Route path="/home" render={props => <Home {...props} />} />
          </Switch>
        </Router>
      </App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
