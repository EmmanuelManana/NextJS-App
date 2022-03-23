import React from 'react'
import { Post } from '../sanityblogengine/typings'

const Posts = ({ posts }: Post[] | any) => {
  console.log('posts: ', posts)
  return (
    <div>
      <p>{/* {props} */}</p>
    </div>
  )
}

export default Posts
