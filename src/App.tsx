import QRCodeGenerator from './components/qr-code-generator';
import QRCodeInputter from './components/qr-code-inputter';

export default function App() {
  return (
    <main className="w-full h-full bg-gray-200 flex items-start justify-center overflow-auto p-6">
      <div className="container max-w-7xl flex flex-wrap lg:flex-nowrap gap-4">
        <div className="w-full lg:w-[65%] bg-white rounded-lg shadow-sm p-6 flex flex-col h-full min-h-[650px]">
          <QRCodeInputter />
        </div>
        <div className="w-full flex flex-col items-start lg:w-[35%] bg-white rounded-lg shadow-sm p-6 h-full min-h-[650px] sticky top-0">
          <QRCodeGenerator />
        </div>
      </div>
    </main>
  );
}
