import { Facebook, Twitter, Linkedin, Rss, Instagram } from "lucide-react";
import logo from "../../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-20 mt-20">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">
              <img src={logo} alt="FB Logo" className="h-20" />
            </div>
            <p className="text-gray-400 mb-6">
              Facility Bazar was founded with a vision to transform corporate
              facility management through innovative solutions and exceptional
              service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/105632742/admin/dashboard/"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <Rss className="h-6 w-6" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Useful Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services/housekeeping"
                  className="text-gray-400 hover:text-white"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
