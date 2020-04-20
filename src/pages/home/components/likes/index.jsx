import React, { useEffect } from 'react'

export default function Likes(props) {
  useEffect(() => {
    props.queryLikes()
  }, [])
  return (
    <div>
      猜你喜欢
    </div>
  )
}
