"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    hindiName: "प्रिया शर्मा",
    role: "Student for 3 years",
    quote: "Yoga Studio has transformed my life. The authentic teaching methods and peaceful environment helped me find balance in both body and mind.",
    hindiQuote: "पतिदार योग स्टूडियो ने मेरे जीवन को बदल दिया है।",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    hindiName: "राजेश पटेल",
    role: "Student for 5 years",
    quote: "The instructors here truly understand the essence of yoga. Their guidance has helped me manage stress and improve my overall well-being significantly.",
    hindiQuote: "यहाँ के प्रशिक्षक योग के सार को सही मायने में समझते हैं।",
    avatar: "RP",
  },
  {
    id: 3,
    name: "Meera Joshi",
    hindiName: "मीरा जोशी",
    role: "Student for 2 years",
    quote: "As a senior, I was hesitant about yoga. But the gentle classes here are perfect for me. I feel more energetic and flexible than ever before.",
    hindiQuote: "एक वरिष्ठ के रूप में, मुझे योग के बारे में संकोच था।",
    avatar: "MJ",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-secondary-foreground" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-secondary-foreground" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-secondary-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary-foreground mb-4 text-balance">
            What Our Students Say
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
            Hear from our community members about their transformative experiences 
            at Yoga Studio.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-4 mt-4 leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>
              <p className="text-primary/80 text-sm italic mb-6">
                {testimonial.hindiQuote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.hindiName}</p>
                  <p className="text-xs text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
