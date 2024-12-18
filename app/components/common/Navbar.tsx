"use client";

import { ChevronDownIcon, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LinkItem {
  id: number;
  name: string;
  link: string;
  sublinks?: { name: string; link: string }[];
}

// Navigation links
const links: LinkItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
    sublinks: [
      { name: "Our Story", link: "/about/story" },
      { name: "Team", link: "/about/team" },
    ],
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
    sublinks: [
      { name: "Service 1", link: "/services/service-1" },
      { name: "Service 2", link: "/services/service-2" },
    ],
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const closeDrawer = () => setOpen(false);

  function toggleMenu(index: number): void {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <nav className="px-4 py-4 top-0 left-0 w-full z-30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Viriditas
        </Link>

        <div className="hidden md:flex space-x-10">
          {links.map((link) => (
            <div key={link.id} className="relative group">
              <Link href={link.link} className="flex items-center space-x-4">
                <span className="font-medium link-underline link-underline-black">
                  {link.name}
                </span>
              </Link>

              {link.sublinks && (
                <div className="absolute top-full left-0 px-6 bg-base-300 hidden group-hover:block rounded-sm">
                  {link.sublinks.map((sublink, index) => (
                    <Link
                      key={index}
                      href={sublink.link}
                      className="block p-2 hover:text-primary text-nowrap sublink-hover"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`md:hidden z-50 ${open ? "z-40 text-white" : ""}`}>
          <button
            className={`focus:outline-none menu-button ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={closeDrawer}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full transition-transform duration-500 ease-in-out transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
        style={{ width: "270px" }}
      >
        <div className="bg-base-200 flex flex-col h-full">
          <div className="p-3 border-b border-base-200 bg-base-300 text-2xl font-bold tracking-wide text-center">
            Viriditas
          </div>

          {/* colapsibe manu  */}
          <div className="p-6 h-full overflow-y-auto">
            {links.map((link, index) => (
              <div key={link.id} className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleMenu(index)}
                >
                  <span className="font-semibold">{link.name}</span>
                  {link.sublinks && (
                    <span
                      className={`transition-transform duration-500 ease-in-out ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDownIcon className="w-5 h-5" />
                    </span>
                  )}
                </div>
                {link.sublinks && (
                  <div
                    className={`ml-4 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.sublinks.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.link}
                        className="block p-2 font-medium hover:text-primary text-nowrap"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
