"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./navigation";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-yoga.jpg"
          alt="Yoga practitioners at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Mandala Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <MandalaPattern />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative Lotus */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <LotusDecor className="h-16 w-16 mx-auto text-primary" />
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 leading-tight text-balance">
            Find Your Inner Peace
          </h1>

          {/* Hindi Sub-headline */}
          <p className="text-xl md:text-2xl text-card/90 mb-4 font-medium">
            योग से स्वस्थ और संतुलित जीवन
          </p>

          {/* English Sub-headline */}
          <p className="text-lg md:text-xl text-card/80 mb-10 max-w-2xl mx-auto">
            Experience the ancient wisdom of yoga with certified Indian instructors 
            in a peaceful, spiritual environment.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                Enquire on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-card/50 text-card hover:bg-card/10 text-lg px-8 py-6 bg-transparent"
            >
              <a href="#classes">
                Explore Classes
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-card/70"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl font-bold">15+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl font-bold">5000+</span>
              <span className="text-sm">Happy Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl font-bold">10+</span>
              <span className="text-sm">Certified Instructors</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-card/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function MandalaPattern() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
      fill="currentColor"
    >
      <g className="text-card">
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 200 200)`}>
            <ellipse cx="200" cy="80" rx="15" ry="40" opacity="0.3" />
            <ellipse cx="200" cy="60" rx="8" ry="25" opacity="0.2" />
          </g>
        ))}
        <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      </g>
    </svg>
  );
}

function LotusDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="currentColor" className={className}>
      <path d="M50 5c-2 10-10 18-10 28 0 7 5 12 10 14 5-2 10-7 10-14 0-10-8-18-10-28z" />
      <path d="M30 15c3 8 0 20 7 27 3 3 8 5 10 5-7-3-12-10-12-18 0-5-1-10-5-14z" opacity="0.8" />
      <path d="M70 15c-3 8 0 20-7 27-3 3-8 5-10 5 7-3 12-10 12-18 0-5 1-10 5-14z" opacity="0.8" />
      <path d="M15 30c5 5 5 15 14 21 2 1 7 2 10 2-8-2-15-8-17-14-2-3-5-7-7-9z" opacity="0.6" />
      <path d="M85 30c-5 5-5 15-14 21-2 1-7 2-10 2 8-2 15-8 17-14 2-3 5-7 7-9z" opacity="0.6" />
    </svg>
  );
}
