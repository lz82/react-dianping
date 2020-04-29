import React from 'react';
import { useHistory } from 'react-router-dom'

import css from './index.module.less';

export default function HeaderBar(props) {
  const history = useHistory()

  const onBack = () => {
    history.push('/home');
  };

  const onSearch = () => {
    history.push('/search');
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
