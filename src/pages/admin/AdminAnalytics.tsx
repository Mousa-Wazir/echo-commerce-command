
import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { TrendingUp, DollarSign, Users, Package } from 'lucide-react';

const AdminAnalytics = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$45,231.89</p>
                <p className="text-xs text-green-600">+20.1% from last month</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Orders</p>
                <p className="text-2xl font-bold text-gray-900">+2350</p>
                <p className="text-xs text-green-600">+180.1% from last month</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">+12,234</p>
                <p className="text-xs text-green-600">+19% from last month</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Growth Rate</p>
                <p className="text-2xl font-bold text-gray-900">+573</p>
                <p className="text-xs text-green-600">+201 since last hour</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Breakdown</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Revenue Chart Placeholder]
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Seller Performance</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Performance Chart Placeholder]
            </div>
          </div>
        </div>

        {/* Detailed Tables */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Categories</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Electronics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$12,345</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">234</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+23%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fashion</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$8,901</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">156</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+18%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Home & Garden</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$6,789</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">98</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+15%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
