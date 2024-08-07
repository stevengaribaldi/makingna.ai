'use client';
import OTPInput from '@/components/otp';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import React from 'react';

type Props = {
  setOTP: React.Dispatch<React.SetStateAction<string>>;
  onOTP: string;
};
const words = 'OTP Verifications';

const OTPForm = ({ onOTP, setOTP }: Props) => {
  return (
    <>
      <h2 className="text-midnightblue md:text-4xl font-bold">
        <TextGenerateEffect words={words} />
      </h2>
      <p className="text-blue-950 md:text-sm">
        Enter the One-Time Passcode Verification (OTP)
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput otp={onOTP} setOtp={setOTP} />
      </div>
    </>
  );
};

export default OTPForm;
