"use client";

import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="w-full">

      {/* Banner */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src="/images/banner.jpg"
          alt="Portfolio Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Grid 1 */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 cursor-pointer">
              <Image
                src="/images/banner.jpg"
                alt="Anoop & Tarun Wedding"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-heading text-accent">
                Anoop + Tarun
              </h3>
              <p className="text-base md:text-lg font-body text-dark leading-relaxed">
                Anoop & Tarun’s wedding featured a vibrant Sangeet, a breathtaking
                Sikh ceremony, and an elegant reception.
              </p>
            </div>
          </div>

          <hr className="mt-12 border-t-2 border-[#C9A24D]" />
        </div>

        {/* Grid 2 — MIRRORED */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Image — RIGHT on desktop */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 order-1 md:order-2 cursor-pointer">
              <Image
                src="/images/banner.jpg"
                alt="Wedding Decor"
                fill
                className="object-cover"
              />
            </div>

            {/* Text — LEFT on desktop */}
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-heading text-accent">
                Wedding Celebration
              </h3>
              <p className="text-base md:text-lg font-body text-dark leading-relaxed">
                A beautiful blend of tradition and modern elegance, thoughtfully
                designed to reflect love and culture.
              </p>
            </div>
          </div>

          <hr className="mt-12 border-t-2 border-[#C9A24D]" />
        </div>

        {/* Grid 3 */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 cursor-pointer">
              <Image
                src="/images/banner.jpg"
                alt="Luxury Wedding"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-heading text-accent">
                Elegant Reception
              </h3>
              <p className="text-base md:text-lg font-body text-dark leading-relaxed">
                A refined reception setup featuring luxurious florals, soft
                lighting, and timeless design details.
              </p>
            </div>
          </div>

          <hr className="mt-12 border-t-2 border-[#C9A24D]" />
        </div>

      </div>
    </section>
  );
}
