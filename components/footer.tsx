"use client";

import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon, LotusIcon } from "./navigation";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#gallery", label: "Gallery" },
  { href: "#workshops", label: "Workshops" },
  { href: "#contact", label: "Contact" },
];

const classLinks = [
  { href: "#classes", label: "Hatha Yoga" },
  { href: "#classes", label: "Ashtanga Yoga" },
  { href: "#classes", label: "Pranayama & Meditation" },
  { href: "#classes", label: "Yoga for Women" },
  { href: "#classes", label: "Yoga for Seniors" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <LotusIcon className="h-12 w-12 text-primary" />
              <div>
                <span className="text-xl font-serif font-bold text-card block"></span>
                <span className="text-xs text-card/60 tracking-widest uppercase">Yoga Studio</span>
              </div>
            </Link>
            <p className="text-card/70 text-sm mb-6 leading-relaxed">
              Rooted in Indian Yogic Tradition. Experience the authentic path to 
              wellness, peace, and spiritual growth.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/80 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-semibold text-card mb-6">Our Classes</h4>
            <ul className="space-y-3">
              {classLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-card mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-card/70 text-sm">
                  123, Yoga Marg, Near City Center,<br />
                  Ahmedabad, Gujarat 380001,<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919999999999" className="text-card/70 hover:text-primary text-sm transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@yoga.com" className="text-card/70 hover:text-primary text-sm transition-colors">
                  info@yoga.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card/70 hover:text-primary text-sm transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Yoga Studio. All rights reserved.
            </p>
            <p className="text-card/50 text-sm text-center md:text-right">
              Yoga Studio – Rooted in Indian Yogic Tradition
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
