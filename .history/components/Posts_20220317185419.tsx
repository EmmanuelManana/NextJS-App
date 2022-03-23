import React from 'react'
import { Post } from '../sanityblogengine/typings'

const Posts = (posts : Post[]) => {
    console.log(typeof posts)
    console.log(posts)
  return (
    <div>
        <p>
            {/* {props} */}
        </p>
    </div>
  )
}

export default Posts