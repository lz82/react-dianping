import React from 'react';

import css from './index.module.less';

export default function PurchaseForm(props) {
  const { quantity, totalPrice, phone = 13482124075, onDec, onInc } = props;

  const handleDecrease = () => {
    onDec();
  };

  const handleIncrease = () => {
    onInc();
  };

  const handleClick = () => {};

  return (
    <div className={css['purchase-form-wrapper']}>
      <div className={css['form-wrapper']}>
        <div className={css['row']}>
          <div className={css['label']}>数量</div>
          <div className={css['value']}>
            <span className={css['dec']} onClick={handleDecrease}>
              -
            </span>
            <input className={css['quantity']} type="number" value={quantity} />
            <span className={css['inc']} onClick={handleIncrease}>
              +
            </span>
          </div>
        </div>
        <div className={css['row']}>
          <div className={css['label']}>小计</div>
          <div className={css['value']}>
            <span className={css['price']}>¥{totalPrice}</span>
          </div>
        </div>
        <div className={css['row']}>
          <div className={css['label']}>手机号码</div>
          <div className={css['value']}>{phone}</div>
        </div>
      </div>
      <ul className={css['remark']}>
        <li className={css['item']}>
          <i className={css['sign']} />
          <span className={css['desc']}>支持随时退</span>
        </li>
        <li>
          <i className={css['sign']} />
          <span className={css['desc']}>支持过期退</span>
        </li>
      </ul>
      <a className={css['submit']} onClick={handleClick}>
        提交订单
      </a>
    </div>
  );
}
