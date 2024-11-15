// src/components/BillingPermissions.js
import React, { useState, useEffect } from 'react';

const BillingPermissions = () => {
  // State for storing the billing data and loading status
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    const fetchBillingData = async () => {
      try {
        const response = await fetch('https://api.example.com/billing-permissions'); // Replace with actual API URL
        const result = await response.json();
        setData(result); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching billing data:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    };

    fetchBillingData();
  }, []);

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Billing permissions</h2>
      <p className="text-gray-600 mb-4">
        Billing admins have full access to manage everything in your billing account. Business contacts are assigned to individual subscriptions and receive notifications.
      </p>
      <p className="text-blue-600 mb-4 cursor-pointer">Explore billing roles</p>

      {loading ? (
        // Loading indicator
        <div className="text-gray-500">Loading...</div>
      ) : (
        // Display the data once it's loaded
        <div className="overflow-auto bg-gray-50 border rounded-lg shadow-md p-4">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500">
                <th className="p-2">Admin</th>
                <th className="p-2">Role</th>
                <th className="p-2">Access level</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((admin, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2 flex items-center space-x-3">
                      <img src={admin.avatar || "/avatar.png"} alt="avatar" className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-medium">{admin.name}</p>
                        <p className="text-gray-500 text-sm">{admin.email}</p>
                      </div>
                    </td>
                    <td className="p-2">{admin.role}</td>
                    <td className="p-2">{admin.accessLevel}</td>
                    <td className="p-2">
                      <button className="text-gray-500 hover:text-gray-700">...</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 p-4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      
      <p className="text-blue-600 mt-4 cursor-pointer">Add new admin</p>
    </div>
  );
};

export default BillingPermissions;
