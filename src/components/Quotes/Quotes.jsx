import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import Card from "../../assets/image/card1.png"

const Quotes = () => {
  const [selectedTab, setSelectedTab] = useState("All quotes");

  const tabs = ["All quotes", "Open", "Accepted", "Needs review", "Canceled"];

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800">Quotes</h2>
          <p className="text-gray-600 mt-1">View and manage your latest Atlassian quotes.</p>
        </div>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
          Request Quote
        </button>
      </div>

      {/* Tabs Section */}
      <div className="flex space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedTab === tab
                ? "bg-gray-100 text-gray-700 hover:bg-gray-20"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase tracking-wide">
            <tr>
              <th className="py-3 px-4 font-semibold">Quotes</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Creation</th>
              <th className="py-3 px-4 font-semibold">Expiry</th>
              <th className="py-3 px-4 font-semibold">Quotes Total</th>
              <th className="py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder Row */}
            <tr className="border-b hover:bg-gray-50">
              <td className="py-4 px-4">Sample Quote</td>
              <td className="py-4 px-4">Open</td>
              <td className="py-4 px-4">2024-01-01</td>
              <td className="py-4 px-4">2024-12-31</td>
              <td className="py-4 px-4">$1,000</td>
              <td className="py-4 px-4 text-blue-600 hover:underline cursor-pointer">
                View
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {false && ( // Set to `true` if no data is available
        <div className="flex flex-col items-center text-center text-gray-500 mt-12">
          <FaFolderOpen className="text-gray-400 w-20 h-20 mb-4" />
          <p className="text-lg font-semibold">No quotes to display</p>
          <span className="text-sm">Your quotes will appear here soon.</span>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Request a Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default Quotes;
