import React from 'react';
import css from './index.module.less';

export default function Discount(props) {
  const { data } = props;
  return (
    <div className={css['discount-wrapper']}>
      <div className={css['header']}>
        <div className={css['title']} />
        <div className={css['more']}>
          <span>更多优惠</span>
          <i className="iconfont icon-arrow-right" />
        </div>
      </div>
      <div className={css['content']}>
        {data.map((item) => (
          <div key={item.id} className={css['item']}>
            <img src={item.picture} alt="" />
            <p className={css['name']}>{item.product}</p>
            <div className={css['price']}>
              <ins>{item.currentPrice}</ins>
              <del>{item.oldPrice}</del>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
