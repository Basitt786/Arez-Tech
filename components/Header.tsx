"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Mobilebtn from "./Mobilebtn";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[1000] px-4 md:px-6 lg:px-[60px] py-5">

      {/* Navbar Container */}
      <div
        className="
        max-w-[1600px]
        mx-auto
        flex
        items-center
        justify-between
        rounded-full
        border
        border-white/10
        bg-[rgba(15,15,15,0.82)]
        backdrop-blur-2xl
        px-6
        lg:px-10
        py-4
        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
      "
      >

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 group"
        >
         <Image
                src="/arez.webp"
                alt="Arez Tech Logo"
                width={160}
                height={40}
                priority
                className="
                    h-[38px]
                    w-auto
                    object-contain
                    transition-all
                    duration-500
                    group-hover:scale-105
                "
                />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          <Link
            href="/about"
            className="
              relative
              text-white
              text-[15px]
              font-semibold
              transition-all
              duration-300
              hover:text-[#e3b433]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-[#e3b433]
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            About
          </Link>

          <Link
            href="/portfolio"
            className="
              relative
              text-white
              text-[15px]
              font-semibold
              transition-all
              duration-300
              hover:text-[#e3b433]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-[#e3b433]
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Portfolio
          </Link>

          <Link
            href="/service"
            className="
              relative
              text-white
              text-[15px]
              font-semibold
              transition-all
              duration-300
              hover:text-[#e3b433]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-[#e3b433]
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Services
          </Link>

          <Link
            href="/casestudies"
            className="
              relative
              text-white
              text-[15px]
              font-semibold
              transition-all
              duration-300
              hover:text-[#e3b433]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-[#e3b433]
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Case Studies
          </Link>

          <Link
            href="/blog"
            className="
              relative
              text-white
              text-[15px]
              font-semibold
              transition-all
              duration-300
              hover:text-[#e3b433]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-[#e3b433]
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            Blog
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Contact Button */}
          <Link
            href="/contact"
            className="
              hidden
              md:flex
              relative
              overflow-hidden
              items-center
              justify-center
              px-8
              py-3
              rounded-full
              border
              border-white/15
              bg-black
              text-white
              text-[15px]
              font-bold
              transition-all
              duration-500
              hover:text-black
              hover:border-[#e3b433]
              hover:-translate-y-[2px]
              group
            "
          >

            {/* Animated Background */}
            <span
              className="
                absolute
                inset-0
                bg-[#e3b433]
                translate-y-full
                group-hover:translate-y-0
                transition-transform
                duration-500
                ease-out
                z-0
              "
            ></span>

            {/* Text */}
            <span className="relative z-10">
              Contact
            </span>

          </Link>

          {/* Icon Buttons */}
          <div className="hidden sm:flex items-center gap-3">

            <button
              className="
                group
                relative
                w-12
                h-12
                rounded-full
                border
                border-white/15
                bg-black
                text-white
                flex
                items-center
                justify-center
                overflow-hidden
                transition-all
                duration-500
                hover:border-[#e3b433]
                hover:-translate-y-[2px]
              "
            >

              {/* Hover Bg */}
              <span
                className="
                  absolute
                  inset-0
                  scale-0
                  rounded-full
                  bg-[#e3b433]
                  transition-all
                  duration-500
                  group-hover:scale-100
                "
              ></span>

              <MessageCircle
                size={18}
                className="
                  relative
                  z-10
                  transition-all
                  duration-500
                  group-hover:text-black
                  group-hover:rotate-12
                "
              />
            </button>

            <button
              className="
                group
                relative
                w-12
                h-12
                rounded-full
                border
                border-white/15
                bg-black
                text-white
                flex
                items-center
                justify-center
                overflow-hidden
                transition-all
                duration-500
                hover:border-[#e3b433]
                hover:-translate-y-[2px]
              "
            >

              {/* Hover Bg */}
              <span
                className="
                  absolute
                  inset-0
                  scale-0
                  rounded-full
                  bg-[#e3b433]
                  transition-all
                  duration-500
                  group-hover:scale-100
                "
              ></span>

              <Phone
                size={18}
                className="
                  relative
                  z-10
                  transition-all
                  duration-500
                  group-hover:text-black
                  group-hover:rotate-12
                "
              />
            </button>

          </div>

          {/* Mobile Menu */}
          <Mobilebtn />

        </div>
      </div>
    </header>
  );
};

export default Header;