
import React from 'react';
import { TrendingUp, ShoppingCart, Users, Truck } from 'lucide-react';

const summaryData = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+12.5%',
    trend: 'up',
    icon: TrendingUp,
    period: 'Last 30 days'
  },
  {
    title: 'Total Orders',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    period: 'This month'
  },
  {
    title: 'Total Customers',
    value: '892',
    change: '+15.3%',
    trend: 'up',
    icon: Users,
    period: 'Active users'
  },
  {
    title: 'Pending Deliveries',
    value: '23',
    change: '-5.1%',
    trend: 'down',
    icon: Truck,
    period: 'In transit'
  }
];

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{item.title}</p>
                <p className="text-2xl font-bold text-gray-900 mb-1">{item.value}</p>
                <div className="flex items-center space-x-1">
                  <span className={`text-xs font-medium ${
                    item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.change}
                  </span>
                  <span className="text-xs text-gray-500">{item.period}</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
