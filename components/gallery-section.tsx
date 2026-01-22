"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Group yoga class", span: "col-span-2 row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Yoga studio interior", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-3.jpg", alt: "Meditation mudra", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Personal yoga instruction", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Outdoor sunrise yoga", span: "col-span-2 row-span-1" },
  { src: "/images/gallery-6.jpg", alt: "Savasana relaxation", span: "col-span-1 row-span-1" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-3 block">
            Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            A Glimpse of Our Studio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the peaceful atmosphere and vibrant community at Yoga Studio 
            through our collection of moments.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-xl group ${image.span}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
