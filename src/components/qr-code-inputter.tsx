import { data, QRMode } from '@/data';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import EmailType from './qr-code-type/email-type';
import SmsType from './qr-code-type/sms-type';
import TextType from './qr-code-type/text-type';
import URLType from './qr-code-type/url-type';
import VcardType from './qr-code-type/vcard-type';

export default function QRCodeInputter() {
  const [qrCodeType, setQrCodeType] = useState('URL');

  return (
    <>
      <div className="w-full">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 w-full">
          {data.map(({ id, label, icon: Icon }: QRMode) => (
            <li
              onClick={() => setQrCodeType(label)}
              key={id}
              className={cn(
                'flex w-32 items-center gap-2 text-gray-500 border-b px-2 py-0.5 cursor-pointer hover:bg-gray-200 border-gray-300 font-medium text-sm',
                label === qrCodeType && 'bg-gray-200 text-gray-600'
              )}>
              <span>
                <Icon size={16} />
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h1 className="text-xl font-semibold text-gray-500">
          {qrCodeType} QR Code
        </h1>

        {qrCodeType === 'URL' && <URLType />}
        {qrCodeType === 'VCARD' && <VcardType />}
        {qrCodeType === 'TEXT' && <TextType />}
        {qrCodeType === 'E-MAIL' && <EmailType />}
        {qrCodeType === 'SMS' && <SmsType />}
      </div>
    </>
  );
}
