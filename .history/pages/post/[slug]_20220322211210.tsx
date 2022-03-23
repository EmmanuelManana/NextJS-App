import React from 'react'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'

interface Props {
  post: Post
}

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}
const Post = ({ post }: Props) => {
  const [submitted, setSubmitted] = React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  console.log('post: ', post)

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log('collected data:', data)

    const request = {
      method: 'POST',
      body: JSON.stringify(data),
    }

    fetch('/api/createComment', request)
      .then((res) => {
        console.log('res: ', res)
        // handle not found
      })
      .catch((errors) => {
        console.log('errors: ', errors)
        setSubmitted(false)
      })
      .finally(() => {
        setSubmitted(true)
      })
  }

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

        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),

              h2: (props: any) => (
                <h2 className="my-5 text-xl font-bold" {...props} />
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

      <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />

      {submitted ? (
        <div>
          <div className="my-10 mx-auto flex max-w-2xl flex-col bg-green-500 p-10 text-white">
            <h3 className="text-3xl font-bold">
              Thank you for submitting your comment!
            </h3>
            <p>
              once it has been approved, it will be shown in the comments
              section <span>&#128515;</span>
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
        >
          <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="mt-2 py-3"></hr>

          <input
            {...register('_id')}
            name="_id"
            value={post._id}
            type="hidden"
          />

          <label className="mb-5 block">
            <span className="text-gray-700">Name</span>
            <input
              className="form-input  mt-1 block w-full rounded border py-2
        px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="John Doe"
              type="text"
              {...register('name', { required: true })}
            />
          </label>

          <label className="mb-5 block">
            <span className="text-gray-700">email</span>
            <input
              className="form-input mt-1 block w-full rounded border py-2 px-3
        shadow outline-none ring-yellow-500 focus:ring"
              placeholder="JohnDoe@mail.com"
              type="email"
              {...register('email', { required: true })}
            />
          </label>

          <label className="mb-5 block">
            <span>Comment</span>
            <textarea
              className="form-textarea mt-1 block w-full rounded border py-2 px-3
        shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Leave a comment..."
              rows={8}
              {...register('comment', { required: true })}
            />
          </label>

          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">- Name fiels is required.</span>
            )}
            {errors.email && (
              <span className="text-red-500">- E-mail fiels is required.</span>
            )}
            {errors.comment && (
              <span className="text-red-500">- Comment fiels is required.</span>
            )}
          </div>

          <input
            className="focus:shadow-outline cursor-pointer rounded
      bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400  focus:outline-none
      "
            type="submit"
          />
        </form>
      )}

      {/* commments section */}
      <div>
        <h3>Comments</h3>
        <hr />
        {post.comments.map((comment, i) => (
          <div className="" key={i}>
            <p>
              <span className='text-green-500'>{comment.name}</span>: {comment.comment}
            </p>
          </div>
        ))}
      </div>
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
    'comments': *[_type == "comment" && post._ref ==^._id && approved == true]
    ,
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
