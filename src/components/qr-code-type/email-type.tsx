import { useQRCode } from '@/hooks/use-qrcode';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../ui/button';

export default function EmailType() {
  const [isDirty, setIsDirty] = useState(false);
  const { setQrCodeInput } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const url = `mailto:${email}?subject=${subject}&body=${message}`;

    setQrCodeInput(url);
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

  return (
    <form onSubmit={generateQRCode} className="mt-4 flex flex-col gap-5">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-10">
          <input
            onChange={handleInputChange}
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            onChange={handleInputChange}
            type="text"
            name="subject"
            placeholder="Enter email subject"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          <textarea
            onChange={handleInputChange}
            name="message"
            placeholder="Enter your message"
            required
            className="w-full min-h-40 max-h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <Button disabled={!isDirty}>Generate QR Code</Button>
    </form>
  );
}
