import React from 'react';
import { FaBoxOpen, FaShoppingCart, FaDollarSign, FaTruck, FaCogs } from 'react-icons/fa';

const HomeSection = ({ stats }) => {
  const metrics = [
    {
      metric: 'Total Parts Produced',
      value: stats.totalPartsProduced || 0,
      unit: 'parts',
      icon: <FaCogs className="w-6 h-6 text-blue-600" />,
      bgColor: 'blue-50',
      iconBgColor: 'blue-100',
    },
    {
      metric: 'Total Transactions',
      value: stats.totalTransactions || 0,
      unit: 'transactions',
      icon: <FaDollarSign className="w-6 h-6 text-purple-600" />,
      bgColor: 'purple-50',
      iconBgColor: 'purple-100',
    },
    {
      metric: 'Parts Shipped to MROs',
      value: stats.partsShipped || 0,
      unit: 'parts',
      icon: <FaTruck className="w-6 h-6 text-green-600" />,
      bgColor: 'green-50',
      iconBgColor: 'green-100',
    },
    {
      metric: 'Materials Received',
      value: stats.materialsReceived || 0,
      unit: 'kg',
      icon: <FaBoxOpen className="w-6 h-6 text-orange-600" />,
      bgColor: 'orange-50',
      iconBgColor: 'orange-100',
    },
    {
      metric: 'Total Orders Received',
      value: stats.totalOrdersReceived || 0,
      unit: 'orders',
      icon: <FaShoppingCart className="w-6 h-6 text-teal-600" />,
      bgColor: 'teal-50',
      iconBgColor: 'teal-100',
    },
  ];

  return (
    <div className="home-section py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {Array.from({ length: Math.ceil(metrics.length / 2) }, (_, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-6">
              {metrics.slice(rowIndex * 2, (rowIndex + 1) * 2).map((item, index) => (
                <div
                  key={index}
                  className={`relative bg-${item.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 w-[calc(50%-0.75rem)] min-w-[300px]`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-${item.iconBgColor} rounded-full flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.metric}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-extrabold text-gray-900">{item.value}</p>
                        <span className="text-sm text-gray-500">{item.unit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {metrics.slice(rowIndex * 2, (rowIndex + 1) * 2).length === 1 && (
                <div className="w-[calc(50%-0.75rem)] min-w-[300px]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
