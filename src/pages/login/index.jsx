import React from 'react';

import LoginHeader from './containers/header-bar';
import LoginForm from './containers/login-form';

import css from './index.module.less';

export default function Login() {
  return (
    <div className={css['login-wrapper']}>
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
