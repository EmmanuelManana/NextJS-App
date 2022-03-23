export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
}

// decscription: string,
// mainImage: string
// slug: Object
