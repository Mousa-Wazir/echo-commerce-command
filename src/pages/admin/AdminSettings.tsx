import React, { useState } from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { Save, User, Lock, Bell, Globe } from 'lucide-react';
import { Button } from '../../components/ui/button';
const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '+1 (555) 123-4567',
    avatar: ''
  });
  const [systemSettings, setSystemSettings] = useState({
    siteName: 'RentEasy Marketplace',
    currency: 'USD',
    taxRate: '8.5',
    commissionRate: '10',
    allowedCategories: ['Electronics', 'Photography', 'Fashion', 'Gaming', 'Sports']
  });
  const [notifications, setNotifications] = useState({
    emailReports: true,
    newOrders: true,
    newUsers: true,
    violations: true,
    systemAlerts: true
  });
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating profile:', profileData);
  };
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating password');
  };
  const handleSystemSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating system settings:', systemSettings);
  };
  const tabs = [{
    id: 'profile',
    label: 'Profile',
    icon: User
  }, {
    id: 'security',
    label: 'Security',
    icon: Lock
  }, {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell
  }, {
    id: 'system',
    label: 'System',
    icon: Globe
  }];
  return <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900\n">Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <nav className="p-4 space-y-2">
                {tabs.map(tab => {
                const Icon = tab.icon;
                return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${activeTab === tab.id ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>;
              })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              {activeTab === 'profile' && <div>
                  <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
                  <form onSubmit={handleProfileSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input type="text" value={profileData.name} onChange={e => setProfileData({
                      ...profileData,
                      name: e.target.value
                    })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" value={profileData.email} onChange={e => setProfileData({
                      ...profileData,
                      email: e.target.value
                    })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" value={profileData.phone} onChange={e => setProfileData({
                    ...profileData,
                    phone: e.target.value
                  })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                    <Button type="submit" className="flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      Save Profile
                    </Button>
                  </form>
                </div>}

              {activeTab === 'security' && <div>
                  <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Enter current password" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Enter new password" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Confirm new password" />
                    </div>
                    <Button type="submit" className="flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      Update Password
                    </Button>
                  </form>
                </div>}

              {activeTab === 'notifications' && <div>
                  <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={value} onChange={e => setNotifications({
                      ...notifications,
                      [key]: e.target.checked
                    })} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>)}
                    <Button className="flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      Save Preferences
                    </Button>
                  </div>
                </div>}

              {activeTab === 'system' && <div>
                  <h3 className="text-lg font-semibold mb-4">System Configuration</h3>
                  <form onSubmit={handleSystemSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                        <input type="text" value={systemSettings.siteName} onChange={e => setSystemSettings({
                      ...systemSettings,
                      siteName: e.target.value
                    })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                        <select value={systemSettings.currency} onChange={e => setSystemSettings({
                      ...systemSettings,
                      currency: e.target.value
                    })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                          <option value="USD">USD ($)</option>
                          <option value="EUR">EUR (€)</option>
                          <option value="GBP">GBP (£)</option>
                          <option value="CAD">CAD (C$)</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tax Rate (%)</label>
                        <input type="number" step="0.1" value={systemSettings.taxRate} onChange={e => setSystemSettings({
                      ...systemSettings,
                      taxRate: e.target.value
                    })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Commission Rate (%)</label>
                        <input type="number" step="0.1" value={systemSettings.commissionRate} onChange={e => setSystemSettings({
                      ...systemSettings,
                      commissionRate: e.target.value
                    })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Allowed Categories</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {systemSettings.allowedCategories.map((category, index) => <div key={index} className="flex items-center gap-2">
                            <input type="text" value={category} onChange={e => {
                        const newCategories = [...systemSettings.allowedCategories];
                        newCategories[index] = e.target.value;
                        setSystemSettings({
                          ...systemSettings,
                          allowedCategories: newCategories
                        });
                      }} className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-900" />
                          </div>)}
                      </div>
                    </div>
                    <Button type="submit" className="flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      Save Configuration
                    </Button>
                  </form>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>;
};
export default AdminSettings;