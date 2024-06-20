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
      <InputOTPGroup className="otp-container ">
        <InputOTPSlot
          index={0}
          className="otp-slot shadow-[-3px_3px_rgba(250,128,114,50%),_-6px_6px_rgba(233,226,214,100%)]"
        />
        <InputOTPSlot
          index={1}
          className="otp-slot shadow-[-3px_3px_rgba(250,128,114,50%),_-6px_6px_rgba(233,226,214,100%)]"
        />
        <InputOTPSlot
          index={2}
          className="otp-slot shadow-[-3px_3px_rgba(250,128,114,50%),_-6px_6px_rgba(233,226,214,100%)]"
        />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup className="otp-container">
        <InputOTPSlot
          index={3}
          className="otp-slot shadow-[3px_3px_rgba(250,128,114,50%),_6px_6px_rgba(233,226,214,100%)]"
        />
        <InputOTPSlot
          index={4}
          className="otp-slot shadow-[3px_3px_rgba(250,128,114,50%),_6px_6px_rgba(233,226,214,100%)]"
        />
        <InputOTPSlot
          index={5}
          className="otp-slot shadow-[3px_3px_rgba(250,128,114,50%),_6px_6px_rgba(233,226,214,100%)]"
        />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default OTPInput;
