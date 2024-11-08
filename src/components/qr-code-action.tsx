import { Download } from 'lucide-react';

export default function QRCodeAction() {
  return (
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
  );
}
