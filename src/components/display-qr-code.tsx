import { useState } from 'react';
import QRCode from '../../public/qr.webp';
import Accordion from './accordion';
import QRCodeAction from './qr-code-action';

export default function DisplayQRCode() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleAccordionClick = (index: number) => {
    if (openIndex === index) {
      return setOpenIndex(null);
    }

    setOpenIndex(index);
  };

  return (
    <>
      <div className="w-full bg-blue-100 rounded-lg justify-center items-center flex">
        <img className="size-[250px]" src={QRCode} alt="test" />
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
          <>Test</>
        </Accordion>
      </div>
      <QRCodeAction />
    </>
  );
}
