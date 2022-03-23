import React from 'react'
import { Post } from '../sanityblogengine/typings'
import PostCard from './PostCard'

const Posts = ({ posts }: Post[] | any) => {
  return( 
<div>
      {posts.length && posts.map((post: Post) => <PostCard />)}
</div>)
}

export default Posts
