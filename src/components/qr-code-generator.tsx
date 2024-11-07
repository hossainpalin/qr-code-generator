import { data, QRMode } from '@/data';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import LoadingButton from './ui/loading-button';

export default function QRCodeGenerator() {
  const [selectedOption, setSelectedOption] = useState('URL');

  return (
    <>
      <div className="w-full">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 w-full">
          {data.map(({ id, label, icon: Icon }: QRMode) => (
            <li
              onClick={() => setSelectedOption(label)}
              key={id}
              className={cn(
                'flex w-32 items-center gap-2 text-gray-500 border-b px-2 py-0.5 cursor-pointer hover:bg-gray-200 border-gray-300 font-medium text-sm',
                label === selectedOption && 'bg-gray-200 text-gray-600'
              )}>
              <span>
                <Icon size={16} />
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h1 className="text-xl font-semibold text-gray-500">
          {selectedOption} QR Code
        </h1>

        <div className="mt-4">
          <input
            type="text"
            placeholder={`Enter ${selectedOption}`}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <LoadingButton>
            Generate QR Code
          </LoadingButton>
        </div>
      </div>
    </>
  );
}
