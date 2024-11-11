import { useQRCode } from '@/hooks/use-qrcode';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../ui/button';

export default function URLType() {
  const [isDirty, setIsDirty] = useState(false);
  const { setQrCodeInput } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);
    const url = formData.get('url') as string;
    setQrCodeInput(url);
    setIsDirty(false);
  };

  // Handle input change and set isDirty state
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) {
      setIsDirty(false);
      return;
    }

    setIsDirty(true);
  };

  return (
    <form onSubmit={generateQRCode} className="mt-4 flex flex-col gap-5">
      <input
        onChange={handleInputChange}
        type="url"
        name="url"
        placeholder="Enter URL"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
      />

      <Button disabled={!isDirty}>Generate QR Code</Button>
    </form>
  );
}
