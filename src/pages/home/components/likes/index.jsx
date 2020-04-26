import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loading from '@/components/loading';
import css from './index.module.less';

export default function Likes(props) {
  const { data } = props;

  const mockNewData = [
    {
      id: 'p-1',
      shopIds: ['s-1', 's-1', 's-1'],
      shop: '院落创意菜',
      tag: '免预约',
      picture:
        'https://p0.meituan.net/deal/e6864ed9ce87966af11d922d5ef7350532676.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0',
      product: '「3店通用」百香果（冷饮）1扎',
      currentPrice: 19.9,
      oldPrice: 48,
      saleDesc: '已售6034'
    },
    {
      id: 'p-2',
      shopIds: ['s-2'],
      shop: '正一味',
      tag: '免预约',
      picture:
        'https://p0.meituan.net/deal/4d32b2d9704fda15aeb5b4dc1d4852e2328759.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
      product: '[5店通用] 肥牛石锅拌饭+鸡蛋羹1份',
      currentPrice: 29,
      oldPrice: 41,
      saleDesc: '已售15500'
    },
    {
      id: 'p-3',
      shopIds: ['s-3', 's-3'],
      shop: 'Salud冻酸奶',
      tag: '免预约',
      picture:
        'https://p0.meituan.net/deal/b7935e03809c771e42dfa20784ca6e5228827.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0',
      product: '[2店通用] 冻酸奶（小杯）1杯',
      currentPrice: 20,
      oldPrice: 25,
      saleDesc: '已售88719'
    },
    {
      id: 'p-4',
      shopIds: ['s-4'],
      shop: '吉野家',
      tag: '免预约',
      picture:
        'https://p0.meituan.net/deal/63a28065fa6f3a7e88271d474e1a721d32912.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
      product: '吉汁烧鱼+中杯汽水/紫菜蛋花汤1份',
      currentPrice: 14,
      oldPrice: 23.5,
      saleDesc: '已售53548'
    },
    {
      id: 'p-5',
      shopIds: ['s-5'],
      shop: '醉面 一碗醉香的肉酱面',
      tag: '免预约',
      picture:
        'https://p1.meituan.net/deal/a5d9800b5879d596100bfa40ca631396114262.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0',
      product: '单人套餐',
      currentPrice: 17.5,
      oldPrice: 20,
      saleDesc: '已售23976'
    }
  ];
  const [likeList, setLikeList] = useState(data);
  const [loadingTime, setLoadingTime] = useState(1);
  const likeRef = useRef();

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [loadingTime]);

  const handleScroll = () => {
    // 滚动的距离
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 屏幕可视高度
    const screenHeight = document.documentElement.clientHeight;
    // 组件的顶部位置
    const likesTop = likeRef.current.offsetTop;
    // 组件的高度
    const likesHeight = likeRef.current.offsetHeight;

    // 组件顶部距离页头的距离 + 组件的高度 - 滚动的距离 <= 屏幕可视高度 的时候， 则是组件底部露出的时候
    // 或者说当 滚动距离 >= 组件顶部距离头部的距离 + 组件的高度 - 屏幕可视高度 的时候，则是组件里布露出的时候
    if (scrollTop >= likesTop + likesHeight - screenHeight) {
      if (loadingTime < 3) {
        setLikeList((preList) => preList.concat(mockNewData));
        setLoadingTime((lastTime) => {
          return lastTime + 1;
        });
      }
    }
  };

  return (
    <div className={css['likes-wrapper']}>
      <div className={css['header']}>猜你喜欢</div>
      <div className={css['list']} ref={likeRef}>
        {likeList.map((item, index) => (
          <Link key={index} className={css['item']} to={`/coupon/${item.id}`}>
            <div className={css['pic-container']}>
              <div className={css['pic-tag']}>{item.tag}</div>
              <img alt="" className={css['pic']} src={item.picture} />
            </div>
            <div className={css['content']}>
              <div className={css['shop']}>{item.shop}</div>
              <div className={css['product']}>{item.product}</div>
              <div className={css['detail']}>
                <div className={css['price']}>
                  <ins className={css['current-price']}>{item.currentPrice}</ins>
                  <del className={css['old-price']}>{item.oldPrice}</del>
                </div>
                <div className={css['sale']}>{item.saleDesc}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {loadingTime < 3 ? <Loading /> : <div className={css['load-more']}>查看更多</div>}
    </div>
  );
}
