import React from 'react';
import { Bungee_Hairline } from 'next/font/google';

const bungeeHairline = Bungee_Hairline({
  subsets: ['latin'],
  weight: '400',
});

interface LogoProps {
  moveRight?: string;
  moveUp?: string;
  moveDown?: string;
  moveLeft?: string;
  size?: string;
  position?: string;
  additionalClasses?: string;
}

const Logo: React.FC<LogoProps> = ({
  moveRight,
  moveUp,
  moveDown,
  moveLeft,
}) => {
  const calculatePosition = () => {
    const right = moveRight ? `translateX(${moveRight})` : '';
    const up = moveUp ? `translateY(-${moveUp})` : '';
    const down = moveDown ? `translateY(${moveDown})` : '';
    const left = moveLeft ? `translateX(-${moveLeft})` : '';

    return `${right} ${up} ${down} ${left}`;
  };
  return (
    <div
      className=" cursor-pointer flex gap-1  -ml-5 -mr-10 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700"
      style={{ transform: calculatePosition() }}
    >
      <span className=" -ml-[150px]  md:-ml-[200px] lg:ml-225 flex justify-center self-center px-4  -py-1  mt-1 text-herred rounded-sm ">
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
  );
};

export default Logo;
