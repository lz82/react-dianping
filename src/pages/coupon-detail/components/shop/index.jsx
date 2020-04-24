import React from 'react';

import css from './index.module.less';
export default function CouponShop(props) {
  const total = 1;
  const { shop: name, star, address, phone } = props.data;
  return (
    <div className={css['shop-wrapper']}>
      <div className={css['header']}>
        使用商户（{total}）
        <span className={css['arrow']} />
      </div>
      <div className={css['middle']}>
        <div className={css['middle-left']}>
          <div className={css['shop-name']}>{name}</div>
          <div className={css['stars-wrapper']}>
            <span className={css['stars']}>
              <i className={css['stars-red']} style={{ width: 2 * star + '%' }} />
            </span>
            <span className={css['distance']}>&gt;100km</span>
          </div>
        </div>
        <a className={css['middle-right']} href={`tel://${phone}`}>
          <i className={css['phone-icon']} />
        </a>
      </div>
      <div className={css['bottom']}>
        <i className={css['location-icon']} />
        {address}
      </div>
    </div>
  );
}
