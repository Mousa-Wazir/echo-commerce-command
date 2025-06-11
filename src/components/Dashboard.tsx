
import React from 'react';
import { SummaryCards } from './dashboard/SummaryCards';
import { SalesChart } from './dashboard/SalesChart';
import { SalesTarget } from './dashboard/SalesTarget';
import { TopProducts } from './dashboard/TopProducts';
import { ActiveOffers } from './dashboard/ActiveOffers';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <SummaryCards />
      
      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <SalesTarget />
        </div>
      </div>
      
      {/* Products and Offers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProducts />
        <ActiveOffers />
      </div>
    </div>
  );
};
