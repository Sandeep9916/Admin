import React from 'react';

const Invoices = () => {
  return (
    <div>
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Invoices</h2>
        <p className="text-gray-600 mb-4">
          View your pending invoices and payment history
        </p>
      </div>
    </div> // Properly closing the outer div here
  );
};

export default Invoices;
