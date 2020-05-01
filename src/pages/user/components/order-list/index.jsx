import React, { useEffect } from 'react';
import OrderItem from '../order-item';
import Confirm from '@/components/confirm';

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

export default function OrderList(props) {
  const {
    currentTab,
    orderList,
    deletingOrderId,
    userActions: {
      queryOrderList,
      changeCurrentTab,
      showDeleteConfirm,
      hideDeleteConfirm,
      deleteOrder
    }
  } = props;

  useEffect(() => {
    queryOrderList(currentTab);
  }, [currentTab]);

  const handleClickTab = (type) => {
    changeCurrentTab(type);
  };

  const handleCommentChange = () => {};

  const handleStarsChange = () => {};

  const handleComment = (id) => {};

  const handleRemove = (id) => {
    showDeleteConfirm(id);
  };

  const handleSubmitComment = () => {};

  const handleCancelComment = () => {};

  const renderOrderList = (data) => {
    console.log('orderlist', data);
    const { commentingOrderId, orderComment, orderStars } = props;
    return data.map((item) => {
      return (
        <OrderItem
          key={item.id}
          data={item}
          isCommenting={true || item.id === commentingOrderId}
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
    return (
      <Confirm
        content="确定删除该订单吗？"
        cancelText="取消"
        confirmText="确定"
        onCancel={hideDeleteConfirm}
        onConfirm={deleteOrder}
      />
    );
  };

  return (
    <div className={css['order-list-wrapper']}>
      <div className={css['menu']}>
        {tabs.map((item, index) => {
          return (
            <div key={item.type} className={css['tab']} onClick={() => handleClickTab(item.type)}>
              <span
                className={
                  currentTab === item.type
                    ? [css['title'], css['selected']].join(' ')
                    : css['title']
                }
              >
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
      <div className={css['content']}>
        {orderList && orderList.length > 0 ? renderOrderList(orderList) : renderEmpty()}
      </div>

      {deletingOrderId ? renderConfirmDialog() : null}
    </div>
  );
}
