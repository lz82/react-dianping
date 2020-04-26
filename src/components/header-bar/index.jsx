import React from 'react';

import css from './index.module.less';

export default function HeaderBar(props) {
  const { grey, title, onBack } = props;
  const backgroundColor = grey ? '#f0f0f0' : '#fff';
  return (
    <header className={css['header-bar-wrapper']} style={{ backgroundColor: backgroundColor }}>
      <div className={css['back']} onClick={onBack}>
        返回
      </div>
      <div className={css['title']}>{title}</div>
    </header>
  );
}
