// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/Header';
import Sidebar from './components/Sidebar';
import BillingPermissions from './components/BillingPermissions';
import PaymentMethods from "./components/PaymentMethod/PaymentMethods"
import QuotesPage from './components/Quotes/Quotes';
import BillingPreview from './components/BillingPreview/BilllingPreview';
import Invoices from './components/Invoices/Invoices';
import Addresses from './components/Addresse/Addresse';

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <TopNav />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-8 bg-gray-100">
            <Routes>
              <Route path="/billing-permissions" element={<BillingPermissions />} />
              {/* Define other routes if necessary */}
              <Route path="*" element={<BillingPermissions />} /> {/* Default to billing permissions */}
              <Route path="/payment-methods" element={<PaymentMethods />} />
              <Route path ="/Quotes" element={<QuotesPage/>}/>
              <Route path="/billingPreview" element={<BillingPreview/>} />
              <Route path="/invoices" element={<Invoices />}/>
              <Route path='/addresses' element ={<Addresses/>}/>


            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
