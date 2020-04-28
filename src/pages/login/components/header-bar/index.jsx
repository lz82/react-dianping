import React from 'react';
import { Link } from 'react-router-dom';

import css from './index.module.less';

export default function HeaderBar() {
  return (
    <div className={css['login-header-bar-wrapper']}>
      <Link to="/" className={css['back']} />
      <div className={css['title']}>账号密码登录</div>
    </div>
  );
}
