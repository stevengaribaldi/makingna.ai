'use client';
import { useToast } from '@/components/ui/use-toast';
import {
  UserRegistrationProps,
  UserRegistrationSchema,
} from '@/schemas/auth.schema';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { onCompleteUserRegistration } from '@/actions/auth/index';

export const useSignUpForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();
  const methods = useForm<UserRegistrationProps>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      type: 'ower',
    },
    mode: 'onChange',
  });

  const onGenerateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      onNext((prev) => prev + 1);
    } catch (error: any) {
      const errorMessage = error.message?.[0]?.longMessage || 'An unexpected error occurred';
      toast({
        title: 'Error',
        description: errorMessage,
      });
    }
  };

  const onHandleSubmit = methods.handleSubmit(
    async (values: UserRegistrationProps) => {
      if (!isLoaded) return;

      try {
        setLoading(true);
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: values.otp,
        });

        if (completeSignUp.status !== 'complete') {
          return { message: 'Something went wrong' };
        }

        if (completeSignUp.status == 'complete') {
          if (!signUp.createdUserId) return;
          const registered = await onCompleteUserRegistration(
            values.fullname,
            signUp.createdUserId,
            values.type,
          );
          if (registered?.status === 200 && registered.user) {
            await setActive({
              session: completeSignUp.createdSessionId,
            });
            setLoading(false);
            router.push('/dashboard');
          }
          if (registered?.status == 400) {
            toast({
              title: 'Error',
              description: 'Something went wrong, please try',
            });
          }
        }
      } catch (error: any) {
        const errorMessage = error.error?.[0]?.longMessage || 'An unexpected error occurred';
        toast({
          title: 'Error',
          description: errorMessage,
        });
      }
    },
  );
  return {
    methods,
    onHandleSubmit,
    onGenerateOTP,
    loading,
  };
};
