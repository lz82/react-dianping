import React from 'react';
import { Link } from 'react-router-dom';

import css from './index.module.less';

export default function Likes(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={css['likes-wrapper']}>
      <div className={css['header']}>猜你喜欢</div>
      <div className={css['list']}>
        {data.map((item) => (
          <Link key={item.id} className={css['item']} to={`/detail/${item.id}`}>
            <div className={css['pic-container']}>
              <div className={css['pic-tag']}>{item.tag}</div>
              <img alt="" className={css['pic']} src={item.picture} />
            </div>
            <div className={css['content']}>
              <div className={css['shop']}>{item.shop}</div>
              <div className={css['product']}>{item.product}</div>
              <div className={css['detail']}>
                <div className={css['price']}>
                  <ins className={css['current-price']}>{item.currentPrice}</ins>
                  <del className={css['old-price']}>{item.oldPrice}</del>
                </div>
                <div className={css['sale']}>{item.saleDesc}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
