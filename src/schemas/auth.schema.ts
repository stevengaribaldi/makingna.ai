import { ZodType, z } from 'zod';

export type UserRegistrationProps = {
  type: string;
  fullname: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  otp: string;
};

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
  .object({
    type: z.string().min(1),
    fullname: z
      .string()
      .min(4, { message: 'Your full name must be at least 4 characters long' }),
    email: z.string().email({ message: 'Incorrect email format' }),
    confirmEmail: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Your password must be at least 8 characters long' })
      .max(64, {
        message: 'Your password cannot be longer than 64 characters long',
      })
      .refine(
        (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
        'Password must contain at least one special character',
      )
      .refine(
        (value) => /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_.-]*$/.test(value ?? ''),
        'Password should contain only alphabets, numbers, and special characters',
      ),
    confirmPassword: z.string(),
    otp: z.string().min(6, { message: 'You must enter a 6 digit code' }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
  .refine((schema) => schema.email === schema.confirmEmail, {
    message: 'Emails do not match',
    path: ['confirmEmail'],
  });

export type UserLoginProps = {
  email: string;
  password: string;
};

export const UserLoginSchema: ZodType<UserLoginProps> = z.object({
  email: z.string().email({ message: 'You did not enter a valid email' }),
  password: z
    .string()
    .min(8, { message: 'Your password must be at least 8 characters long' })
    .max(64, {
      message: 'Your password cannot be longer than 64 characters long',
    }),
});

export type ChangePasswordProps = {
  password: string;
  confirmPassword: string;
};

export const ChangePasswordSchema: ZodType<ChangePasswordProps> = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Your password must be at least 8 characters long' })
      .max(64, {
        message: 'Your password cannot be longer than 64 characters long',
      })
      .refine(
        (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
        'Password must contain at least one special character',
      )
      .refine(
        (value) => /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_.-]*$/.test(value ?? ''),
        'Password should contain only alphabets, numbers, and special characters',
      ),
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
