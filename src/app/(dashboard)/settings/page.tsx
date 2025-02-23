import InfoBar from '@/components/infobar';
import BillingSettings from '@/components/settings/billing-setting';
import ChangePassword from '@/components/settings/change-password';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <InfoBar />
      <div className="  w-full chat-window flex-1 flex flex-col l     gap-10  lg:gap-[100px]">
        <BillingSettings />
        <ChangePassword />
      </div>
    </>
  );
};

export default Page;
