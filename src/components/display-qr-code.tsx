import { Download } from 'lucide-react';
import QRCode from '../../public/qr.webp';

export default function DisplayQRCode() {
  return (
    <>
      <div className="w-full bg-blue-100">
        <img src={QRCode} alt="test" />
      </div>
      <div>sds</div>
      <div className="flex justify-center items-center gap-5 w-full">
        <button className="flex-1 bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md">
          <span>Download PNG</span>
          <span>
            <Download size={16} />
          </span>
        </button>

        <button className="flex-1 bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md">
          <span>Download SVG</span>
          <span>
            <Download size={16} />
          </span>
        </button>
      </div>
    </>
  );
}
