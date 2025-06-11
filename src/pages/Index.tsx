
import React, { useState } from 'react';
import { AdminLayout } from '../components/AdminLayout';
import { Dashboard } from '../components/Dashboard';
import { AdminLogin } from '../components/AdminLogin';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h2>
            <p className="text-gray-600">Detailed analytics page coming soon...</p>
          </div>
        );
      case 'products':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Products</h2>
            <p className="text-gray-600">Product management page coming soon...</p>
          </div>
        );
      case 'inventory':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Inventory</h2>
            <p className="text-gray-600">Inventory management page coming soon...</p>
          </div>
        );
      case 'orders':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders</h2>
            <p className="text-gray-600">Order management page coming soon...</p>
          </div>
        );
      case 'sales':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sales</h2>
            <p className="text-gray-600">Sales management page coming soon...</p>
          </div>
        );
      case 'offers':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Offers</h2>
            <p className="text-gray-600">Offers management page coming soon...</p>
          </div>
        );
      case 'customers':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customers</h2>
            <p className="text-gray-600">Customer management page coming soon...</p>
          </div>
        );
      case 'newsletter':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Newsletter</h2>
            <p className="text-gray-600">Newsletter management page coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">Settings page coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPageContent()}
    </AdminLayout>
  );
};

export default Index;
