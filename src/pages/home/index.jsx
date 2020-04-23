import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, getHeadLine, getDiscount, getLikes } from '@/store/modules/home';
import Likes from './containers/likes';
import Category from './containers/category';
import HeadLine from './containers/head-line';
import Discount from './containers/discount';

import css from './index.module.less';

function Home(props) {
  const {
    homeActions: { queryHome },
    headLine,
    discount,
    likes
  } = props;

  useEffect(() => {
    queryHome();
  }, []);

  return (
    <div className={css['home-wrapper']}>
      <Category />
      <div className="space" />
      {headLine.length > 0 ? <HeadLine data={headLine} /> : <div>loading...</div>}
      <div className="space" />
      {discount.length > 0 ? <Discount data={discount} /> : <div>loading...</div>}
      <div className="space" />
      <Likes data={likes} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    headLine: getHeadLine(state),
    discount: getDiscount(state),
    likes: getLikes(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(actionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
