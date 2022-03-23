import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import SiteHeader from '../components/SiteHeader'
import { Post } from '../sanityblogengine/typings'
import { sanityClient } from '../sanity'
import Posts from '../components/Posts'

interface Props {
  posts: [Post]
}

// the SSR happens (wherr the server builds the page)
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
  _createdAt,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}

const Home = ({ posts }: Props) => {
  console.log('posts: ', posts)
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SiteHeader />
      {/* <Posts posts={posts} /> */}
    </div>
  )
}

export default Home
