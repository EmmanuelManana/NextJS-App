import Link from 'next/link'
import React from 'react'
import { Post } from '../sanityblogengine/typings'
import PostCard from './PostCard'

const Posts = ({ posts }: Post[] | any) => {
  return (
    <div className="mx-auto max-w-5xl gap-3">
      {posts.length && posts.map((post: Post) => <PostCard post={post}/>)}

    </div>
  )
}

export default Posts
