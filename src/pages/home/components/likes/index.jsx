import React, { useEffect } from 'react';

export default function Likes(props) {
  const { likeList, queryLikes } = props;
  console.log('likeList', likeList);
  useEffect(() => {
    queryLikes({ name: 'lz', age: 18 }, { total: 111 });
  }, []);

  return <div>guess your like</div>;
}
