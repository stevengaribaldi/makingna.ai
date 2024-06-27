import Image from 'next/image';
import React from 'react';
import Logo from '../ui/logo';
import { LogOut, Menu, MonitorSmartphone } from 'lucide-react';
import { SIDE_BAR_MENU } from '@/constants/menu';

type Props = {
  onExpand(): void;
  current: string;
  onSignOut(): void;
  domains:
    | {
        id: string;
        name: string;
      }[]
    | null
    | undefined;
};

const MaxMenu = ({ onExpand, current, domains, onSignOut }: Props) => {
  return (
    <div className="py-3 px-4 flex flex-col h-full">
      <div className="flex justify-between items-center">
        <Logo />
        <Menu className="cursor-pointer animate-fade-in opacity-0 delay-1000" />
      </div>
      <div className="animate-fade-in opacity-0 delay-400 fill-mode-forwards flex flex-col justify-between h-full pt-10">
        <p className="text-xs text-gray-500 mb-3">MENU</p>
        {SIDE_BAR_MENU.map((menu, key) => (
          <MenuItem />
        ))}
      </div>
    </div>
  );
};

export default MaxMenu;
