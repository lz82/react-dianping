import React from 'react';

import css from './index.module.less';

export default function OrderItem(props) {
  const {
    data: { id, title, statusText, orderPicUrl, channel, text, type, commentId },
    isCommenting,
    onRemove,
    comment,
    onComment,
    onCommentChange,
    stars,
    onStarsChange,
    onSubmitComment,
    onCancelComment
  } = props;

  const handleComment = (orderId) => {
    onComment(orderId);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  const handleCommentChange = (e) => {
    onCommentChange(e.target.value);
  };

  const renderStars = () => {
    return (
      <div className={css['star-container']}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <span
              className={[css['start'], stars >= item ? css['light'] : ''].join(' ')}
              key={index}
              onClick={() => onStarsChange(item)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  };

  const renderEditArea = () => {
    return (
      <div className={css['comment-container']}>
        <textarea className={css['comment']} onChange={handleCommentChange} value={comment} />
        {renderStars()}
        <button className={css['comment-btn']} onClick={onSubmitComment}>
          提交
        </button>
        <button className={css['comment-btn']} onClick={onCancelComment}>
          取消
        </button>
      </div>
    );
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
