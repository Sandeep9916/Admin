// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 h-screen p-4">
      <ul className="space-y-2 text-gray-700">
        <li><Link to="/billingPreview" className="hover:bg-gray-200 p-2 block">Subscriptions</Link></li>
        <li><Link to="/Quotes" className="hover:bg-gray-200 p-2 block">Quotes</Link></li>
        <li><Link to="/billing-profiles" className="hover:bg-gray-200 p-2 block">Billing profiles</Link></li>
        <li><Link to="/payment-methods" className="hover:bg-gray-200 p-2 block">Payment method</Link></li>
        <li><Link to="/addresses" className="hover:bg-gray-200 p-2 block">Addresses</Link></li>
        <li><Link to="/billing-permissions" className="hover:bg-gray-200 p-2 block rounded">Billing permissions</Link></li>
        {/* <li><Link to="/invoices" className="hover:bg-gray-200 p-2 block">Invoices</Link></li> */}
        <li> <Link to="/invoices" className='hover:bg-gray-200 p-2 block rounded'> Invoices</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
