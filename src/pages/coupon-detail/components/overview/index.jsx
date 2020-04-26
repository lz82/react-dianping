import React from 'react';
import { Link } from 'react-router-dom';
import css from './index.module.less';
export default function CouponOverview(props) {
  const { id, shop, picture, description, currentPrice, oldPrice } = props.data;
  return (
    <div className={css['overview-wrapper']}>
      <div className={css['header']}>
        <div className={css['img-container']}>
          <img alt="" className={css['img']} src={picture} />
        </div>
        <div className={css['baseInfo']}>
          <div className={css['title']}>{shop}</div>
          <div className={css['content']}>{description}</div>
        </div>
      </div>
      <div className={css['purchase']}>
        <span className={css['symbol']}>¥</span>
        <span className={css['price']}>{currentPrice}</span>
        <span className={css['price-old']}>¥{oldPrice}</span>
        <Link className={css['btn']} to={`/purchase/${id}`}>
          立即购买
        </Link>
      </div>
      <ul className={css['remark']}>
        <li className={css['remarkItem']}>
          <i className={css['sign1']} />
          <span className={css['desc']}>随时可退</span>
        </li>
        <li className={css['remarkItem']}>
          <i className={css['sign2']} />
          <span className={css['desc']}>过期自动退</span>
        </li>
      </ul>
    </div>
  );
}
