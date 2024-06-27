import { z } from 'zod';
export const MAX_UPLOAD_SIZE = 1024 * 1024 * 2;
export const ACCEPTED_FILE_TYPES = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'image/webp',
];

export const AddDomainShema = z.object({
  domain: z
    .string()
    .min(4, { message: 'domains require a minimum of 3 characters' })
    .refine(
      (value) =>
        /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,3}$/.test(value ?? ''),
      'This is not a valid domain',
    ),
  image: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_UPLOAD_SIZE, {
      message: 'Your file size must be less then 2MB',
    })
    .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
      message: 'Only JPG, JPEG & PNG are accepted file formats',
    }),
});
