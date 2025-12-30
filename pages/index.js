import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const amount = 150.00; // Simulated amount

  return (
    <div className="payment-container">
      <h1 className="payment-header">Choose Your Payment Method</h1>
      <p className="payment-sub-header">Amount to pay: <span className="text-highlight">Ksh {amount.toFixed(2)}</span></p>

      <div className="payment-method-grid">
        {/* MPESA Card */}
        <Link href="/mpesa" className="method-card mpesa-option">
            <div className="method-icon-container">
                <i className="fas fa-mobile-alt method-icon"></i>
            </div>
            <h2 className="method-title">M-PESA</h2>
            <p className="method-description">Pay securely via M-PESA STK Push.</p>
        </Link>

        {/* Bank Transfer Card */}
        <Link href="/bank" className="method-card bank-option">
            <div className="method-icon-container">
                <i className="fas fa-university method-icon"></i>
            </div>
            <h2 className="method-title">Bank Transfer</h2>
            <p className="method-description">Transfer funds from your bank account.</p>
        </Link>

        {/* Mobile Wallet Card */}
        <Link href="/wallet" className="method-card wallet-option">
            <div className="method-icon-container">
                <i className="fas fa-wallet method-icon"></i>
            </div>
            <h2 className="method-title">Mobile Wallet</h2>
            <p className="method-description">Use your preferred mobile wallet service.</p>
        </Link>
      </div>
    </div>
  );
}
