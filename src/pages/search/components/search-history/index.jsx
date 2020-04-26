import React from 'react';
import css from './index.module.less';
export default function SearchHistory() {
  const data = [
    {
      id: 1,
      keyword: '哈哈'
    }
  ];

  const handleClick = (item) => {};

  const handleClear = () => {};
  return (
    <div className={css['search-history-wrapper']}>
      <div className={css['header']}>搜索记录</div>
      <ul className={css['list']}>
        {data.map((item, index) => {
          return (
            <li key={item.id} onClick={() => handleClick(item)} className={css['item']}>
              {item.keyword}
            </li>
          );
        })}
      </ul>
      <div className={css['clear']} onClick={handleClear}>
        清除搜索记录
      </div>
    </div>
  );
}
