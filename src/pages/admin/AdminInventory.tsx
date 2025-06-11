import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { Search, Filter, Download, AlertTriangle, Package } from 'lucide-react';
import { Button } from '../../components/ui/button';
const AdminInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStock, setFilterStock] = useState('all');
  const inventory = [{
    id: 1,
    name: 'MacBook Pro 16" M2',
    seller: 'TechRentals Pro',
    category: 'Electronics',
    stock: 5,
    status: 'In Stock',
    price: '$89/day',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400'
  }, {
    id: 2,
    name: 'Canon EOS R5 Camera',
    seller: 'PhotoGear Rentals',
    category: 'Photography',
    stock: 1,
    status: 'Low Stock',
    price: '$125/day',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400'
  }, {
    id: 3,
    name: 'Gaming Setup Complete',
    seller: 'GameZone Rentals',
    category: 'Gaming',
    stock: 0,
    status: 'Out of Stock',
    price: '$75/day',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400'
  }, {
    id: 4,
    name: 'Professional Drone',
    seller: 'SkyView Rentals',
    category: 'Electronics',
    stock: 3,
    status: 'In Stock',
    price: '$95/day',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400'
  }];
  const categories = ['all', 'Electronics', 'Photography', 'Gaming', 'Fashion', 'Sports'];
  const stockLevels = ['all', 'In Stock', 'Low Stock', 'Out of Stock'];
  const getStockBadge = (status: string, stock: number) => {
    if (stock === 0) {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center gap-1">
        <AlertTriangle className="w-3 h-3" />
        Out of Stock
      </span>;
    } else if (stock <= 2) {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center gap-1">
        <AlertTriangle className="w-3 h-3" />
        Low Stock
      </span>;
    } else {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center gap-1">
        <Package className="w-3 h-3" />
        In Stock
      </span>;
    }
  };
  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesStock = filterStock === 'all' || item.status === filterStock;
    return matchesSearch && matchesCategory && matchesStock;
  });
  const exportInventory = () => {
    console.log('Exporting inventory data...');
    // Implementation for CSV/Excel export
  };
  return <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900\n">Inventory Management</h1>
          <Button onClick={exportInventory} className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Items</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Stock</p>
                <p className="text-2xl font-bold text-green-600">18</p>
              </div>
              <Package className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Low Stock</p>
                <p className="text-2xl font-bold text-yellow-600">4</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                <p className="text-2xl font-bold text-red-600">2</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Search inventory..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <div className="flex gap-2">
              <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                {categories.map(category => <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>)}
              </select>
              <select value={filterStock} onChange={e => setFilterStock(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                {stockLevels.map(level => <option key={level} value={level}>
                    {level === 'all' ? 'All Stock Levels' : level}
                  </option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInventory.map(item => <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-lg object-cover" src={item.image} alt={item.name} />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.seller}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{getStockBadge(item.status, item.stock)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.price}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>;
};
export default AdminInventory;