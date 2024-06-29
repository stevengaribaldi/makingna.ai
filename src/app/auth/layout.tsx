import React from 'react';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Logo from '@/components/ui/logo';

const ThreeModel = dynamic(() => import('../../components/ThreeModel'), {
  ssr: false,
  loading: () => <p></p>,
});

type Props = {
  children: React.ReactNode;
};

const LayoutProps = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect('/');

  return (
    <div className="flex h-screen  bg-[#fefced] w-full justify-center">
      <div className="ld:w-full flex w-[600px] flex-col items-start p-6">
        <div className=" flex gap-1 -ml-5 -mr-10 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
          <Logo />
        </div>

        {children}
      </div>
      <div className="relative    w-full h-screen  hidden flex-1  flex-col gap-0 overflow-hidden ring-1 ring-shadowpink  bg-stone-200 pl-24 pt-10 mb-32 b-32 lg:flex">
        <h2 className="text-herred font-bold relative md:text-4xl z-10">
          Hi, I’m your AI powered sales assistant, xMakingna!
        </h2>
        <p className="text-pinkher mb-10 md:text-sm z-10">
          xMakingna is capable of capturing lead information without a form...{' '}
          <br />A promise written on water
        </p>
        <div className="absolute  flex inset-0 flex-1">
          <ThreeModel />
        </div>
      </div>
    </div>
  );
};

export default LayoutProps;
