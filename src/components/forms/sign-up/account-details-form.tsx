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
    <div
      className="max-w-md w-full relative top-[115px] bg-lightporcelain mx-auto
      -mt-52 rounded-sm md:rounded-2xl pr-10 pb-16 pl-10
       ring-2 ring-pink-300 ring-opacity-10
                     shadow-[0_6px_20px_rgba(209,192,208,80%)]"
    >
      <div className="pb-1  rounded-sm">
        <h2 className="text-midnightblue md:text-4xl font-bold">
          <TextGenerateEffect words={words} />
        </h2>
        <div className="pt-0 mt-1 mr-0 mb-2 rounded-sm">
          <p className="text-stella ml-1 mb-1 md:text-sm">
            Enter your email and password
          </p>
        </div>
      </div>
      <div className="ring-pink-100 ring-opacity-10 px-10 py-2 rounded-md text-pink-200  font-extralight text-lg transition duration-200 ease-linear my-3 ring-1 mt-1 bg-lightporcelain max-w-md w-full mx-auto rounded-xs md:rounded-2xl pr-4 pt-1 pb-1 pl-4">
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
