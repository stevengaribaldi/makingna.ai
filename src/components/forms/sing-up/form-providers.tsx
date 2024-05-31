import { AuthContextPorvider } from '@/context/use-auth-context';
import React from 'react';
import { Form, FormProvider } from 'react-hook-form';
import { useSignUpForm } from '../../../hooks/sign-up/use-sign-up';
import { Loader } from '@/components/loader';

type Props = {
  children: React.ReactNode;
};

const SignUpFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignUpForm();
  return (
    <AuthContextPorvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex h-full flex-col justify-between gap-3">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextPorvider>
  );
};

export default SignUpFormProvider;
