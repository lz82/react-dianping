import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import view from '../../components/error-toast'
import { actionCreators } from '@/store/modules/app'

const mapStateToProps = state => {
  return {
    errorMsg: state.getIn(['app', 'errorMsg'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    appAction: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(view)
