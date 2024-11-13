import { useQRCode } from '@/hooks/use-qrcode';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '../ui/button';

export default function SmsType() {
  const [isDirty, setIsDirty] = useState(false);
  const { qrCode, QRCodeOptions, setQRCodeOptions } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);
    const number = formData.get('number') as string;
    const message = formData.get('message') as string;

    const sms = `sms:${number}?body=${message}`;

    setQRCodeOptions({ ...QRCodeOptions, data: sms });
    setIsDirty(false);
  };

  // Handle input change and set isDirty state
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    if (!value) {
      setIsDirty(false);
      return;
    }

    setIsDirty(true);
  };

  useEffect(() => {
    if (!qrCode) return;

    qrCode.update(QRCodeOptions);
  }, [QRCodeOptions, qrCode]);

  return (
    <form onSubmit={generateQRCode} className="mt-4 flex flex-col gap-5">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-10">
          <input
            onChange={handleInputChange}
            type="text"
            name="number"
            placeholder="Your phone number"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          <textarea
            onChange={handleInputChange}
            name="message"
            placeholder="Enter your text here"
            required
            className="w-full min-h-40 max-h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <Button disabled={!isDirty}>Generate QR Code</Button>
    </form>
  );
}
