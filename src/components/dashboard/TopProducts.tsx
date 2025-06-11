
import React from 'react';

const topProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&crop=center',
    sold: 234,
    revenue: '$12,450'
  },
  {
    id: 2,
    name: 'Smartphone Case',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=100&h=100&fit=crop&crop=center',
    sold: 189,
    revenue: '$8,920'
  },
  {
    id: 3,
    name: 'USB-C Cable',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center',
    sold: 156,
    revenue: '$2,340'
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop&crop=center',
    sold: 142,
    revenue: '$7,100'
  }
];

export const TopProducts = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Selling Products</h3>
      
      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <div key={product.id} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
              <p className="text-xs text-gray-500">{product.sold} sold</p>
            </div>
            <div className="flex-shrink-0">
              <p className="text-sm font-semibold text-gray-900">{product.revenue}</p>
            </div>
            <div className="flex-shrink-0 w-6 text-center">
              <span className="text-xs font-bold text-gray-400">#{index + 1}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
        View All Products
      </button>
    </div>
  );
};
