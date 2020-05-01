import React from 'react';

import css from './index.module.less';

export default function OrderItem(props) {
  const {
    data: { id, title, statusText, orderPicUrl, channel, text, type, commentId },
    isCommenting,
    onRemove
  } = props;

  const handleComment = () => {};

  const handleRemove = () => {
    onRemove(id);
  };

  const renderEditArea = () => {
    return <div>edit area</div>;
  };

  return (
    <div className={css['order-item-wrapper']}>
      <div className={css['title']}>
        <span>{title}</span>
      </div>
      <div className={css['main']}>
        <div className={css['img-wrapper']}>
          <div className={css['tag']}>{statusText}</div>
          <img alt="" className={css['img']} src={orderPicUrl} />
        </div>
        <div className={css['content']}>
          <div className={css['line']}>{text[0]}</div>
          <div className={css['line']}>{text[1]}</div>
        </div>
      </div>
      <div className={css['bottom']}>
        <div className={css['type']}>{channel}</div>
        <div>
          {type === 1 && !commentId ? (
            <div className={css['btn']} onClick={handleComment}>
              评价
            </div>
          ) : null}
          <div className={css['btn']} onClick={handleRemove}>
            删除
          </div>
        </div>
      </div>
      {isCommenting ? renderEditArea() : null}
    </div>
  );
}
