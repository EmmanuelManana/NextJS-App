import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from 'next-sanity'

export const config = {
  /**
   * Find your project ID and dataset in sanity.json in your studio project
   * These are considered "public", but you can use enviromental vairables
   * if you want to differ between local dev and production dev
   *
   * https://nextjs.org/docs/basic-features/enviromental-variables
   * **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'development',
  projectID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  /**
   * Set useCnd to "false" if your applciation require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass CDN
   * **/
  useCdn: process.env.NODE_ENV === 'production',
}


