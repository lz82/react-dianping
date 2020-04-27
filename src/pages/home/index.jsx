import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, getHeadLine, getDiscount, getLikes } from '@/store/modules/home';

import Loading from '@/components/loading';
import HomeHeader from './containers/home-header';
import Banner from '@/components/banner';
import Category from './containers/category';
import Activity from './containers/activity';
import HeadLine from './containers/head-line';
import Discount from './containers/discount';
import Likes from './containers/likes';
import AppFooter from '@/components/footer';

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
      <HomeHeader />
      <Banner />
      <Category />
      <Activity />
      {headLine.length > 0 ? <HeadLine data={headLine} /> : <Loading />}
      <div className="space" />
      {discount.length > 0 ? <Discount data={discount} /> : <Loading />}
      <div className="space" />
      {likes.length > 0 ? <Likes data={likes} /> : <Loading />}
      <AppFooter />
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
