import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import SiteHeader from '../components/SiteHeader'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SiteHeader />
    </div>
  )
}

export default Home

// the SSR happens (wherr the server builds the page)
export const getServerSideProps = async () => {

}

