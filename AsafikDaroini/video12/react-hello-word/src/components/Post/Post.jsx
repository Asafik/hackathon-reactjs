import React from 'react'

const Post = (props) => {
  return (
    <div className="post">
    <div className="img-thumb">
        <img src="https://picsum.photos/200/300?random=1" width={200} height={150} alt="dummy" />
    </div>
    <div className="content">
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
    </div>
</div>
  )
}

export default Post