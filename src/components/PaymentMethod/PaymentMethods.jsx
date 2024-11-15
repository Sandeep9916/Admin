// src/components/PaymentMethods.js
import React, { useState } from 'react';
import PaymentMethodForm from '../PaymentMethod/PaymentMethodForm';

const PaymentMethods = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPaymentMethod = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Payment methods</h2>
      <div className="flex flex-col items-center">
        <img src="/credit-card.png" alt="credit card" className="w-32 h-20 mb-4" />
        <p className="text-gray-600 mb-4 text-center">
          We don’t have any payment methods on this account. Add a payment method to make a purchase, and to ensure uninterrupted access to your products.
        </p>
        <button 
          onClick={handleAddPaymentMethod} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add payment method
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <PaymentMethodForm closeModal={closeModal} />}
    </div>
  );
};

export default PaymentMethods;
