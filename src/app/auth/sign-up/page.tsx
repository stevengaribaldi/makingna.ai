import React from 'react';

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="w-full flex-1 py-36 md:px-16">
      <div className="h-ful flex flex-col gap-3">
        <SignUpFormProvider>

      </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
