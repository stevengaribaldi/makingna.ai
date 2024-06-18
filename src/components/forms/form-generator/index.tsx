import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
// import { ShieldAlert } from 'lucide-react';

type Props = {
  type: 'text' | 'email' | 'password';
  inputType: 'select' | 'input' | 'textarea';
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
  form?: string;
  defaultValue?: string;
};

const FormGenerator = ({
  type,
  inputType,
  options,
  label,
  placeholder,
  register,
  name,
  errors,
  lines,
  form,
  defaultValue,
}: Props) => {
  switch (inputType) {
    case 'input':
    default:
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            form={form}
            defaultValue={defaultValue}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-bloodorange font-extrabold mt-2">
                {/* <ShieldAlert /> */}
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      );
    case 'select':
      return (
        <Label htmlFor={`select-${label}`}>
          {label && label}
          <select form={form} id={`select-${label}`} {...register(name)}>
            {options?.length &&
              options.map((option) => (
                <option value={option.value} key={option.id}>
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="bg text-bloodorange mt-2">
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      );
    case 'textarea':
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Textarea
            rows={lines}
            id={`input-${label}`}
            placeholder={placeholder}
            form={form}
            defaultValue={defaultValue}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="bg-red-500 text-bloodorange mt-2">
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      );
  }
};
export default FormGenerator;
