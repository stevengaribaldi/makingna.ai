'use server';

import { client } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs';

export const onIntegrateDomain = async (domain: string, icon: string) => {
  const user = await currentUser();
  if (!user) return;
  try {
    const subscription = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        _count: {
          select: {
            domains: true,
          },
        },
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });
    const domainExists = await client.user.findFirst({
      where: {
        clerkId: user.id,
        domains: {
          some: {
            name: domain,
          },
        },
      },
    });

    if (!domainExists) {
      if (
        (subscription?.subscription?.plan == 'FREE' &&
          subscription._count.domains < 1) ||
        (subscription?.subscription?.plan == 'PLUS' &&
          subscription._count.domains < 2) ||
        (subscription?.subscription?.plan == 'PRO' &&
          subscription._count.domains < 8) ||
        (subscription?.subscription?.plan == 'ULTIMATE' &&
          subscription._count.domains < 19)
      ) {
        const newDomain = await client.user.update({
          where: {
            clerkId: user.id,
          },
          data: {
            domains: {
              create: {
                name: domain,
                icon,
                chatBot: {
                  create: {
                    welcomeMessage: 'Have a question? Just text us',
                  },
                },
              },
            },
          },
        });

        if (newDomain) {
          return { status: 200, message: 'Domain successfully added' };
        }
      }
      return {
        status: 400,
        message:
          "You've reached the maximum number of domains, upgrade your plan or text us for more info",
      };
    }
    return {
      status: 400,
      message: 'Domain already exists',
    };
  } catch (error) {
    console.log(error);
  }
};

export const onGetSubscriptionPlan = async () => {
  try {
    const user = await currentUser();
    if (!user) return;
    const plan = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });
    if (plan) {
      return plan.subscription?.plan;
    }
  } catch (err) {
    console.log(err);
  }
};

export const onGetAllAccountDomains = async () => {
  const user = await currentUser();
  if (!user) return;
  try {
    const domains = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        domains: {
          select: {
            name: true,
            icon: true,
            id: true,
            customer: {
              select: {
                chatRoom: {
                  select: {
                    id: true,
                    live: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return { ...domains };
  } catch (err) {
    console.log(err);
  }
};
