import { useQRCode } from '@/hooks/use-qrcode';
import { convertToUTC } from '@/lib/utils';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '../ui/button';

export default function EventType() {
  const [isDirty, setIsDirty] = useState(false);
  const { qrCode, QRCodeOptions, setQRCodeOptions } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);
    const name = formData.get('name') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const start = formData.get('start') as string;
    const end = formData.get('end') as string;

    const utcStartDate = convertToUTC(start);
    const utcEndDate = convertToUTC(end);

    const eventData = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${name}
LOCATION:${location}
DESCRIPTION:${description}
DTSTART:${utcStartDate}
DTEND:${utcEndDate}
END:VEVENT
END:VCALENDAR
`.trim();

    setQRCodeOptions({ ...QRCodeOptions, data: eventData });
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
        <label
          htmlFor="name"
          className="text-lg font-medium text-gray-500 mb-2">
          Event name:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Enter event name"
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="w-full flex flex-col">
        <label
          htmlFor="location"
          className="text-lg font-medium text-gray-500 mb-2">
          Event location:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="location"
          placeholder="Enter event location"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="w-full flex flex-col">
        <label
          htmlFor="description"
          className="text-lg font-medium text-gray-500 mb-2">
          Event description:
        </label>

        <textarea
          onChange={handleInputChange}
          name="description"
          placeholder="Enter event description"
          className="w-full min-h-40 max-h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="w-full flex flex-col">
        <label
          htmlFor="name"
          className="text-lg font-medium text-gray-500 mb-2">
          Event duration:
        </label>

        <div className="flex justify-center items-center gap-5">
          <input
            onChange={handleInputChange}
            type="datetime-local"
            name="start"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            onChange={handleInputChange}
            type="datetime-local"
            name="end"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <Button disabled={!isDirty}>Generate QR Code</Button>
    </form>
  );
}
