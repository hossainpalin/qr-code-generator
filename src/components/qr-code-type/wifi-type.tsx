import { useQRCode } from '@/hooks/use-qrcode';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../ui/button';

export default function WiFiType() {
  const [isDirty, setIsDirty] = useState(false);
  const { setQrCodeInput } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);

    const ssid = formData.get('ssid') as string;
    const password = formData.get('password') as string;
    const encryption = formData.get('encryption') as string;
    const hidden = formData.get('hidden') as string;

    const wifiData = `WIFI:T:${encryption};S:${ssid};P:${password};H:${hidden ? 'true' : 'false'};;`;

    setQrCodeInput(wifiData);
    setIsDirty(false);
  };

  // Handle input change and set isDirty state
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    if (e.target.name === 'encryption') {
      if (!value) {
        setIsDirty(true);
        return;
      }
    }

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
          htmlFor="ssid"
          className="text-lg font-medium text-gray-500 mb-2">
          Network Name:
        </label>

        <div>
          <input
            onChange={handleInputChange}
            type="text"
            name="ssid"
            placeholder="Enter SSID"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          <div className="flex items-center gap-2 mt-2">
            <input
              onChange={handleInputChange}
              type="checkbox"
              name="hidden"
              id="hidden"
            />
            <label htmlFor="hidden" className="text-gray-400 font-medium">
              Hidden Network
            </label>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <label
          htmlFor="password"
          className="text-lg font-medium text-gray-500 mb-2">
          Password:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="password"
          placeholder="Enter password"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="w-full flex flex-col">
        <label
          htmlFor="encryption"
          className="text-lg font-medium text-gray-500 mb-2">
          Encryption:
        </label>

        <div className="w-full flex gap-4">
          <label
            htmlFor="none"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={handleInputChange}
              type="radio"
              name="encryption"
              id="none"
              value=""
            />
            None
          </label>

          <label
            htmlFor="wpa/wpa2"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={handleInputChange}
              type="radio"
              name="encryption"
              id="wpa/wpa2"
              value="WPA"
              defaultChecked
            />
            WAP/WAP2
          </label>

          <label
            htmlFor="wep"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={handleInputChange}
              type="radio"
              name="encryption"
              id="wep"
              value="WEP"
            />
            WEP
          </label>
        </div>
      </div>

      <Button disabled={!isDirty}>Generate QR Code</Button>
    </form>
  );
}
