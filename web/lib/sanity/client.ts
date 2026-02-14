import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '9tqz91vf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true in production for faster response times
})
