import Dot from '@/assets/square-options/dot.png';
import ExtraRounded from '@/assets/square-options/extra-rounded.png';
import Square from '@/assets/square-options/square.png';
import { useQRCode } from '@/hooks/use-qrcode';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ColorPicker from './color-picker';

export default function QRCodeSquareOptions() {
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
      cornersSquareOptions: { ...QRCodeOptions.cornersSquareOptions, color }
    });
  }, [color]);

  return (
    <div className="flex gap-3 items-center flex-wrap">
      <div
        onClick={() => {
          setOpenIndex(1);
          setQRCodeOptions({
            ...QRCodeOptions,
            cornersSquareOptions: {
              ...QRCodeOptions.cornersSquareOptions,
              type: undefined
            }
          });
        }}
        title="None"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer text-gray-700',
          openIndex === 1 && 'border-green-500 hover:border-green-500'
        )}>
        <X size={32} />
      </div>

      <div
        onClick={() => {
          setOpenIndex(2);
          setQRCodeOptions({
            ...QRCodeOptions,
            cornersSquareOptions: {
              ...QRCodeOptions.cornersSquareOptions,
              type: 'square'
            }
          });
        }}
        title="Square"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 2 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={Square} alt="square" />
      </div>

      <div
        onClick={() => {
          setOpenIndex(3);
          setQRCodeOptions({
            ...QRCodeOptions,
            cornersSquareOptions: {
              ...QRCodeOptions.cornersSquareOptions,
              type: 'dot'
            }
          });
        }}
        title="Dot"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 3 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={Dot} alt="dots" />
      </div>

      <div
        onClick={() => {
          setOpenIndex(4);
          setQRCodeOptions({
            ...QRCodeOptions,
            cornersSquareOptions: {
              ...QRCodeOptions.cornersSquareOptions,
              type: 'extra-rounded'
            }
          });
        }}
        title="Extra Rounded"
        className={cn(
          'p-2 border-2 border-gray-300 hover:border-gray-400 cursor-pointer',
          openIndex === 4 && 'border-green-500 hover:border-green-500'
        )}>
        <img className="w-[32px]" src={ExtraRounded} alt="rounded" />
      </div>

      <ColorPicker color={color} setColor={setColor} />
    </div>
  );
}
