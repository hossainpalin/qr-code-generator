import { useQRCode } from '@/hooks/use-qrcode';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';
import { FileExtension } from 'qr-code-styling';
import { useEffect, useState } from 'react';

export default function QRCodeAction() {
  const [isDirty, setIsDirty] = useState(false);
  const { qrCode, QRCodeOptions } = useQRCode();

  const downloadQRCode = (ext: FileExtension) => {
    qrCode.download({ name: `qr-code.${ext}`, extension: ext });
  };

  useEffect(() => {
    if (!qrCode) return;

    qrCode.update(QRCodeOptions);

    if (qrCode._options.data !== 'qr-code-generator') {
      setIsDirty(true);
      return;
    }
  }, [qrCode, QRCodeOptions]);

  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <button
        disabled={!isDirty}
        onClick={() => downloadQRCode('png')}
        className={cn(
          'flex-1 bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md',
          !isDirty && 'cursor-not-allowed'
        )}>
        <span>Download PNG</span>
        <span>
          <Download size={16} />
        </span>
      </button>

      <button
        disabled={!isDirty}
        onClick={() => downloadQRCode('svg')}
        className={cn(
          'flex-1 bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md',
          !isDirty && 'cursor-not-allowed'
        )}>
        <span>Download SVG</span>
        <span>
          <Download size={16} />
        </span>
      </button>
    </div>
  );
}
