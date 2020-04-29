import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import css from './index.module.less';
export default function HotSearch(props) {
  const {
    hotSearch,
    hotSearchActions: { queryHotSearch, addSearchHistory }
  } = props;

  let history = useHistory()

  const handleClick = (keyword) => {
    addSearchHistory(keyword);
    history.push('/search-result');
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
