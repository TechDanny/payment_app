import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MpesaPayment() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('150.00'); // Default amount

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate MPESA STK Push
    console.log(`Simulating MPESA STK Push for ${phoneNumber} with amount ${amount}`);
    router.push(`/mpesa-confirm?phoneNumber=${phoneNumber}&amount=${amount}`);
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-header">Complete <span className="text-highlight-mpesa">M-PESA</span> Payment</h1>
      <p className="form-warning"><i className="fas fa-info-circle"></i> Your M-PESA PIN is *never* entered here. A secure prompt will appear on your phone.</p>

      <form onSubmit={handleSubmit} className="payment-form-card">
        <div className="input-group-form">
          <label htmlFor="phoneNumber" className="input-label"><i className="fas fa-phone-alt"></i> Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="input-field"
            placeholder="e.g., 2547XXXXXXXX"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            pattern="^\+?254(7|1)\d{8}$"
            title="Enter a valid Kenyan phone number (e.g., 2547XXXXXXXX)"
          />
        </div>
        <div className="input-group-form">
          <label htmlFor="amount" className="input-label"><i className="fas fa-money-bill-wave"></i> Amount (Ksh)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="input-field"
            placeholder="e.g., 150.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="0.01"
            min="1"
            required
          />
        </div>
        <button type="submit" className="submit-button-form mpesa-button-form">Proceed to M-PESA STK Push <i className="fas fa-arrow-right"></i></button>
      </form>

      <Link href="/" className="back-to-home-link">← Back to payment methods</Link>
    </div>
  );
}
