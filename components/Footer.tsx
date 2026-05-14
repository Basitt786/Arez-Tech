"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10 pt-24 pb-10">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e3b433]/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pb-20 border-b border-white/10">

          {/* Column 1 */}
          <div>

            {/* Logo */}
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/arez.png"
                alt="Arez Tech"
                width={180}
                height={45}
                priority
                className="h-[42px] w-auto object-contain"
              />
            </Link>

            {/* Contact Info */}
            <div className="space-y-4">

              <div className="flex items-center gap-3 text-white/70 text-[15px]">
                <MapPin size={18} className="text-[#e3b433]" />
                <span>Pakistan</span>
              </div>

              <a
                href="tel:+923001234567"
                className="flex items-center gap-3 text-white/70 hover:text-[#e3b433] transition-all duration-300 text-[15px]"
              >
                <Phone size={18} className="text-[#e3b433]" />
                <span>+92 300 123 4567</span>
              </a>

              <a
                href="mailto:info@arez-tech.com"
                className="flex items-center gap-3 text-white/70 hover:text-[#e3b433] transition-all duration-300 text-[15px]"
              >
                <Mail size={18} className="text-[#e3b433]" />
                <span>info@arez-tech.com</span>
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="group w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#e3b433] transition-all duration-300"
              >
                <FaFacebookF className="group-hover:text-[#e3b433] transition-all duration-300" />
              </a>

              <a
                href="#"
                className="group w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#e3b433] transition-all duration-300"
              >
                <FaInstagram className="group-hover:text-[#e3b433] transition-all duration-300" />
              </a>

              <a
                href="#"
                className="group w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#e3b433] transition-all duration-300"
              >
                <FaLinkedinIn className="group-hover:text-[#e3b433] transition-all duration-300" />
              </a>

              <a
                href="#"
                className="group w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#e3b433] transition-all duration-300"
              >
                <FaBehance className="group-hover:text-[#e3b433] transition-all duration-300" />
              </a>

              <a
                href="#"
                className="group w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#e3b433] transition-all duration-300"
              >
                <FaPinterestP className="group-hover:text-[#e3b433] transition-all duration-300" />
              </a>

            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white text-[22px] font-bold mb-8">
              Overview
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/service"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/casestudies"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white text-[22px] font-bold mb-8">
              Our Services
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Branding
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Website Development & Design
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Graphic Design
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Video & Animation
                </a>
              </li>

            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white text-[22px] font-bold mb-8">
              Digital Marketing
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Social Media Marketing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Search Engine Optimization (SEO)
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Paid Ads (Google & Meta)
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#e3b433] transition-all duration-300"
                >
                  Email Marketing
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Huge Background Text */}
        <div className="relative py-16">

          <h1
            className="
              text-center
              text-[60px]
              md:text-[100px]
              lg:text-[160px]
              font-black
              uppercase
              tracking-[10px]
              leading-none
              text-white/[0.03]
              select-none
            "
          >
            AREZ TECH
          </h1>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">

          {/* Policies */}
          <div className="flex items-center gap-4 text-white/50 text-sm">

            <a
              href="#"
              className="hover:text-[#e3b433] transition-all duration-300"
            >
              Privacy Policy
            </a>

            <span>|</span>

            <a
              href="#"
              className="hover:text-[#e3b433] transition-all duration-300"
            >
              Terms & Conditions
            </a>

          </div>

          {/* Copyright */}
          <div className="text-white/40 text-sm text-center md:text-right">
            © 2026 Arez Tech. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;