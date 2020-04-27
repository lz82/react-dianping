import React, { useEffect } from 'react';
import css from './index.module.less';
export default function SearchBar(props) {
  const {
    searchInputVal,
    relatedSearch,
    searchActions: { searchInputValChange, queryRelatedSearch }
  } = props;

  useEffect(() => {
    if (searchInputVal) {
      queryRelatedSearch(searchInputVal);
    }
  }, [searchInputVal]);

  const handleChange = (e) => {
    searchInputValChange(e.target.value);
  };

  const handleClear = () => {
    searchInputValChange('');
  };

  const handleCancel = () => {
    searchInputValChange('');
    props.history.goBack();
  };

  const handleClickItem = (item) => {
    console.log(item)
  };

  const renderSuggestList = (list) => {
    return (
      <ul className={css['list']}>
        {relatedSearch.map((item) => {
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
        <input
          className={css['text']}
          value={searchInputVal}
          onChange={handleChange}
          placeholder="输入商户名、地点"
        />
        <span className={css['clear']} onClick={handleClear} />
        <span className={css['cancel']} onClick={handleCancel}>
          取消
        </span>
      </div>
      {searchInputVal && relatedSearch ? renderSuggestList() : null}
    </div>
  );
}
