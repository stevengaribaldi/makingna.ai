import React from 'react';
import { Bungee_Hairline } from 'next/font/google';
import { Menu } from 'lucide-react';
const bungeeHairline = Bungee_Hairline({
  subsets: ['latin'],
  weight: '400',
});

type MenuLogoProps = {
  onClick(): void;
};

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
    <div
      onClick={onClick}
      className="relative mb-10 top-1 cursor-pointer flex justify-center items-center"
      style={{ width: '30px', height: '30px' }}
    >
      <div className="relative">
        <span className="  flex justify-center self-center px-4  -py-1  mt-1 text-herred rounded-sm ">
          <div className="relative -mt-10 mr-[44px]">
            <span
              className={`absolute top-0 left-[0.3px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span className="-ml-[47px]" style={{ fontSize: '4em' }}></span>
            </span>{' '}
            <span
              className={`absolute top-0 -left-[0.3px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-0 left-[0.2px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span className="-ml-[47px]" style={{ fontSize: '4em' }}>
              </span>{' '}
            </span>{' '}
            <span
              className={`absolute top-0 -left-[0.2px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-0 left-[0.1px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-0 -left-[0.1px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-0 left-[0.4px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-0  -left-[0.4px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-0  left-[0.5px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>{' '}
            <span
              className={`absolute top-0 -left-[0.5px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-0  left-[0.6px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>{' '}
            <span
              className={`absolute top-0  left-[0.6px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-0  left-[0.7px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>{' '}
            <span
              className={`absolute top-0  left-[0.8px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>{' '}
            <span
              className={`absolute top-0  -left-[0.8px] ${bungeeHairline.className} text-herred`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-0  left-[0.7px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>
              <span
                className="-ml-[47px]"
                style={{ fontSize: '4em' }}
              ></span>{' '}
            </span>
            <span
              className={`absolute top-[10.1px] left-0 ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>{' '}
            </span>
            <span
              className={`absolute top-[10.2px] left-0 ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>{' '}
            </span>{' '}
            <span
              className={`absolute top-[10.3px] left-0 ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>{' '}
            </span>
            <span
              className={`absolute top-[10.3px] left-0 ${bungeeHairline.className} text-midnightblue`}
            >
              {/* / */}
              <span style={{ fontSize: '3.5em' }}>x</span>{' '}
            </span>
            <span
              className={`absolute top-[10.1px] left-0 ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.5em' }}>x</span>{' '}
            </span>
            <span
              className={`absolute top-[10.1px] left-[0.6px] ${bungeeHairline.className} text-herred`}
            >
              <span style={{ fontSize: '3.4em' }}>x</span>{' '}
            </span>
            <span
              className={`absolute top-[10.1px] left-[0.2px] ${bungeeHairline.className} text-herred`}
            >
              <span style={{ fontSize: '3.4em' }}>x</span>{' '}
            </span>
            <span
              className={`absolute top-[10.1px] left-[0.8px] ${bungeeHairline.className} text-herred`}
            >
              <span style={{ fontSize: '3.4em' }}>x</span>{' '}
            </span>
            <span
              className={`absolute top-[10.1px] left-[0px] ${bungeeHairline.className} text-midnightblue`}
            >
              <span style={{ fontSize: '3.4em' }}>x</span>{' '}
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default MenuLogo;
