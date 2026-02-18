import { sanityClient } from "./client";

// export async function getGallery() {
//   const query = `*[_type == "gallery"] | order(order asc){
//     title,
//     description,
//     images[]{
//       "src": asset->url,
//       details
//     }
//   }`;

  export async function getGallery() {
  const query = `*[_type == "gallery"] | order(order asc){
    title,
    description,
    images[]{
      asset, // DO NOT use asset->url here
      details
    }
  }`;
  return sanityClient.fetch(query);
}

