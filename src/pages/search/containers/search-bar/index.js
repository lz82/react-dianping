import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { withRouter } from 'react-router-dom';

import { actionCreators, searchInputVal, relatedSearch } from '@/store/modules/search';

import View from '../../components/search-bar';

const mapStateToProps = (state) => {
  return {
    searchInputVal: searchInputVal(state),
    relatedSearch: relatedSearch(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchActions: bindActionCreators(actionCreators, dispatch)
  };
};

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View));

export default connect(mapStateToProps, mapDispatchToProps)(View)
