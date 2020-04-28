import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUsername, getPWD, getToken, actionCreators } from '@/store/modules/login';

import View from '../../components/login-form';

const mapStateToProps = (state) => {
  return {
    username: getUsername(state),
    pwd: getPWD(state),
    token: getToken(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(actionCreators, dispatch),
    handleChange: (e) => {
      if (e.target.name === 'username') {
        dispatch(actionCreators.changeUsername(e.target.value));
      }
      if (e.target.name === 'password') {
        dispatch(actionCreators.changePWD(e.target.value));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
