import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, getHeadLine } from '@/store/modules/home';
import Likes from './containers/likes';
import Category from './containers/category';
import HeadLine from './containers/head-line';

import css from './index.module.less';

function Home(props) {
  const {
    homeActions: { queryHome },
    headLine
  } = props;

  useEffect(() => {
    queryHome();
  }, []);

  return (
    <div className={css['home-wrapper']}>
      <Category />
      <HeadLine data={headLine} />
      <Likes />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    headLine: getHeadLine(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
