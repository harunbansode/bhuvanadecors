"use client";

import { useState } from "react";
import Image from "next/image";

interface ContactData {
  banner?: string;
  address?: string;
  phone?: string;
  email?: string;
  openingHours?: string;
}

export default function ContactView({ data }: { data: ContactData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    banner: data?.banner || "/images/contact_banner.png",
    address: data?.address || "1124 Morni,\nLorton VA 22079",
    phone: data?.phone || "(703) 490-9000",
    email: data?.email || "info@dmvdecor.com",
    hours: data?.openingHours || "Meetings By Appointment Only",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Success! Your message has been submitted. We will get back to you soon.");
        (e.target as HTMLFormElement).reset(); 
      } else {
        console.error("Submission Error:", result.error);
        alert(`Error: ${result.error?.message || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Something went wrong with the network. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full">
      <div className="relative w-full h-[300px] mt-15 sm:h-[400px] md:h-[500px] max-w-6xl mx-auto">
        <Image
          src={content.banner}
          alt="Contact Banner"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="bg-primary py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-3">
            <h3 className="text-xl font-heading text-accent">Address</h3>
            <p className="font-body text-dark leading-relaxed whitespace-pre-line">
              {content.address}
            </p>
          </div>

          <div className="space-y-3 border-x border-accent md:border-x md:border-accent/90 px-6">
            <h3 className="text-xl font-heading text-accent">Contact</h3>
            <p className="font-body text-dark leading-relaxed">
              {content.phone}<br />
              {content.email}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-heading text-accent">Opening Hours</h3>
            <p className="font-body text-dark leading-relaxed">
              {content.hours}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-primary rounded-xl p-10 shadow-sm border-2 border-accent">
          <h2 className="text-3xl font-heading text-center text-accent mb-10">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 font-body">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full border border-accent px-4 py-3 focus:outline-none bg-white text-dark"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-accent px-4 py-3 focus:outline-none bg-white text-dark"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className="w-full border border-accent px-4 py-3 focus:outline-none bg-white text-dark"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                name="event_date"
                type="date" 
                className="border border-accent px-4 py-3 focus:outline-none bg-white text-dark" 
                required 
              />
              <input 
                name="event_time"
                type="time" 
                className="border border-accent px-4 py-3 focus:outline-none bg-white text-dark" 
                required 
              />
            </div>

            <input 
              name="event_location"
              placeholder="Event Location" 
              className="w-full border border-accent px-4 py-3 focus:outline-none bg-white text-dark" 
              required 
            />

            <div>
              <p className="mb-3 font-medium text-dark">Preferred Contact Method</p>
              <div className="flex gap-6 justify-center md:justify-start">
                {["Email", "Phone", "Text"].map((m) => (
                  <label key={m} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={m}
                      className="accent-[var(--color-accent)]"
                    />
                    {m}
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full border border-accent px-4 py-3 focus:outline-none bg-white text-dark"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-accent text-white px-6 py-4 font-semibold uppercase tracking-widest transition-all duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed bg-dark" : "hover:bg-dark active:scale-[0.98]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}