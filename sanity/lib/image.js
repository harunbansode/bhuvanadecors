// import createImageUrlBuilder from '@sanity/image-url'

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source) => {
//   return builder.image(source)
// }


// import createImageUrlBuilder from '@sanity/image-url'
// import { dataset, projectId } from '../env'

// // Initialize the builder with your project details
// const builder = createImageUrlBuilder({ projectId, dataset })

// /**
//  * Enhanced urlFor function
//  * @param {object} source - The Sanity image asset object
//  * @returns {object} The builder object with auto-format enabled by default
//  */
// export const urlFor = (source) => {
//   // .auto('format') ensures sharp, compressed images (WebP/AVIF)
//   // .fit('max') prevents upscaling small images beyond their original size
//   return builder.image(source).auto('format').fit('max')
// }

// import createImageUrlBuilder from '@sanity/image-url'
// import { dataset, projectId } from '../env'

// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source) => {
//   // If there is no source, return a dummy object that won't crash .width()
//   if (!source) return { width: () => ({ height: () => ({ fit: () => ({ url: () => "" }) }) }) };
  
//   return builder.image(source).auto('format');
// }


// import createImageUrlBuilder from '@sanity/image-url'
// import { dataset, projectId } from '../env'

// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source) => {
//   if (!source || (!source.asset && !source._ref)) {
//     return {
//       width: () => ({ height: () => ({ fit: () => ({ url: () => "" }) }) }),
//     };
//   }
//   return builder.image(source).auto('format');
// }

import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source) => {
  // Guard clause to prevent "undefined source" error
  if (!source) return { url: () => "" }; 
  
  return builder.image(source).auto('format');
}