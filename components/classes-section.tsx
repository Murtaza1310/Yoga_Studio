"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./navigation";
import { motion } from "framer-motion";

const classes = [
  {
    id: 1,
    title: "Hatha Yoga",
    hindiTitle: "हठ योग",
    description: "Traditional yoga focusing on physical postures and breathing techniques for balance and flexibility.",
    image: "/images/hatha-yoga.jpg",
  },
  {
    id: 2,
    title: "Ashtanga Yoga",
    hindiTitle: "अष्टांग योग",
    description: "Dynamic and physically demanding practice following a specific sequence of postures.",
    image: "/images/ashtanga-yoga.jpg",
  },
  {
    id: 3,
    title: "Pranayama & Meditation",
    hindiTitle: "प्राणायाम और ध्यान",
    description: "Breath control exercises and meditation for mental clarity and inner peace.",
    image: "/images/meditation.jpg",
  },
  {
    id: 4,
    title: "Yoga for Women",
    hindiTitle: "महिलाओं के लिए योग",
    description: "Specialized classes addressing women's health needs through gentle and restorative practices.",
    image: "/images/women-yoga.jpg",
  },
  {
    id: 5,
    title: "Yoga for Seniors",
    hindiTitle: "वरिष्ठों के लिए योग",
    description: "Gentle yoga adapted for older adults focusing on mobility, balance, and joint health.",
    image: "/images/seniors-yoga.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ClassesSection() {
  return (
    <section id="classes" className="py-20 md:py-28 bg-background">
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
            Our Classes
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Discover Your Practice
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from our diverse range of yoga classes designed for all levels, 
            from beginners to advanced practitioners.
          </p>
        </motion.div>

        {/* Classes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {classes.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.id}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 || index === 3 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Card */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={yogaClass.image || "/placeholder.svg"}
                  alt={yogaClass.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-primary/90 text-sm mb-1">{yogaClass.hindiTitle}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-card mb-2">
                    {yogaClass.title}
                  </h3>
                  <p className="text-card/80 text-sm mb-4 line-clamp-2">
                    {yogaClass.description}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-4 w-4 mr-2" />
                      Enquire on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
