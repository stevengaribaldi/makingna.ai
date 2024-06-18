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
const words ='Account details';
const AccountDetailsForm = ({ register, errors }: Props) => {
  return (
    <>
      <h2 className="text-midnightblue -mt-32 md:text-4xl font-bold">
        <TextGenerateEffect words={words} />
      </h2>
      <p className="text-stella md:text-sm">Enter you email and password</p>
      {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
};

export default AccountDetailsForm;
