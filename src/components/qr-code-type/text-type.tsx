import { useQRCode } from '@/hooks/use-qrcode';
import { FormEvent } from 'react';
import Button from '../ui/button';

export default function TextType() {
  const { setQrCodeInput } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);
    const text = formData.get('text') as string;
    setQrCodeInput(text);
  };

  return (
    <form onSubmit={generateQRCode} className="mt-4 flex flex-col gap-5">
      <textarea
        name="text"
        placeholder="Enter Text"
        required
        className="w-full min-h-40 max-h-[350px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
      />

      <Button />
    </form>
  );
}
