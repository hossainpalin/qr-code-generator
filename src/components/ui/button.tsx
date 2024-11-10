import { RefreshCcw } from 'lucide-react';

export default function Button() {
  return (
    <button
      type="submit"
      className="flex-1 bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md">
      <span>
        <RefreshCcw size={16} />
      </span>
      <span>Generate QR Code</span>
    </button>
  );
}
