import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'Youtube' }
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: 'support@petfashion.com' },
    { icon: <MapPin className="w-5 h-5" />, text: '123 Pet Street, Fashion City' },
    { icon: <Phone className="w-5 h-5" />, text: '+1 234 567 8900' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="absolute bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">Join Our Newsletter</h3>
              <p className="text-gray-400 md:text-lg">Get exclusive offers and pet fashion tips</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex max-w-md mx-auto md:mx-0">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-l-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[240px]"
                />
                <button className="px-8 py-4 rounded-r-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 font-semibold hover:scale-105">
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Brand Section - Full width en móvil */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400" />
            <h3 className="text-3xl font-bold text-gradient">PetFashion</h3>
          </div>
          <p className="text-gray-400 text-lg mb-8">Making your pets look their best with trendy and comfortable fashion.</p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 rounded-lg bg-white/5 hover:bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 hover:scale-110 group"
                aria-label={social.label}
              >
                {React.cloneElement(social.icon, {
                  className: "w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                })}
              </a>
            ))}
          </div>
        </div>

        {/* Grid de dos columnas en móvil */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact', 'Size Guide', 'FAQs'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Categories</h4>
            <ul className="space-y-4">
              {['Dog Fashion', 'Cat Fashion', 'Accessories', 'New Arrivals'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Dividido en dos columnas en móvil */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start gap-3">
                  <span className="p-2 bg-white/5 rounded-lg group-hover:bg-gradient-to-r from-indigo-600/20 to-purple-600/20 transition-colors">
                    {React.cloneElement(info.icon, {
                      className: "text-gray-400 group-hover:text-white transition-colors"
                    })}
                  </span>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {year} PetFashion. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;