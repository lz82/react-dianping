import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginHeader from './containers/header-bar';
import LoginForm from './containers/login-form';

import { getToken } from '@/store/modules/login';

import css from './index.module.less';

const mapStateToProps = (state) => {
  return {
    token: getToken(state)
  };
};

function Login(props) {
  const { token } = props;

  const history = useHistory();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (token) {
      history.push((location.state && location.state.from) || '/home');
    }
  }, [token]);

  return (
    <div className={css['login-wrapper']}>
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

export default connect(mapStateToProps, null)(Login);
