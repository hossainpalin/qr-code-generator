import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AccordionProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function Accordion({
  children,
  title,
  isOpen,
  onClick
}: AccordionProps) {
  return (
    <div className="w-full">
      <div
        className={cn(
          'flex justify-between items-center py-1.5 px-3 cursor-pointer bg-gray-200 transition-opacity duration-200 ease-out',
          isOpen && 'bg-blue-700 transition-opacity duration-200 ease-in'
        )}
        onClick={onClick}>
        <span
          className={cn('font-medium text-gray-700', isOpen && 'text-white')}>
          {title}
        </span>
        <svg
          className={cn('fill-current text-gray-700', isOpen && 'text-white')}
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            y="5"
            width="12"
            height="2"
            rx="1"
            className={cn(
              'transform origin-center transition duration-200 ease-out',
              isOpen && '!rotate-180'
            )}
          />
          <rect
            y="5"
            width="12"
            height="2"
            rx="1"
            className={cn(
              'transform origin-center rotate-90 transition duration-200 ease-out',
              isOpen && '!rotate-180'
            )}
          />
        </svg>
      </div>

      {/* <div className={isOpen ? 'accordion-show' : 'accordion'}>{children}</div> */}

      <div
        className={cn(
          'grid overflow-hidden',
          isOpen && 'grid-rows-1 opacity-100',
          !isOpen && 'grid-rows-0 opacity-0'
        )}>
        <div className={cn('w-full bg-gray-100 p-3', !isOpen && 'hidden')}>
          {children}
        </div>
      </div>
    </div>
  );
}
