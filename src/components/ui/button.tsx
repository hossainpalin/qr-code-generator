import { RefreshCcw } from 'lucide-react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        type={type || 'submit'}
        className="flex-1 disabled:bg-gray-600 disabled:cursor-not-allowed bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-2 text-white px-3 py-2 rounded-md">
        <span>
          <RefreshCcw size={16} />
        </span>
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
