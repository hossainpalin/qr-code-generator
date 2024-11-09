import { QRCodeContext } from '@/context/qrcode-context';
import { ReactNode, useState } from 'react';

interface QRCodeProviderProps {
  children: ReactNode;
}

export function QrCodeProvider({ children }: QRCodeProviderProps) {
  const [qrCodeInput, setQrCodeInput] = useState<string | string[]>('');

  return (
    <QRCodeContext.Provider value={{ qrCodeInput, setQrCodeInput }}>
      {children}
    </QRCodeContext.Provider>
  );
}
