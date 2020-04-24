import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';
import Loading from '@/components/loading';

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

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Route path="/coupon/:id" render={(props) => <CouponDetail {...props} />} />
      </Switch>
    </Router>
  );
}
