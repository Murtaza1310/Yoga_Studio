"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Instructors",
    description: "All our teachers are certified with years of training in authentic Indian yoga traditions.",
  },
  {
    icon: Leaf,
    title: "Traditional Approach",
    description: "We follow the ancient yogic principles passed down through generations of masters.",
  },
  {
    icon: Heart,
    title: "Peaceful Environment",
    description: "Our studio provides a serene, spiritual space perfect for your yoga journey.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Join a welcoming community of yoga practitioners from all walks of life.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-studio.jpg"
                alt="Yoga Studio"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-2xl -z-10" />
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 right-4 md:right-8 bg-card p-6 rounded-xl shadow-lg"
            >
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-muted-foreground">Years of Excellence</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-3 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Choose Yoga Studio
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Yoga Studio, we are dedicated to preserving and sharing the authentic 
              traditions of Indian yoga. Our mission is to guide you on a transformative journey 
              towards physical wellness, mental clarity, and spiritual growth.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Founded on the principles of classical yoga, we offer a holistic approach that 
              honors the ancient wisdom while making it accessible to modern practitioners of 
              all backgrounds and abilities.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
