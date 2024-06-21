import NavBar from '@/components/navbar';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <main>
      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
          <span className="text-stella   px-4 py-2 rounded-full text-sm inline-flex items-center">
            Introducing&nbsp; <span className="font-thin text-midnightblue"> xMakingna</span>: An
            AI powered sales assistant chatbot
          </span>

          <Image
            src="/images/bluemakingna.png"
            width={60}
            height={30}
            alt="Logo"
            className="max-w-lg object-contain"
          />
          <p className="text-center max-w-[500px] text-midnight">
            Enhance your website with{' '}
            <span>xMakingna intelligence. Integrate our AI</span>
            assistant with a simple snippet of code and transform your sales
            experience.
          </p>
          <Button className="bg-orange font-bold text-white px-4">
            Start For Free
          </Button>
          <Image
            src="/images/bluemakingna.png"
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
          Select the option that best suits your needs.
        </h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our transparent pricing plans are designed to suit your needs. Not
          ready to commit? Start with our free plan today.
        </p>
      </section>

      <section className="flex justify-center items-center flex-col gap-4 mt-28">
        <h2 className="text-4xl text-center">News Room</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Discover our insights on AI, technology, and business optimization.
        </p>
      </section>
    </main>
  );
}
