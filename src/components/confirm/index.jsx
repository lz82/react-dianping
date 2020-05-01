import React from 'react';
import css from './index.module.less';

export default function Confirm(props) {
  const { content, cancelText, confirmText, onCancel, onConfirm } = props;
  return (
    <div className={css['confirm-wrapper']}>
      <div className={css['alert']}>
        <div className={css['content']}>{content}</div>
        <div className={css['btns']}>
          <a className={css['btn']} onClick={onCancel}>
            {cancelText}
          </a>
          <a className={css['btn']} onClick={onConfirm}>
            {confirmText}
          </a>
        </div>
      </div>
    </div>
  );
}
