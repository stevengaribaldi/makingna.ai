
import NavBar from '@/components/navbar';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import Link from 'next/link';
import { pricingCards } from '@/constants/landing-page';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import { onGetBlogPosts } from '@/landing';
import { getMonthName } from '@/lib/utils';
import parse from 'html-react-parser';

export default async function Home() {
  const posts:
    | {
        id: string;
        title: string;
        image: string;
        content: string;
        createdAt: string;
      }[]
    | undefined = await onGetBlogPosts();

  return (
    <main>
      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
          <span className="text-stella   px-4 py-2 rounded-full text-sm inline-flex items-center">
            Introducing&nbsp;{' '}
            <span className="font-thin text-midnightblue"> xMakingna</span> An
            AI powered sales assistant chatbot
          </span>
          <div className="carded">
            <div className="btn1"></div>
            <div className="btn2"></div>
            <div className="btn3"></div>
            <div className="btn4"></div>
            <div className="carded-int">
              <div className="hello">
                <Image
                  src="/images/xMakingna_individual_letter_gradient.png"
                  width={120}
                  height={60}
                  alt="Logo"
                  className="max-w-lg object-contain"
                />
                <span className="hiddened">xMAKINGNA</span>
              </div>
              <iframe></iframe>
            </div>
            <div className="top">
              <div className="camera">
                <div className="int"></div>
              </div>
              <div className="speaker"></div>
            </div>
          </div>

          <p className="text-center max-w-[500px] text-midnight">
            Enhance your website with{' '}
            <span>xMakingna intelligence. Integrate our AI </span>
            assistant with a simple snippet of code and transform your sales
            experience.
          </p>

          <Button className="  hover:-translate-y-0.3 hover:ring-1n relative rounded-md bg-slate-950 bg-gradient-to-r  from-slate-800/0 via-slate-800/90 to-slate-800/0 text-lg font-medium text-[#fafafa] transition-opacity duration-500 hover:bg-cyan-950/90 via-cyan-900/90 text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)]   hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40">
            {' '}
            Start For Free
          </Button>
          <Image
            src="/images/xMakingna_individual_letter_gradient.png"
            width={50}
            height={100}
            alt="Logo"
            className="max-w-lg object-contain"
          />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl text-center">
          {' '}
          Select the option that best fits your business needs.{' '}
        </h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our clear and flexible pricing plans are tailored to meet your needs.
          Not ready to commit just yet? Give our free plan a try and explore all
          the benefits at no cost.
        </p>
      </section>
      <div className="flex  justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px]   flex flex-col justify-between', {
              '  bg-[linear-gradient(to_top_left,var(--pink-50),var(--bone))] ':
                card.title === 'Pro',
            })}
          >
            <CardHeader>
              <CardTitle
                className={clsx('text-midnightblue ', {
                  'text-cyan-600 ': card.title === 'Pro',
                  'text-midnight ': card.title === 'Free',
                })}
              >
                {card.title}
              </CardTitle>
              <CardDescription className="text-stella  ">
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="-mt-1">
                <div
                  className={clsx('text-sm text-slate-900 font-bold', {
                    ' text-midnight ': card.title === 'Pro',
                  })}
                >
                  {card.topDescription}
                </div>

                <span
                  className={clsx('text-4xl text-iridium font-bold', {
                    ' text-midnight ': card.title === 'Pro',
                  })}
                >
                  {card.price}
                </span>

                <span className="text-muted-foreground">
                  <span>/ month</span>
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2">
                    <Check
                      className={clsx('text-tiko  font-extrabold', {
                        'text-cyan-500  size-7 )] rounded-sm ':
                          card.title === 'Pro',
                      })}
                    />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <div>
                {card.title === 'Free' ? (
                  <Button className="p-2 px-20  w-full gap-4 text-center hover:-translate-y-0.3 hover:ring-1n relative rounded-md bg-brownish text-lg font-medium transition-opacity duration-500 hover:bg-iridium  text-gray-200 hover:shadow-[0_6px_20px_rgba(209,192,208,20%)] hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40">
                    <Link href={`/dashbord?plan=${card.title}`}>
                      Get Started
                    </Link>
                  </Button>
                ) : (
                  <Button className="p-2 px-20 w-full flex-col ml- gap-4 text-center hover:-translate-y-0.3 hover:ring-1n relative rounded-md bg-slate-950 bg-gradient-to-r from-slate-800/0 to-slate-800/0 text-lg font-medium transition-opacity duration-500 hover:bg-cyan-950/90 via-cyan-900/90 text-peach hover:shadow-[0_6px_20px_rgba(209,192,208,20%)] hover:ring-bluegray hover:ring-opacity-10 group-hover:opacity-40 flex items-center justify-center">
                    <Link href={`/dashbord?plan=${card.title}`}>
                      Get Started
                    </Link>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="flex justify-center items-center flex-col gap-4 mt-28">
        <h2 className="text-4xl text-center">News Room</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Explore our insights on AI, technology, and business optimization.
        </p>
      </section>
      <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        {posts &&
          posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full bg-white hover:bg-gray-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={post.image}
                    // src={`${process.env.CLOUDWAYS_UPLOADS_URL}${post.image}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={post.title}
                  />
                </div>
                <div>
                  <CardDescription></CardDescription>
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {post.createdAt}
                    {/* {getMonthName(post.createdAt.getMonth())}{' '}
                    {post.createdAt.getDate()} {post.createdAt.getFullYear()} */}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(4, 100))}...
                </div>
              </Card>
            </Link>
          ))}
      </section>
    </main>
  );
}
