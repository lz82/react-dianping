import React from 'react';

import css from './index.module.less';

export default function UserHeader(props) {
  const { onBack, onLogout } = props;
  return (
    <header className={css['user-header-wrapper']}>
      <div className={css['back']} onClick={onBack}>
        首页
      </div>
      <div className={css['list']}>
        <span className={[css['item'], css['selected']].join(' ')}>订单</span>
        <span className={css['item']}>抵用券</span>
      </div>
      <div className={css['right']} onClick={onLogout}>
        注销
      </div>
    </header>
  );
}
