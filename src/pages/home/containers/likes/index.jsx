import { connect } from 'react-redux';
import { actionCreators as homeActionCreators, getLikeList } from '@/store/modules/home';
import view from '../../components/likes';

const stateToProps = (state) => {
  return {
    likeList: getLikeList(state)
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
