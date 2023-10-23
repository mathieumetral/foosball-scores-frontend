import {ReactNode, MouseEvent} from 'react';
import {twMerge} from 'tailwind-merge';

interface Props {
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
  className?: string;
  type?: 'submit';
  disabled?: boolean;
}

export function Button({children, onClick, type, className, disabled}: Props) {
  return (
    <button
      onMouseDown={evt => {
        evt.preventDefault();
        evt.stopPropagation();
      }}
      onClick={onClick}
      type={type}
      className={twMerge(
        'rounded-full bg-blue-600 px-4 py-1.5 text-white',
        disabled ? 'bg-blue-300 pointer-events-none' : 'bg-blue-600',
        className
      )}
    >
      {children}
    </button>
  );
}
