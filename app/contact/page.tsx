import { sanityClient } from "@/sanity/lib/client";
import ContactView from "./ContactView";

// Revalidate every 60 seconds to see CMS changes without rebuilding
export const revalidate = 60;

export default async function Page() {
  const query = `*[_type == "contactPage"][0]{
    "banner": bannerImage.asset->url,
    address,
    phone,
    email,
    openingHours
  }`;

  const data = await sanityClient.fetch(query);

  return <ContactView data={data} />;
}