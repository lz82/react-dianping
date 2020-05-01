import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  actionCreators,
  getOrderList,
  getCurrentTab,
  getDeletingOrderId
} from '@/store/modules/user';

import View from '../../components/order-list';

const mapStateToProps = (state) => {
  return {
    orderList: getOrderList(state),
    currentTab: getCurrentTab(state),
    deletingOrderId: getDeletingOrderId(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
