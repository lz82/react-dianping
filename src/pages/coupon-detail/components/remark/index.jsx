import React from 'react';

import css from './index.module.less';

export default function Remark(props) {
  const { purchaseNotes, validityPeriod } = props.data;
  return (
    <div className={css['remark-wrapper']}>
      <div className={css['header']}>
        购买须知
        <i className={css['icon']} />
      </div>
      <div className={css['list']}>
        <dl className={css['item']}>
          <dt className={css['title']}>有效期</dt>
          <dd className={css['desc']}>{validityPeriod}</dd>
        </dl>
        {purchaseNotes.map((item, index) => {
          return (
            <dl key={index} className={css['item']}>
              <dt className={css['title']}>{item.title}</dt>
              <dd className={css['desc']}>{item.content}</dd>
            </dl>
          );
        })}
      </div>
    </div>
  );
}
