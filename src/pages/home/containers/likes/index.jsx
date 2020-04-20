import { connect } from 'react-redux';
import { actionCreators as homeActionCreators } from '@/store/modules/home';
import view from '../../components/likes';

const stateToProps = (state) => {
  return {
    app: state.app
  };
};

const dispatchToProps = (dispatch) => {
  return {
    queryLikes: (...params) => {
      dispatch(homeActionCreators.queryLikes(...params));
    }
  };
};

export default connect(stateToProps, dispatchToProps)(view);
