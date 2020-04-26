import React from 'react';
import css from './index.module.less';
export default function HotSearch() {
  const data = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];
  const handleClick = (item) => {};
  return (
    <div className={css['hot-search-wrapper']}>
      {data.map((item, index) => {
        return (
          <span key={index} onClick={() => handleClick(item)} className={css['item']}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
