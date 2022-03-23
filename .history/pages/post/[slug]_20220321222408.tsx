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

  /* 
    "postsSlugs": [
        {
            "_id": "06aed91f-1b16-4f5b-8b43-dcb60a223883",
            "slug": {
                "current": "my-first-post"
            }
        },
        {
            "_id": "e8632ea2-af8e-451f-a2db-c23174bebb41",
            "slug": {
                "current": "spider-post"
            }
        }
    ]
  */
  const postsSlugs = await sanityClient.fetch(query)

  /*
   {params:
      slug: {
         current: my-first-post
      }
    }, 
    
    {params:
      slug: {
         current: my-first-post
      }
    }
    ]
  */

  const paths: Array<Post> = postsSlugs.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
