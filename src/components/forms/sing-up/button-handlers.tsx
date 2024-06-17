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
    <div className="flex w-full flex-col items-center gap-3">
      <Button type="submit" className="w-full bg-blackish">
        Create an Account
      </Button>
      <p>
        Already have an Account?
        <Link href="/auth/sign-in" className="font-bold">
          Sign In
        </Link>
      </p>
    </div>;
  }
  return (
    <div className=" flex w-full flex-col items-center gap-3">
      <Button
        type="submit"
        // className="group/btn hover:-translate-y-0.3 relative h-10 w-full  rounded-md bg-midnight   text-lg font-medium text-peach transition-opacity  hover:bg-[#23323f] hover:via-[#3D0C02] hover:text-[#FFE5B4]  hover:shadow-[0_6px_20px_rgba(209,192,208,20%)] hover:ring-1   hover:ring-chocolate hover:ring-opacity-50 group-hover:opacity-40"

        className=" group/btn hover:-translate-y-0.3 hover:ring-bluegray relative  h-10 w-full rounded-md bg-slate-950 bg-gradient-to-r  from-slate-800/0 via-slate-800/90 to-slate-800/0 text-lg font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-slate-950 hover:via-cyan-900/90 hover:text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)]   hover:ring-1 hover:ring-opacity-10 group-hover:opacity-40"
        // className=" group/btn hover:-translate-y-0.3 relative h-10  w-full rounded-md bg-slate-950 bg-gradient-to-r from-shadowpink  via-slate-800/90 to-shadowpink text-lg font-medium text-peach transition-opacity duration-500 hover:bg-shadowpink hover:text-salmonlight hover:via-blackish hover:shadow-[0_6px_20px_rgba(209,192,208,20%)] hover:ring-1   hover:ring-cyan-100 hover:ring-opacity-10 group-hover:opacity-40"
        // className="group/btn hover:-translate-y-0.3 bg-darkredbrown from-darkredbrown via-darkredbrown  to-darkredbrown hover:bg-darkredbrown relative  h-10 w-full rounded-md bg-gradient-to-r text-lg font-medium text-peach transition-opacity duration-500  hover:via-[#523235] hover:text-palegold hover:shadow-[0_6px_20px_rgba(123,63,0,20%)] hover:ring-1   hover:ring-chocolate hover:ring-opacity-10 group-hover:opacity-40"
        onClick={() => setCurrentStep((prev: number) => prev + 1)}
      >
        <div className="">Continue</div>
      </Button>
      <p className="text-brownish">
        Already have an Account?{' '}
        <Link
          href="/auth/sign-in"
          className="font-bold text-tikodark hover:text-tikolight"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default ButtonHandler;
