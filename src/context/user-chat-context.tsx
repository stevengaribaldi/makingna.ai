'use cliet';
import React, { createContext, useContext, useState } from 'react';

type ChatInitialValueProps = {
  realtime: boolean;
  setRealtime: React.Dispatch<React.SetStateAction<boolean>>;
  chatRoom: string | undefined;
  setChatRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
  chats: {
    message: string;
    id: string;
    role: 'assistant' | 'user' | null;
    createAt: Date;
    seen: boolean;
  }[];
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        id: string;
        role: 'assistant' | 'user' | null;
        createdAt: Date;
        seen: boolean;
      }[]
    >
    >;
    loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};


// const ChatInitialValue: ChatInitialValueProps = {
// };
