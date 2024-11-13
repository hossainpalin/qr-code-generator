import { useQRCode } from '@/hooks/use-qrcode';
import { useEffect, useRef, useState } from 'react';
import QRCodeAction from './qr-code-action';
import QRCodeLogo from './qrcode-logo';
import Accordion from './ui/accordion';

export default function QRCodeGenerator() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const { qrCode } = useQRCode();

  const handleAccordionClick = (index: number) => {
    if (openIndex === index) {
      return setOpenIndex(null);
    }

    setOpenIndex(index);
  };

  useEffect(() => {
    if (!qrCodeRef.current || !qrCode) {
      return;
    }

    qrCode.append(qrCodeRef.current);
  }, [qrCode, qrCodeRef]);

  return (
    <>
      <div className="w-full relative bg-gray-200 rounded-lg justify-center items-center flex p-8">
        <div className="w-[250px] h-[250px]" ref={qrCodeRef} />

        {/* {qrCodeLogo && (
          <img
            src={qrCodeLogo}
            alt="logo"
            className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white"
          />
        )} */}
      </div>
      <div className="w-full my-5 flex flex-col gap-3">
        <Accordion
          title="Frame"
          isOpen={openIndex === 1}
          onClick={() => handleAccordionClick(1)}>
          <>Test</>
        </Accordion>

        <Accordion
          title="Shape & Color"
          isOpen={openIndex === 2}
          onClick={() => handleAccordionClick(2)}>
          <>Test</>
        </Accordion>

        <Accordion
          title="Logo"
          isOpen={openIndex === 3}
          onClick={() => handleAccordionClick(3)}>
          <QRCodeLogo />
        </Accordion>
      </div>
      <QRCodeAction />
    </>
  );
}
