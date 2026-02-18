import { sanityClient } from "./client";

// FETCH ALL SERVICES (For the main Services page)
export async function getServices() {
  const query = `*[_type == "service"] | order(order asc){
    _id,
    title,
    description,
    "image": image.asset->url
  }`;

  return sanityClient.fetch(query);
}

// FETCH ONLY HOMEPAGE SERVICES (For the Home page section)
export async function getHomeServices() {
  const query = `*[_type == "service" && showOnHome == true] | order(order asc)[0...3]{
    _id,
    title,
    description,
    "image": image.asset->url
  }`;

  return sanityClient.fetch(query);
}