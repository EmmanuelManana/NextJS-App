import Image from 'next/image'
import React from 'react'

function PostCard() {
  return (
    <div className="mx-auto mt-5 mb-5 max-w-6xl bg-gray-100">
      <div className="">
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://m.media-amazon.com/images/I/51eSnQkPoXL._AC_SY580_.jpg"
          alt="author"
        />
      </div>

      <div className=""> card body</div>

      <div className="">card footer</div>
    </div>
  )
}

export default PostCard
