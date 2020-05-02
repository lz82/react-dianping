import React from 'react';

import HeaderBar from '@/components/header-bar';
import PurchaseForm from './containers/purchase-form';

export default function Purchase(props) {
  const OnBack = () => {
    props.history.goBack();
  };
  return (
    <div>
      <HeaderBar title="结算页" onBack={OnBack} />
      <PurchaseForm />
    </div>
  );
}
