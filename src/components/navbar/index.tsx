import Image from 'next/image';
import * as React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
        <Image
          loading="lazy"
          src="/images/bluemakingna.png"
          alt="LOGO"
          sizes="10vw"
          style={{
            width: '69px',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
      </div>
      <ul className="gap-1 md:-mr-[55px] lg:mr-0 justify-between self-stretch my-auto text-sm leading-5  max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-4 py-2 rounded-md text-midnightblue bg-cream  transition duration-200 ease-linear"
        >
          {' '}
          Home
        </li>
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-5 py-2 rounded-md text-midnightblue bg-custom-black   transition duration-200 ease-linear"
        >
          {' '}
          Pricing
        </li>
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-5 py-2 rounded-md text-midnightblue bg-cream  transition duration-200 ease-linear"
        >
          {' '}
          News Room
        </li>
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-5 py-2 rounded-md text-midnightblue bg-cream  transition duration-200 ease-linear"
        >
          {' '}
          Features
        </li>
        <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-5 py-2 rounded-md text-midnightblue bg-cream  transition duration-200 ease-linear"
        >
          {' '}
          Contact us
        </li>
      </ul>
      <Link
        href="/dashboard"
        className="bg-bone px-4 py-2 hover:text-base  hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-3 text-herred rounded-sm "
      >
        Free Trial
      </Link>
    </div>
  );
}

export default NavBar;
{
  /* <li
          className="hover:ring-1 ring-pink-300 hover:ring-opacity-10
                      hover:shadow-[0_6px_20px_rgba(209,192,208,80%)] -mt-2
                       px-5 py-2 rounded-md text-midnightblue bg-cream  transition duration-200 ease-linear"
> */
}
