import { useQRCode } from '@/hooks/use-qrcode';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../ui/button';

export default function VCardType() {
  const [isDirty, setIsDirty] = useState(false);
  const { setQrCodeInput } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);

    const firstName = formData.get('first-name') as string;
    const lastName = formData.get('last-name') as string;
    const mobile = formData.get('mobile') as string;
    const phone = formData.get('phone') as string;
    const fax = formData.get('fax') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const jobTitle = formData.get('job-title') as string;
    const street = formData.get('street') as string;
    const city = formData.get('city') as string;
    const zip = formData.get('zip') as string;
    const state = formData.get('state') as string;
    const country = formData.get('country') as string;
    const website = formData.get('website') as string;

    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
TEL;TYPE=CELL:${mobile}
TEL;TYPE=WORK:${phone}
TEL;TYPE=FAX:${fax}
EMAIL:${email}
ORG:${company}
TITLE:${jobTitle}
ADR;TYPE=WORK:;;${street};${city};${state};${zip};${country}
URL:${website}
END:VCARD
`.trim();

    setQrCodeInput(vCardData);
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
      {/*Name section*/}
      <div className="w-full flex flex-col">
        <label
          htmlFor="name"
          className="text-lg font-medium text-gray-500 mb-2">
          Your Name:
        </label>
        <div className="w-full flex gap-10">
          <input
            onChange={handleInputChange}
            type="text"
            name="first-name"
            placeholder="First name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            onChange={handleInputChange}
            type="text"
            name="last-name"
            placeholder="Last name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/*Contact section*/}
      <div className="w-full flex flex-col">
        <label
          htmlFor="contact"
          className="text-lg font-medium text-gray-500 mb-2">
          Contact:
        </label>

        <div className="w-full flex flex-col gap-4">
          <input
            onChange={handleInputChange}
            type="text"
            name="mobile"
            placeholder="Mobile number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          <div className="w-full flex gap-10">
            <input
              onChange={handleInputChange}
              type="text"
              name="phone"
              placeholder="Phone number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            />

            <input
              onChange={handleInputChange}
              type="text"
              name="fax"
              placeholder="Fax number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/*Email section*/}
      <div className="w-full flex flex-col">
        <label
          htmlFor="email"
          className="text-lg font-medium text-gray-500 mb-2">
          Email:
        </label>

        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="Email address"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/*Company section*/}
      <div className="w-full flex flex-col">
        <label
          htmlFor="company"
          className="text-lg font-medium text-gray-500 mb-2">
          Company:
        </label>

        <div className="w-full flex gap-10">
          <input
            onChange={handleInputChange}
            type="text"
            name="company"
            placeholder="Company name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            onChange={handleInputChange}
            type="text"
            name="job-title"
            placeholder="Job title"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/*Street section*/}
      <div className="w-full flex flex-col">
        <label
          htmlFor="street"
          className="text-lg font-medium text-gray-500 mb-2">
          Street:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="street"
          placeholder="Street address"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/*City section*/}
      <div className="w-full flex flex-col">
        <label
          htmlFor="city"
          className="text-lg font-medium text-gray-500 mb-2">
          City:
        </label>

        <div className="w-full flex gap-10">
          <input
            onChange={handleInputChange}
            type="text"
            name="city"
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            onChange={handleInputChange}
            type="text"
            name="zip"
            placeholder="Zip code"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/*State section*/}
      <div className="w-full flex flex-col">
        <label
          htmlFor="state"
          className="text-lg font-medium text-gray-500 mb-2">
          State:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="state"
          placeholder="State"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/*Country section*/}
      <div className="w-full flex flex-col">
        <label
          htmlFor="country"
          className="text-lg font-medium text-gray-500 mb-2">
          Country:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="country"
          placeholder="Country"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/*Website section*/}
      <div className="w-full flex flex-col">
        <label
          htmlFor="website"
          className="text-lg font-medium text-gray-500 mb-2">
          Website:
        </label>

        <input
          onChange={handleInputChange}
          type="text"
          name="website"
          placeholder="Website URL"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <Button disabled={!isDirty}>Generate QR Code</Button>
    </form>
  );
}
