import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PieChart, Package, Grid2x2, File, Activity, Book, User, Bell, Settings, AlertTriangle, Ban, X } from 'lucide-react';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const menuItems = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: LayoutDashboard,
  path: '/admin/dashboard'
}, {
  id: 'analytics',
  label: 'Analytics',
  icon: PieChart,
  path: '/admin/analytics'
}, {
  id: 'products',
  label: 'Products',
  icon: Package,
  path: '/admin/products'
}, {
  id: 'inventory',
  label: 'Inventory',
  icon: Grid2x2,
  path: '/admin/inventory'
}, {
  id: 'orders',
  label: 'Orders',
  icon: File,
  path: '/admin/orders'
}, {
  id: 'sales',
  label: 'Sales',
  icon: Activity,
  path: '/admin/sales'
}, {
  id: 'offers',
  label: 'Offers',
  icon: Book,
  path: '/admin/offers'
}, {
  id: 'customers',
  label: 'Customers',
  icon: User,
  path: '/admin/customers'
}, {
  id: 'newsletter',
  label: 'Newsletter',
  icon: Bell,
  path: '/admin/newsletter'
}, {
  id: 'violations',
  label: 'Violations',
  icon: AlertTriangle,
  path: '/admin/violations'
}, {
  id: 'suspended-stores',
  label: 'Suspended Stores',
  icon: Ban,
  path: '/admin/suspended-stores'
}, {
  id: 'settings',
  label: 'Settings',
  icon: Settings,
  path: '/admin/settings'
}];
export const Sidebar = ({
  isOpen,
  onClose
}: SidebarProps) => {
  const location = useLocation();
  const handleItemClick = () => {
    onClose(); // Close sidebar on mobile after selection
  };
  return <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:bg-white lg:border-r lg:border-gray-200">
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <nav className="flex-1 px-2 py-3 md:px-4 md:py-6 space-y-2 overflow-y-auto h-full max-h-screen\n">
            {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return <Link key={item.id} to={item.path} className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>;
          })}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return <Link key={item.id} to={item.path} onClick={handleItemClick} className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>;
          })}
          </nav>
        </div>
      </div>
    </>;
};