import React from 'react';

const Quotes = () => {
  return (
    <div className="p-6 font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Quotes</h2>
          <p className="text-gray-600">View and manage your latest Atlassian quotes.</p>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Request Quote
        </button>
      </div>

      {/* Tabs Section */}
      <div className="flex space-x-4 mb-8">
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white">All quotes</button>
        <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Open</button>
        <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Accepted</button>
        <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Needs review</button>
        <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Canceled</button>
      </div>

      {/* No Quotes Section */}
      <div className="flex flex-col items-center text-center text-gray-500 mt-10">
        <img src="folder-icon.png" alt="Folder" className="w-24 h-24 mb-4" />
        <p className="text-lg font-semibold">No quotes to display</p>
        <span className="text-sm">Your quotes will appear here soon</span>
      </div>
    </div>
  );
};

export default Quotes;
