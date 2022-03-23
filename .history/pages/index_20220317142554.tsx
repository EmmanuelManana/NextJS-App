import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import SiteHeader from '../components/SiteHeader'
import { Post } from '../sanityblogengine/typings'

// the SSR happens (wherr the server builds the page)
export const getServerSideProps = async () => {
  const query = `*[_type == "post]{
    _id,
    tile
  }`

  return {
    
  }
}

const Home = (props: Post) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SiteHeader />
    </div>
  )
}

export default Home

