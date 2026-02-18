import { sanityClient } from "./client";

export async function getHeroContent() {
  const query = `
    *[_type == "hero"][0]{
      title,
      tagline,
      "backgroundImageUrl": backgroundImage.asset->url
    }
  `;
  return sanityClient.fetch(query);
}
