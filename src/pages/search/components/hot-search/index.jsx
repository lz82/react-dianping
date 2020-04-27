import React, { useEffect } from 'react';
import css from './index.module.less';
export default function HotSearch(props) {
  const {
    hotSearch,
    hotSearchActions: { queryHotSearch }
  } = props;
  const handleClick = (item) => {};

  useEffect(() => {
    queryHotSearch();
  }, []);

  return (
    <div className={css['hot-search-wrapper']}>
      {hotSearch.map((item, index) => {
        return (
          <span key={item.id} onClick={() => handleClick(item.id)} className={css['item']}>
            {item.keyword}
          </span>
        );
      })}
    </div>
  );
}
