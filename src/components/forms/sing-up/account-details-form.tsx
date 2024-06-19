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
      <div className=" max-w-md w-full mx-auto -mt-8 rounded-sm md:rounded-2xl p-4    shadow-[0_6px_20px_rgba(250,128,114,50%)]  bg-white  ">
        <div className="shadow-[0_-4px_30px_rgba(201,169,166,50%)] pb-2 pt-1 rounded-sm">
          <h2 className="text-midnightblue ml-2 md:text-4xl font-bold">
            <TextGenerateEffect words={words} />
          </h2>
          <div className=" pt-0 mt-2 mr-40 ml-3 mb-3 rounded-sm">
            <p className=" text-stella ml-1 mb-1 md:text-sm">
              Enter you email and password
            </p>
          </div>
        </div>
        <form
          className=" shadow-[0_-1px_30px_rgba(209,192,208,200%)]  ring-pink-300 ring-opacity-10 hover:shadow-[0_6px_20px_rgba(209,192,208,100%)]
                       px-8 py-2 rounded-md text-pink-200 bg-custom-black  font-extralight text-lg  transition duration-200 ease-linear
                        my-8 ring-1  mt-1 bg-pink-50 max-w-md w-full mx-auto  rounded-xs md:rounded-2xl p-4 md:p-8 "
        >
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
