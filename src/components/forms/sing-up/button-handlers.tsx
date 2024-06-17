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
          className=" group/btn hover:-translate-y-0.3 hover:ring-1n relative  h-10 w-full rounded-md bg-slate-950 bg-gradient-to-r  from-slate-800/0 via-slate-800/90 to-slate-800/0 text-lg font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-slate-950 hover:via-cyan-900/90 hover:text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)]   hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40"
        >
          Create an Account
        </Button>
        <div className="">
          <Link
            href="/auth/sign-in"
            className="group flex items-center  justify-center gap-1  text-[#36454F]"
          >
            Already have an Account?
            <div className="font-bold text-tikodark hover:font-bold group-hover:text-tikolight">
              Sign In
            </div>
            <svg
              className="duration-2500 animate-pulse text-tikolight"
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
          className=" group/btn hover:-translate-y-0.3 hover:ring-1n relative  h-10 w-full rounded-md bg-slate-950 bg-gradient-to-r  from-slate-800/0 via-slate-800/90 to-slate-800/0 text-lg font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-slate-950 hover:via-cyan-900/90 hover:text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)]   hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40"
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
            className="group flex items-center  justify-center gap-1  text-[#36454F]"
          >
            Already have an Account?
            <div className="font-bold text-tikodark hover:font-bold group-hover:text-tikolight">
              Sign In
            </div>
            <svg
              className="duration-2500 animate-pulse text-tikolight"
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

      <div className="">
        <Link
          href="/auth/sign-in"
          className="group flex items-center  justify-center gap-1  text-[#36454F]"
        >
          Already have an Account?
          <div className="font-bold text-tikodark  hover:font-bold group-hover:text-tikolight">
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
        </Link>
      </div>
    </div>
  );
};

export default ButtonHandler;
