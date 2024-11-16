import Pickr from '@simonwep/pickr';
import '@simonwep/pickr/dist/themes/nano.min.css';
import { useEffect, useRef } from 'react';
import './color-picker.css';

interface ColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

function createPickrInstance(
  element: HTMLElement,
  defaultColor: string,
  onChange: (color: string) => void
) {
  const pickr = Pickr.create({
    el: element,
    theme: 'nano',
    default: defaultColor,
    position: 'bottom-start',
    container: 'body',

    swatches: [
      '#FF0000',
      '#00FF00',
      '#0000FF',
      '#FFFF00',
      '#FF00FF',
      '#00FFFF',
      '#000000'
    ],
    components: {
      preview: true,
      opacity: true,
      hue: true,
      interaction: {
        hex: true,
        rgba: true,
        input: true
      }
    }
  });

  pickr.on('change', (color: Pickr.HSVaColor) => {
    onChange(color.toHSLA().toString(0));
  });

  return pickr;
}

export default function ColorPicker({ color, setColor }: ColorPickerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const pickrRef = useRef<Pickr | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const child = document.createElement('div');
    ref.current?.appendChild(child);
    const pickr = createPickrInstance(child, color, setColor);
    pickrRef.current = pickr;

    return () => {
      pickr.destroyAndRemove();
    };
  }, []);

  useEffect(() => {
    pickrRef.current?.setColor(color);
  }, [color]);

  return <div title="Color" className="w-2" ref={ref} />;
}
