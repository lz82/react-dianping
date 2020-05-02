import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '@/components/private-route';
import ScrollToTop from '@/components/scroll-to-top';
import loadable from '@loadable/component';
import Loading from '@/components/loading';

const Login = loadable(() => import('@/pages/login'), {
  fallback: (
    <div>
      <Loading />
    </div>
  )
});

const Home = loadable(() => import('@/pages/home'), {
  fallback: (
    <div>
      <Loading />
    </div>
  )
});

const CouponDetail = loadable(() => import('@/pages/coupon-detail'), {
  fallback: (
    <div>
      <Loading />
    </div>
  )
});

const Search = loadable(() => import('@/pages/search'), {
  fallback: (
    <div>
      <Loading />
    </div>
  )
});

const SearchResult = loadable(() => import('@/pages/search-result'), {
  fallback: (
    <div>
      <Loading />
    </div>
  )
});

const User = loadable(() => import('@/pages/user'), {
  fallback: (
    <div>
      <Loading />
    </div>
  )
});

const Purchase = loadable(() => import('@/pages/purchase'), {
  fallback: (
    <div>
      <Loading />
    </div>
  )
});

export default function Routers() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Route path="/coupon/:id" render={(props) => <CouponDetail {...props} />} />
        <Route path="/search" render={(props) => <Search {...props} />} />
        <Route path="/search-result" render={(props) => <SearchResult {...props} />} />
        <PrivateRoute path="/user" render={(props) => <User {...props} />} />
        <PrivateRoute path="/purchase/:id" render={(props) => <Purchase {...props} />} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}
