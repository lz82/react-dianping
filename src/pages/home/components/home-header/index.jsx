import React from 'react';
import { Link } from 'react-router-dom';

import css from './index.module.less';

export default function HomeFooter() {
  return (
    <div className={css['home-header-wrapper']}>
      <header>
        <a className={css['city']}>北京</a>
        <Link to="/search" className={css['search']}>
          输入商户名、地点
        </Link>
        <Link to="/user" className={css['self-wrapper']}>
          <div className={css['icon']} />
        </Link>
      </header>
    </div>
  );
}
