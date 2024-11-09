import { QRCodeContext } from '@/context/qrcode-context';
import { useContext } from 'react';

export function useQRCode() {
  const context = useContext(QRCodeContext);

  if (!context) {
    throw new Error('useQRCode must be used within a QRCodeProvider');
  }

  return { ...context };
}
