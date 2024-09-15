'use client';
import { useChangePassword } from '@/hooks/settings/use-settings';
import React from 'react';

import FormGenerator from '../forms/form-generator';
import { Button } from '../ui/button';
import { Loader } from '../loader';
import { FormProvider, useForm } from 'react-hook-form';

type Props = {};

const ChangePassword = (props: Props) => {
  const methods = useForm();
  const { register, errors, onChangePassword, loading } = useChangePassword();

  return (
    <div className=" pl-0 lg:pl-10 ">
      <div
        className=" form-change-password rounded-sm w-[269px] lg:w-[523px]  gap-10
    ring-1 ring-gray-600 ring-opacity-10
                    shadow-[0_6px_20px_rgba(209,192,208,60%)]  -mt-5 -mb-5 md:mb-0 lg:mb-0 pb-5 md:pb-8
                    py-2 bg-lightporcelain transition text-tikolight duration-200 ease-linear"
      >
        <div className="  mt-1 text-center  ">
          <p className="text-lg text-stella font-semibold">Change Password</p>
          <p className="text-sm text-midnightblue items-center  font-extralight">
            Reset your password
          </p>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={onChangePassword} className=" ">
            <div className="lg:w-[485px] pt-0 lg:pt-10 mt-5 lg:-mt-3 mr-2.5 ml-5  gap-5 ">
              <FormGenerator
                register={register}
                errors={errors}
                name="password"
                placeholder="New Password"
                type="text"
                inputType="input"
              />
              <FormGenerator
                register={register}
                errors={errors}
                name="confirmPassword"
                placeholder="Confirm Password"
                type="text"
                inputType="input"
              />
            </div>
            <Button className=" lg:w-[480px] w-[238px] ml-5 lg:ml-[22.5px]    hover:-translate-y-0.3 hover:ring-1n relative rounded-md bg-slate-950 bg-gradient-to-r  from-slate-800/0 via-slate-800/90 to-slate-800/0 text-lg font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-cyan-950/90 via-cyan-900/90 text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)]   hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40">
              <Loader loading={loading}>Change Password</Loader>
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ChangePassword;
