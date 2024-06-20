'use client';

import { USER_REGISTRATION_FORM } from '@/constants/forms';
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
    <div className="max-w-md w-full bg-bone mx-auto -mt-20 rounded-sm md:rounded-2xl pr-10 pl-10 shadow-[0_-1px_20px_rgba(250,128,114,50%)]">
      <div className="pb-1 -mt-1.5 rounded-sm">
        <h2 className="text-midnightblue md:text-4xl font-bold">
          <TextGenerateEffect words={words} />
        </h2>
        <div className="pt-0 mt-1 mr-0 mb-2 rounded-sm">
          <p className="text-stella ml-1 mb-1 md:text-sm">
            Enter your email and password
          </p>
        </div>
      </div>
      <div className="ring-pink-300 ring-opacity-10 px-8 py-2 rounded-md text-pink-200 bg-custom-black font-extralight text-lg transition duration-200 ease-linear my-3 ring-1 mt-1 bg-bone max-w-md w-full mx-auto rounded-xs md:rounded-2xl pr-4 pt-1 pb-1 pl-4">
        {USER_REGISTRATION_FORM.map((field) => (
          <FormGenerator
            key={field.id}
            {...field}
            errors={errors}
            register={register}
            name={field.name}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountDetailsForm;
