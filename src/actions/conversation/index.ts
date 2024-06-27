'use server';
import { client } from '@/lib/prisma';

export const onToggleRealtime = async (id: string, state: boolean) => {
  try {
    const chatRoom = await client.chatRoom.update({
      where: {
        id,
      },
      data: {
        live: state,
      },
      select: {
        id: true,
        live: true,
      },
    });

    if (chatRoom) {
      return {
        status: 200,
        message: chatRoom.live
          ? 'Realtime mode enabled'
          : 'Realtime mode disabled',
        chatRoom,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: 'An error occurred while toggling realtime mode',
    };
  }
};

export const onGetConverstionMode = async (id: string) => {
  try {
    const mode = await client.chatRoom.findUnique({
      where: {
        id,
      },
      select: {
        live: true,
      },
    });

    if (mode) {
      return {
        status: 200,
        mode,
      };
    } else {
      return {
        status: 404,
        message: 'Chat room not found',
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: 'An error occurred while fetching the conversation mode',
    };
  }
};
