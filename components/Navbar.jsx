"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PersonStanding } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* ✅ NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
          {/* 🔥 Brand */}
          <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <span className="text-4xl md:text-5xl">🧘‍♂️</span>
            <h1 className="flex flex-col font-bold leading-tight tracking-tight uppercase text-base md:text-lg">
              <span className="leading-none">Aadhyantha</span>
              <span className="tracking-wide">Academy</span>
            </h1>
          </Link>

          {/* 💻 Desktop Links */}
          <div className="hidden md:flex items-center gap-10 font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group transition cursor-pointer"
              >
                {link.name}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* 📱 Mobile Button */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* ✅ MOBILE DRAWER (Outside Nav) */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-5 text-black hover:text-primary">
          <button onClick={() => setOpen(false)} className="cursor-pointer">
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 mt-10 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-black hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ OVERLAY (Outside Nav) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
