import {TextFieldProps} from '@lib/ui/components/text-field';
import {useState, useCallback, FormEvent, RefAttributes, createRef, useRef, RefObject} from 'react';
import {BaseSchema, flatten, ObjectSchema, safeParse} from 'valibot';

type FormFieldProps = TextFieldProps;
type FormValues = Record<string, string | number | boolean>;
type FormSchema<T> = ObjectSchema<{[K in keyof T]: BaseSchema}>;
type FormErrors<T> = {[K in keyof T]?: string};
type FormFieldRefs<T> = {[K in keyof T]?: RefObject<HTMLInputElement>};

interface UseFormValidationProps<T extends FormValues> {
  values: T;
  schema: FormSchema<T>;
}

export function useFormValidation<T extends FormValues>({values, schema}: UseFormValidationProps<T>) {
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const fieldRefs = useRef<FormFieldRefs<T>>({});

  const registerField = useCallback(
    <K extends keyof T>(name: K): Partial<FormFieldProps> & RefAttributes<HTMLInputElement> => {
      if (!fieldRefs.current[name]) {
        fieldRefs.current[name] = createRef();
      }

      return {
        name: name as string,
        errorMessage: errors[name],
        ref: fieldRefs.current[name],
      };
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (callback: (e: FormEvent<HTMLFormElement>) => void) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const result = safeParse(schema, values, {
        abortPipeEarly: true,
      });
      if (!result.success) {
        const nestedErrors = flatten(result.issues).nested;
        const singleErrorMessages = Object.fromEntries(
          Object.entries(nestedErrors).map(([key, value]) => [key, Array.isArray(value) ? value[0] : value])
        ) as FormErrors<T>;

        setErrors(singleErrorMessages);
        fieldRefs.current[Object.keys(singleErrorMessages)[0]]?.current?.focus();
        return;
      }

      setErrors({});
      callback(e);
    },
    [schema, values]
  );

  return {registerField, handleSubmit};
}
