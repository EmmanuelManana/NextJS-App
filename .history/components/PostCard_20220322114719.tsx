import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import MediumLogo from '../public/medium.png'

function PostCard({ post }: Post | any) {
 
  return (
    <div className="bg-white-400 mx-auto mt-5 mb-5 inline-block max-w-6xl cursor-pointer border-b-2 p-2 p-8">
      <div className="flex">
        <img
          className="h-16 w-16 rounded-full object-cover"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLp_wPEUk7_D4qw3jUIfqxy-SXH7e0CwlLpxUh-hZIubGbO8J1AO5IAQVzp-uixU4s7c&usqp=CAU"
          src={urlFor(post.author.image).url()}
          alt="author"
        />

        <div className="items-center gap-2 p-2">
          <p className="text-lg font-bold">
            {post.author.name ?? 'unknown author'}
          </p>
          <p className="text-grey-600 flex justify-end text-xs">
            <span>Created on&nbsp;</span>{' '}
            {new Date(post?._createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      <Link href={`/post/${post.slug.current}`}>
        <div className="group p-4">
          <h1 className="flex justify-start text-3xl font-bold text-gray-500">
            {post.title! ?? 'No Title found!!'}
          </h1>
          <div className="flex">
            <div>
              <p className="pr-4 text-left">{post.body}</p>

              {/* <p className="bg-gray-400">
                category
              </p> */}
            </div>

            <img
              className="h-40 w-40 object-cover transition-transform duration-200 ease-in-out group-hover:scale-125"
              // src="https://sm.ign.com/ign_za/review/m/marvels-sp/marvels-spider-man-remastered-review_cbh8.jpg"
              src={urlFor(post.mainImage.asset._ref).url()}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard