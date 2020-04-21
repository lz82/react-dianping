import React, { useEffect } from 'react';
import css from './index.module.less';

export default function ErrorToast(props) {
  const {
    errorMsg,
    appAction: { clearError }
  } = props;
  let timer = null;

  // todo: use ref to keep timer
  useEffect(() => {
    timer = setTimeout(() => {
      clearError();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return errorMsg ? (
    <div className={css['error-toast-wrapper']}>
      <div className={css['error-toast-text']}>{errorMsg}</div>
    </div>
  ) : null;
}
