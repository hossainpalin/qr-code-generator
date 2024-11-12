import { useQRCode } from '@/hooks/use-qrcode';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../ui/button';

export default function BitcoinType() {
  const [isDirty, setIsDirty] = useState(false);
  const { setQrCodeInput } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);

    const cryptocurrency = formData.get('cryptocurrency') as string;
    const amount = formData.get('amount') as string;
    const receiver = formData.get('receiver') as string;
    const label = formData.get('label') as string;
    const message = formData.get('message') as string;

    const bitcoinData = `${cryptocurrency}:${receiver}?amount=${amount}&label=${label}&message=${message}`;

    setQrCodeInput(bitcoinData);
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
        <label
          htmlFor="cryptocurrency"
          className="text-lg font-medium text-gray-500 mb-2">
          Cryptocurrency:
        </label>

        <div className="w-full flex gap-4">
          <label
            htmlFor="bitcoin"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={handleInputChange}
              type="radio"
              name="cryptocurrency"
              id="bitcoin"
              value="bitcoin"
              defaultChecked
            />
            Bitcoin
          </label>

          <label
            htmlFor="bitcoincash"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={handleInputChange}
              type="radio"
              name="cryptocurrency"
              id="bitcoincash"
              value="bitcoincash"
            />
            Bitcoin Cash
          </label>

          <label
            htmlFor="ether"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={handleInputChange}
              type="radio"
              name="cryptocurrency"
              id="ether"
              value="ether"
            />
            Ether
          </label>

          <label
            htmlFor="litecoin"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={handleInputChange}
              type="radio"
              name="cryptocurrency"
              id="litecoin"
              value="litecoin"
            />
            Litecoin
          </label>

          <label
            htmlFor="dash"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={handleInputChange}
              type="radio"
              name="cryptocurrency"
              id="dash"
              value="dash"
            />
            Dash
          </label>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <label
          htmlFor="amount"
          className="text-lg font-medium text-gray-500 mb-2">
          Amount:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="amount"
          placeholder="Enter amount"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="w-full flex flex-col">
        <label
          htmlFor="receiver"
          className="text-lg font-medium text-gray-500 mb-2">
          Receiver:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="receiver"
          placeholder="Enter address"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="w-full flex flex-col">
        <label
          htmlFor="label"
          className="text-lg font-medium text-gray-500 mb-2">
          Label:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="label"
          placeholder="Enter label"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="w-full flex flex-col">
        <label
          htmlFor="message"
          className="text-lg font-medium text-gray-500 mb-2">
          Message:
        </label>

        <textarea
          onChange={handleInputChange}
          name="message"
          placeholder="Enter your message"
          className="w-full min-h-40 max-h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <Button disabled={!isDirty}>Generate QR Code</Button>
    </form>
  );
}
