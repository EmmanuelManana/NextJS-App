import React from 'react'
import { Post } from '../sanityblogengine/typings'
import PostCard from './PostCard'

const Posts = ({ posts }: Post[] | any) => {
  return( 
<div className='mx-auto max-w-6xl'>
      {posts.length && posts.map((post: Post) => <PostCard />)}
</div>)
}

export default Posts
