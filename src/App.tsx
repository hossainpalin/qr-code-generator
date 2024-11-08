import DisplayQRCode from './components/display-qr-code';
import QRCodeGenerator from './components/qr-code-generator';

export default function App() {
  return (
    <main className="w-full h-full bg-gray-200 flex items-center justify-center">
      <div className="container max-w-7xl flex flex-wrap md:flex-nowrap gap-4">
        <div className="w-full md:w-[65%] bg-white rounded-lg shadow-sm p-6 flex flex-col max-h-fit">
          <QRCodeGenerator />
        </div>
        <div className="w-full flex flex-col items-start md:w-[35%] bg-white rounded-lg shadow-sm p-6 h-full min-h-[650px]">
          <DisplayQRCode />
        </div>
      </div>
    </main>
  );
}
