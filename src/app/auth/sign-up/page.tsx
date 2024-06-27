import React from 'react';
import SignUpFormProvider from '@/components/forms/sing-up/form-providers';
import RegistrationFormstep from '@/components/forms/sing-up/registrationFormstep';
import ButtonHandler from '@/components/forms/sing-up/button-handlers';
import HighlightBar from '@/components/forms/sing-up/highlight-bar';

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
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
