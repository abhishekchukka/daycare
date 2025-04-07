"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "About",
      className: "nav-item nav-item-red text-xl hover:shadow-md",
    },
    {
      name: "Programs",
      className: "nav-item nav-item-green text-xl hover:shadow-md",
    },
    {
      name: "Gallery",
      className: "nav-item nav-item-yellow text-xl hover:shadow-md",
    },
    {
      name: "Contact",
      className: "nav-item nav-item-blue text-xl hover:shadow-md",
    },
  ];

  const coloredTitle = "Little Soldiers Family DayCare"
    .split("")
    .map((letter, index) => {
      const colors = [
        "var(--color-red)",
        "var(--color-orange)",
        "var(--color-yellow)",
        "var(--color-green)",
        "var(--color-blue)",
        "var(--color-purple)",
        "var(--color-pink)",
      ];

      const color = colors[index % colors.length];
      return letter === " " ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <span
          key={index}
          className="hover:animate-bounce inline-block"
          style={{ color }}
        >
          {letter}
        </span>
      );
    });

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4  flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo className="size-20" />
          <span
            className={`${righteous.className} text-center text-2xl md:text-3xl hidden md:block   font-bold tracking-wider  flex-wrap`}
          >
            {coloredTitle}
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`${item.name.toLowerCase()}`}
                  className={`text-gray-600 ${item.className}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-[var(--color-blue)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <Link
                  href={item.name.toLowerCase()}
                  className={`text-gray-600 block mx-4 text-center ${item.className}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
