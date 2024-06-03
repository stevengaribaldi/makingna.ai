'use client';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import UserTypeCard from './user-type-card';

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: 'owner' | 'student';
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>;
};

const TypeSelectionForm = ({ register, userType, setUserType }: Props) => {
  return (
    <>
      <h2 className="font-bold text-brownish md:text-4xl">Create an Account</h2>
      <p className="text-redishbrown md:text-sm">
        Tell us about yourself! What would you like for us to know <br />
        in order to tailor your experience?
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="I am a Property Owner"
        text="I am looking to rent out my property"
      ></UserTypeCard>
    </>
  );
};

export default TypeSelectionForm;
