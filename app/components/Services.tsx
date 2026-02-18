// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { services } from "./data/servicesContent"; // your service data

// export default function Services() {
//   return (
//     <section className="w-full bg-primary py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-heading text-accent mb-4">
//             Our Services
//           </h2>
//           <p className="text-sub max-w-2xl mx-auto text-lg md:text-xl">
//             Thoughtfully designed décor services to make every celebration unforgettable.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center bg-white border-2 border-accent rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Image */}
//               <div className="relative w-full h-64 md:h-72 lg:h-80">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-cover rounded-t-lg"
//                 />
//               </div>

//               {/* Content */}
//               <div className="mt-4 px-6 text-center">
//                 <h3 className="text-xl font-heading text-dark mb-2">{service.title}</h3>
//                 <p className="text-sub leading-relaxed mb-4">{service.description}</p>

//                 {/* Book This Service Button */}
//                 <Link
//                   href="/contact"
//                   className="inline-block bg-accent text-white px-6 py-2 rounded-lg font-body tracking-widest uppercase hover:bg-dark transition-colors"
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


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { services } from "./data/servicesContent"; // your service data

// export default function Services() {
//   // Optional: If your services array has more than 3 items, 
//   // you can filter for just these three specific ones.
//   const featuredServices = services.filter(s => 
//     ["Birthday", "Sweet 16", "Baby Shower"].includes(s.title)
//   );

//   return (
//     <section className="w-full bg-primary py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-heading text-accent mb-4">
//             Specialized Services
//           </h2>
//           <p className="text-sub max-w-2xl mx-auto text-lg md:text-xl">
//             Thoughtfully designed décor services to make every celebration unforgettable.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
//           {featuredServices.map((service, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center bg-white border-2 border-accent rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 pb-6"
//             >
//               {/* Image */}
//               <div className="relative w-full h-64 md:h-72 lg:h-80">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="mt-4 px-6 text-center">
//                 <h3 className="text-xl font-heading text-dark mb-2">{service.title}</h3>
//                 <p className="text-sub leading-relaxed mb-6">{service.description}</p>

//                 {/* Book This Service Button */}
//                 <Link
//                   href="/contact"
//                   className="inline-block bg-accent text-white px-6 py-2 rounded-lg font-body tracking-widest uppercase hover:bg-dark transition-colors"
//                 >
//                   Book This Service
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Learn More Button - Redirects to main services page */}
//         <div className="flex justify-center">
//           <Link
//             href="/services"
//             className="px-10 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-full font-heading text-lg uppercase tracking-wider"
//           >
//             Learn More About Our Services
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }


import { getHomeServices } from "@/sanity/lib/services"; // adjust path as needed
import Image from "next/image";
import Link from "next/link";

export default async function ServicesSection() {
  const services = await getHomeServices();
  
  // ADD THIS LINE:
  // console.log("Fetched Services:", services); 

  if (!services || services.length === 0) {
    return <div className="text-center py-20">No services found. Check Sanity toggles!</div>;
  }
  return (
    <section className="w-full bg-primary px-14 py-10 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-heading text-accent mb-4">
            Specialized Services
          </h2>
          <p className="text-sub max-w-2xl mx-auto text-lg md:text-xl">
            Thoughtfully designed décor services to make every celebration unforgettable.
          </p>
        </div>

        {/* Dynamic Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {services.map((service: any) => (
            <div
              key={service._id}
              className="flex flex-col items-center border-2 border-accent"
            >
              <div className="relative w-full h-64 md:h-72 lg:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 px-6 text-center">
                <h3 className="text-xl font-heading text-dark mb-8">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Redirect Button to main services page */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="px-10 py-4 border-2 border-accent bg-white text-accent"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}