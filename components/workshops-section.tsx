"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./navigation";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Meditation Camps",
    hindiTitle: "ध्यान शिविर",
    description: "Immersive meditation retreats to deepen your practice and find inner stillness.",
    image: "/images/workshop-meditation.jpg",
    duration: "3-7 Days",
  },
  {
    id: 2,
    title: "Wellness Programs",
    hindiTitle: "कल्याण कार्यक्रम",
    description: "Holistic wellness combining yoga, Ayurveda, and lifestyle practices for total health.",
    image: "/images/workshop-wellness.jpg",
    duration: "2-4 Weeks",
  },
  {
    id: 3,
    title: "Yoga Retreats",
    hindiTitle: "योग आश्रम",
    description: "Escape to serene locations for intensive yoga practice and spiritual rejuvenation.",
    image: "/images/workshop-retreat.jpg",
    duration: "5-14 Days",
  },
];

export function WorkshopsSection() {
  return (
    <section id="workshops" className="py-20 md:py-28 bg-muted/50">
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
            Special Programs
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Workshops & Retreats
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Go deeper into your practice with our specialized programs designed 
            for transformation and growth.
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground">{workshop.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary/80 text-sm">{workshop.hindiTitle}</span>
                <h3 className="font-serif text-xl font-bold text-foreground mt-1 mb-3">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {workshop.description}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
