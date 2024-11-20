// src/components/Header.js
import React from 'react';
import { BsFillPinAngleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsQuestionCircleFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import logo from "../assets/image/kavachonesolutions_logo.JPEG"
import "../assets/css/linkhover.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4">
      <div className="flex items-center space-x-4">
      <div className="rounded-full w-20 h-10 overflow-hidden">
      {/* <HiMenuAlt2 /> */}
        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
      </div>
        <div className="font-semibold text-lg">KAVACHONE</div>
        <nav className="flex space-x-4 text-gray-500">
          <a href="#" className="nav-link hover:text-blue-600">Overview</a>
          <a href="#" className="nav-link hover:text-blue-600">Directory</a>
          <a href="#" className="nav-link hover:text-blue-600">Products</a>
          <a href="/billingPreview" className="nav-link hover:text-blue-600">Billing</a>
          <a href="#" className="nav-link hover:text-blue-600">Settings</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center w-full max-w-sm">
      <CiSearch className="absolute left-3 text-gray-500 text-lg" />
      <input
        type="text"
        className="pl-10 w-full border border-black rounded-md py-2 px-3"
        placeholder="Search..."
      />
    </div>
        <BsFillPinAngleFill size={24} />
        <BsQuestionCircleFill size={24} />
        <CgProfile size={30} />
      </div>
    </div>
  );
};

export default Header;
