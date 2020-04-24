import React from 'react';

import css from './index.module.less'

export default function Footer() {
  return (
    <footer className={css['footer-wrapper']}>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        我的
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        社区论坛
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        添加商户
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        意见反馈
      </a>
      <br />
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        美团网
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        美团下载
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        结婚
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        亲子
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        家装
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        宴会
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        教育
      </a>
      <br />
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        电脑版
      </a>
      <em className={css['seperator']}>|</em>
      <a className={css['link']} href="https://m.dianping.com/nmy/myinfo">
        客户端
      </a>
      <em className={css['seperator']}>|</em>
      <br />
      <p className={css['cpy']}>copyright ©2018 dianping.com</p>
    </footer>
  );
}
