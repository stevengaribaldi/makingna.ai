import SignInFormProvider from '@/components/forms/sign-in/form-provider';
import LoginForm from '@/components/forms/sign-in/login-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const SignInPage = () => {
  return (
    <div className="flex-1 py-36 -mt-12 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignInFormProvider>
          <div className="flex flex-col gap-3">
            <LoginForm />
            <div className="w-full pt-5 flex flex-col gap-3 items-center">
              <Button
                type="submit"
                className="group/btn hover:-translate-y-0.3 hover:ring-1 mt-8 relative h-10 w-80 rounded-md bg-slate-950 bg-gradient-to-r from-slate-800/0 via-slate-800/90 to-slate-800/0 text-lg font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-cyan-950/90 via-cyan-900/90 text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)] hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40"
              >
                Login
              </Button>
              <Link
                href="/auth/sign-up"
                className="group  inline-flex justify-center gap-1  text-[#36454F]"
              >
                <button className="mt-0.5 items-center  inline-flex justify-center bg-custom-black no-underline group cursor-pointer   relative w-full rounded-full p-px  font-semibold leading-9  ">
                  <span className="absolute inset-0 overflow-hidden rounded-full flex justify-center"></span>
                  <span className="font-light">
                    Dont't have an account?&nbsp;
                  </span>
                  <div className="font-bold text-tikolight  hover:font-bold group-hover:text-cyan-600">
                    {' '}
                    Create one
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
                  <span className=" absolute -bottom-0 left-[9.5rem] h-px w-[calc(50%-.00005rem)] mb-1.5 bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-900 group-hover:opacity-40 " />
                </button>
              </Link>
              ;
            </div>
          </div>
        </SignInFormProvider>
      </div>
    </div>
  );
};

export default SignInPage;
  //  <Link
  //    href="/auth/sign-up"
  //    className="group  inline-flex justify-center gap-1  text-[#36454F]"
  //  >
  //    <button className="mt-0.5 items-center  inline-flex justify-center bg-custom-black no-underline group cursor-pointer   relative w-full rounded-full p-px  font-semibold leading-9  ">
  //      <span className="absolute inset-0 overflow-hidden rounded-full flex justify-center"></span>
  //      <span className="font-light">Dont't have an account?&nbsp;</span>
  //      <div className="font-bold text-tikolight  hover:font-bold group-hover:text-cyan-600">
  //        {' '}
  //        Create one
  //      </div>
  //      <svg
  //        className="duration-2500  animate-pulse text-tikolight"
  //        fill="none"
  //        height="16"
  //        viewBox="0 -2 24 24"
  //        width="16"
  //        xmlns="http://www.w3.org/2000/svg"
  //      >
  //        <path
  //          d="M10.75 8.75L14.25 12L10.75 15.25"
  //          stroke="currentColor"
  //          strokeLinecap="round"
  //          strokeLinejoin="round"
  //          strokeWidth="1.5"
  //        />
  //      </svg>
  //      <span className=" absolute -bottom-0 left-[12.525rem] h-px w-[calc(20%-.00005rem)] mb-1.5 bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-900 group-hover:opacity-40 " />
  //    </button>
  //  </Link>;