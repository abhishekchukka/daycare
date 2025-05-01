import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto ">
        <div className="flex-col md:flex-row flex justify-between items-center">
          <div className="w-full  mb-6 md:mb-0">
            <Logo className="h-12 w-auto mb-4 bg-white rounded-full " />
            <p className="text-gray-400">
              Nurturing minds, inspiring hearts, and shaping futures at Happy
              Hands Daycare.
            </p>
          </div>
          <div className="w-full  mb-6  ">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 ">
              {["About", "Programs", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-4 mt-2">Social Links</h3>
            <ul className="space-y-1 flex items-center justify-start gap-x-5">
              <li>
                <Link
                  href={`/#`}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <Image
                    src={`facebookpng.png`}
                    alt={"Facebook"}
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`/#`}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <Image
                    src={`twitter.png`}
                    alt={"Twitter"}
                    width={33}
                    height={33}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full ">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              4912 Broadway Ave, Blackfalds, AB T0M 0J0
              <a href="https://g.co/kgs/5rZxwYy" className="flex items-center">
                <FaLocationDot className="text-green-200 size-4" />
                Open Maps
              </a>
            </p>
            <p className="text-gray-400 mb-2">Phone: +1 (306) 202-7431</p>
            <p className="text-gray-400">
              Email: littlesoldiersfamilydaycare@gmail.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Little Soldiers Family DayCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
