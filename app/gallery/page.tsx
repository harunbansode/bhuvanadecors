"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getGallery } from "@/sanity/lib/gallery"; 
import { urlFor } from "@/sanity/lib/image";

export default function GalleryPage() {
  const [galleryData, setGalleryData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState({ open: false, gridIdx: 0, imgIdx: 0 });

  useEffect(() => {
    getGallery().then((data) => {
      setGalleryData(data || []);
      setLoading(false);
    });
  }, []);

  const openLightbox = (gridIdx: number, imgIdx: number) => {
    setLightbox({ open: true, gridIdx, imgIdx });
  };

  const nextImage = () => {
    const images = galleryData[lightbox.gridIdx]?.images || [];
    setLightbox(prev => ({ ...prev, imgIdx: (prev.imgIdx + 1) % images.length }));
  };

  const prevImage = () => {
    const images = galleryData[lightbox.gridIdx]?.images || [];
    setLightbox(prev => ({ ...prev, imgIdx: (prev.imgIdx - 1 + images.length) % images.length }));
  };

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <section className="w-full py-20 px-4 mt-12 md:px-8 space-y-32">
      {galleryData.map((grid, gIdx) => (
        <div key={gIdx} className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE GRID */}
          <div className={`${gIdx % 2 !== 0 ? "lg:order-2" : ""}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {grid.images?.map((img: any, iIdx: number) => (
                img?.asset && (
                  <div key={iIdx} onClick={() => openLightbox(gIdx, iIdx)} className="relative aspect-square border border-accent/20 overflow-hidden cursor-pointer group bg-neutral-100">
                    <Image
                      src={urlFor(img.asset).width(400).height(400).fit("crop").url()}
                      alt="Gallery thumbnail"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className={`${gIdx % 2 !== 0 ? "lg:order-1" : ""}`}>
            <h3 className="text-4xl font-heading text-accent mb-4 uppercase">{grid.title}</h3>
            <p className="font-body text-dark leading-relaxed mb-6 opacity-80">{grid.description}</p>
            {grid.images?.[0]?.asset && (
              <div className="relative w-full aspect-[16/9] border border-accent overflow-hidden">
                <Image 
                  src={(urlFor(grid.images[0].asset) as any).width(800).height(450).fit("crop").url()} 
                  alt="Featured" 
                  fill 
                  className="object-cover" 
                />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* LIGHTBOX: TRANSPARENT BG WITH WHITE DESCRIPTION */}
      {lightbox.open && galleryData[lightbox.gridIdx] && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-md">
          
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setLightbox(prev => ({ ...prev, open: false }))}
              className="absolute -top-12 right-0 text-5xl font-light text-white z-[110] hover:text-accent transition"
            >
              &times;
            </button>

            {/* FLOATING IMAGE (No white background) */}
            <div className="relative w-full h-[50vh] md:h-[65vh]">
              {galleryData[lightbox.gridIdx].images[lightbox.imgIdx]?.asset && (
                <Image
                  src={urlFor(galleryData[lightbox.gridIdx].images[lightbox.imgIdx].asset).width(1600).quality(95).url()}
                  alt="Full view"
                  fill
                  className="object-contain"
                />
              )}
            </div>

            {/* DESCRIPTION BOX (White Background) */}
            <div className="mt-6 p-6 md:px-12 w-full max-w-2xl text-center shadow-2xl border-t-4 border-accent">
              {/* <h3 className="text-xl font-heading text-accent uppercase tracking-widest">
                {galleryData[lightbox.gridIdx].title}
              </h3>
              <p className="font-body text-dark mt-2 text-sm md:text-base italic">
                {galleryData[lightbox.gridIdx].images[lightbox.imgIdx]?.details || "A beautifully captured moment."}
              </p> */}
              <div className="mt-4 text-[30px] text-white font-bold uppercase tracking-widest">
                {lightbox.imgIdx + 1} / {galleryData[lightbox.gridIdx].images.length}
              </div>
            </div>

            {/* NAVIGATION */}
            <button onClick={prevImage} className="absolute -left-4 md:-left-20 top-[40%] text-white text-7xl font-thin hover:text-accent transition">‹</button>
            <button onClick={nextImage} className="absolute -right-4 md:-right-20 top-[40%] text-white text-7xl font-thin hover:text-accent transition">›</button>
          </div>
        </div>
      )}
    </section>
  );
}