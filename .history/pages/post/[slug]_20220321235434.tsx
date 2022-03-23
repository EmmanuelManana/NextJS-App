import React from 'react'
import Header from '../../components/Header'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'

interface Props {
  post: Post
}
const Post = ({ post }: Props) => {
  console.log('post: ', post)
  return (
    <div>
      <Header />
      <h1>Hello Post</h1>
    </div>
  )
}

export default Post

// https://blog.logrocket.com/ssg-vs-ssr-in-next-js/
// SSG is done here, SSG (static site generation)
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

  const paths: Array<Post> = postsSlugs.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  /*
  paths =  [
  {params:{
      slug: "my-first-post"
    }
  },

  {params:{
      slug: "spider-post"
    }  
  }
  ]
  */
  return {
    paths,
    fallback: 'blocking',
  }
}

// from params we get slugs
export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    createdAt,
    title,
    author -> {
  name,
  image
},
description,
mainImage,
slug,
body
}`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) return { notFound: true }

  return {
    props: {
      post,
    },
    // en
  }
}
