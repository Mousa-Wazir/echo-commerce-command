
import React from 'react';

export const SalesTarget = () => {
  const dailyProgress = 75;
  const monthlyProgress = 60;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Sales Target</h3>
      
      <div className="space-y-6">
        {/* Daily Target */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Daily Goal</span>
            <span className="text-sm font-bold text-gray-900">{dailyProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${dailyProgress}%` }}
            ></div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            $3,750 of $5,000 goal
          </div>
        </div>

        {/* Monthly Target */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Monthly Goal</span>
            <span className="text-sm font-bold text-gray-900">{monthlyProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${monthlyProgress}%` }}
            ></div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            $30,000 of $50,000 goal
          </div>
        </div>

        {/* Circular Progress */}
        <div className="flex justify-center mt-6">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#10b981"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${dailyProgress * 2.51} 251`}
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-900">{dailyProgress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
