"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";

const Mobilebtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet onOpenChange={setIsOpen}>
      {/* Trigger Button with Animation */}
      <SheetTrigger asChild>
        <button
          className="
            lg:hidden
            relative
            w-8
            h-8
            flex
            flex-col
            items-center
            justify-center
            cursor-pointer
            z-[9999]
            group
          "
        >
          {/* Line 1 - Top */}
          <span
            className={`
              absolute
              w-6
              h-[2px]
              bg-[#e3b433]
              rounded-full
              transition-all
              duration-300
              ease-out
              ${isOpen 
                ? 'rotate-45 translate-y-0 bg-[#e3b433]' 
                : '-translate-y-2 group-hover:bg-[#e3b433]'
              }
            `}
          ></span>

          {/* Line 2 - Middle (fades out when open) */}
          <span
            className={`
              absolute
              w-6
              h-[2px]
              bg-white
              rounded-full
              transition-all
              duration-300
              ease-out
              ${isOpen 
                ? 'opacity-0 scale-50' 
                : 'opacity-100 group-hover:bg-[#e3b433]'
              }
            `}
          ></span>

          {/* Line 3 - Bottom */}
          <span
            className={`
              absolute
              w-6
              h-[2px]
              bg-[#e3b433]
              rounded-full
              transition-all
              duration-300
              ease-out
              ${isOpen 
                ? '-rotate-45 translate-y-0 bg-[#e3b433]' 
                : 'translate-y-2 group-hover:bg-[#e3b433]'
              }
            `}
          ></span>
        </button>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent
        side="right"
        className="
          z-[1100]
          w-[320px]
          border-l
          border-white/10
          bg-[rgba(10,10,10,0.96)]
          backdrop-blur-2xl
          text-white
          p-0
        "
      >
        {/* Close Button - Circle Border with Yellow BG and Hover */}
        <SheetClose className="
          absolute 
          right-4 
          top-4 
          z-[100]
          w-10 
          h-10
          rounded-full
          border-2
          border-[#e3b433]
          bg-[#e3b433]
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:bg-transparent
          hover:scale-110
          hover:rotate-90
          group
        ">
          <svg
            className="
              h-5 
              w-5 
              text-black
              transition-all
              duration-300
              group-hover:text-[#e3b433]
              group-hover:rotate-0
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="sr-only">Close</span>
        </SheetClose>

        {/* Top Glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#e3b433]/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 flex flex-col h-full">

          {/* Header */}
          <SheetHeader className="border-b border-white/10 px-8 py-7 text-left">
            <SheetTitle className="text-[28px] font-black tracking-wide text-white">
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
                  hover:scale-105
                "
              />
            </SheetTitle>
            <SheetDescription className="text-[#e3b433] text-sm mt-2">
              Creative Digital Agency
            </SheetDescription>
          </SheetHeader>

          {/* Navigation */}
          <div className="flex flex-col px-8 py-10 gap-6">
            <Link
              href="/about"
              className="
                relative
                text-[18px]
                font-semibold
                text-white
                hover:text-[#e3b433]
                transition-colors
                duration-300
                w-fit
                group
              "
            >
              About
              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-[#e3b433]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              ></span>
            </Link>

            <Link
              href="/portfolio"
              className="
                relative
                text-[18px]
                font-semibold
                text-white
                hover:text-[#e3b433]
                transition-colors
                duration-300
                w-fit
                group
              "
            >
              Portfolio
              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-[#e3b433]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              ></span>
            </Link>

            <Link
              href="/service"
              className="
                relative
                text-[18px]
                font-semibold
                text-white
                hover:text-[#e3b433]
                transition-colors
                duration-300
                w-fit
                group
              "
            >
              Services
              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-[#e3b433]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              ></span>
            </Link>

            <Link
              href="/casestudies"
              className="
                relative
                text-[18px]
                font-semibold
                text-white
                hover:text-[#e3b433]
                transition-colors
                duration-300
                w-fit
                group
              "
            >
              Case Studies
              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-[#e3b433]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              ></span>
            </Link>

            <Link
              href="/blog"
              className="
                relative
                text-[18px]
                font-semibold
                text-white
                hover:text-[#e3b433]
                transition-colors
                duration-300
                w-fit
                group
              "
            >
              Blog
              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-[#e3b433]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              ></span>
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto px-8 pb-10">
            <Link
              href="/contact"
              className="
                relative
                overflow-hidden
                flex
                items-center
                justify-center
                w-full
                rounded-full
                border
                border-black
                bg-[#e3b433]
                px-6
                py-4
                text-[15px]
                font-bold
                text-white
                transition-all
                duration-500
                hover:text-black
                hover:border-[#e3b433]
                group
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-[#e3b433]
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform
                  duration-500
                "
              ></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Mobilebtn