export default function App() {
  return (
    <main className="w-full h-full bg-gray-200 flex items-center justify-center">
      <div className="container max-w-7xl flex flex-wrap md:flex-nowrap gap-4">
        <div className="w-full md:w-3/5 bg-white rounded-md shadow-sm p-5">
          QR Code Generator
        </div>
        <div className="w-full md:w-2/5 bg-white rounded-md shadow-sm p-5">
          Display QR Code
        </div>
      </div>
    </main>
  );
}
