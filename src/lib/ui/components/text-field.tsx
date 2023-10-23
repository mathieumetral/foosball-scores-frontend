import {ChangeEvent, forwardRef} from 'react';
import {clsx} from 'clsx';

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email' | 'number';
  name?: string;
  id?: string;
  className?: string;
  description?: string;
  errorMessage?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({label, placeholder, value, onChange, type = 'text', name, id, className, description, errorMessage}, ref) => {
    return (
      <div className={className}>
        {label && (
          <label htmlFor={id} className="font-medium text-gray-600">
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx(
            'w-full rounded-lg border p-3 transition duration-150 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
            errorMessage ? 'border-red-500' : 'border-slate-300'
          )}
          ref={ref}
        />
        {description && !errorMessage && <p className="text-sm text-gray-500">{description}</p>}
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </div>
    );
  }
);
TextField.displayName = 'TextField';
export {TextField};
