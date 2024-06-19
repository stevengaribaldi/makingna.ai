import React from 'react';
import { InputOTP, InputOTPSlot, InputOTPSeparator } from '../ui/input-otp';

type Props = {
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  otp: string;
};

const OTPInput = ({ otp, setOtp }: Props) => {
  return (
    <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
      <div className="flex gap-3">
        <InputOTPSeparator />
        <div>
          <InputOTPSlot index={0} />
        </div>
        <div>
          <InputOTPSlot index={1} />
        </div>
        <div>
          <InputOTPSlot index={2} />
        </div>
        <div>
          <InputOTPSlot index={3} />
        </div>
        <div>
          <InputOTPSlot index={4} />
        </div>
        <div>
          <InputOTPSlot index={5} />
        </div>
      </div>
    </InputOTP>
  );
};

export default OTPInput;
