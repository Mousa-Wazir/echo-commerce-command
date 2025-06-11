import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { TrendingUp, DollarSign, Users, Package, Download } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../../components/ui/chart';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const AdminAnalytics = () => {
  const revenueData = [
    { name: 'Furniture', value: 12345, percentage: 35 },
    { name: 'Health & Beauty', value: 8901, percentage: 25 },
    { name: 'Home Decor', value: 6789, percentage: 19 },
    { name: 'Clothing Accessories', value: 4567, percentage: 13 },
    { name: 'Handicrafts', value: 2890, percentage: 8 }
  ];

  const sellerPerformanceData = [
    { seller: 'Modern Living Co.', sales: 24500, orders: 156, growth: 23 },
    { seller: 'Beauty Essentials', sales: 18200, orders: 89, growth: 18 },
    { seller: 'Artisan Crafts Hub', sales: 15800, orders: 134, growth: 15 },
    { seller: 'Fashion Corner', sales: 12300, orders: 67, growth: 12 },
    { seller: 'Home Treasures', sales: 9800, orders: 45, growth: 8 }
  ];

  const monthlyTrends = [
    { month: 'Jan', revenue: 45000, orders: 320, customers: 150 },
    { month: 'Feb', revenue: 52000, orders: 380, customers: 180 },
    { month: 'Mar', revenue: 48000, orders: 340, customers: 165 },
    { month: 'Apr', revenue: 61000, orders: 420, customers: 210 },
    { month: 'May', revenue: 55000, orders: 390, customers: 195 },
    { month: 'Jun', revenue: 67000, orders: 450, customers: 230 }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#3B82F6",
    },
    orders: {
      label: "Orders",
      color: "#10B981",
    },
    customers: {
      label: "Customers",
      color: "#F59E0B",
    },
  };

  const exportReport = () => {
    console.log('Exporting analytics report...');
  };

  return (
    <AdminLayout>
      <div className="space-y-4 md:space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Analytics</h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <select className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm md:text-base">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
            <Button onClick={exportReport} className="flex items-center gap-2 text-sm md:text-base px-3 md:px-4 py-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export Report</span>
              <span className="sm:hidden">Export</span>
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl md:text-2xl font-bold">$328,000</div>
              <p className="text-xs text-green-600">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Orders</CardTitle>
              <Package className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl md:text-2xl font-bold">2,350</div>
              <p className="text-xs text-green-600">+180.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl md:text-2xl font-bold">12,234</div>
              <p className="text-xs text-green-600">+19% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl md:text-2xl font-bold">+573</div>
              <p className="text-xs text-green-600">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm sm:text-base md:text-lg">Revenue Breakdown</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Revenue distribution by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] md:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percentage }) => `${name} ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {revenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-4">
                {revenueData.map((item, index) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-xs md:text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm sm:text-base md:text-lg">Seller Performance</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Top performing sellers by sales volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px] md:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sellerPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="seller" 
                      tick={{ fontSize: 10 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm sm:text-base md:text-lg">Monthly Trends</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Revenue, orders, and customer trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] md:h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrends} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="orders" stroke="#10B981" strokeWidth={2} />
                  <Line type="monotone" dataKey="customers" stroke="#F59E0B" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs md:text-sm text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs md:text-sm text-gray-600">Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-xs md:text-sm text-gray-600">Customers</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm sm:text-base md:text-lg">Top Performing Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 sm:px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-2 sm:px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                    <th className="px-2 sm:px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                    <th className="px-2 sm:px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {revenueData.map((category) => (
                    <tr key={category.name}>
                      <td className="px-2 sm:px-3 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">{category.name}</td>
                      <td className="px-2 sm:px-3 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">${category.value.toLocaleString()}</td>
                      <td className="px-2 sm:px-3 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">{Math.floor(category.value / 50)}</td>
                      <td className="px-2 sm:px-3 md:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-green-600">+{category.percentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
