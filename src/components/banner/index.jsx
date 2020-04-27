import React from 'react';

import css from './index.module.less';

export default function Banner(props) {
  const { dark } = props;
  const style = dark
    ? {
        backgroundImage:
          'url(https://www.dpfile.com/app/node-mobile-m-isomorphism-web/static/ee72da6bea423a71f81c4e0be8a1dcf7.png)'
      }
    : null;

  return (
    <div className={css['banner-wrapper']} style={style}>
      <div className={css['title']}>
        <span className={css['logo']} />
        <span className={css['text']}>吃喝玩乐，找优惠</span>
      </div>
      <div className={css['btns']}>
        <a className={css['btn']} href="https://evt.dianping.com/synthesislink/6702.html">
          打开大众点评
        </a>
        <a
          className={[css['btn'], css['btn-bg']].join(' ')}
          href="https://m.dianping.com/download/redirect?id=11186"
        >
          下载APP享特价
        </a>
      </div>
    </div>
  );
}
