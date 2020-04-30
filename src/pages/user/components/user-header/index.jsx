import React from 'react';
import { useHistory } from 'react-router-dom';

import css from './index.module.less';

export default function UserHeader(props) {
  const {
    loginActions: { changeToken }
  } = props;
  const history = useHistory();

  const onLogout = () => {
    console.log(changeToken);
    changeToken('');
  };

  return (
    <header className={css['user-header-wrapper']}>
      <div className={css['back']} onClick={() => history.push('/home')}>
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
