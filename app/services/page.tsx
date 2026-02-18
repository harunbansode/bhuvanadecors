// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { services } from "../components/data/servicesContent";

// export default function Services() {
//   return (
//     <section className="w-full bg-primary py-24 px-4 mt-10 md:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-heading text-accent mb-4">
//             Our Services
//           </h2>
//           <p className="text-sub max-w-2xl mx-auto text-lg md:text-xl">
//             Thoughtfully designed décor services to make every celebration unforgettable.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Image */}
//               <div className="relative w-full h-64 md:h-72 lg:h-80">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-cover rounded-t-lg"
//                 />
//                 {/* Optional: gold border overlay */}
//                 <div className="absolute inset-0 pointer-events-none rounded-t-lg"></div>
//               </div>

//               {/* Content */}
//               <div className="mt-6 px-6 pb-6 text-center">
//                 <h3 className="text-xl md:text-2xl font-heading text-dark mb-3">{service.title}</h3>
//                 <p className="text-sub leading-relaxed mb-6">{service.description}</p>

//                 {/* Book This Service Button */}
//                 <Link
//                   href="/contact"
//                   className="inline-block border-1 border-accent text-white px-8 py-3 font-body tracking-widest uppercase hover:bg-dark transition-colors"
//                 >
//                   Book This Service
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getServices } from "@/sanity/lib/services";

interface Service {
  title: string;
  description: string;
  image: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <section className="w-full bg-primary py-24 px-4 mt-10 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-accent mb-4">
            Our Services
          </h2>
          <p className="text-sub max-w-2xl mx-auto text-lg md:text-xl">
            Thoughtfully designed décor services to make every celebration unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-6 px-6 pb-6 text-center">
                <h3 className="text-xl md:text-2xl font-heading text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-sub leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-block border border-accent px-8 py-3 font-body tracking-widest uppercase hover:bg-dark hover:text-white transition-colors"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
