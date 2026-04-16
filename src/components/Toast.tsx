import { useEffect } from 'react';
import './Toast.css';

interface ToastProps {
  message: string;
  show: boolean;
  onHide: () => void;
  duration?: number;
}

function Toast({ message, show, onHide, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onHide, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onHide]);

  return (
    <div className={`toast ${show ? 'toast-visible' : ''}`}>
      {message}
    </div>
  );
}

export default Toast;
