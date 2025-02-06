import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Logo className="h-12 w-auto mb-4" />
            <p className="text-gray-400">
              Nurturing minds, inspiring hearts, and shaping futures at Happy
              Hands Daycare.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Programs", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              123 Sunshine Lane, Happyville, USA
            </p>
            <p className="text-gray-400 mb-2">Phone: (555) 123-4567</p>
            <p className="text-gray-400">Email: info@happyhandsdaycare.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2023 Little Soldiers Family DayCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
