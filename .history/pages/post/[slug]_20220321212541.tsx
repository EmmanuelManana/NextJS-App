import React from 'react'
import { sanityClient } from '../../sanity'

const Post = () => {
  return (
    <div>
        <h1>
            Hello Post
        </h1>
    </div>
  )
}

export default Post

export const getStaticProps = async () => {
  const query = `*[_type == "post]{
    _id,
    slug {
      current
    }
  }`

  const paths = await sanityClient.fetch(query)

  return {
    paths,
    fallback: "blocking"
  }
}
