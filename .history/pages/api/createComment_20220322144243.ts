// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'

type Data = {
  name: string
}

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _id, name, email, comment } = JSON.parse(req.body)

  try {
    await client.create({
      _type: 'comment',
      post: {
        _ref: _id,
        _type: 'reference',
      },
    })
  } catch (error) {}
  res.status(200).json({ name: 'John Doe' })
}
