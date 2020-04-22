import React from 'react';
import Likes from './containers/likes';
import Category from './containers/category';
import HeadLine from './containers/head-line';

import css from './index.module.less';

export default function () {
  return (
    <div className={css['home-wrapper']}>
      <Category />
      <HeadLine />
      <Likes />
    </div>
  );
}
