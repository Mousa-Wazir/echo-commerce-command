
import React, { useState } from 'react';
import { Menu, User, LogOut, Settings, Bell } from 'lucide-react';

interface TopNavbarProps {
  onMenuClick: () => void;
  onLogout: () => void;
}

export const TopNavbar = ({ onMenuClick, onLogout }: TopNavbarProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Mobile Menu Button & Title */}
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="ml-2 text-xl font-semibold text-gray-900 lg:ml-0">
            Admin Dashboard
          </h1>
        </div>

        {/* Right side - Notifications & Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>

          {/* Admin Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </button>
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </button>
                <hr className="my-2 border-gray-200" />
                <button 
                  onClick={onLogout}
                  className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
