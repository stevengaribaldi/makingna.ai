import { AuthContextPorvider } from '@/context/use-auth-context';
import React from 'react'

type Props = {
    children: React.ReactNode
}

const SignUpFormProvider = ({children}: Props) => {
  return (
    <AuthContextPorvider> </Authcon>
  )
}

export default SignUpFormProvider