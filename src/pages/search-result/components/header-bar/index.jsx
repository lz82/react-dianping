import React from 'react';

import css from './index.module.less';

export default function HeaderBar(props) {
  const onBack = () => {
    props.history.push('/home');
  };

  const onSearch = () => {
    props.history.push('/search');
  };
  return (
    <header className={css['search-result-header-bar-wrapper']}>
      <div className={css['back']} onClick={onBack} />
      <div className={css['list']}>
        <span className={[css['item'], css['selected']].join(' ')}>商户</span>
        <span className={css['item']}>闪惠团购</span>
      </div>
      <div className={css['icon']} onClick={onSearch} />
    </header>
  );
}
