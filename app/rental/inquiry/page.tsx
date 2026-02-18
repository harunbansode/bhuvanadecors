// "use client";

// import { useState, useEffect } from "react";

// interface RentalItem {
//   id: number;
//   name: string;
//   category: string;
// }

// export default function InquiryPage() {
//   const [cart, setCart] = useState<RentalItem[]>([]);

//   useEffect(() => {
//     const savedCart = localStorage.getItem("rentalCart");
//     if (savedCart) setCart(JSON.parse(savedCart));
//   }, []);

//   const removeItem = (id: number) => {
//     const updated = cart.filter(item => item.id !== id);
//     setCart(updated);
//     localStorage.setItem("rentalCart", JSON.stringify(updated));
//   };

//   return (
//     <div className="max-w-4xl mt-6 mx-auto px-6 py-20 space-y-10 bg-primary">

//       {/* Heading */}
//       <h1 className="text-4xl font-heading text-accent text-center">
//         Inquiry Form
//       </h1>

//       {/* Selected Items */}
//       {cart.length > 0 && (
//         <div className="flex flex-wrap justify-center gap-3">
//           {cart.map(item => (
//             <div
//               key={item.id}
//               className="flex items-center border border-accent px-4 py-1 font-body text-dark"
//             >
//               <span className="text-sm">{item.name}</span>
//               <button
//                 onClick={() => removeItem(item.id)}
//                 className="ml-3 text-accent font-semibold hover:text-dark transition-colors"
//               >
//                 ✕
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Form */}
//       <form className="space-y-6 border border-accent p-10 bg-white">

//         <div>
//           <label className="block mb-1 font-body text-sm text-dark">
//             Name
//           </label>
//           <input
//             type="text"
//             className="w-full border border-accent px-4 py-2 font-body focus:outline-none focus:border-dark"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-body text-sm text-dark">
//             Email
//           </label>
//           <input
//             type="email"
//             className="w-full border border-accent px-4 py-2 font-body focus:outline-none focus:border-dark"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-body text-sm text-dark">
//             Phone
//           </label>
//           <input
//             type="tel"
//             className="w-full border border-accent px-4 py-2 font-body focus:outline-none focus:border-dark"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-body text-sm text-dark">
//             Additional Message
//           </label>
//           <textarea
//             rows={4}
//             className="w-full border border-accent px-4 py-2 font-body focus:outline-none focus:border-dark"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-accent text-dark py-3 font-body uppercase tracking-widest text-sm hover:bg-dark hover:text-white transition-colors"
//         >
//           Submit Inquiry
//         </button>
//       </form>
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";

// interface RentalItem {
//   _id: string;
//   name: string;
//   category: string;
//   quantity: number;
// }

// export default function InquiryPage() {
//   const [cart, setCart] = useState<RentalItem[]>([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   useEffect(() => {
//     const savedCart = localStorage.getItem("rentalCart");
//     if (savedCart) {
//       try {
//         const parsedCart = JSON.parse(savedCart);
//         // Debugging: This will show you exactly what is inside your storage
//         console.log("🛒 Items currently in cart:", parsedCart);
//         setCart(parsedCart);
//       } catch (e) {
//         console.error("Failed to parse cart", e);
//       }
//     }
//   }, []);

//   const removeItem = (id: string) => {
//     const updated = cart.filter((item) => item._id !== id);
//     setCart(updated);
//     localStorage.setItem("rentalCart", JSON.stringify(updated));
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const payload = { customer: formData, items: cart };
//     console.log("🚀 Submitting Inquiry:", payload);
//     alert("Inquiry Sent! Check the browser console to see the data.");
//   };

//   return (
//     <div className="max-w-4xl mt-6 mx-auto px-6 py-20 space-y-10 bg-primary min-h-screen">
//       <h1 className="text-4xl font-heading text-accent text-center uppercase tracking-tighter">
//         Inquiry Form
//       </h1>

//       <div className="space-y-4">
//         <h2 className="font-body text-sm uppercase tracking-widest text-sub text-center">
//           Your Selected Items
//         </h2>
        
//         {cart.length > 0 ? (
//           <div className="flex flex-wrap justify-center gap-3">
//             {cart.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex items-center border border-accent px-4 py-2 font-body text-dark bg-white shadow-sm"
//               >
//                 <div className="flex flex-col">
//                   <span className="text-sm font-bold">
//                     {/* If name is null, show the ID so we know which Sanity doc to check */}
//                     {item.name || `ID: ${item._id.substring(0, 5)}... (Missing Name)`}
//                   </span>
//                   <span className="text-[10px] uppercase text-sub">
//                     Qty: {item.quantity || 1}
//                   </span>
//                 </div>
//                 <button
//                   onClick={() => removeItem(item._id)}
//                   className="ml-4 text-accent hover:text-red-500 transition-colors"
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center p-10 border border-dashed border-accent/50">
//             <p className="font-body text-sub">Your inquiry list is empty.</p>
//           </div>
//         )}
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6 border border-accent p-10 bg-white shadow-xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block mb-1 font-body text-xs uppercase tracking-widest text-sub">Full Name</label>
//             <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full border border-accent px-4 py-3 outline-none" />
//           </div>
//           <div>
//             <label className="block mb-1 font-body text-xs uppercase tracking-widest text-sub">Email Address</label>
//             <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border border-accent px-4 py-3 outline-none" />
//           </div>
//         </div>

//         <div>
//           <label className="block mb-1 font-body text-xs uppercase tracking-widest text-sub">Phone Number</label>
//           <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full border border-accent px-4 py-3 outline-none" />
//         </div>

//         <div>
//           <label className="block mb-1 font-body text-xs uppercase tracking-widest text-sub">Event Details</label>
//           <textarea rows={4} name="message" value={formData.message} onChange={handleInputChange} className="w-full border border-accent px-4 py-3 outline-none" />
//         </div>

//         <button
//           type="submit"
//           disabled={cart.length === 0}
//           className="w-full py-4 bg-accent text-white uppercase tracking-widest text-sm hover:bg-dark disabled:bg-gray-200 transition-all"
//         >
//           {cart.length === 0 ? "Add items to continue" : "Send Inquiry Request"}
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";

interface RentalItem {
  _id: string;
  name: string;
  category: string;
  quantity: number;
}

export default function InquiryPage() {
  const [cart, setCart] = useState<RentalItem[]>([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const savedCart = localStorage.getItem("rentalCart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const removeItem = (id: string) => {
    const updated = cart.filter(item => item._id !== id);
    setCart(updated);
    localStorage.setItem("rentalCart", JSON.stringify(updated));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", { customer: formData, items: cart });
    alert("Inquiry Sent! We will contact you shortly.");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 bg-primary min-h-screen">
      <h1 className="text-4xl font-heading text-center mb-10 text-accent uppercase">Inquiry Form</h1>
      
      <div className="mb-12">
        <h2 className="text-center font-body text-xs uppercase tracking-[0.2em] mb-6 text-sub">Selected Items</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {cart.map(item => (
            <div key={item._id} className="flex items-center bg-white border border-accent px-4 py-2 shadow-sm">
              <span className="text-sm font-medium">
                {item.name} <span className="text-accent ml-1">(x{item.quantity})</span>
              </span>
              <button onClick={() => removeItem(item._id)} className="ml-3 text-sub hover:text-red-500">✕</button>
            </div>
          ))}
          {cart.length === 0 && <p className="text-sub italic">Your cart is empty.</p>}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-accent p-8 md:p-12 shadow-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest mb-2 text-sub">Full Name</label>
            <input required name="name" onChange={handleInputChange} className="border border-accent p-3 outline-none focus:border-dark" />
          </div>
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest mb-2 text-sub">Email</label>
            <input required type="email" name="email" onChange={handleInputChange} className="border border-accent p-3 outline-none focus:border-dark" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-xs uppercase tracking-widest mb-2 text-sub">Phone</label>
          <input required type="tel" name="phone" onChange={handleInputChange} className="border border-accent p-3 outline-none focus:border-dark" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs uppercase tracking-widest mb-2 text-sub">Message</label>
          <textarea rows={4} name="message" onChange={handleInputChange} className="border border-accent p-3 outline-none focus:border-dark" />
        </div>
        <button 
          disabled={cart.length === 0}
          className="w-full py-4 bg-accent text-white uppercase tracking-[0.3em] text-sm hover:bg-dark disabled:bg-gray-200 transition-all"
        >
          {cart.length === 0 ? "Add items to inquire" : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}