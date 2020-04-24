import React from 'react';

import Overview from './containers/overview';
import Shop from './containers/shop';
import Detail from './containers/detail'

import css from './index.module.less';

export default function CouponDetail(props) {
  const id = props.match.params.id;
  if (!id) {
    props.history.push('/home');
  }
  const detailInfo = {
    id: 'p-1',
    shopIds: ['s-10', 's-11', 's-12'],
    nearestShop: 's-10',
    shop: '院落创意菜',
    tag: '免预约',
    picture:
      'https://p0.meituan.net/deal/e6864ed9ce87966af11d922d5ef7350532676.jpg@450w_280h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20',
    product: '「3店通用」百香果（冷饮）1扎',
    description: '仅售19.9元！价值48元的百香果（冷饮）1扎，提供免费WiFi。',
    currentPrice: 19.9,
    oldPrice: 48,
    saleDesc: '已售6034',
    detail: {
      category: '红果酪',
      products: [{ name: '百果香（冷饮）', quantity: '1扎', price: '48元' }],
      remark: '免费提供餐巾纸'
    },
    validityPeriod: '2018-10-20至2019-09-15',
    purchaseNotes: [
      { title: '除外日期', content: '有效期内周末、法定节假日可用' },
      { title: '使用时间', content: '团购券使用时间：11:00-22:00' },
      { title: '预约提醒', content: '无需预约，消费高峰时可能需要等位' },
      { title: '规则提醒', content: '每张团购券建议2人使用' },
      { title: '包间', content: '可用包间，条件为：详询商户' },
      {
        title: '堂食外带',
        content: '仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情咨询商家'
      },
      { title: '商家服务', content: '提供免费WiFi' }
    ]
  };
  const shopInfo = {
    id: 's-10',
    url: 'https://m.dianping.com/shop/15953643',
    pic:
      'https://img.meituan.net/msmerchant/87aeebb940258678472b3c587e930399787685.jpg%40300w_225h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
    shop: '院落创意菜(五彩城店)',
    star: 40,
    price: 99,
    commentQuantity: 6499,
    region: '清河',
    category: '私房菜',
    address: '清河中街68号华润五彩城购物中心东区5层',
    phone: '01069614833'
  };

  return (
    <div className={css['coupon-detail-wrapper']}>
      <Overview data={detailInfo} />
      <Shop data={shopInfo} />
      <Detail data={detailInfo} />
    </div>
  );
}
