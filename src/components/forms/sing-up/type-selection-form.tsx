'use client';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import UserTypeCard from './user-type-card';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: 'owner' | 'student';
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>;
};
const words = 'Create an Account';
const TypeSelectionForm = ({ register, userType, setUserType }: Props) => {
  return (
    <>
      <h2 className="font-bold text-midnightblue md:text-4xl">
        <TextGenerateEffect words={words} />
      </h2>
      <p className="text-stella md:text-sm">
        Tell us about yourself! What would you like for us to know <br />
        in order to tailor your experience?
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="Business Owner"
        text="Manage company settings and optimize your business operations"
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="student"
        title="Student"
        text="Gain insights and learn about advanced business tools"
      />
    </>
  );
};

export default TypeSelectionForm;
