import Link from 'next/link';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { Rocket } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { perks } from '@/constants';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen relative'>
      <div className='flex-1'>
        <MaxWidthWrapper>
          <div className='py-20 mx-auto flex flex-col items-center max-w-3xl text-center'>
            <h1 className='text-4xl tracking-tight text-gray-900 sm:text-6xl font-bold'>
              Your marketplace for high-quality{' '}
              <span className='text-brand'>digital assets</span>.
            </h1>
            <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
              Welcome to{' '}
              <span className='text-brand font-medium'>Digitycoon</span>. Every
              asset on our platform is verified by our team to ensure our
              highest quality standard.
            </p>

            <div className='gap-4 mt-6 flex flex-col sm:flex-row'>
              <Link
                href={'/store/trending'}
                className={buttonVariants({})}
              >
                <Rocket className='w-6 h-6 mr-2' />
                Browse trending
              </Link>
              <Link
                href={'/faq/our-quality-promise'}
                className={buttonVariants({ variant: 'ghost' })}
              >
                Our quality promise &rarr;
              </Link>
            </div>
          </div>

          {/* TODO list of products */}
        </MaxWidthWrapper>

        <section className='border-t'>
          <MaxWidthWrapper className='py-20'>
            <div
              role='feature-section'
              className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6'
            >
              {perks.map((perk, idx) => (
                <div
                  key={idx}
                  className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
                >
                  <div className='md:flex-shrink-0 flex justify-center'>
                    <div className='h-16 w-16 flex items-center justify-center rounded-3xl bg-brand/10'>
                      <perk.icon className='w-1/3 h-1/3 text-brand' />
                    </div>
                  </div>

                  <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                    <h3 className='text-base font-medium'>{perk.name}</h3>
                    <p className='mt-3 text-sm text-muted-foreground'>
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        </section>
      </div>
    </main>
  );
}
