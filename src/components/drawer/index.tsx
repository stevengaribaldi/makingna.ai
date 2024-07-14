import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';

type Props = {
  onOpen: JSX.Element;
  children: React.ReactNode;
  title: string;
  description: string;
};

const AppDrawer = ({ children, description, onOpen, title }: Props) => {
  return (
    <Drawer>
      <DrawerTrigger className="bg-stone-200"> {onOpen}</DrawerTrigger>
      <DrawerContent className="bg-stone-200">
        <div className="container flex flex-col bg-stone-200 items-center gap-2 pb-10">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
