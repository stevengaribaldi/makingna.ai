import { useToast } from '@/components/ui/use-toast';
import { UserRegistrationProps } from '@/schemas/auth.schema';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver} from '@hookform/resolvers/zod'

export const useSignUpForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
    const { signUp, isLoaded, setActive } = useSignUp();
    const router = useRouter()
    const methods = useForm<UserRegistrationProps>({
      resolver: zodResolver()
    });
};
