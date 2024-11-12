import { useDomain } from '@/hooks/sidebar/use-domain';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import AppDrawer from '../drawer';
import { Plus } from 'lucide-react';
import { Loader } from '../loader';
import FormGenerator from '../forms/generator-form-with-label';
import UploadButton from '../upload-button.tsx';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { DOMAIN_NAMES } from '@/constants/forms';
AppDrawer;
type Props = {
  min?: boolean;
  domains:
    | {
        id: string;
        name: string;
        icon: string | null;
      }[]
    | null
    | undefined;
};

const DomainMenu = ({ domains, min }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSuccess = () => {
    setIsDrawerOpen(false);
  };

  const { errors, isDomain, loading, onAddDomain, register } = useDomain({
    onSuccess: handleSuccess,
  });
  return (
    <div className={cn('flex flex-col gap-3', min ? 'mt-6' : 'mt-3')}>
      <div className="flex justify-between w-full items-center">
        {!min && <p className="text-xs text-gray-500">DOMAINS </p>}
        <AppDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          description="Add your domain address to set up the chatbot integration"
          title="Add your business domain"
          // The trigger element to open the drawer
          onOpen={
            <div
              onClick={() => setIsDrawerOpen(true)}
              className="cursor-pointer p-1.5 text-gray-500 hover:text-midnightblue rounded-full border-2"
            >
              <Plus />
            </div>
          }
        >
          <Loader loading={loading}>
            <form
              className="mt-3 w-6/12 flex flex-col gap-3"
              onSubmit={onAddDomain}
            >
              {DOMAIN_NAMES.map((domian) => (
                <FormGenerator
                  key={domian.id}
                  {...domian}
                  register={register}
                  name={domian.name}
                  errors={errors}
                />
              ))}

              <UploadButton
                register={register}
                label="Upload Icon"
                errors={errors}
              />
              <Button
                type="submit"
                className="px-20 w-full flex-col text-center hover:-translate-y-0.3 hover:ring-1n relative rounded-3xl bg-slate-950 bg-gradient-to-r from-slate-800/0 to-slate-800/0 text-lg font-medium transition-opacity duration-500 hover:bg-cyan-950/90 via-cyan-900/90 text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)] hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40 flex items-center justify-center"
              >
                Add Domain
              </Button>
            </form>
          </Loader>
        </AppDrawer>
      </div>
      <div className="flex flex-col gap-1 text-ironside font-medium">
        {domains &&
          domains.map((domain) => (
            <Link
              href={`/settings/${domain.name.split('.')[0]}`}
              key={domain.id}
              className={cn(
                'flex gap-3 items-center justify-center mr-[4px]   sidebar-domain rounded-full transition duration-100 ease-in-out cursor-pointer',
                !min ? 'p-2' : 'py-2 ',
                domain.name.split('.')[0] == isDomain &&
                  ' sidebar-field-min -z-50',
              )}
            >
              <Image
                src={`https://ucarecdn.com/${domain.icon}/`}
                alt="logo"
                width={20}
                height={20}
              />
              {!min && <span className="text-sm">{domain.name}</span>}
            </Link>
          ))}
      </div>
    </div>
  );
};
export default DomainMenu;
