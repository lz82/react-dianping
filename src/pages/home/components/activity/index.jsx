import React from 'react';

import css from './index.module.less'

export default function Activity() {
  return (
    <div className={css['activity-wrapper']}>
      <div className={css['item']}>
        <a
          className={[css['content'], css['pink']].join(' ')}
          href="https://h5.dianping.com/app/ziggurat/1005/index.html?activity_tlt=1005&infrom=mzone"
        >
          <div className={css['title']}>最高88元</div>
          <div className={[css['subtitle'], css['title-pink']].join(' ')}>速领新人红包</div>
          <img
            alt=""
            className={css['pic']}
            src="https://op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a3a31fff2e047a907a53d6488877f7fe.png"
          />
        </a>
      </div>
      <div className={css['item']}>
        <a
          className={[css['content'], css['blue']].join(' ')}
          href="//h5.dianping.com/app/ziggurat/1361/index.html?notitlebar=1&token=*&latitude=*&longitude=*&activity_tlt=1361&infrom=mzone"
        >
          <div className={css['title']}>品质福利放送</div>
          <div className={[css['subtitle'], css['title-blue']].join(' ')}>享吃喝玩乐礼</div>
          <img
            alt=""
            className={css['pic']}
            src="https://op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a9b8c52c341892600ff7260c89025a59.png"
          />
        </a>
      </div>
    </div>
  );
}
