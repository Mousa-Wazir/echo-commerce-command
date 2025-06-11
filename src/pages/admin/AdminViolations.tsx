import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { Search, Filter, AlertTriangle, MessageCircle, Image, Ban, Trash2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
const AdminViolations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const violations = [{
    id: 1,
    type: 'review',
    reporter: 'John Smith',
    reported: 'Mike Wilson',
    content: 'This product is terrible and the seller is a scammer!',
    productName: 'MacBook Pro 16"',
    date: '2024-01-15',
    status: 'pending',
    severity: 'medium',
    description: 'Inappropriate language in product review'
  }, {
    id: 2,
    type: 'chat',
    reporter: 'Sarah Johnson',
    reported: 'Alex Brown',
    content: 'Offensive messages sent during rental discussion',
    productName: 'Canon Camera',
    date: '2024-01-14',
    status: 'resolved',
    severity: 'high',
    description: 'Harassment in chat messages'
  }, {
    id: 3,
    type: 'product',
    reporter: 'Lisa Davis',
    reported: 'GameZone Rentals',
    content: 'Product images show different item than described',
    productName: 'Gaming Setup',
    date: '2024-01-13',
    status: 'pending',
    severity: 'medium',
    description: 'Misleading product images'
  }, {
    id: 4,
    type: 'review',
    reporter: 'Tom Wilson',
    reported: 'Emma White',
    content: 'Fake positive review with suspicious content',
    productName: 'Wedding Dress',
    date: '2024-01-12',
    status: 'investigating',
    severity: 'low',
    description: 'Suspected fake review'
  }];
  const getStatusBadge = (status: string) => {
    const statusClasses = {
      pending: 'bg-yellow-100 text-yellow-800',
      investigating: 'bg-blue-100 text-blue-800',
      resolved: 'bg-green-100 text-green-800',
      dismissed: 'bg-gray-100 text-gray-800'
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status as keyof typeof statusClasses]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>;
  };
  const getSeverityBadge = (severity: string) => {
    const severityClasses = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${severityClasses[severity as keyof typeof severityClasses]}`}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </span>;
  };
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'review':
        return <MessageCircle className="w-4 h-4" />;
      case 'chat':
        return <MessageCircle className="w-4 h-4" />;
      case 'product':
        return <Image className="w-4 h-4" />;
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };
  const filteredViolations = violations.filter(violation => {
    const matchesSearch = violation.reporter.toLowerCase().includes(searchTerm.toLowerCase()) || violation.reported.toLowerCase().includes(searchTerm.toLowerCase()) || violation.productName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || violation.type === filterType;
    const matchesStatus = filterStatus === 'all' || violation.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });
  const handleAction = (violationId: number, action: string) => {
    console.log(`Action ${action} for violation ${violationId}`);
  };
  return <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900\n">Violations & Reports</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Reports</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">23</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Investigating</p>
                <p className="text-2xl font-bold text-blue-600">12</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved</p>
                <p className="text-2xl font-bold text-green-600">54</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Search reports..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <div className="flex gap-2">
              <select value={filterType} onChange={e => setFilterType(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                <option value="all">All Types</option>
                <option value="review">Reviews</option>
                <option value="chat">Chat Messages</option>
                <option value="product">Product Issues</option>
              </select>
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="investigating">Investigating</option>
                <option value="resolved">Resolved</option>
                <option value="dismissed">Dismissed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Violations Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporter</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredViolations.map(violation => <tr key={violation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(violation.type)}
                        <span className="text-sm font-medium text-gray-900 capitalize">{violation.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{violation.reporter}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{violation.reported}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{violation.productName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{violation.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{getSeverityBadge(violation.severity)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(violation.status)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        {violation.status === 'pending' && <>
                            <Button size="sm" onClick={() => handleAction(violation.id, 'investigate')} className="bg-blue-600 hover:bg-blue-700">
                              Investigate
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleAction(violation.id, 'dismiss')}>
                              Dismiss
                            </Button>
                          </>}
                        {violation.status === 'investigating' && <>
                            <Button size="sm" onClick={() => handleAction(violation.id, 'resolve')} className="bg-green-600 hover:bg-green-700">
                              Resolve
                            </Button>
                            <button onClick={() => handleAction(violation.id, 'suspend')} className="text-red-600 hover:text-red-900 p-1 rounded">
                              <Ban className="w-4 h-4" />
                            </button>
                          </>}
                        <button onClick={() => handleAction(violation.id, 'delete')} className="text-gray-600 hover:text-gray-900 p-1 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">High Priority Reports</h4>
              <p className="text-sm text-red-600 mb-3">3 reports require immediate attention</p>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">Review Now</Button>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">Pending Investigations</h4>
              <p className="text-sm text-yellow-600 mb-3">12 cases under investigation</p>
              <Button size="sm" variant="outline" className="border-yellow-600 text-yellow-600">View All</Button>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Automated Actions</h4>
              <p className="text-sm text-blue-600 mb-3">Configure auto-moderation rules</p>
              <Button size="sm" variant="outline" className="border-blue-600 text-blue-600">Configure</Button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>;
};
export default AdminViolations;