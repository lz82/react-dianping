import React from 'react';
import { Link } from 'react-router-dom';
import css from './index.module.less';

export default function BuyBtn(props) {
  const { id } = props;
  return (
    <div className={css['buy-btn-wrapper']}>
      <Link className={css['btn']} to={`/purchase/${id}`}>
        立即购买
      </Link>
    </div>
  );
}
