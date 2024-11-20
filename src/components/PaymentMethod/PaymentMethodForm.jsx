// src/components/PaymentMethodForm.js
import React from 'react';

const PaymentMethodForm = ({ closeModal }) => {
  return (
    <>
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        
        <h2 className="text-xl font-semibold mb-4">Add a Payment Method</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input 
              type="text" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input 
                type="text" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">CVC</label>
              <input 
                type="text" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="CVC"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Billing Address</label>
            <input 
              type="text" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="123 Main St"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button 
              type="button" 
              onClick={closeModal} 
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default PaymentMethodForm;
