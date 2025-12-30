import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function WalletPayment() {
  const router = useRouter();
  const [walletId, setWalletId] = useState('');
  const [amount, setAmount] = useState('150.00'); // Default amount

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate Mobile Wallet Payment
    console.log(`Simulating Mobile Wallet Payment for ${walletId} with amount ${amount}`);
    router.push(`/wallet-confirm?details=${walletId}&amount=${amount}`);
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-header">Complete <span className="text-highlight-wallet">Mobile Wallet</span> Payment</h1>
      <p className="form-warning"><i className="fas fa-info-circle"></i> This is a simulated mobile wallet payment. You would typically confirm this transaction directly through your wallet app.</p>

      <form onSubmit={handleSubmit} className="payment-form-card">
        <div className="input-group-form">
          <label htmlFor="walletId" className="input-label"><i className="fas fa-fingerprint"></i> Wallet ID / Phone Number (Simulated)</label>
          <input
            type="text"
            id="walletId"
            name="walletId"
            className="input-field"
            placeholder="e.g., Your Wallet ID or Phone No."
            value={walletId}
            onChange={(e) => setWalletId(e.target.value)}
            required
          />
        </div>
        <div className="input-group-form">
          <label htmlFor="amount" className="input-label"><i className="fas fa-money-bill-alt"></i> Amount (Ksh)</label>
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
        <button type="submit" className="submit-button-form wallet-button-form">Proceed with Wallet Payment <i className="fas fa-arrow-right"></i></button>
      </form>

      <Link href="/" className="back-to-home-link">← Back to payment methods</Link>
    </div>
  );
}
