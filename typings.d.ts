export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  description: string
  summary: string
  mainImage: {
    asset: {
      _ref: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
  comments: Array<comment>
}

export interface comment {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  approved: boolean
  comment: string
  email: string
  name: string
  post: {
    _ref: string
    _type: string
  }
}
