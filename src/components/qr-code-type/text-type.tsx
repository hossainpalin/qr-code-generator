import { useQRCode } from '@/hooks/use-qrcode';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '../ui/button';

export default function TextType() {
  const [isDirty, setIsDirty] = useState(false);
  const { qrCode, QRCodeOptions, setQRCodeOptions } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);
    const text = formData.get('text') as string;

    setQRCodeOptions({ ...QRCodeOptions, data: text });
    setIsDirty(false);
  };

  // Handle input change and set isDirty state
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
      <textarea
        onChange={handleInputChange}
        name="text"
        placeholder="Enter Text"
        required
        className="w-full min-h-40 max-h-[350px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
      />

      <Button disabled={!isDirty}>Generate QR Code</Button>
    </form>
  );
}
