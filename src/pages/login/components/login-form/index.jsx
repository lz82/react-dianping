import React from 'react';

import css from './index.module.less';

export default function LoginForm(props) {
  const {
    username,
    pwd,
    loginActions: { login },
    handleChange
  } = props;
  return (
    <div className={css['login-form-wrapper']}>
      <div className={css['input-container']}>
        <div className={css['row']}>
          <label className={css['mobile-label']}>86</label>
          <input
            className={css['input']}
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className={css['row']}>
          <label className={css['password-label']}>密码</label>
          <input
            className={css['input']}
            name="password"
            type="password"
            value={pwd}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={css['btn-container']}>
        <button className={css['btn']} onClick={login}>
          登录
        </button>
      </div>
    </div>
  );
}
