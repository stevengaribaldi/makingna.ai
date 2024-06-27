import { AddDomainShema } from '@/schemas/settings.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { UploadClient } from '@uploadcare/upload-client';
import { FieldValues, useForm } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { use, useEffect, useState } from 'react';
import { onIntegrateDomain } from '@/actions/setttings';

const upload = new UploadClient({
  publicKey: process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string,
});

export const useDomain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: zodResolver(AddDomainShema),
  });

  const pathname = usePathname();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [isDomain, setIsDomain] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    setIsDomain(pathname.split('/').pop());
  }, [pathname]);

  const onAddDomain = handleSubmit(async (values: FieldValues) => {
    setLoading(true);
    const uploaded = await upload.uploadFile(values.image[0]);
    const domain = await onIntegrateDomain(values.domain, uploaded.uuid);
    if (domain) {
      reset();
      setLoading(false);
      toast({
        title: domain.status == 200 ? 'success' : 'error',
        description: domain.message,
      });
      router.refresh();
    }
  });
  return {
    register,
    onAddDomain,
    errors,
    loading,
    isDomain,
  };
};
