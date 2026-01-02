import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden sm:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search button for mobile */}
            <button className="sm:hidden p-2 text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User Account */}
            <button className="p-2 text-gray-700 hover:text-blue-600 relative">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Shopping Cart */}
            <button className="p-2 text-gray-700 hover:text-blue-600 relative">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5V8m0 0V5a2 2 0 012-2h2a2 2 0 012 2v3" />
              </svg>
              {/* Cart count badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden border-t border-gray-200 bg-white">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Home
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Products
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Categories
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            About
          </a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header