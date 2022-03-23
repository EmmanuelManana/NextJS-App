import React from 'react'
import { Post } from '../sanityblogengine/typings'

const Posts = ({posts} : [Post]) => {
  return (
    <div>
        <p>
            {posts}
        </p>
    </div>
  )
}

export default Posts