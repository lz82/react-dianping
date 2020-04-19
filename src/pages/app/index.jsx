import React, { useEffect } from 'react';

import { appApi } from '@/services';
function App() {
  async function fetchData() {
    const res = await appApi.queryLikes();
    console.log(res)
  }
  useEffect(() => {
    fetchData()
  }, []);
  return <div className="App">app page...asdf</div>;
}

export default App;
