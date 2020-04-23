import React from 'react';

import css from './index.module.less';

export default function Likes(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={css['likes-wrapper']}>
      <div className={css['header']}>猜你喜欢</div>
      <div className={css['list']}>
        {data.map((item) => (
          <div key={item.id} className={css['item']}>
            <img src={item.picture} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
