import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'yockmzpd', // Taken from your Sanity Studio
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-04-30', // Use current date for latest API features
})

// Setup image builder to easily get URLs for images uploaded to Sanity
const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
