import { sanityClient } from "@/sanity/lib/client"; // Adjust path to your sanity client

async function getInfoData() {
  const query = `*[_type == "infoSection"][0]`;
  return await sanityClient.fetch(query);
}

export default async function InfoSection() {
  const data = await getInfoData();

  // Fallback if no data is found in Sanity
  if (!data) return null;

  return (
    <section className="bg-primary py-15 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-heading text-accent mb-3">
            {data.heading1}
          </h2>
          <h2 className="text-4xl md:text-5xl font-heading text-accent mb-4">
            {data.heading2}
          </h2>
          <p className="text-xl font-body text-dark">
            {data.subheading}
          </p>
        </div>

        {/* Right Column */}
        <div className="text-center md:text-left">
          <p className="text-md md:text-lg font-body text-sub leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
