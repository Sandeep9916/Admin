// BillingPreview.js
import React, { useEffect, useState } from "react";

const BillingPreview = () => {
  const [data, setData] = useState([]);
  
  // Replace this URL with your actual API endpoint
  const apiUrl = "http://localhost:5000/billing";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-10">
      <div className="text-2xl font-bold mb-2">Billing preview</div>
      <p className="text-gray-600 mb-6">
        Centrally manage and view a summary of all your product and app subscriptions.
      </p>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left text-sm uppercase">
            <th className="py-3 px-4 font-semibold">Products and apps</th>
            <th className="py-3 px-4 font-semibold">Plan</th>
            <th className="py-3 px-4 font-semibold">Users</th>
            <th className="py-3 px-4 font-semibold">Next price estimate</th>
            <th className="py-3 px-4 font-semibold">Billing cycle</th>
            <th className="py-3 px-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="font-medium text-gray-800">{item.productName}</div>
                  <span className="text-sm text-gray-500">{item.url}</span>
                </td>
                <td className="py-4 px-4 text-gray-700">{item.plan}</td>
                <td className="py-4 px-4 text-gray-700">{item.users}</td>
                <td className="py-4 px-4 text-gray-700">{item.priceEstimate || "-"}</td>
                <td className="py-4 px-4 text-gray-700">{item.billingCycle || "-"}</td>
                <td className="py-4 px-4 text-blue-600 cursor-pointer hover:underline">Manage</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-4 px-4 text-center text-gray-500">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex items-center gap-4 mt-6 text-blue-600">
        <span className="text-gray-600">Can't see all your subscriptions here?</span>
        <a href="#" className="font-semibold hover:underline">Visit Bitbucket</a>
        <a href="#" className="font-semibold hover:underline">Visit Trello</a>
      </div>
    </div>
  );
};

export default BillingPreview;
