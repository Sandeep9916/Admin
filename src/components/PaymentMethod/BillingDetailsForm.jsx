import React, { useState } from 'react';

const BillingDetailsForm = ({ onNext, onClose }) => {
  // State to store form data and errors
  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    city: '',
    address1: '',
    address2: '',
    state: '',
    postalCode: '',
    taxId: ''
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Check for required fields
    if (!formData.companyName) {
      formErrors.companyName = 'Company name is required';
      isValid = false;
    }

    if (!formData.country) {
      formErrors.country = 'Country is required';
      isValid = false;
    }

    if (!formData.city) {
      formErrors.city = 'City is required';
      isValid = false;
    }

    if (!formData.address1) {
      formErrors.address1 = 'Address 1 is required';
      isValid = false;
    }

    if (!formData.state) {
      formErrors.state = 'State is required';
      isValid = false;
    }

    if (!formData.postalCode) {
      formErrors.postalCode = 'Postal code is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If validation is successful, proceed to the next step
      onNext();
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-2xl mx-auto h-full max-h-[80vh] overflow-y-auto">
      <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">Your Billing Address</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company Name */}
        <div className="sm:col-span-2">
          <label htmlFor="companyName" className="block text-gray-800 font-medium mb-1">
            Company Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your company name"
          />
          {errors.companyName && <p className="text-red-600 text-sm mt-1">{errors.companyName}</p>}
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-gray-800 font-medium mb-1">
            Country <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your country"
          />
          {errors.country && <p className="text-red-600 text-sm mt-1">{errors.country}</p>}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-gray-800 font-medium mb-1">
            City <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your city"
          />
          {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
        </div>

        {/* Address 1 */}
        <div className="sm:col-span-2">
          <label htmlFor="address1" className="block text-gray-800 font-medium mb-1">
            Address 1 <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
          {errors.address1 && <p className="text-red-600 text-sm mt-1">{errors.address1}</p>}
        </div>

        {/* Address 2 */}
        <div className="sm:col-span-2">
          <label htmlFor="address2" className="block text-gray-800 font-medium mb-1">Address 2</label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter additional address info"
          />
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-gray-800 font-medium mb-1">
            State <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your state"
          />
          {errors.state && <p className="text-red-600 text-sm mt-1">{errors.state}</p>}
        </div>

        {/* Postal Code */}
        <div>
          <label htmlFor="postalCode" className="block text-gray-800 font-medium mb-1">
            Postal Code <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your postal code"
          />
          {errors.postalCode && <p className="text-red-600 text-sm mt-1">{errors.postalCode}</p>}
        </div>

        {/* Tax ID */}
        <div className="sm:col-span-2">
          <label htmlFor="taxId" className="block text-gray-800 font-medium mb-1">Tax ID</label>
          <input
            type="text"
            id="taxId"
            name="taxId"
            value={formData.taxId}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your tax ID (optional)"
          />
        </div>

        {/* Action Buttons */}
        <div className="sm:col-span-2 flex justify-end space-x-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingDetailsForm;
