'use client';
import { Input } from '@/components/ui/inputmath';
import { Label } from '@/components/ui/label';
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
  const { watch } = useFormContext();
  const [isFocused, setIsFocused,] = useState(false);
  const value = watch(name, defaultValue);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  switch (inputType) {
    case 'input':
    default:
      return (
        <div>
          <div className="relative rounded-lg -bottom-0 -top-0  pb-0 mb-4">
            <div className="absolute inset-x-0 top-0 h-1 bg-custom-black rounded-lg"></div>
            <LabelInputContainer className="relative -top-1 mb-2 w-full">
              <Label
                className={cn(
                  'absolute left-3 px-1  py-0 text-sm rounded-md  ml-0 pt-0 transition-all pointer-events-none',
                  isFocused || value
                    ? 'top-[-2.5px] font-medium bg-white '
                    : 'top-1/3 -translate-y-1/10 text-md font-semibold text-gray-500 bg-transparent',
                )}
                htmlFor={`input-${label}`}
                style={{ marginBottom: '-10px' }}
              >
                {placeholder}
              </Label>
              <Input
                className="w-full  font  rounded-md px-3  focus:ring-1 focus:ring-offset-1 hover:ring-opacity-90 outline-none"
                id={`input-${label}`}
                type={type}
                form={form}
                defaultValue={defaultValue}
                {...register(name)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ outlineOffset: '2px', outlineColor: '#034c52' }}
              />
            </LabelInputContainer>
          </div>

          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-xs font-sans font-extrabold text-bloodorange mb-1 pb-1.5 -mt-5">
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
                <p className="text-xs font-sans font-extrabold text-bloodorange mb-1 pb-1.5 -mt-5">
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
                <p className="text-xs font-sans font-extrabold text-bloodorange mb-1 pb-1.5 -mt-5">
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
