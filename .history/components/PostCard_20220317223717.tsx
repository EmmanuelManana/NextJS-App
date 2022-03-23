import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PostCard() {
  return (
    <div className="bg-white-400 mx-auto mt-5 mb-5 inline-block max-w-6xl border-b-2 p-2 p-8">
      <div className="flex">
        <img
          className="object-fit h-16 w-16 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLp_wPEUk7_D4qw3jUIfqxy-SXH7e0CwlLpxUh-hZIubGbO8J1AO5IAQVzp-uixU4s7c&usqp=CAU"
          alt="author"
        />

        <div className="grid p-4">
          <h1 className="text-lg font-bold">Title here</h1>
          <h2 className="text-md">Subtilte goes here</h2>
        </div>
      </div>

      <Link href={`/link`}>
        <div className="group flex">
          <p className="p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only
          </p>
          <img
            className="h-40 w-40 object-cover transition-transform duration-200 ease-in-out group-hover:scale-125"
            src="https://sm.ign.com/ign_za/review/m/marvels-sp/marvels-spider-man-remastered-review_cbh8.jpg"
          />
        </div>
      </Link>

      <div className="">card footer</div>
    </div>
  )
}

export default PostCard
