import React from 'react';
import ErrorToast from './containers/error-toast';

function App(props) {
  return (
    <div className="App">
      {props.children}
      <ErrorToast />
    </div>
  );
}

export default App;
