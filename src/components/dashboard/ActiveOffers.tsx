
import React from 'react';
import { Calendar, Percent } from 'lucide-react';

const activeOffers = [
  {
    id: 1,
    name: 'Summer Sale',
    discount: '25%',
    expiryDate: '2024-07-31',
    status: 'Active'
  },
  {
    id: 2,
    name: 'New Customer Discount',
    discount: '15%',
    expiryDate: '2024-08-15',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Flash Sale',
    discount: '40%',
    expiryDate: '2024-06-20',
    status: 'Expiring Soon'
  },
  {
    id: 4,
    name: 'Bundle Offer',
    discount: '30%',
    expiryDate: '2024-09-01',
    status: 'Active'
  }
];

export const ActiveOffers = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Active Offers</h3>
      
      <div className="space-y-4">
        {activeOffers.map((offer) => (
          <div key={offer.id} className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-1">{offer.name}</h4>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Percent className="w-3 h-3" />
                    <span>{offer.discount} off</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Expires {offer.expiryDate}</span>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                offer.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-orange-100 text-orange-800'
              }`}>
                {offer.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
        Manage All Offers
      </button>
    </div>
  );
};
