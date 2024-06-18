import { USER_REGISTRATION_FORM } from '@/constants/forms';
import { error } from 'console';
import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import FormGenerator from '../form-generator';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};
const words = 'Account details';
const AccountDetailsForm = ({ register, errors }: Props) => {
  return (
    <>
      <div className="max-w-md w-full mx-auto -mt-8 rounded-none md:rounded-2xl p-4  shadow-input ">
        <h2 className="text-midnightblue  md:text-4xl font-bold">
          <TextGenerateEffect words={words} />
        </h2>
        <p className="text-stella md:text-sm">Enter you email and password</p>
        <form className="my-8 ring-1 mt-1 bg-blackrock max-w-md w-full mx-auto  rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
          {USER_REGISTRATION_FORM.map((field) => (
            <FormGenerator
              key={field.id}
              {...field}
              errors={errors}
              register={register}
              name={field.name}
            />
          ))}
        </form>
      </div>
    </>
  );
};

export default AccountDetailsForm;
