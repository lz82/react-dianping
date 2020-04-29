import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { getToken } from '@/store/modules/login';

function PrivateRoute({ token, render, ...rest }) {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          render(props)
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: location
              }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    token: getToken(state)
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
