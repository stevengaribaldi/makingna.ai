'use client';
import { Button } from '@/components/ui/button';
import { useAuthContextHook } from '@/context/use-auth-context';
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up';
import Link from 'next/link';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {};

const ButtonHandler = (props: Props) => {
  const { setCurrentStep, currentStep } = useAuthContextHook();
  const { formState, getFieldState, getValues } = useFormContext();
  const { onGenerateOTP } = useSignUpForm();

  const { isDirty: isName } = getFieldState('fullName', formState);
  const { isDirty: isEmail } = getFieldState('email', formState);
  const { isDirty: isPassword } = getFieldState('password', formState);
  if (currentStep === 3) {
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <Button
          type="submit"
          className=" group/btn hover:-translate-y-0.3 hover:ring-1n relative  h-10 w-full rounded-md bg-slate-950 bg-gradient-to-r  from-slate-800/0 via-slate-800/90 to-slate-800/0 text-lg font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-cyan-950/90 via-cyan-900/90 text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)]   hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40"
        >
          Create an Account
        </Button>
        <div className="">
          <Link
            href="/auth/sign-in"
            className="group  inline-flex justify-center gap-1  text-[#36454F]"
          >
            <button className="mt-0.5 items-center  inline-flex justify-center bg-custom-black no-underline group cursor-pointer   relative w-full rounded-full p-px  font-semibold leading-9  ">
              <span className="absolute inset-0 overflow-hidden rounded-full flex justify-center"></span>
              <span className="font-light">Already have an Account?&nbsp;</span>
              <div className="font-bold text-tikolight  hover:font-bold group-hover:text-cyan-600">
                {' '}
                Sign In
              </div>
              <svg
                className="duration-2500  animate-pulse text-tikolight"
                fill="none"
                height="16"
                viewBox="0 -2 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <span className=" absolute -bottom-0 left-[12.525rem] h-px w-[calc(20%-.00005rem)] mb-1.5 bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-900 group-hover:opacity-40 " />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <Button
          type="submit"
          className=" group/btn hover:-translate-y-0.3 hover:ring-1n relative  h-10 w-full rounded-md bg-slate-950 bg-gradient-to-r  from-slate-800/0 via-slate-800/90 to-slate-800/0 text-lg font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-cyan-950/90 via-cyan-900/90 text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)]   hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40"
          {...(isName &&
            isEmail &&
            isPassword && {
              onClick: () =>
                onGenerateOTP(
                  getValues('email'),
                  getValues('password'),
                  setCurrentStep,
                ),
            })}
        >
          Continue{' '}
        </Button>
        <div className="">
          <Link
            href="/auth/sign-in"
            className="group  inline-flex justify-center gap-1  text-[#36454F]"
          >
            <button className="mt-0.5 items-center  inline-flex justify-center bg-custom-black no-underline group cursor-pointer   relative w-full rounded-full p-px  font-semibold leading-9  ">
              <span className="absolute inset-0 overflow-hidden rounded-full flex justify-center"></span>
              <span className="font-light">Already have an Account?&nbsp;</span>
              <div className="font-bold text-tikolight  hover:font-bold group-hover:text-cyan-600">
                {' '}
                Sign In
              </div>
              <svg
                className="duration-2500  animate-pulse text-tikolight"
                fill="none"
                height="16"
                viewBox="0 -2 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <span className=" absolute -bottom-0 left-[12.525rem] h-px w-[calc(20%-.00005rem)] mb-1.5 bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-900 group-hover:opacity-40 " />
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className=" flex w-full  flex-col items-center gap-3">
      <Button
        type="submit"
        className=" group/btn hover:-translate-y-0.3 hover:ring-1n relative  h-10 w-full rounded-md bg-slate-950 bg-gradient-to-r  from-slate-800/0 via-slate-800/90 to-slate-800/0 text-lg font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-cyan-950/90 via-cyan-900/90 text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)]   hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40"
        onClick={() => setCurrentStep((prev: number) => prev + 1)}
      >
        <div className="">Continue</div>
      </Button>
      {/* <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-blue-900 "></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-48 text-muted-foreground">
            <div className='bg-white'>

            or
            </div>
          </span>
        </div>
      </div> */}

      <div className="">
        <Link
          href="/auth/sign-in"
          className="group  inline-flex justify-center gap-1  text-[#36454F]"
        >
          <button className="mt-0.5 items-center  inline-flex justify-center bg-custom-black no-underline group cursor-pointer   relative w-full rounded-full p-px  font-semibold leading-9  ">
            <span className="absolute inset-0 overflow-hidden rounded-full flex justify-center"></span>
            <span className="font-light">Already have an Account?&nbsp;</span>
            <div className="font-bold text-tikolight  hover:font-bold group-hover:text-cyan-600">
              {' '}
              Sign In
            </div>
            <svg
              className="duration-2500  animate-pulse text-tikolight"
              fill="none"
              height="16"
              viewBox="0 -2 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <span className=" absolute -bottom-0 left-[12.525rem] h-px w-[calc(20%-.00005rem)] mb-1.5 bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-900 group-hover:opacity-40 " />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonHandler;
