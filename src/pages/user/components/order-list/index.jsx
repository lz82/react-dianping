import React from 'react';
import OrderItem from '../order-item';

import css from './index.module.less';

// const tabTitles = ["全部订单", "待付款", "可使用", "退款/售后"];
const tabs = [
  {
    type: 999,
    title: '全部订单'
  },
  {
    type: 1,
    title: '待付款'
  },
  {
    type: 2,
    title: '可使用'
  },
  {
    type: 3,
    title: '退款/售后'
  }
];

const orders = [
  {
    id: 'o-2',
    statusText: '已消费',
    orderPicUrl:
      'https://p1.meituan.net/deal/95e79382c20a78da3068c4207ab7a9b4329494.jpg.webp@700w_700h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20',
    channel: '团购',
    title: '华莱士：华莱士单人套餐',
    text: ['1张 | 总价：￥11.99', '有效期至2018-09-17'],
    type: 1
  },
  {
    id: 'o-3',
    statusText: '待付款',
    orderPicUrl:
      'https://p0.meituan.net/dpdeal/f7c12272529ee2fe5578bd226bbc207458318.jpg.webp@700w_700h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20',
    channel: '团购',
    title: '芳芳家常菜：代金券1张',
    text: ['2张 | 总价：￥76.00', '有效期至2018-09-02'],
    type: 2
  },
  {
    id: 'o-4',
    statusText: '已消费',
    orderPicUrl:
      'https://p0.meituan.net/deal/e4f7972d34b289a00ae2491c70359024128785.jpg.webp@700w_700h_1e_1c_1l|watermark=1&&r=1&p=9&x=20&y=20',
    channel: '团购',
    title: '正新鸡排：【到店吃】正新椒皇炸鸡半只',
    text: ['1张 | 总价：￥12.90', '有效期至2018-09-24'],
    type: 1
  }
];

export default function OrderList(props) {
  const { currentTab = 0, data = orders, deletingOrderId } = props;

  const handleClickTab = (type) => {};

  const handleCommentChange = () => {};

  const handleStarsChange = () => {};

  const handleComment = (id) => {};

  const handleRemove = (id) => {};

  const handleSubmitComment = () => {};

  const handleCancelComment = () => {};

  const renderOrderList = (data) => {
    const { commentingOrderId, orderComment, orderStars } = props;
    return data.map((item) => {
      return (
        <OrderItem
          key={item.id}
          data={item}
          isCommenting={item.id === commentingOrderId}
          comment={item.id === commentingOrderId ? orderComment : ''}
          stars={item.id === commentingOrderId ? orderStars : 0}
          onCommentChange={handleCommentChange}
          onStarsChange={handleStarsChange}
          onComment={() => handleComment(item.id)}
          onRemove={() => handleRemove(item.id)}
          onSubmitComment={handleSubmitComment}
          onCancelComment={() => handleCancelComment()}
        />
      );
    });
  };

  const renderEmpty = () => {
    return (
      <div className={css['empty']}>
        <div className={css['empty-icon']} />
        <div className={css['empty-text1']}>您还没有相关订单</div>
        <div className={css['empty-text2']}>去逛逛看有哪些想买的</div>
      </div>
    );
  };

  const renderConfirmDialog = () => {
    return <div>delete confirm model</div>;
  };

  return (
    <div className={css['order-list-wrapper']}>
      <div className={css['menu']}>
        {tabs.map((item, index) => {
          return (
            <div key={item.type} className={css['tab']} onClick={() => handleClickTab(item.type)}>
              <span
                className={
                  currentTab === index ? [css['title'], css['selected']].join(' ') : css['title']
                }
              >
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
      <div className={css['content']}>
        {data && data.length > 0 ? renderOrderList(data) : renderEmpty()}
      </div>

      {deletingOrderId ? renderConfirmDialog() : null}
    </div>
  );
}
