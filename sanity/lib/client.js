// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "1h4axrsw",
  dataset: "production",
  apiVersion: "2026-01-03",
  useCdn: false, // true for cached content, false for fresh
});
