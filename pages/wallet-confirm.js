import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function WalletConfirmation() {
  const router = useRouter();
  const { details, amount } = router.query;
  const [displayAmount, setDisplayAmount] = useState('0.00');

  useEffect(() => {
    if (amount) {
      setDisplayAmount(parseFloat(amount).toFixed(2));
    }
  }, [amount]);

  return (
    <div className="confirmation-wrapper">
      <div className="confirmation-card wallet-confirmation-card">
        <div className="confirmation-icon-circle wallet-icon-circle">
            <i className="fas fa-check-circle confirmation-check-icon"></i>
        </div>
        <h1 className="confirmation-main-title">Mobile Wallet Payment Initiated!</h1>
        <p className="confirmation-message">A simulated payment of <strong className="text-highlight">Ksh {displayAmount}</strong> to <strong>{details || 'your mobile wallet'}</strong> has been processed.</p>
        <p className="confirmation-important-note">This is a simulation. You would typically receive a direct confirmation from your mobile wallet provider.</p>
        <div className="confirmation-spinner"></div>
        <p className="confirmation-status-text">Awaiting simulated wallet confirmation...</p>
      </div>
      <Link href="/" className="back-to-home-link">← Return to Home</Link>
    </div>
  );
}
