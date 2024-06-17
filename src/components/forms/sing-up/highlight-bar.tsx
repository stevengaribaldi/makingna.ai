'use client';
import { useAuthContextHook } from '@/context/use-auth-context';
import { cn } from '@/lib/utils';
import React from 'react';

type Props = {};

const HighlightBar = (props: Props) => {
  const { currentStep } = useAuthContextHook();
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-1  rounded-full">
        {currentStep == 1 ? (
          <div className="relative inline-flex h-3 w-full overflow-hidden rounded-full p-[0.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#4cffff_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#f7788d] backdrop-blur-3xl"></span>
          </div>
        ) : (
          <div className="h-2 w-full inline-flex rounded-full bg-platinum ring-2 ring-gray-300"></div>
        )}
      </div>
      <div className="col-span-1 h-2 rounded-full">
        {currentStep == 2 ? (
          <div className="relative inline-flex h-3 w-full overflow-hidden rounded-full p-[0.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#4cffff_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#f7788d] backdrop-blur-3xl"></span>
          </div>
        ) : (
          <div className="h-2 w-full inline-flex rounded-full bg-platinum ring-2 ring-gray-300"></div>
        )}
      </div>
      <div className="col-span-1 h-2 rounded-full">
        {currentStep == 3 ? (
          <div className="relative inline-flex h-3 w-full overflow-hidden rounded-full p-[0.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#4cffff_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#f7788d] backdrop-blur-3xl"></span>
          </div>
        ) : (
          <div className="h-2 w-full inline-flex rounded-full bg-platinum ring-2 ring-gray-300"></div>
        )}
      </div>
    </div>
  );
};

export default HighlightBar;
//super cool makes a gradient circle that spins
{/* <div className="relative  h-2 w-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#4cffff_50%,#E2CBFF_100%)]" />
  <span className=" h-full w-full items-center justify-center rounded-full bg-[#f7788d] text-sm font-medium text-white backdrop-blur-3xl"></span>
</div>; */}