import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";

const footerData = {
  links: [
    { name: "About", path: "#" },
    { name: "Services", path: "#" },
    { name: "Portfolio", path: "#" },
    { name: "Contact", path: "#" },
  ],
  contact: [
    { label: "+88 01712 664168", icon: Phone },
    { label: "info@imagineinteriors.design", icon: Mail },
  ],
  socials: [
    { icon: FaFacebookF, url: "#" },
    { icon: FaLinkedinIn, url: "#" },
    { icon: FaInstagram, url: "#" },
    { icon: FaYoutube, url: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 px-6 border-t-4 border-yellow-500">
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-lg">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {footerData.links.map((link, idx) => (
              <li
                key={idx}
                className="hover:text-yellow-500 cursor-pointer transition-all duration-300 transform hover:translate-x-2"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-6 w-full">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-lg">
            Contact Us
          </h4>
          {footerData.contact.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <item.icon size={20} className="text-gray-200 mt-1 shrink-0" />
              <p className="hover:text-white transition-colors cursor-default">
                {item.label}
              </p>
            </div>
          ))}

          <div className="flex gap-4">
            {footerData.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className="p-3 border border-gray-700 hover:bg-yellow-500 hover:border-yellow-500 text-gray-400 hover:text-black transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Map & Socials Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-lg">
            Location
          </h4>

          {/* Map Section */}
          <div className="w-full h-26  overflow-hidden shadow-2xl border border-gray-800 hover:border-yellow-500 transition-colors">
            <iframe
              // এখানে আপনার Google Maps থেকে পাওয়া সঠিক Embed link টি বসান
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902347900451!2d90.3957297753381!3d23.750849978670866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88b0244793f%3A0x7d2b45155f67b5e8!2sSEL%20Rose%20N%20Dale!5e0!3m2!1sen!2sbd!4v1719230553120!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(80%) contrast(1.2)" }}
              allowFullScreen={true}
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-sm">
            <MapPin size={40} /> SEL Rose-N-Dale, 116, Kazi Nazrul Islam Avenue,
            Dhaka
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
        <p>
          Copyright © {new Date().getFullYear()} Imagine Interiors | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
