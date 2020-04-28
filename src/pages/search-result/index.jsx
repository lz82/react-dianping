import React from 'react';

import HeaderBar from './containers/header-bar';
import SearchBox from './containers/search-box';
import Banner from '@/components/banner';
import ShopList from './containers/shop-list';

import css from './index.module.less';

export default function SearchResult() {
  return (
    <div className={css['search-result-wrapper']}>
      <HeaderBar />
      <SearchBox />
      <Banner />
      <ShopList />
    </div>
  );
}
