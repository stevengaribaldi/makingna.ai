import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Spinner } from '../spinner';

type LoaderProps = {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

export const Loader = ({
  loading,
  children,
  className,
  noPadding,
}: LoaderProps) => {
  return loading ? (
    <div className={cn(className || 'flex w-full justify-center py-5')}>
      <Spinner noPadding={noPadding} />
    </div>
  ) : (
    children
  );
};
