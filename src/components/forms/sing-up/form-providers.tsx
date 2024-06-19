'use client';
import { Loader } from '@/components/loader';

import { AuthContextPorvider } from '@/context/use-auth-context';
import { useSignUpForm } from '../../../hooks/sign-up/use-sign-up';
import React from 'react';
import { FormProvider } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
};

const SignInFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignUpForm();

  return (
    <AuthContextPorvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextPorvider>
  );
};

export default SignInFormProvider;

