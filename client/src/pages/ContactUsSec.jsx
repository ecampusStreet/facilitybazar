import React, { useState } from "react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-500">Get in Touch</h2>
        <p className="text-sm text-gray-600 mt-2">
          Reach out and talk to us for more information about our products and
          services.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 shadow-lg rounded-lg overflow-hidden">
        {/* Contact Info */}
        <div className="bg-blue-700 text-white p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="flex items-start gap-3 mb-4">
              <FaEnvelope className="mt-1" />
              <p>support@webspruce.com</p>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <FaPhoneAlt className="mt-1" />
              <p>+91 80 3590 5092</p>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                #01, LVR Infra, 17th cross <br />
                Near Orion Mall, Rajajinagar <br />
                Bangalore, Karnataka 560 010
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTimes />
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Send Us A Message.
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name (required)"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email (required)"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;
