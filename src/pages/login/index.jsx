import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginHeader from './containers/header-bar';
import LoginForm from './containers/login-form';

import { getToken, actionCreators } from '@/store/modules/login';

import css from './index.module.less';

const mapStateToProps = (state) => {
  return {
    token: getToken(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(actionCreators, dispatch)
  };
};

function Login(props) {
  const {
    token,
    loginActions: { changeUsername, changePWD }
  } = props;

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    changeUsername('');
    changePWD('');
  }, []);

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
