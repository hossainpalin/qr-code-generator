import { createContext } from 'react';

export interface QRCodeContextType {
  qrCodeInput: string | string[];
  setQrCodeInput: (value: string | string[]) => void;
}

export const QRCodeContext = createContext<QRCodeContextType | null>(null);
