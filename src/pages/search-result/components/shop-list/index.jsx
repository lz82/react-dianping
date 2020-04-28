import React, { useEffect } from 'react';
import ShopItem from '../shop-item';

import css from './index.module.less';

export default function ShopList(props) {
  const {
    keyword,
    list,
    resultActions: { querySearchResult }
  } = props;

  useEffect(() => {
    querySearchResult(keyword);
  }, [keyword]);

  console.log(list);

  return (
    <div className={css['search-result-shop-list']}>
      <div className={css['filter']}>
        <span className={css['item']}>全部商区</span>
        <span className={css['item']}>全部分类</span>
        <span className={css['item']}>智能排序</span>
      </div>
      <div className={css['list']}>
        {list && Array.isArray(list) ? (
          list.map((item, index) => {
            return (
              <div key={item.id}>
                <ShopItem data={item} />
                {index < list.length - 1 ? <div className={css['divider']} /> : null}
              </div>
            );
          })
        ) : (
          <div>暂无数据</div>
        )}
      </div>
    </div>
  );
}
