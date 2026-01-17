import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const navigation = [
    {
      name: 'Hakkımızda',
      href: '/hakkimizda',
      current: location.pathname === '/hakkimizda',
      dropdown: [
        { name: 'Nova Eskrim', href: '/' },
        { name: 'Hocalar', href: '/hocalar' }
      ]
    },
    {
      name: 'Programlar',
      href: '/programlar',
      current: location.pathname === '/programlar',
      dropdown: [
        { name: 'Antrenman Takvimi', href: '/antrenman-takvimi' },
        { name: 'Gruplar', href: '/gruplar' }
      ]
    },
    {
      name: 'Kaynaklar',
      href: '/kaynaklar',
      current: location.pathname.includes('/kaynak'),
      dropdown: [
        { name: 'Fencing Time Live', href: '/fencing-time-live' },
        { name: 'Eskrim Bilgileri', href: '/eskrim-bilgileri' },
        { name: 'Kurallar & Videolar', href: '/kurallar-videolar' }
      ]
    },
    {
      name: 'Başarılar',
      href: '/basarilar',
      current: location.pathname.includes('/basar'),
      dropdown: [
        { name: 'Madalyalar', href: '/madalyalar' },
        { name: 'Dereceler', href: '/dereceler' }
      ]
    },
    {
      name: 'İletişim',
      href: '/iletisim',
      current: location.pathname === '/iletisim'
    }
  ]

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const handleMouseEnter = (index) => {
    setActiveDropdown(index)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/nova_icon-removebg-preview.png" 
                alt="Nova Eskrim Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="ml-3 text-xl font-bold text-gray-900">Nova Eskrim</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      className={`nav-link flex items-center space-x-1 ${
                        item.current ? 'nav-link-active' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                                         {activeDropdown === index && (
                       <div 
                         className="absolute top-full left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 pt-2"
                         onMouseEnter={() => setActiveDropdown(index)}
                         onMouseLeave={handleMouseLeave}
                       >
                        {item.dropdown.map((dropdownItem) => (
                                                     <Link
                             key={dropdownItem.name}
                             to={dropdownItem.href}
                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                             onClick={() => {
                               setActiveDropdown(null)
                               setIsOpen(false)
                             }}
                           >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={item.name === 'İletişim' ? 'btn-primary' : `nav-link ${item.current ? 'nav-link-active' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                        item.current ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    {activeDropdown === index && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                            onClick={() => {
                              setActiveDropdown(null)
                              setIsOpen(false)
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      item.name === 'İletişim' 
                        ? 'bg-primary-600 text-white hover:bg-primary-700' 
                        : item.current 
                          ? 'text-primary-600 bg-primary-50' 
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
