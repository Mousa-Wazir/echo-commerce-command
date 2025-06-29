
import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { Download, TrendingUp, DollarSign, Users, Calendar } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const AdminSales = () => {
  const [selectedMonth, setSelectedMonth] = useState('2024-01');

  const salesData = [
    { month: 'Jan', revenue: 45000, commission: 4500 },
    { month: 'Feb', revenue: 52000, commission: 5200 },
    { month: 'Mar', revenue: 48000, commission: 4800 },
    { month: 'Apr', revenue: 61000, commission: 6100 },
    { month: 'May', revenue: 55000, commission: 5500 },
    { month: 'Jun', revenue: 67000, commission: 6700 }
  ];

  const sellerData = [
    {
      id: 1,
      seller: 'Modern Living Co.',
      revenue: '$24,500',
      commission: '$2,450',
      payoutDue: '$22,050',
      orders: 156,
      rating: 4.8
    },
    {
      id: 2,
      seller: 'Beauty Essentials',
      revenue: '$18,200',
      commission: '$1,820',
      payoutDue: '$16,380',
      orders: 89,
      rating: 4.9
    },
    {
      id: 3,
      seller: 'Artisan Crafts Hub',
      revenue: '$15,800',
      commission: '$1,580',
      payoutDue: '$14,220',
      orders: 134,
      rating: 4.6
    },
    {
      id: 4,
      seller: 'Fashion Corner',
      revenue: '$12,300',
      commission: '$1,230',
      payoutDue: '$11,070',
      orders: 67,
      rating: 4.7
    },
    {
      id: 5,
      seller: 'Home Treasures',
      revenue: '$9,800',
      commission: '$980',
      payoutDue: '$8,820',
      orders: 45,
      rating: 4.8
    }
  ];

  const exportReport = () => {
    console.log('Exporting sales report...');
    // Implementation for export functionality
  };

  return (
    <AdminLayout>
      <div className="space-y-4 md:space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Sales Management</h1>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <select 
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm md:text-base"
            >
              <option value="2024-01">January 2024</option>
              <option value="2024-02">February 2024</option>
              <option value="2024-03">March 2024</option>
              <option value="2024-04">April 2024</option>
              <option value="2024-05">May 2024</option>
              <option value="2024-06">June 2024</option>
            </select>
            <Button onClick={exportReport} className="flex items-center gap-2 text-sm md:text-base px-3 md:px-4 py-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export Report</span>
              <span className="sm:hidden">Export</span>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">$328,000</p>
                <p className="text-xs sm:text-sm text-green-600">+12% from last month</p>
              </div>
              <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Platform Commission</p>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">$32,800</p>
                <p className="text-xs sm:text-sm text-blue-600">10% commission rate</p>
              </div>
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Active Sellers</p>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">87</p>
                <p className="text-xs sm:text-sm text-purple-600">+5 new this month</p>
              </div>
              <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600">Avg Order Value</p>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">$145</p>
                <p className="text-xs sm:text-sm text-orange-600">+8% from last month</p>
              </div>
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Platform Earnings</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="commission" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Monthly Commission</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="commission" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Seller Breakdown Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 md:px-6 py-4 border-b border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold">Seller Performance</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payout Due</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sellerData.map((seller) => (
                  <tr key={seller.id} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-xs sm:text-sm font-medium text-gray-900">{seller.seller}</div>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{seller.revenue}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{seller.commission}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-green-600">{seller.payoutDue}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{seller.orders}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      ⭐ {seller.rating}/5.0
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Button size="sm" variant="outline" className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
                        <span className="hidden sm:inline">Process Payout</span>
                        <span className="sm:hidden">Payout</span>
                      </Button>
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

export default AdminSales;
