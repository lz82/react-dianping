import View from '../../components/hot-search';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {actionCreators, hotSearch} from '@/store/modules/search'

const mapStateToProps = state => {
  return {
    hotSearch: hotSearch(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hotSearchActions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
