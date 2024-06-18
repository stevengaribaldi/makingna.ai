import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const AccountDetailsForm = (props: Props) => {
    return <>

        <h2 className='text-midnightblue md:text-4xl font-bold'>Account

        </h2>
  </>;
};

export default AccountDetailsForm;
