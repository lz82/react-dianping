import React, { useEffect } from 'react';

export default function Likes(props) {
  const { queryLikes } = props;

  useEffect(() => {
    queryLikes({ name: 'lz', age: 18 }, { total: 111 });
  }, []);

  return <div>猜你喜欢</div>;
}
