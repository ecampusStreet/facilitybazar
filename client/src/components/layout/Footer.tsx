import { Facebook, Twitter, Linkedin, Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">
              <img src="/img/logo.jpg" alt="FB Logo" className="h-20" />
            </div>
            <p className="text-gray-400 mb-6">
              Mauris sit amet quam congue, pulvinar urna et, congue diam. 
              Suspendisse eu lorem massa. Integer sit amet posuere tellus, 
              id efficitur leo. In hac habitasse platea dictumst.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Rss className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Useful Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
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
