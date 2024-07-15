import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Edit } from 'lucide-react';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
  label: string;
};

const UploadButton = ({ errors, label, register }: Props) => {
  return (
    <>
      <div className="  gap-2 items-center">
        <Label
          htmlFor="upload-button"
          className="flex group group-hover:before:duration-500  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4
           origin-left hover:decoration-2 hover:text-rose-50 relative upload-icon  w-full border text-left  text-stone-200 gap-2 p-1.5  text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[' '] before:right-1 before:top-1 "
        >
          <Input
            {...register('image')}
            className="hidden justify-center "
            type="file"
            id="upload-button"
          />
          <Edit className="justify-center" />
          {label}
        </Label>
        <p className="text-sm text-gray-500 ml-3">
          Recommended size is 300px * 300px, size <br /> less than 2MB
        </p>
      </div>
      <ErrorMessage
        errors={errors}
        name="image"
        render={({ message }) => (
          <p className="text-bloodorange  font-sans font-extrabold mt-2">
            {message === 'Required' ? '' : message}
          </p>
        )}
      />
    </>
  );
};

export default UploadButton;
