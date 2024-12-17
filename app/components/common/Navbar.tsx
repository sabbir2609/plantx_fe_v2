"use client";

import { Facebook, Home, Info, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <nav className="bg-base-300 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">
          <Link href="/" className="text-2xl font-bold tracking-wide">
            Viriditas
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={closeDrawer}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
        style={{ width: "270px" }}
      >
        <div className="bg-base-200 flex flex-col h-full">
          <div className="p-3 border-b border-base-200 bg-base-300 text-2xl font-bold tracking-wide">
            Viriditas
          </div>
          <div className="flex-1 overflow-y-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-4 flex items-center"
                onClick={closeDrawer}
              >
                <link.icon className="mr-2" />
                {link.label}
              </Link>
            ))}
          </div>
          <div className="p-3 border-t border-base-200 bg-base-300 flex justify-around">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Twitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
