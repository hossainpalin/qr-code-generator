import { QRCodeContext } from '@/context/qrcode-context';
import QRCodeStyling, {
  CornerDotType,
  CornerSquareType,
  DotType,
  DrawType,
  ErrorCorrectionLevel,
  Mode,
  Options,
  TypeNumber
} from 'qr-code-styling';
import { ReactNode, useState } from 'react';

interface QRCodeProviderProps {
  children: ReactNode;
}

export function QrCodeProvider({ children }: QRCodeProviderProps) {
  const [QRCodeOptions, setQRCodeOptions] = useState<Options>({
    width: 250,
    height: 250,
    type: 'svg' as DrawType,
    data: 'qr-code-generator',
    image: '',
    margin: 0,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: 'Byte' as Mode,
      errorCorrectionLevel: 'Q' as ErrorCorrectionLevel
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.5,
      margin: 10,
      crossOrigin: 'anonymous'
    },
    dotsOptions: {
      color: '#151515',
      type: 'square' as DotType
    },
    backgroundOptions: {
      color: '#5FD4F300'
    },
    cornersSquareOptions: {
      color: '#151515',
      type: 'square' as CornerSquareType
    },
    cornersDotOptions: {
      color: '#151515',
      type: 'square' as CornerDotType
    }
  });
  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(QRCodeOptions));

  return (
    <QRCodeContext.Provider value={{ qrCode, QRCodeOptions, setQRCodeOptions }}>
      {children}
    </QRCodeContext.Provider>
  );
}
