import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  ShoppingBag, 
  User, 
  X, 
  Heart,
  Bell,
  ChevronDown,
  ChevronRight,
  Home,
  Gift,
  Calendar,
  Tag
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [cartCount] = useState(2);

  const menuItems = [
    {
      title: 'Home',
      href: '#',
      icon: <Home className="w-5 h-5 text-gray-300" />
    },
    {
      title: 'New Arrivals',
      href: '#',
      icon: <Gift className="w-5 h-5 text-gray-300" />,
      badge: 'New'
    },
    {
      title: 'Dogs',
      href: '#',
      icon: <Tag className="w-5 h-5 text-gray-300" />,
      submenu: [
        { name: 'Sweaters', count: '12' },
        { name: 'Coats', count: '8' },
        { name: 'Accessories', count: '15' },
        { name: 'Party Wear', badge: 'Sale' }
      ]
    },
    {
      title: 'Cats',
      href: '#',
      icon: <Tag className="w-5 h-5 text-gray-300" />,
      submenu: [
        { name: 'Outfits', count: '10' },
        { name: 'Collars', count: '6' },
        { name: 'Accessories', count: '20' },
        { name: 'Special Edition', badge: 'New' }
      ]
    },
    {
      title: 'Events',
      href: '#',
      icon: <Calendar className="w-5 h-5 text-gray-300" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const DesktopMenuItem = ({ item }) => (
    <div className="relative group">
      <a 
        href={item.href}
        className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.title}
        {item.submenu && (
          <ChevronDown className="w-4 h-4 ml-1 text-gray-300" />
        )}
        {item.badge && (
          <span className="ml-2 px-2 py-0.5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full">
            {item.badge}
          </span>
        )}
      </a>
      {item.submenu && (
        <div className="absolute hidden group-hover:block w-48 bg-gray-900/95 backdrop-blur-sm shadow-xl rounded-lg mt-2 py-2 left-0 border border-white/10">
          {item.submenu.map((subItem, idx) => (
            <a
              key={idx}
              href="#"
              className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>{subItem.name}</span>
              {subItem.badge && (
                <span className="ml-2 px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">
                  {subItem.badge}
                </span>
              )}
              {subItem.count && (
                <span className="float-right text-gray-500 text-xs">
                  {subItem.count}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 shadow-lg shadow-indigo-500/10' 
          : 'bg-gray-900/80 backdrop-blur-md'
      }`}>
        {/* Banner promocional */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center text-xs md:text-sm py-2 px-4">
          <p className="animate-marquee whitespace-nowrap">
            🎉 Free shipping on orders over $50! Use code: PETSTYLE
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo y botón de menú */}
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
              <a href="/" className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                PetFashion
              </a>
            </div>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <DesktopMenuItem key={index} item={item} />
              ))}
            </div>

            {/* Iconos Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => setShowSearch(!showSearch)} 
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Search className="w-5 h-5 text-gray-300 hover:text-white" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg relative transition-colors">
                <Heart className="w-5 h-5 text-gray-300 hover:text-white" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  3
                </span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg relative transition-colors">
                <ShoppingBag className="w-5 h-5 text-gray-300 hover:text-white" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-300 hover:text-white" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <User className="w-5 h-5" />
                <span>Sign In</span>
              </button>
            </div>

            {/* Iconos Móviles */}
            <div className="flex items-center gap-3 lg:hidden">
              <button 
                onClick={() => setShowSearch(!showSearch)} 
                className="p-2 hover:bg-white/10 rounded-lg"
              >
                <Search className="w-5 h-5 text-gray-300" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg relative">
                <ShoppingBag className="w-5 h-5 text-gray-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className={`overflow-hidden transition-all duration-300 ${
            showSearch ? 'max-h-16' : 'max-h-0'
          }`}>
            <div className="py-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 pl-10 bg-white/10 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay del menú móvil */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Panel del menú móvil */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-gray-900 z-50 transform transition-transform duration-300 lg:hidden ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Cabecera */}
          <div className="p-4 border-b border-white/10 relative">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg absolute right-4 top-4"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              PetFashion
            </a>
          </div>

          {/* Lista de menú */}
          <div className="flex-1 overflow-y-auto">
            <div className="py-2">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-white/10 last:border-0">
                  <button
                    onClick={() => item.submenu && setActiveSubmenu(activeSubmenu === index ? null : index)}
                    className="flex items-center justify-between w-full p-4 text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.title}</span>
                      {item.badge && (
                        <span className="ml-2 px-2 py-0.5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.submenu && (
                      <ChevronRight className={`w-5 h-5 text-gray-300 transition-transform ${
                        activeSubmenu === index ? 'rotate-90' : ''
                      }`} />
                    )}
                  </button>
                  {item.submenu && (
                    <div className={`overflow-hidden transition-all duration-300 bg-gray-800/50 ${
                      activeSubmenu === index ? 'max-h-64' : 'max-h-0'
                    }`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="flex items-center justify-between py-3 px-12 text-gray-400 hover:text-white hover:bg-white/10"
                        >
                          <span>{subItem.name}</span>
                          {subItem.badge && (
                            <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">
                              {subItem.badge}
                            </span>
                          )}
                          {subItem.count && (
                            <span className="text-gray-500 text-xs">
                              {subItem.count}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;