import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  size: 'max' | 'min';
  label: string;
  icon: JSX.Element;
  path?: string;
  current?: string;
  onSignOut?(): void;
};

const MenuItem = ({ size, path, icon, label, current, onSignOut }: Props) => {
  switch (size) {
    case 'max':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            'flex items-center gap-2 py-2 -px-2  -mr-[1rem] my-1 mx-3 ',
            !current
              ? 'text-gray-500'
              : current == path
                ? 'bg-white sidebar-field rounded-3xl rounded-r-none half-moon-rounded -mr-[1.01rem] -z-50 font=bold'
                : 'text-gray-500',
          )}
          href={path ? `/${path}` : '#'}
        >
          {' '}
          {icon} {label}{' '}
        </Link>
      );

    case 'min':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            !current
              ? 'text-gray-500 rounded-3xl'
              : current == path
                ? 'bg-white font-bold   sidebar-field-min text-black'
                : 'text-gray-500 sidebar-min rounded-3xl',
            'rounded-lg py-2 my-1 ',
          )}
          href={path ? `/${path}` : '#'}
        >
          {icon}
        </Link>
      );
    default:
      return null;
  }
};

export default MenuItem;
