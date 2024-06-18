'use client';
import React from 'react';
import SignUpFormProvider from '@/components/forms/sing-up/form-providers';
import RegistrationFormstep from '@/components/forms/sing-up/registrationFormstep';
import ButtonHandler from '@/components/forms/sing-up/button-handlers';
import HighlightBar from '@/components/forms/sing-up/highlight-bar';

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="w-full flex-1  md:px-16">
      <div className="h-ful flex flex-col gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormstep />
            <ButtonHandler />
          </div>
          <HighlightBar />
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
