import Logo from '../src/assets/logo.png';
import QRCodeGenerator from './components/qr-code-generator';
import QRCodeInputter from './components/qr-code-inputter';

export default function App() {
  return (
    <main className="w-full h-full bg-gray-200 flex flex-col items-start overflow-auto p-6">
      <div className="container max-w-7xl mb-4 flex items-center gap-3">
        <img className="w-16 lg:w-20" src={Logo} alt="logo" />
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">
            QR Code Generator
          </h1>
          <p className="text-gray-600">Create Your Own QR Code Instantly</p>
        </div>
      </div>

      <div className="container max-w-7xl flex flex-wrap lg:flex-nowrap gap-4">
        <div className="w-full lg:w-[65%] bg-white rounded-lg shadow-sm p-6 flex flex-col h-full max-h-fit lg:min-h-[650px]">
          <QRCodeInputter />
        </div>
        <div className="w-full flex flex-col items-start lg:w-[35%] bg-white rounded-lg shadow-sm p-6 h-full max-h-fit lg:min-h-[650px] sticky top-0">
          <QRCodeGenerator />
        </div>
      </div>
    </main>
  );
}
