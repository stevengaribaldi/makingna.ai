'use server';
import { client } from '@/lib/prisma';
import { currentUser, redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/dist/server/api-utils';
import { onGetAllAccountDomains } from '../setttings';

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string,
) => {
  try {
    const registeredSuccess = await client.user.create({
      data: {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    });
    if (registeredSuccess) {
      return { status: 200, user: registeredSuccess };
    }
  } catch (error: any) {
    console.log(error);
  }
};

export const onLoginUser = async () => {
  const user = await currentUser();
  if (!user) redirectToSignIn();
  else {
    try {
      const authenticated = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          fullname: true,
          id: true,
          type: true,
        },
      });
      if (authenticated) {
        const domains = await onGetAllAccountDomains();

        return { status: 200, user: authenticated, domain: domains?.domains };
      }
    } catch (error) {
      return { status: 400 };
    }
  }
};


