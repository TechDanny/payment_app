import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MpesaConfirmation() {
  const router = useRouter();
  const { phoneNumber, amount } = router.query;
  const [displayAmount, setDisplayAmount] = useState('0.00');

  useEffect(() => {
    if (amount) {
      setDisplayAmount(parseFloat(amount).toFixed(2));
    }
  }, [amount]);

  return (
    <div className="confirmation-wrapper">
      <div className="confirmation-card success-card">
        <div className="confirmation-icon-circle">
            <i className="fas fa-check-circle confirmation-check-icon"></i>
        </div>
        <h1 className="confirmation-main-title">M-PESA STK Push Initiated!</h1>
        <p className="confirmation-message">Please check your phone (<strong>{phoneNumber || 'your phone'}</strong>) to complete the payment of <strong className="text-highlight">Ksh {displayAmount}</strong>.</p>
        <p className="confirmation-important-note"><i className="fas fa-exclamation-triangle"></i> DO NOT close this page until you confirm payment on your phone.</p>
        <div className="confirmation-spinner"></div>
        <p className="confirmation-status-text">Waiting for M-PESA confirmation...</p>
      </div>
      <Link href="/" className="back-to-home-link">← Return to Home</Link>
    </div>
  );
}
