'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import React, { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useFormContext,
} from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
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
  const { setValue } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(defaultValue ? true : false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== '');
    setValue(name, e.target.value, { shouldValidate: true });
  };
  switch (inputType) {
    case 'input':
    default:
      return (
        <div>
          <div className="relative rounded-lg -bottom-3 -top-2 bg-white pb-0 mb-4">
            <div className="absolute inset-x-0 top-0 h-1 bg-custom-black rounded-lg"></div>
            <LabelInputContainer className="relative -top-1 w-full">
              <Label
                className={cn(
                  'absolute left-3 px-1  py-0 text-sm rounded-sm  ml-0 pt-0 transition-all pointer-events-none',
                  isFocused || hasValue
                    ? 'top-[-5px] text-tiko font-normal bg-white shadow-[0px_-2px_4px_rgba(3,76,82,200%)]'
                    : 'top-1/3 -translate-y-1/10 text-md font-semibold text-gray-500 bg-white',
                )}
                htmlFor={`input-${label}`}
                style={{ marginBottom: '-10px' }} // Adjusted to use marginBottom
              >
                {placeholder}
              </Label>
              <Input
                className="w-full border-1 ring-tikedark ring-2 rounded-md px-3 py-2 focus:ring-2 focus:ring-offset-4 hover:ring-opacity-90 outline-none"
                id={`input-${label}`}
                type={type}
                form={form}
                defaultValue={defaultValue}
                {...register(name)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{ outlineOffset: '3px', outlineColor: '#034c52' }} // Add outline-offset style
              />
            </LabelInputContainer>
          </div>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="font-bold text-sm text-bloodorange pb-5">
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </div>
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

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('relative flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
