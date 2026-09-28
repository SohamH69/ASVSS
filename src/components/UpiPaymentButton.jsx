import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Ensure you have installed: npm i qrcode.react

function UpiPaymentForm() {
  const [isMobile, setIsMobile] = useState(false);
  const [amount, setAmount] = useState("100.00"); // Default amount

  // Preset options
  const quickAmounts = ["50", "100", "500", "1000"];

  // Detect environment (Mobile vs Desktop)
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|iphone|ipad|ipod/i.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  const upiID = "your-upi-id@bank"; // Replace with your real UPI ID
  const name = "Your Business Name";
  const transactionNote = "Payment for order";

  // Regenerates dynamically whenever 'amount' changes
  const upiUrl = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;

  const handleAmountChange = (e) => {
    // Basic sanitization to allow only numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(value);
  };

  return (
    <div className="max-[400px] mx-auto my-10 lg:flex">
      
      <div><h3 className='text-2xl font-bold caret-amber-50 my-4'>Select Payment Amount</h3>
      
      {/* 1. Quick Amount Selection Buttons */}
      <div className='flex gap-2 justify-left my-6'>
        {quickAmounts.map((amt) => (
          <button
            key={amt}
            onClick={() => setAmount(Number(amt).toFixed(2))}
            style={{
              padding: '8px 16px',
              border: amount === Number(amt).toFixed(2) ? '2px solid #ffffff' : '1px solid #ccc',
              backgroundColor: amount === Number(amt).toFixed(2) ? '#e6f4ea' : '',
              color: amount === Number(amt).toFixed(2) ? '#e85d04' : '#fff',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            ₹{amt}
          </button>
        ))}
      </div>

      {/* 2. Manual Custom Amount Input */}
      <div style={{ position: 'relative', display: 'inline-block', width: '80%', marginBottom: '25px' }}>
        <span className='absolute left-3 top-[50%] -translate-y-5 text-amber-50 text-4xl'>₹</span>
        <input 
          type="text" 
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter custom amount"
          style={{
            width: '100%',
            padding: '10px 10px 10px 50px',
            fontSize: '24px',
            border: '1px solid #ccc',
            boxSizing: 'border-box'
          }}
        />
      </div>
      </div>
      <div>{/* 3. Dynamic QR Code or Deep Link Button based on state */}
      <div style={{ marginTop: '10px' }}>
        {isMobile ? (
          /* Mobile View */
          <div>
            <a 
              href={amount > 0 ? upiUrl : '#'} 
              onClick={(e) => amount <= 0 && e.preventDefault()}
              style={{
                padding: '14px 28px',
                backgroundColor: amount > 0 ? '#0f9d58' : '#cccccc',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '20px',
                display: 'inline-block',
                pointerEvents: amount > 0 ? 'auto' : 'none'
              }}
            >
              Pay ₹{amount || '0.00'} via UPI App
            </a>
          </div>
        ) : (
          /* Desktop View */
          <div style={{ display: 'inline-block', padding: '15px', border: '1px solid #eaeaea', borderRadius: '0px', backgroundColor: '#fdfdfd' }}>
            {amount > 0 ? (
              <>
                <QRCodeSVG value={upiUrl} size={180} />
                {/* <p style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '5px', fontSize: '14px', color:'black'}}>
                  Scan to Pay ₹{amount}
                </p> */}
              </>
            ) : (
              <div style={{ width: '180px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontSize: '13px', border: '1px dashed #ccc' }}>
                Enter an amount to generate QR
              </div>
            )}
          </div>
        )}
      </div></div>

      
    </div>
  );
}

export default UpiPaymentForm;