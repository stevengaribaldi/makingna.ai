import React from 'react';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Image from 'next/image';

type Props = {
  children: React.ReactNode;
};

const LayoutProps = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect('/');

  return (
    <div className="flex h-screen bg-[#fefced] w-full justify-center">
      <div className="ld:w-full flex w-[600px] flex-col items-start p-6">
        <Image
          src="/images/bluemakingna.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '20%',
            height: 'auto',
          }}
          width={0}
          height={0}
        />

        {children}
      </div>
      <div className="max-w-4000px relative hidden max-h-full w-full flex-1 flex-col gap-3 overflow-hidden  bg-[#2E364F] pl-24 pt-10 lg:flex">
        <h2 className="text-orangish font-bold md:text-4xl">
          Hi, I’m your AI powered sales assistant, Makingna!
        </h2>
        <p className="text-orangish mb-10 md:text-sm">
          Makingna is capable of capturing lead information without a form...{' '}
          <br />
          The intelligence platforms.
        </p>
        <Image
          src="/images/colorGlass.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute top-48 !w-[1600px] shrink-0"
          width={0}
          height={0}
        />
      </div>{' '}
    </div>
  );
};

export default LayoutProps;
