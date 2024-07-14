import Image from 'next/image';
import * as React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Bungee_Hairline } from 'next/font/google';
const bungeeHairline = Bungee_Hairline({
  subsets: ['latin'],
  weight: '400',
});

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className=" flex gap-1 -ml-5 -mr-10 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <span className="bg-cream md:mr-[100px] lg:ml-14 flex justify-center self-center px-4  -py-1  mt-1 text-herred rounded-sm ">

          <div className="relative mt-0 mb-2">
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
              className={`absolute top-0  -left-[0.8px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
            </span>
            <span
              className={`absolute top-0  -left-[0.9px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '0.8em' }}>x</span>Makingna{' '}
            </span>
            <span
              className={`absolute top-0  -left-[1.0px] ${bungeeHairline.className} text-herred`}
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
      <ul className="gap-1 md:-mr-[10px] lg:-ml-14 justify-between self-stretch my-auto text-sm leading-5  max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-4 py-2 rounded-md text-midnightblue bg-cream  transition hover:text-tikolight duration-200 ease-linear"
        >
          {' '}
          Home
        </li>
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-5 py-2 rounded-md text-midnightblue bg-custom-black hover:text-tikolight transition duration-200 ease-linear"
        >
          {' '}
          Pricing
        </li>
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-5 py-2 rounded-md text-midnightblue bg-cream  transition hover:text-tikolight duration-200 ease-linear"
        >
          {' '}
          News Room
        </li>
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-5 py-2 rounded-md text-midnightblue bg-cream  transition hover:text-tikolight duration-200 ease-linear"
        >
          {' '}
          Features
        </li>
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-5 py-2 rounded-md text-midnightblue bg-cream hover:text-tikolight  transition duration-200 ease-linear"
        >
          {' '}
          Contact us
        </li>
      </ul>
      <Button className=" group/btn hover:-translate-y-0.3 hover:ring-1n relative  h-8 w-auto rounded-md bg-slate-950 bg-gradient-to-r  from-slate-800/0 via-slate-800/90 to-slate-800/0 text-md font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-cyan-950/90 via-cyan-900/90 text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)]   hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40">
        {' '}
        <Link href="/dashboard">Free Trial</Link>
      </Button>
    </div>
  );
}

export default NavBar;
