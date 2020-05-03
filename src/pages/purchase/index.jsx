import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getProductInfo,
  getProductCnt,
  getTotalPrice,
  actionCreators
} from '@/store/modules/purchase';

import HeaderBar from '@/components/header-bar';
import PurchaseForm from './containers/purchase-form';

function Purchase(props) {
  const {
    productInfo,
    productCnt,
    totalPrice,
    purchaseActions: { decreaseCnt, increaseCnt, submitOrder, queryProductInfo }
  } = props;

  useEffect(() => {
    queryProductInfo(props.match.params.id);
  }, []);

  console.log(productInfo);

  const OnBack = () => {
    props.history.goBack();
  };
  return (
    <div>
      <HeaderBar title="结算页" onBack={OnBack} />
      <PurchaseForm
        productInfo={productInfo}
        quantity={productCnt}
        totalPrice={totalPrice}
        onDec={decreaseCnt}
        onInc={increaseCnt}
        onSubmit={submitOrder}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productInfo: getProductInfo(state),
    productCnt: getProductCnt(state),
    totalPrice: getTotalPrice(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    purchaseActions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);
