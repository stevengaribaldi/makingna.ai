import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  size: 'max' | 'min';
  label: string;
  icon?: JSX.Element | ((animate: boolean) => JSX.Element);
  path?: string;
  current?: string;
  onSignOut?(): void;
};

const MenuItem = ({ size, path, icon, label, current, onSignOut }: Props) => {
  const [hover, setHover] = useState(false);

  const renderIcon = () => {
    if (typeof icon === 'function') {
      return icon(hover);
    }
    return icon;
  };

  switch (size) {
    case 'max':
      return (
        <Link
          onClick={onSignOut}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={cn(
            'menu-item flex items-center gap-2 py-2 -px-2 my-1  ',
            !current
              ? 'text-gray-500'
              : current === path
                ? 'bg-white sidebar-field rounded-3xl rounded-r-none half-moon-rounded -mr-[1.01rem] -z-50 font-bold'
                : 'text-gray-500 sidebar-option',
          )}
          href={path ? `/${path}` : '#'}
        >
          {renderIcon()} {label}
        </Link>
      );

    case 'min':
      return (
        <Link
          onClick={onSignOut}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={cn(
            'menu-item',
            !current
              ? 'text-gray-500 rounded-3xl'
              : current === path
                ? 'bg-white font-bold sidebar-field-min text-black'
                : 'text-gray-500 sidebar-domain rounded-3xl',
            'rounded-lg py-2 my-1',
          )}
          href={path ? `/${path}` : '#'}
        >
          {renderIcon()}
        </Link>
      );
    default:
      return null;
  }
};

export default MenuItem;
