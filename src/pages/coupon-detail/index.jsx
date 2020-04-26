import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '@/components/loading';

import HeaderBar from '@/components/header-bar';
import Overview from './containers/overview';
import Shop from './containers/shop';
import Detail from './containers/detail';
import Remark from './containers/remark';
import Footer from '@/components/footer';
import BuyBtn from './containers/buy-btn';

import { actionCreators, getDetailBasicInfo, getDetailShopInfo } from '@/store/modules/detail';

import css from './index.module.less';

function CouponDetail(props) {
  const id = props.match.params.id;
  if (!id) {
    props.history.push('/home');
  }
  const {
    basicInfo,
    shopInfo,
    detailActions: { queryDetailBasic, queryDetailShop }
  } = props;

  useEffect(() => {
    queryDetailBasic(id);
  }, []);

  useEffect(() => {
    if (basicInfo.nearestShop) {
      queryDetailShop(basicInfo.nearestShop);
    }
  }, [basicInfo.nearestShop]);

  const handleBack = () => {
    props.history.goBack();
  };

  return (
    <div className={css['coupon-detail-wrapper']}>
      <HeaderBar title="团购详情" onBack={handleBack} />
      {basicInfo.id ? <Overview data={basicInfo} /> : <Loading />}
      {basicInfo.id ? <Shop data={shopInfo} /> : <Loading />}
      {basicInfo.id ? <Detail data={basicInfo} /> : <Loading />}
      {basicInfo.id ? <Remark data={basicInfo} /> : <Loading />}
      <Footer />
      <BuyBtn id={id} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basicInfo: getDetailBasicInfo(state),
    shopInfo: getDetailShopInfo(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailActions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CouponDetail);
