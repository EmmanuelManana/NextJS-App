import Image from 'next/image'
import React from 'react'

function PostCard() {
  return (
    <div className="mx-auto mt-5 mb-5 max-w-6xl bg-gray-100">
      <div className="">
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://links.papareact.com/yvf"
          alt="author"
        />
      </div>

      <div className=""> card body</div>

      <div className="">card footer</div>
    </div>
  )
}

export default PostCard
