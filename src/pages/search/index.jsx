import React from 'react';

import SearchBar from './containers/search-bar';
import HotSearch from './containers/hot-search';
import SearchHistory from './containers/search-history';

import css from './index.module.less';

export default function Search() {
  return (
    <div className={css['search-wrapper']}>
      <SearchBar />
      <HotSearch />
      <SearchHistory />
    </div>
  );
}
