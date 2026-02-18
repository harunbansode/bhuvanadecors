// "use client";

// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";

// interface RentalCardProps {
//   item: {
//     _id: string;
//     title: string;
//     image?: any; 
//     description?: string;
//   };
//   addToCart: (item: any) => void;
// }

// export default function RentalCard({ item, addToCart }: RentalCardProps) {
//   if (!item) return null;

//   // Since your urlFor(source) already returns .url(), don't call it again
//   const imageUrl = (item.image && item.image.asset) 
//     ? urlFor(item.image) 
//     : "/placeholder.jpg";

//   return (
//     <div className="border border-accent overflow-hidden bg-white group flex flex-col h-full">
//       <div className="relative w-full aspect-square bg-gray-100">
//         <Image 
//           src={imageUrl} 
//           alt={item.title} 
//           fill 
//           sizes="(max-width: 768px) 100vw, 400px"
//           className="object-cover group-hover:scale-105 transition-transform duration-500" 
//         />
//       </div>

//       <div className="p-6 text-center flex-grow">
//         <h3 className="font-heading text-xl text-accent mb-2 uppercase">{item.title}</h3>
//         {item.description && <p className="text-dark opacity-70 text-sm line-clamp-3">{item.description}</p>}
//       </div>

//       <button
//         onClick={() => addToCart(item)}
//         className="w-full px-6 py-4 bg-accent text-white font-body uppercase tracking-widest hover:bg-black transition-colors"
//       >
//         Add to Inquiry Cart
//       </button>
//     </div>
//   );
// }