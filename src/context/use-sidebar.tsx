'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useChatContext } from '@/context/user-chat-context';
import { onToggleRealtime } from '@/actions/conversation';
import { useClerk } from '@clerk/nextjs';
import { on } from 'events';

const useSideBar = () => {
  const [expand, setExpand] = useState<boolean | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [realtime, setRealtime] = useState<boolean | undefined>(undefined);
  const [loading, setloading] = useState<boolean>(false);
  const { chatRoom } = useChatContext();

  const onActivateRealtime = async (e: any) => {
    try {
      const realtime = await onToggleRealtime(
        chatRoom!,
        e.target.ariaChecked == 'true' ? false : true,
      );
      if (realtime) {
        setRealtime(realtime.chatRoom?.live);
        toast({
          title: 'Success',
          description: realtime.message,
        });
      }
    } catch (err) {}
  };

  // const onGetCurrentMode = async () => {
  //   setloading(true);
  //   const mode = await onGetConverstionMode(chatRoom!);
  //   if (mode) {
  //     setRealtime(mode.mode?.live);
  //     setloading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (chatRoom) {
  //     onGetCurrentMode();
  //   }
  // }, [chatRoom]);

  const page = pathname.split('/').pop();
  const { signOut } = useClerk();
  const onSignOut = () => signOut(() => router.push('/'));
  const onExpand = () => setExpand((prev) => !prev);
  return {
    expand,
    onExpand,
    page,
    onSignOut,
    realtime,
    onActivateRealtime,
    chatRoom,
    loading,
  };
};

export default useSideBar;
