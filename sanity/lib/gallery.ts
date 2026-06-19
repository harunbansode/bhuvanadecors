// import { sanityClient } from "./client";

//   export async function getGallery() {
//   const query = `*[_type == "gallery"] | order(order asc){
//     title,
//     description,
//     images[]{
//       asset, // DO NOT use asset->url here
//       details
//     }
//   }`;
//   return sanityClient.fetch(query);
// }


// import { sanityClient } from "./client";

// export async function getGallery() {
//   const query = `*[_type == "gallery"] | order(order asc){
//     _id,
//     title,
//     description,
//     images[]{
//       _key,
//       "image": asset->url,
//       details
//     }
//   }`;

//   return sanityClient.fetch(query);
// }


import { sanityClient } from "./client";

export async function getGallery() {
  const query = `*[_type == "gallery"] | order(order asc){
    _id,
    title,
    description,
    service,
    images[]{
      _key,
      "image": asset->url,
      details
    }
  }`;

  return sanityClient.fetch(query);
}