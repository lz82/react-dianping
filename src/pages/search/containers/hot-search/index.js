import View from '../../components/hot-search';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { actionCreators, hotSearch } from '@/store/modules/search';

const mapStateToProps = (state) => {
  return {
    hotSearch: hotSearch(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hotSearchActions: bindActionCreators(actionCreators, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View));
