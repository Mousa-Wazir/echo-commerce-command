
import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { Search, Filter, Eye, Check, X, Trash2, Plus, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/button';

const AdminProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 1,
      name: 'MacBook Pro 16" M2',
      seller: 'TechRentals Pro',
      category: 'Electronics',
      status: 'pending',
      price: '$89/day',
      description: 'Latest MacBook Pro with M2 chip, perfect for creative professionals and developers.',
      duration: '1-30 days',
      stock: 5,
      images: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400',
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400'
      ],
      reviews: 4.8,
      reportCount: 0
    },
    {
      id: 2,
      name: 'Canon EOS R5 Camera',
      seller: 'PhotoGear Rentals',
      category: 'Photography',
      status: 'approved',
      price: '$125/day',
      description: 'Professional mirrorless camera with 45MP full-frame sensor and 8K video recording.',
      duration: '1-14 days',
      stock: 3,
      images: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400'
      ],
      reviews: 4.9,
      reportCount: 0
    },
    {
      id: 3,
      name: 'Elegant Wedding Dress',
      seller: 'Bridal Dreams',
      category: 'Fashion',
      status: 'approved',
      price: '$299/day',
      description: 'Stunning A-line wedding dress with intricate lace details and cathedral train.',
      duration: '1-3 days',
      stock: 1,
      images: [
        'https://images.unsplash.com/photo-1594736797933-d0d02da2ad7c?w=400'
      ],
      reviews: 5.0,
      reportCount: 0
    },
    {
      id: 4,
      name: 'Gaming Setup Complete',
      seller: 'GameZone Rentals',
      category: 'Gaming',
      status: 'rejected',
      price: '$75/day',
      description: 'Complete gaming setup with RTX 4080, mechanical keyboard, gaming mouse and monitor.',
      duration: '1-7 days',
      stock: 2,
      images: [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400'
      ],
      reviews: 4.6,
      reportCount: 2
    }
  ];

  const categories = ['all', 'Electronics', 'Photography', 'Fashion', 'Gaming', 'Home & Garden', 'Sports'];

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

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  if (selectedProduct) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setSelectedProduct(null)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Product Images</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProduct.images.map((image: string, index: number) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${selectedProduct.name} ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Product Information</h3>
                <div className="space-y-3">
                  <div><strong>Price:</strong> {selectedProduct.price}</div>
                  <div><strong>Category:</strong> {selectedProduct.category}</div>
                  <div><strong>Duration:</strong> {selectedProduct.duration}</div>
                  <div><strong>Stock:</strong> {selectedProduct.stock} available</div>
                  <div><strong>Status:</strong> {getStatusBadge(selectedProduct.status)}</div>
                  <div><strong>Reviews:</strong> ⭐ {selectedProduct.reviews}/5.0</div>
                  <div><strong>Reports:</strong> {selectedProduct.reportCount}</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Description</h3>
                <p className="text-gray-600">{selectedProduct.description}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Seller Information</h3>
                <div className="space-y-2">
                  <div><strong>Store:</strong> {selectedProduct.seller}</div>
                  <div><strong>Rating:</strong> ⭐ 4.7/5.0</div>
                  <div><strong>Total Products:</strong> 24</div>
                  <div><strong>Join Date:</strong> Jan 2023</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <Check className="w-4 h-4 mr-2" />
                  Approve
                </Button>
                <Button variant="outline" className="flex-1 text-red-600 border-red-600 hover:bg-red-50">
                  <X className="w-4 h-4 mr-2" />
                  Reject
                </Button>
                <Button variant="outline" className="text-gray-600 hover:bg-gray-50">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Products Management</h1>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products or sellers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div className="flex gap-2">
              <select 
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
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
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-lg object-cover" src={product.images[0]} alt={product.name} />
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
                        <button 
                          onClick={() => setSelectedProduct(product)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        >
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
