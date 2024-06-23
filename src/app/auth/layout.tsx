import React from 'react';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Bungee_Hairline } from 'next/font/google'; // Import the font
import dynamic from 'next/dynamic';

const ThreeModel = dynamic(() => import('../../components/ThreeModel'), {
  ssr: false,
  loading: () => <p></p>,
});

const bungeeHairline = Bungee_Hairline({
  subsets: ['latin'],
  weight: '400',
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
          <span className="bg-cream -ml-[150px]  md:-ml-[200px] lg:ml-225 flex justify-center self-center px-4  -py-1  mt-1 text-herred rounded-sm ">
            <div className="relative mt-2 mb-2">
              <span
                className={`absolute top-0 left-[0.3px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna
              </span>{' '}
              <span
                className={`absolute top-0 -left-[0.3px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-0 left-[0.2px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>{' '}
              <span
                className={`absolute top-0 -left-[0.2px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-0 left-[0.1px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-0 -left-[0.1px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-0 left-[0.4px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-0  -left-[0.4px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-0  left-[0.5px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>{' '}
              <span
                className={`absolute top-0 -left-[0.5px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-0  left-[0.6px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>{' '}
              <span
                className={`absolute top-0  left-[0.6px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-0  left-[0.7px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>{' '}
              <span
                className={`absolute top-0  left-[0.8px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>{' '}
              <span
                className={`absolute top-0  -left-[0.8px] ${bungeeHairline.className} text-herred`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-0  left-[0.7px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
              </span>
              <span
                className={`absolute top-[0.1px] left-0 ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>
              <span
                className={`absolute top-[0.2px] left-0 ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>{' '}
              <span
                className={`absolute top-[0.3px] left-0 ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>
              <span
                className={`absolute top-[0.3px] left-0 ${bungeeHairline.className} text-midnightblue`}
              >
                {/* / */}
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>
              <span
                className={`absolute -top-[0.1px] left-0 ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>
              <span
                className={`absolute bottom-[0.1px] left-0 ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>
              <span
                className={`absolute -top-[0.2px] left-0 ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>{' '}
              <span
                className={`absolute -top-[0.3px] left-0 ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>
              <span
                className={`absolute -top-[0.0px] right-[0.01px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.74em' }}>x</span>{' '}
              </span>
              <span
                className={`absolute -top-[0.0px] right-[0.01px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.73em' }}>x</span>{' '}
              </span>
              <span
                className={`absolute -top-[0.0px] -left-[0.01px] ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.76em' }}>x</span>{' '}
              </span>
              <span
                className={`absolute -top-[0.3px] left-0 ${bungeeHairline.className} text-midnightblue`}
              >
                {/* / */}
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>
              <span
                className={`relative ${bungeeHairline.className} text-midnightblue`}
              >
                <span style={{ fontSize: '0.8em' }}>x</span>{' '}
              </span>
            </div>
          </span>
        </div>

        {children}
      </div>
      <div className="relative    w-full h-screen  hidden flex-1  flex-col gap-0 overflow-hidden ring-1 ring-shadowpink  bg-stone-200 pl-24 pt-10 mb-32 b-32 lg:flex">
        <h2 className="text-herred font-bold relative md:text-4xl z-10">
          Hi, I’m your AI powered sales assistant, Makingna!
        </h2>
        <p className="text-pinkher mb-10 md:text-sm z-10">
          Makingna is capable of capturing lead information without a form...{' '}
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
