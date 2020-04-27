import React, { useEffect } from 'react';
import css from './index.module.less';
export default function HotSearch(props) {
  const {
    hotSearch,
    hotSearchActions: { queryHotSearch, addSearchHistory }
  } = props;
  const handleClick = (keyword) => {
    addSearchHistory(keyword)
  };

  useEffect(() => {
    queryHotSearch();
  }, []);

  return (
    <div className={css['hot-search-wrapper']}>
      {hotSearch.map((item, index) => {
        return (
          <span key={item.id} onClick={() => handleClick(item.keyword)} className={css['item']}>
            {item.keyword}
          </span>
        );
      })}
    </div>
  );
}
