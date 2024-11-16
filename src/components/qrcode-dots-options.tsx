import ClassyRounded from '@/assets/dots-options/classy-rounded.png';
import Classy from '@/assets/dots-options/classy.png';
import Dots from '@/assets/dots-options/dots.png';
import ExtraRounded from '@/assets/dots-options/extra-rounded.png';
import Rounded from '@/assets/dots-options/rounded.png';
import Square from '@/assets/dots-options/square.png';
import { useQRCode } from '@/hooks/use-qrcode';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import ColorPicker from './color-picker';

export default function QRCodeDotsOptions() {
  const [color, setColor] = useState('#151515');
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const { qrCode, QRCodeOptions, setQRCodeOptions } = useQRCode();

  useEffect(() => {
    if (!qrCode) return;

    qrCode.update(QRCodeOptions);
  }, [QRCodeOptions, qrCode]);

  useEffect(() => {
    setQRCodeOptions({
      ...QRCodeOptions,
      dotsOptions: { ...QRCodeOptions.dotsOptions, color }
    });
  }, [color]);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <div
        onClick={() => {
          setOpenIndex(1);
          setQRCodeOptions({
            ...QRCodeOptions,
            dotsOptions: { ...QRCodeOptions.dotsOptions, type: 'square' }
          });
        }}
        title="Square"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 1 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={Square} alt="square" />
      </div>

      <div
        onClick={() => {
          setOpenIndex(2);
          setQRCodeOptions({
            ...QRCodeOptions,
            dotsOptions: { ...QRCodeOptions.dotsOptions, type: 'dots' }
          });
        }}
        title="Dots"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 2 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={Dots} alt="dots" />
      </div>

      <div
        onClick={() => {
          setOpenIndex(3);
          setQRCodeOptions({
            ...QRCodeOptions,
            dotsOptions: { ...QRCodeOptions.dotsOptions, type: 'rounded' }
          });
        }}
        title="Rounded"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 3 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={Rounded} alt="rounded" />
      </div>

      <div
        onClick={() => {
          setOpenIndex(4);
          setQRCodeOptions({
            ...QRCodeOptions,
            dotsOptions: { ...QRCodeOptions.dotsOptions, type: 'extra-rounded' }
          });
        }}
        title="Extra Rounded"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 4 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={ExtraRounded} alt="extra-rounded" />
      </div>

      <div
        onClick={() => {
          setOpenIndex(5);
          setQRCodeOptions({
            ...QRCodeOptions,
            dotsOptions: { ...QRCodeOptions.dotsOptions, type: 'classy' }
          });
        }}
        title="Classy"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 5 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={Classy} alt="classy" />
      </div>

      <div
        onClick={() => {
          setOpenIndex(6);
          setQRCodeOptions({
            ...QRCodeOptions,
            dotsOptions: {
              ...QRCodeOptions.dotsOptions,
              type: 'classy-rounded'
            }
          });
        }}
        title="Classy Rounded"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 6 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={ClassyRounded} alt="classy-rounded" />
      </div>

      <ColorPicker color={color} setColor={setColor} />
    </div>
  );
}
