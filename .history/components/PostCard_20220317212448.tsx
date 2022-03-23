import Image from 'next/image'
import React from 'react'

function PostCard() {
  return (
    <div className="mx-auto mt-5 mb-5 max-w-6xl bg-gray-100 p-2">
      <div className="">
        <img
          className="h-16 w-16 rounded-full object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLp_wPEUk7_D4qw3jUIfqxy-SXH7e0CwlLpxUh-hZIubGbO8J1AO5IAQVzp-uixU4s7c&usqp=CAU"
          alt="author"
        />

        
      </div>

      <div className=""> card body</div>

      <div className="">card footer</div>
    </div>
  )
}

export default PostCard
