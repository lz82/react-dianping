import View from '../../components/shop-list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { currentSearchKeyword, searchResult, actionCreators } from '@/store/modules/search';

const mapStateToProps = (state) => {
  return {
    keyword: currentSearchKeyword(state),
    list: searchResult(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resultActions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
