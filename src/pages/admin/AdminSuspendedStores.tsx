import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { Search, Filter, Ban, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/button';
const AdminSuspendedStores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDuration, setFilterDuration] = useState('all');
  const suspendedStores = [{
    id: 1,
    storeName: 'FakeGear Rentals',
    ownerName: 'Alex Brown',
    email: 'alex@fakegear.com',
    suspensionDate: '2024-01-10',
    reason: 'Multiple fake product listings',
    duration: '30 days',
    violationCount: 5,
    reactivationDate: '2024-02-09',
    status: 'active_suspension'
  }, {
    id: 2,
    storeName: 'Shady Electronics',
    ownerName: 'Mike Wilson',
    email: 'mike@shadyelectronics.com',
    suspensionDate: '2024-01-05',
    reason: 'Customer harassment and poor service',
    duration: '15 days',
    violationCount: 3,
    reactivationDate: '2024-01-20',
    status: 'expired'
  }, {
    id: 3,
    storeName: 'Budget Cameras Inc',
    ownerName: 'Tom Davis',
    email: 'tom@budgetcameras.com',
    suspensionDate: '2024-01-12',
    reason: 'Selling damaged products as new',
    duration: '7 days',
    violationCount: 2,
    reactivationDate: '2024-01-19',
    status: 'expired'
  }, {
    id: 4,
    storeName: 'QuickRent Pro',
    ownerName: 'Sarah Smith',
    email: 'sarah@quickrentpro.com',
    suspensionDate: '2024-01-14',
    reason: 'Price manipulation and fake reviews',
    duration: 'Permanent',
    violationCount: 8,
    reactivationDate: 'Never',
    status: 'permanent'
  }];
  const getStatusBadge = (status: string) => {
    const statusClasses = {
      active_suspension: 'bg-red-100 text-red-800',
      expired: 'bg-yellow-100 text-yellow-800',
      permanent: 'bg-gray-100 text-gray-800'
    };
    const statusLabels = {
      active_suspension: 'Active Suspension',
      expired: 'Expired',
      permanent: 'Permanently Banned'
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status as keyof typeof statusClasses]}`}>
        {statusLabels[status as keyof typeof statusLabels]}
      </span>;
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active_suspension':
        return <Ban className="w-4 h-4 text-red-600" />;
      case 'expired':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'permanent':
        return <AlertTriangle className="w-4 h-4 text-gray-600" />;
      default:
        return <Ban className="w-4 h-4" />;
    }
  };
  const filteredStores = suspendedStores.filter(store => {
    const matchesSearch = store.storeName.toLowerCase().includes(searchTerm.toLowerCase()) || store.ownerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = filterDuration === 'all' || filterDuration === 'temporary' && store.status !== 'permanent' || filterDuration === 'permanent' && store.status === 'permanent';
    return matchesSearch && matchesDuration;
  });
  const handleUnsuspend = (storeId: number) => {
    console.log(`Unsuspending store ${storeId}`);
  };
  const handleExtendSuspension = (storeId: number) => {
    console.log(`Extending suspension for store ${storeId}`);
  };
  return <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900\n">Suspended Stores</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Suspended</p>
                <p className="text-2xl font-bold text-red-600">23</p>
              </div>
              <Ban className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Suspensions</p>
                <p className="text-2xl font-bold text-orange-600">12</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Permanent Bans</p>
                <p className="text-2xl font-bold text-gray-600">4</p>
              </div>
              <Ban className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-blue-600">7</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Search suspended stores..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <div className="flex gap-2">
              <select value={filterDuration} onChange={e => setFilterDuration(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                <option value="all">All Suspensions</option>
                <option value="temporary">Temporary</option>
                <option value="permanent">Permanent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Suspended Stores Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Violations</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStores.map(store => <tr key={store.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{store.storeName}</div>
                        <div className="text-sm text-gray-500">{store.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{store.ownerName}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">{store.reason}</div>
                      <div className="text-sm text-gray-500">Suspended: {store.suspensionDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{store.duration}</div>
                      {store.reactivationDate !== 'Never' && <div className="text-sm text-gray-500">Until: {store.reactivationDate}</div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                        {store.violationCount} violations
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(store.status)}
                        {getStatusBadge(store.status)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        {store.status === 'expired' && <Button size="sm" onClick={() => handleUnsuspend(store.id)} className="bg-green-600 hover:bg-green-700 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Reactivate
                          </Button>}
                        {store.status === 'active_suspension' && store.duration !== 'Permanent' && <>
                            <Button size="sm" onClick={() => handleUnsuspend(store.id)} className="bg-green-600 hover:bg-green-700">
                              Early Release
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleExtendSuspension(store.id)} className="text-red-600 border-red-600 hover:bg-red-50">
                              Extend
                            </Button>
                          </>}
                        {store.status === 'permanent' && <Button size="sm" onClick={() => handleUnsuspend(store.id)} className="bg-blue-600 hover:bg-blue-700">
                            Review Appeal
                          </Button>}
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {/* Suspension Guidelines */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Suspension Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">First Offense</h4>
              <p className="text-sm text-yellow-600 mb-2">Warning + 7-day suspension</p>
              <ul className="text-sm text-yellow-600 space-y-1">
                <li>• Misleading product info</li>
                <li>• Minor policy violations</li>
                <li>• Poor customer service</li>
              </ul>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-medium text-orange-800 mb-2">Repeat Offenses</h4>
              <p className="text-sm text-orange-600 mb-2">15-30 day suspension</p>
              <ul className="text-sm text-orange-600 space-y-1">
                <li>• Multiple violations</li>
                <li>• Fraudulent activity</li>
                <li>• Customer harassment</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">Severe Violations</h4>
              <p className="text-sm text-red-600 mb-2">Permanent ban</p>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• Illegal activities</li>
                <li>• Multiple serious violations</li>
                <li>• Identity fraud</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>;
};
export default AdminSuspendedStores;