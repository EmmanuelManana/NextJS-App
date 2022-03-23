import React from 'react'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'

interface Props {
  post: Post
}
const Post = ({ post }: Props) => {
  console.log('post: ', post)
  return (
    <main>
      <Header />

      <img
        className="mx-auto h-44 w-full max-w-4xl object-cover"
        src={urlFor(post.mainImage).url()}
        alt="banner"
      />

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {post.description}
        </h2>

        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={urlFor(post.author.image).url()}
            alt="author image"
          />

          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="text-green-600">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>

        <div className='mt-10'>
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),

              h2: (props: any) => (
                <h2 className="text-xl font-bold my-5" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a className="text-blue-500 hover:underline">{children}</a>
              ),
            }}
          />
        </div>
      </article>

      <hr className='max-w-lg my-5 mx-auto border border-yellow-500' />


      <form className='flex flex-col p-5 max-w-2xl mx-auto mb-10'>
        <h3 className='text-sm text-yellow-500'>Enjoyed this article?</h3>
        <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
        <hr className='py-3 mt-2'></hr>

        <label className='block mb-5'>
          <span className='text-gray-700'>Name</span>
          <input 
          className='shadow border rounded py-2 px-3 form-input mt-1 block
          w-full ring-yellow-500 ouline-none focus:ring'
          placeholder='John Doe'/>
        </label>


        <label className='block mb-5'>
          <span>Comment</span>
          <textarea placeholder='Leave a comment...'/>
        </label>

      </form>
    </main>
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
    // enables ISR
    revalidate: 3600, // after 3600 seconds, will update the old cache
  }
}
