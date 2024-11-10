import { useQRCode } from '@/hooks/use-qrcode';
import { FormEvent } from 'react';
import Button from '../ui/button';

export default function URLType() {
  const { setQrCodeInput } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);
    const url = formData.get('url') as string;
    setQrCodeInput(url);
  };

  return (
    <form onSubmit={generateQRCode} className="mt-4 flex flex-col gap-5">
      <input
        type="url"
        name="url"
        placeholder="Enter URL"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
      />

      <Button />
    </form>
  );
}