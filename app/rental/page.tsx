"use client";

import { useState, useEffect } from "react";
import { sanityClient } from "@/sanity/lib/client"; // Use your configured client
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
  return builder.image(source);
}

interface RentalItem {
  _id: string;
  name: string; // This will map to 'title' from Sanity
  category: string;
  image: any; 
  quantity: number;
}

export default function RentalPage() {
  const [rentals, setRentals] = useState<RentalItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cart, setCart] = useState<RentalItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      // Logic: map "title" from your Sanity document to "name" for the frontend
      const query = `*[_type == "rental"]{ 
        _id, 
        "name": title, 
        category, 
        image 
      }`;
      
      try {
        const data = await sanityClient.fetch(query);
        setRentals(data);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const savedCart = localStorage.getItem("rentalCart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart", e);
      }
    }
  }, []);

  // Filter Logic
  const filteredRentals = rentals.filter(item => {
    // Fallback to empty string if name is missing
    const itemName = item.name || "";
    const matchesName = itemName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesName && matchesCategory;
  });

  const addToCart = (item: RentalItem) => {
    if (!cart.find(i => i._id === item._id)) {
      const newCart = [...cart, { ...item, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem("rentalCart", JSON.stringify(newCart));
    }
  };

  const removeFromCart = (id: string) => {
    const newCart = cart.filter(item => item._id !== id);
    setCart(newCart);
    localStorage.setItem("rentalCart", JSON.stringify(newCart));
  };

  const updateQuantity = (id: string, qty: number) => {
    const newCart = cart.map(item =>
      item._id === id ? { ...item, quantity: Math.max(1, qty) } : item
    );
    setCart(newCart);
    localStorage.setItem("rentalCart", JSON.stringify(newCart));
  };

  const isInCart = (id: string) => cart.some(item => item._id === id);

  if (loading) return <div className="py-20 text-center font-body">Loading Rentals...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-primary min-h-screen">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* LEFT SECTION: Catalog */}
        <div className="flex-1">
          {/* Filters */}
          <div className="mb-10 mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
            <select
              value={selectedCategory || ""}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="w-full md:w-1/4 border border-accent px-4 py-2 bg-primary text-dark outline-none font-body"
            >
              <option value="">All Categories</option>
              {[...new Set(rentals.map(r => r.category))].filter(Boolean).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 border border-accent px-4 py-2 text-dark bg-primary outline-none font-body"
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredRentals.map(item => {
              const added = isInCart(item._id);
              return (
                <div key={item._id} className="border border-accent bg-white transition-shadow hover:shadow-lg flex flex-col">
                  {item.image ? (
                    <img
                      src={urlFor(item.image).width(400).height(300).url()}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-sub">No Image</div>
                  )}

                  <div className="p-6 text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading text-2xl text-dark">
                        {item.name || "Untitled Item"}
                      </h4>
                      <p className="mt-2 text-sub uppercase tracking-widest text-xs font-body">
                        {item.category}
                      </p>
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      disabled={added}
                      className={`mt-6 w-full px-6 py-3 uppercase tracking-widest text-sm transition-colors font-body ${
                        added ? "bg-sub text-white cursor-not-allowed" : "bg-accent text-white hover:bg-dark"
                      }`}
                    >
                      {added ? "In Inquiry Cart" : "Add to Inquiry"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SECTION: Cart Sidebar */}
        {cart.length > 0 && (
          <div className="lg:w-1/3">
            <div className="sticky top-28 border border-accent bg-white p-6 shadow-sm">
              <h3 className="font-heading text-3xl text-dark mb-6">Inquiry Cart</h3>
              <ul className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                {cart.map(item => (
                  <li key={item._id} className="border-b border-accent/20 pb-4 flex justify-between items-center">
                    <div>
                      <p className="font-body font-bold text-dark">{item.name}</p>
                      <p className="text-[10px] uppercase text-sub">{item.category}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                        className="w-12 border border-accent px-1 text-center font-body text-sm py-1"
                      />
                      <button 
                        onClick={() => removeFromCart(item._id)} 
                        className="text-accent text-xs hover:text-dark"
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => (window.location.href = "/rental/inquiry")}
                className="mt-8 w-full px-6 py-4 bg-accent text-white uppercase tracking-[0.2em] text-xs hover:bg-dark transition-colors font-body shadow-md"
              >
                Proceed to Inquiry Form
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}