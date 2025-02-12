"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) { // scrolling down
        setVisible(false);
      } else { // scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "About", className: "nav-item nav-item-red" },
    { name: "Programs", className: "nav-item nav-item-green" },
    { name: "Gallery", className: "nav-item nav-item-yellow" },
    { name: "Contact", className: "nav-item nav-item-blue" },
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
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo className="size-32 md:size-40" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`${item.name.toLowerCase()}`}
                  className={`text-gray-600 text-xl ${item.className}`}
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
