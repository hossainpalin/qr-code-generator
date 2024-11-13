import QRCodeStyling, { Options } from 'qr-code-styling';
import { createContext } from 'react';

export interface QRCodeContextType {
  QRCodeOptions: Options;
  setQRCodeOptions: (options: Options) => void;
  qrCode: QRCodeStyling;
}

export const QRCodeContext = createContext<QRCodeContextType | null>(null);
