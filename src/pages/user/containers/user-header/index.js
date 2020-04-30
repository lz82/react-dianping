import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '@/store/modules/login';

import View from '../../components/user-header';

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(View);
