// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4">
      <div className="flex items-center space-x-4">
        <div className="font-semibold text-lg">KAVACHONE Admin</div>
        <nav className="flex space-x-4 text-gray-500">
          <a href="#" className="hover:text-blue-600">Overview</a>
          <a href="#" className="hover:text-blue-600">Directory</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="/billingPreview" className="hover:text-blue-600">Billing</a>
          <a href="#" className="hover:text-blue-600">Settings</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <span>kavachone</span>
        <img src="/avatar.png" alt="avatar" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
