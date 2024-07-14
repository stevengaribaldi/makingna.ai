import { SIDE_BAR_MENU } from '@/constants/menu';
import { LogOut, Menu, MonitorSmartphone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import DomainMenu from './domain-menu';
import MenuItem from './menu-item';
import Logo from '@/components/ui/logo';

type Props = {
  onExpand(): void;
  current: string;
  onSignOut(): void;
  domains:
    | {
        id: string;
        name: string;
        icon: string | null;
      }[]
    | null
    | undefined;
};

const MaxMenu = ({ current, domains, onExpand, onSignOut }: Props) => {
  return (
    <div className="py-3 px-4   flex flex-col h-full">
      <div className="flex justify-between items-center">
        <div onClick={onExpand} className="-ml-5 md:-ml-0">
          <Logo moveRight="100px" moveUp="15px" moveDown="1px" moveLeft="5px" />
        </div>
        <Menu
          className="cursor-pointer sm:mr-10 md:mr-0 -mt-6 animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          onClick={onExpand}
        />
      </div>
      <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full ">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem size="max" {...menu} key={key} current={current} />
          ))}
          <DomainMenu domains={domains} />
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">OPTIONS</p>
          <MenuItem
            size="max"
            label="Sign out"
            icon={<LogOut />}
            onSignOut={onSignOut}
          />
          <MenuItem
            size="max"
            label="Mobile App"
            icon={<MonitorSmartphone />}
          />
        </div>
      </div>
    </div>
  );
};

export default MaxMenu;
