// hooks/sidebar/use-domain.ts
import { onIntegrateDomain } from '@/actions/setttings';
import { useToast } from '@/components/ui/use-toast';
import { AddDomainSchema } from '@/schemas/settings.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { UploadClient } from '@uploadcare/upload-client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const upload = new UploadClient({
  publicKey: process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string,
});

type UseDomainProps = {
  onSuccess?: () => void;
};

export const useDomain = ({ onSuccess }: UseDomainProps = {}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: zodResolver(AddDomainSchema),
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
    if (!values.image || values.image.length === 0) {
      toast({
        title: 'Error',
        description: 'Image is required',
      });
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const uploaded = await upload.uploadFile(values.image[0]);
      const domainResponse = await onIntegrateDomain(
        values.domain,
        uploaded.uuid,
      );

      if (domainResponse) {
        reset();
        toast({
          title: domainResponse.status === 200 ? 'Success' : 'Error',
          description: domainResponse.message,
        });

        if (domainResponse.status === 200) {
          const subdomain = values.domain.split('.')[0];
          router.push(`/settings/${subdomain}`);

          if (onSuccess) {
            onSuccess();
          }
        }
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
      });
    } finally {
      setLoading(false);
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
