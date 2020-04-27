import React from 'react';
import css from './index.module.less';
export default function SearchHistory(props) {
  const {
    searchHistory,
    historyActions: { clearSearchHistory }
  } = props;

  const handleClick = (item) => {
    props.history.push('/search-result');
  };

  const handleClear = () => {
    clearSearchHistory();
  };
  return (
    <div className={css['search-history-wrapper']}>
      <div className={css['header']}>搜索记录</div>
      <ul className={css['list']}>
        {searchHistory.map((item, index) => {
          return (
            <li key={index} onClick={() => handleClick(item)} className={css['item']}>
              {item}
            </li>
          );
        })}
      </ul>
      {searchHistory.length > 0 ? (
        <div className={css['clear']} onClick={handleClear}>
          清除搜索记录
        </div>
      ) : null}
    </div>
  );
}
