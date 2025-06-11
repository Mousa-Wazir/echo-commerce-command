
import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { Search, Filter, Eye, Check, X, Trash2 } from 'lucide-react';

const AdminProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const products = [
    {
      id: 1,
      name: 'MacBook Pro 16"',
      seller: 'TechStore Inc.',
      category: 'Electronics',
      status: 'pending',
      price: '$2,499',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Wedding Dress',
      seller: 'Fashion Hub',
      category: 'Fashion',
      status: 'approved',
      price: '$899',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Professional Camera',
      seller: 'Photo Rentals',
      category: 'Electronics',
      status: 'rejected',
      price: '$1,299',
      image: '/placeholder.svg'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status as keyof typeof statusClasses]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Products Management</h1>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            Add Product
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-lg object-cover" src={product.image} alt={product.name} />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.seller}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(product.status)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900 p-1 rounded">
                          <Check className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 p-1 rounded">
                          <X className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
