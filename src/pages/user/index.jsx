import React from 'react';

import css from './index.module.less';

export default function User(props) {
  console.log(props)
  return <div className={css['user-wrapper']}>user</div>;
}
