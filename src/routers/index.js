import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '@/components/private-route';
import ScrollToTop from '@/components/scroll-to-top';

import lazyLoad from '@/utils/lazy-load';

const Login = lazyLoad(import('@/pages/login'));
const Home = lazyLoad(import('@/pages/home'));

const CouponDetail = lazyLoad(import('@/pages/coupon-detail'));

const Search = lazyLoad(import('@/pages/search'));

const SearchResult = lazyLoad(import('@/pages/search-result'));

const User = lazyLoad(import('@/pages/user'));

const Purchase = lazyLoad(import('@/pages/purchase'));

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
