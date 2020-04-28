import React from 'react';

import css from './index.module.less';

export default function LoginForm(props) {
  const { username, password, onChange, onSubmit } = props;
  return (
    <div className={css['login-form-wrapper']}>
      <div className={css['input-container']}>
        <div className={css['row']}>
          <label className={css['mobile-label']}>86</label>
          <input className={css['input']} name="username" value={username} onChange={onChange} />
        </div>
        <div className={css['row']}>
          <label className={css['password-label']}>密码</label>
          <input
            className={css['input']}
            name="password"
            type="password"
            value={password}
            onChange={onChange}
          />
        </div>
      </div>
      <div className={css['btn-container']}>
        <button className={css['btn']} onClick={onSubmit}>
          登录
        </button>
      </div>
    </div>
  );
}
