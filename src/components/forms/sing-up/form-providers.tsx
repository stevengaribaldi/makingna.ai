import { AuthContextPorvider } from '@/context/use-auth-context';
import React from 'react'
import { Form, FormProvider } from 'react-hook-form';

type Props = {
    children: React.ReactNode
}

const SignUpFormProvider = ({children}: Props) => {
    // return <AuthContextPorvider>
    //     <FormProvider>

    // </FormProvider>
    // </AuthContextPorvider>;
}

export default SignUpFormProvider