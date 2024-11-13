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
        <div
          className="w-full h-full max-w-[230px] max-h-[230px] flex justify-center items-center"
          ref={qrCodeRef}
        />
      </div>
      <div className="w-full my-5 flex flex-col gap-3">
        <Accordion
          title="Dots Options"
          isOpen={openIndex === 1}
          onClick={() => handleAccordionClick(1)}>
          <>Test</>
        </Accordion>

        <Accordion
          title="Corners Options"
          isOpen={openIndex === 2}
          onClick={() => handleAccordionClick(2)}>
          <>Test</>
        </Accordion>

        <Accordion
          title="Corners Dot Options"
          isOpen={openIndex === 3}
          onClick={() => handleAccordionClick(3)}>
          <>Test</>
        </Accordion>

        <Accordion
          title="Logo"
          isOpen={openIndex === 4}
          onClick={() => handleAccordionClick(4)}>
          <QRCodeLogo />
        </Accordion>
      </div>
      <QRCodeAction />
    </>
  );
}
