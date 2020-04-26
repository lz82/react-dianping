import React, { useState } from 'react';
import css from './index.module.less';
export default function SearchBar() {
  const [inputVal, setInputVal] = useState('');
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleClear = () => {};

  const handleCancel = () => {};

  const relatedKeywords = [
    {
      id: 1,
      keyword: '火锅',
      quantity: 3
    },
    {
      id: 2,
      keyword: '烧烤',
      quantity: 10
    }
  ];

  const handleClickItem = (item) => {};

  const renderSuggestList = (list) => {
    return (
      <ul className={css['list']}>
        {relatedKeywords.map((item) => {
          return (
            <li key={item.id} onClick={() => handleClickItem(item)} className={css['item']}>
              <span className={css['keyword']}>{item.keyword}</span>
              <span className={css['cnt']}>约{item.quantity}个结果</span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={css['search-bar-wrapper']}>
      <div className={css['container']}>
        <input className={css['text']} value={inputVal} onChange={handleChange} />
        <span className={css['clear']} onClick={handleClear} />
        <span className={css['cancel']} onClick={handleCancel}>
          取消
        </span>
      </div>
      {inputVal ? renderSuggestList() : null}
    </div>
  );
}
