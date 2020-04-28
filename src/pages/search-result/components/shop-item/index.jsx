import React from 'react';

import css from './index.module.less';

export default function ShopItem(props) {
  const { url, pic, shop, star, price, quantity, region, category } = props.data;
  return (
    <a className={css['shop-item-wrapper']} href={url}>
      <div className={css['pic']} style={{ backgroundImage: 'url(' + pic + ')' }} />
      <div className={css['content']}>
        <div className={css['title']}>{shop}</div>
        <div className={css['comment']}>
          <span className={[css['star'], css['star-' + star]].join(' ')} />
          <span className={css['quantity']}>{quantity}</span>
          <span className={css['price']}>{price}/人</span>
        </div>
        <div className={css['info']}>
          <span className={css['region']}>{region}</span>
          <span className={css['category']}>{category}</span>
        </div>
      </div>
    </a>
  );
}
