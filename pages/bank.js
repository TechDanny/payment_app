import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BankPayment() {
  const router = useRouter();
  const [bankDetails, setBankDetails] = useState('');
  const [amount, setAmount] = useState('150.00'); // Default amount

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate Bank Transfer
    console.log(`Simulating Bank Transfer for ${bankDetails} with amount ${amount}`);
    router.push(`/bank-confirm?details=${bankDetails}&amount=${amount}`);
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-header">Complete <span className="text-highlight-bank">Bank Transfer</span></h1>
      <p className="form-warning"><i className="fas fa-info-circle"></i> This is a simulated bank transfer. In a real application, you'd be redirected to a secure bank portal or provided details for manual transfer.</p>

      <form onSubmit={handleSubmit} className="payment-form-card">
        <div className="input-group-form">
          <label htmlFor="bankDetails" className="input-label"><i className="fas fa-university"></i> Bank Account Details (Simulated)</label>
          <input
            type="text"
            id="bankDetails"
            name="bankDetails"
            className="input-field"
            placeholder="e.g., Account Number / SWIFT Code"
            value={bankDetails}
            onChange={(e) => setBankDetails(e.target.value)}
            required
          />
        </div>
        <div className="input-group-form">
          <label htmlFor="amount" className="input-label"><i className="fas fa-money-check-alt"></i> Amount (Ksh)</label>
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
        <button type="submit" className="submit-button-form bank-button-form">Initiate Bank Transfer <i className="fas fa-arrow-right"></i></button>
      </form>

      <Link href="/" className="back-to-home-link">← Back to payment methods</Link>
    </div>
  );
}
