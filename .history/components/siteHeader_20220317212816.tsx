import Image from 'next/image'
import React from 'react'
//assets
import MediumLogo from '../public/medium.png'

const SiteHeader = () => {
  return (
    <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:px-0">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read and connect
        </h1>
        <h1>
            it's easy and free to post your thinking on any topic and connect with millions of readers
        </h1>
      </div>

      <Image className="hidden md:inline-flex h-16 lg:h-full" src={MediumLogo} />
    </div>
  )
}

export default SiteHeader
