
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated admin
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth) {
      navigate('/admin/dashboard');
    } else {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Admin Panel</h1>
        <p className="text-gray-600">Redirecting to admin dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
