import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const BillingPreview = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = "http://localhost:5000/billing";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-10">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">Billing Preview</h1>
          <p className="text-gray-600 mt-2">
            Centrally manage and view a summary of all your product and app subscriptions.
          </p>
          <hr className="mt-4 border-gray-300" />
        </div>

        {/* Table */}
        <table className="w-full border-collapse bg-white shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wide">
              <th className="py-3 px-4 font-semibold text-left">Products and Apps</th>
              <th className="py-3 px-4 font-semibold text-left">Plan</th>
              <th className="py-3 px-4 font-semibold text-left">Users</th>
              <th className="py-3 px-4 font-semibold text-left">Next Price Estimate</th>
              <th className="py-3 px-4 font-semibold text-left">Billing Cycle</th>
              <th className="py-3 px-4 font-semibold text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="py-12 text-center text-gray-500">
                  <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mx-auto"></div>
                  <span className="ml-4">Loading subscriptions...</span>
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition duration-200 ease-in-out"
                >
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-800">{item.productName}</div>
                    <a
                      href={item.url}
                      className="text-sm text-blue-500 hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit <FaExternalLinkAlt size={12} />
                    </a>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{item.plan}</td>
                  <td className="py-4 px-4 text-gray-700">{item.users}</td>
                  <td className="py-4 px-4 text-gray-700">
                    {item.priceEstimate ? `$${item.priceEstimate}` : "-"}
                  </td>
                  <td className="py-4 px-4 text-gray-700">{item.billingCycle || "-"}</td>
                  <td className="py-4 px-4">
                    <button className="text-blue-600 hover:underline">Manage</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-12 text-center text-gray-500">
                  No subscriptions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex items-center gap-6 mt-8 text-blue-600">
          <span className="text-gray-600">Can't see all your subscriptions here?</span>
          <a
            href="#"
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            Visit Bitbucket <FaExternalLinkAlt size={12} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 font-semibold hover:underline"
          >
            Visit Trello <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BillingPreview;
