import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {searchHistory, actionCreators} from '@/store/modules/search'

import View from '../../components/search-history';

const mapStateToPros = state => {
  return {
    searchHistory: searchHistory(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    historyActions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(View);
