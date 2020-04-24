import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/index.less';
import App from '@/pages/app';
import store from '@/store';
import Routers from './routers';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App>
      <Routers />
    </App>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
