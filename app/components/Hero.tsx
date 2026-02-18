// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { siteContent } from "./data/siteContent";


// export default function Hero() {
//   return (
//     <section className="relative h-[90vh] w-full mt-[72px]">

//       {/* Background Image */}
//       <Image
//         src="/images/wedding_dinner.jpg"
//         alt="Event Decoration"
//         fill
//         className="object-cover"
//         priority
//       />

//       {/* Dark Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex h-full items-center justify-center px-4">

//         {/* Overlay Box */}
//         <div className="bg-white/20 backdrop-blur-md rounded-2xl px-8 py-10 md:px-14 md:py-14 text-center max-w-2xl shadow-xl">

//           <h1 className="text-4xl md:text-5xl font-heading text-dark">
//             {siteContent.brand.name}
//           </h1>

//           <p className="mt-4 text-base md:text-lg font-body text-sub">
//             {siteContent.brand.tagline}
//           </p>

//           <Link
//             href="/contact"
//             className="mt-6 inline-block bg-primary text-sub px-8 py-3 rounded-lg font-body tracking-widest uppercase text-sm hover:scale-105 transition-transform duration-300"
//           >
//             Book Consultation
//           </Link>

//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { getHeroContent } from "@/sanity/lib/hero";

export default async function Hero() {
  const hero = await getHeroContent();

  if (!hero) return null;

  return (
    <section className="relative h-[90vh] w-full mt-[72px]">
      <Image
        src={hero.backgroundImageUrl}
        alt="Event Decoration"
        fill
        className="object-cover"
        priority
      />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10" />

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl px-8 py-10 md:px-14 md:py-14 text-center max-w-2xl shadow-xl">
            <h1 className="text-4xl md:text-5xl font-heading text-dark">
              {hero.title}
            </h1>

            <p className="mt-4 text-base md:text-lg font-body text-sub">
              {hero.tagline}
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block bg-primary text-sub px-8 py-3 rounded-lg font-body tracking-widest uppercase text-sm hover:scale-105 transition-transform duration-300"
            >
              Book Consultation
            </Link>
        </div>
      </div> */}
    </section>
  );
}
