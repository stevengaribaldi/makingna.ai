'use client';
import React from 'react';
import SignUpFormProvider from '@/components/forms/sing-up/form-providers';
import RegistrationFormstep from '@/components/forms/sing-up/registrationFormstep';

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="w-full flex-1 py-36 md:px-16">
      <div className="h-ful flex flex-col gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormstep></RegistrationFormstep>
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
