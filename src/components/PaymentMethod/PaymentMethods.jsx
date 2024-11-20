import React, { useState } from 'react';
import PaymentMethodForm from '../PaymentMethod/PaymentMethodForm';
import BillingDetailsForm from '../PaymentMethod/BillingDetailsForm'; // Import Billing Details Form
import Card from "../../assets/image/card1.png";

const PaymentMethods = () => {
  const [isBillingModalOpen, setBillingModalOpen] = useState(false);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const handleAddPaymentMethod = () => {
    setBillingModalOpen(true); // Open Billing Details Modal
  };

  const handleProceedToPayment = () => {
    setBillingModalOpen(false); // Close Billing Modal
    setPaymentModalOpen(true); // Open Payment Method Modal
  };

  const closeModals = () => {
    setBillingModalOpen(false);
    setPaymentModalOpen(false); // Close all modals
  };

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>
      <div className="flex flex-col items-center">
        <img src={Card} alt="credit card" className="w-80 h-40 mb-4" />
        <p className="text-gray-600 mb-4 text-center">
          We don’t have any payment methods on this account. Add a payment method to make a purchase, and to ensure uninterrupted access to your products.
        </p>
        <button 
          onClick={handleAddPaymentMethod} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Payment Method
        </button>
      </div>

      {/* Billing Details Modal */}
      {isBillingModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <BillingDetailsForm onNext={handleProceedToPayment} onClose={closeModals} />
          </div>
        </div>
      )}

      {/* Payment Method Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <PaymentMethodForm closeModal={closeModals} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
