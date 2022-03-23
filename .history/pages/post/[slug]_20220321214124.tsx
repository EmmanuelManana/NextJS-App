import React from 'react'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'

const Post = () => {
  return (
    <div>
      <h1>Hello Post</h1>
    </div>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`

  const postsSlugs = await sanityClient.fetch(query)

  const paths: Array<Post> = postsSlugs.map((post: Post) => ({
    params: {
      slug: post.slug.current
    }
  }))

  return {
    params: {
      paths,
      fallback: 'blocking',
    },
  }
}
