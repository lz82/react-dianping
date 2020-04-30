import React from 'react';

import UserHeader from './containers/user-header';
import OrderList from './containers/order-list';

import css from './index.module.less';

export default function User(props) {
  return (
    <div className={css['user-wrapper']}>
      <UserHeader />
      <OrderList />
    </div>
  );
}
