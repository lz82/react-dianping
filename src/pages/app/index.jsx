import React from 'react';
import { connect } from 'react-redux';
import ErrorToast from './containers/error-toast';

import css from './index.module.less';

function App(props) {
  const { errorMsg } = props;
  return (
    <div className={css['app-wrapper']}>
      {props.children}
      {errorMsg ? <ErrorToast /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMsg: state.getIn(['app', 'errorMsg'])
  };
};

export default connect(mapStateToProps, null)(App);
