import React from 'react';

import css from './index.module.less';

export default function DetailInfo(props) {
  const {
    detail: { category, products, remark },
    currentPrice,
    oldPrice
  } = props.data;
  return (
    <div className={css['detail-info-wrapper']}>
      <div className={css['header']}>
        <span>团购详情</span>
        <i className={css['header-icon']} />
      </div>
      <table cellPadding="0" cellSpacing="0" className={css['table']}>
        <tbody>
          <tr className={css['row']}>
            <th colSpan="3" className={css['category']}>
              {category}
            </th>
          </tr>
          {products.map((item, index) => {
            return (
              <tr key={index} className={css['row']}>
                <td>{item.name}</td>
                <td className={css['td--align-right']}>{item.quantity}</td>
                <td className={css['td--align-right']}>{item.price}</td>
              </tr>
            );
          })}

          <tr className={css['row']}>
            <td />
            <td className={css['td-price']}>
              最高价值
              <br />
              <strong className={css['td-priceNew']}>团购价</strong>
            </td>
            <td className={css['td-price']}>
              {oldPrice}元
              <br />
              <strong className={css['td-priceNew']}>{currentPrice}元</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={css['remark']}>{remark}</div>
      <div className={css['more']}>
        <span>更多图文详情</span>
        <span className={css['notice']}>(建议Wifi环境下打卡，土豪请随意)</span>
        <i className={css['arrow']} />
      </div>
    </div>
  );
}
