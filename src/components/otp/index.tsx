import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

type Props = {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
};

const OTPInput = ({ otp, setOtp }: Props) => {
  return (
    <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
      <InputOTPGroup className="otp-container">
        <InputOTPSlot index={0} className="otp-slot" />
        <InputOTPSlot index={1} className="otp-slot" />
        <InputOTPSlot index={2} className="otp-slot" />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup className="otp-container">
        <InputOTPSlot index={3} className="otp-slot" />
        <InputOTPSlot index={4} className="otp-slot" />
        <InputOTPSlot index={5} className="otp-slot" />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default OTPInput;
