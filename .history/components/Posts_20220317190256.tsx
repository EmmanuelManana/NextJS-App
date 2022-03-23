import React from 'react'
import { Post } from '../sanityblogengine/typings'

const Posts = ({ posts }: Post[] | any) => {
  return (
    <div>
      {posts.length > 0 &&
        posts.map((post: Post) => <h1 key={post._id}>Post Card</h1>)}
    </div>
  )
}

export default Posts
