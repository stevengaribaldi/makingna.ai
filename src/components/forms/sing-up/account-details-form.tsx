import { USER_REGISTRATION_FORM } from '@/constants/forms';
import { error } from 'console';
import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import FormGenerator from '../form-generator';

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const AccountDetailsForm = ({ register, errors }: Props) => {
  return (
    <>
      <h2 className="text-midnightblue md:text-4xl font-bold">
        Account details
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
