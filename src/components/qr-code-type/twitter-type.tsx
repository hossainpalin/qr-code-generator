import { useQRCode } from '@/hooks/use-qrcode';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '../ui/button';

export default function TwitterType() {
  const [isDirty, setIsDirty] = useState(false);
  const [twitterOption, setTwitterOption] = useState('profile');
  const { qrCode, QRCodeOptions, setQRCodeOptions } = useQRCode();

  // Generate QR Code
  const generateQRCode = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const formData = new FormData(target);

    const twitter = formData.get('twitter') as string;
    const username = formData.get('username') as string;
    const tweet = formData.get('tweet') as string;

    const twitterData =
      twitter === 'profile'
        ? `https://twitter.com/${username}`
        : `https://twitter.com/intent/tweet?text=${tweet}`;

    setQRCodeOptions({ ...QRCodeOptions, data: twitterData });
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

  // Handle input option change
  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTwitterOption(value);
  };

  useEffect(() => {
    if (!qrCode) return;

    qrCode.update(QRCodeOptions);
  }, [QRCodeOptions, qrCode]);

  return (
    <form onSubmit={generateQRCode} className="mt-4 flex flex-col gap-5">
      <div className="w-full flex flex-col">
        <label
          htmlFor="twitter-option"
          className="text-lg font-medium text-gray-500 mb-2">
          Choose an option:
        </label>

        <div className="w-full flex gap-4">
          <label
            htmlFor="profile"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={(e) => {
                handleInputChange(e);
                handleOptionChange(e);
              }}
              type="radio"
              name="twitter"
              id="profile"
              value="profile"
              defaultChecked
            />
            Link to your profile
          </label>

          <label
            htmlFor="post"
            className="flex justify-center items-center gap-2 text-gray-400 font-medium">
            <input
              onChange={(e) => {
                handleInputChange(e);
                handleOptionChange(e);
              }}
              type="radio"
              name="twitter"
              id="post"
              value="post"
            />
            Post a tweet
          </label>
        </div>
      </div>

      {twitterOption === 'profile' && (
        <div className="w-full flex flex-col">
          <label
            htmlFor="username"
            className="text-lg font-medium text-gray-500 mb-2">
            Your username:
          </label>

          <input
            onChange={handleInputChange}
            type="text"
            name="username"
            placeholder="Enter username"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}

      {twitterOption === 'post' && (
        <div className="w-full flex flex-col">
          <label
            htmlFor="tweet"
            className="text-lg font-medium text-gray-500 mb-2">
            Your tweet:
          </label>

          <textarea
            onChange={handleInputChange}
            name="tweet"
            placeholder="Enter your tweet"
            required
            className="w-full min-h-40 max-h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}

      <Button disabled={!isDirty}>Generate QR Code</Button>
    </form>
  );
}
