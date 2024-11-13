import Logo1 from '@/assets/logo-1.svg';
import Logo2 from '@/assets/logo-2.svg';
import { useQRCode } from '@/hooks/use-qrcode';
import { cn } from '@/lib/utils';
import { Upload, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function QRCodeLogo() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const imageRef = useRef<HTMLInputElement>(null);

  const { qrCode, QRCodeOptions, setQRCodeOptions } = useQRCode();

  useEffect(() => {
    if (!qrCode) return;

    qrCode.update(QRCodeOptions);
  }, [QRCodeOptions, qrCode]);

  return (
    <div className="flex gap-3 items-center">
      <div
        onClick={() => {
          setOpenIndex(1);
          setQRCodeOptions({ ...QRCodeOptions, image: '' });
        }}
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer text-gray-700',
          openIndex === 1 && 'border-green-500 hover:border-green-500'
        )}>
        <X size={32} />
      </div>

      <div
        onClick={() => {
          setOpenIndex(2);
          setQRCodeOptions({ ...QRCodeOptions, image: Logo1 });
        }}
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 2 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={Logo1} alt="logo1" />
      </div>

      <div
        onClick={() => {
          setOpenIndex(3);
          setQRCodeOptions({ ...QRCodeOptions, image: Logo2 });
        }}
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 3 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={Logo2} alt="logo2" />
      </div>

      <div
        onClick={() => {
          setOpenIndex(4);
          imageRef.current?.click();
        }}
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer text-gray-700',
          openIndex === 4 && 'border-green-500 hover:border-green-500'
        )}>
        <Upload size={32} />
        <input
          ref={imageRef}
          className="hidden sr-only"
          type="file"
          name="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onloadend = () => {
              setQRCodeOptions({
                ...QRCodeOptions,
                image: reader.result as string
              });
            };

            reader.readAsDataURL(file);
          }}
        />
      </div>
    </div>
  );
}
