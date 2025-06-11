
import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { AlertTriangle, Eye, Ban, Trash2, MessageSquare, Image, Package } from 'lucide-react';

const AdminViolations = () => {
  const [activeTab, setActiveTab] = useState('all');

  const violations = [
    {
      id: 1,
      type: 'review',
      reporter: 'John Doe',
      reported: 'Jane Smith',
      content: 'Inappropriate language in product review',
      status: 'pending',
      date: '2024-01-15',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'product',
      reporter: 'Mike Johnson',
      reported: 'TechStore Inc.',
      content: 'Misleading product images',
      status: 'resolved',
      date: '2024-01-14',
      severity: 'high'
    },
    {
      id: 3,
      type: 'chat',
      reporter: 'Sarah Wilson',
      reported: 'Bob Builder',
      content: 'Harassment in chat messages',
      status: 'investigating',
      date: '2024-01-13',
      severity: 'high'
    }
  ];

  const getTypeIcon = (type: string) => {
    const icons = {
      review: MessageSquare,
      product: Package,
      chat: MessageSquare,
      image: Image
    };
    const Icon = icons[type as keyof typeof icons] || AlertTriangle;
    return <Icon className="w-5 h-5" />;
  };

  const getSeverityBadge = (severity: string) => {
    const severityClasses = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${severityClasses[severity as keyof typeof severityClasses]}`}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      pending: 'bg-yellow-100 text-yellow-800',
      investigating: 'bg-blue-100 text-blue-800',
      resolved: 'bg-green-100 text-green-800',
      dismissed: 'bg-gray-100 text-gray-800'
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
          <h1 className="text-3xl font-bold text-gray-900">Violations & Reports</h1>
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
              <option>All Types</option>
              <option>Reviews</option>
              <option>Products</option>
              <option>Chats</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Reports</p>
                <p className="text-2xl font-bold text-yellow-600">12</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Under Investigation</p>
                <p className="text-2xl font-bold text-blue-600">5</p>
              </div>
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved Today</p>
                <p className="text-2xl font-bold text-green-600">8</p>
              </div>
              <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">✓</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Users Suspended</p>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
              <Ban className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Violations Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex space-x-1">
              {['all', 'pending', 'investigating', 'resolved'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporter</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {violations.map((violation) => (
                  <tr key={violation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-gray-900">
                        {getTypeIcon(violation.type)}
                        <span className="ml-2 capitalize">{violation.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{violation.reporter}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{violation.reported}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{violation.content}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{getSeverityBadge(violation.severity)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(violation.status)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{violation.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 p-1 rounded">
                          <Ban className="w-4 h-4" />
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

export default AdminViolations;
