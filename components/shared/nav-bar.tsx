import { meta, navLinks } from '@/constants';

import Link from 'next/link';
import MaxWidthWrapper from './max-width-wrapper';
import NavAuth from './nav-auth';
import NavBarMobile from './nav-bar-mobile';
import NavUnAuth from './nav-unauth';

export default function NavBar() {
  const user = {
    id: 'dbhkjvcivbcicjsycvaiskcaicvsi',
    authenticated: false,
  };

  const auth = user.authenticated;

  return (
    <header className='z-50 sticky  top-0 inset-x-0 h-16 backdrop-filter backdrop-blur-lg bg-opacity-30'>
      <nav className='relative'>
        <MaxWidthWrapper>
          <div className='py-4 flex items-center justify-between'>
            <Link
              href={'/'}
              className='text-2xl lg:text-4xl font-bold'
            >
              {meta.title}
            </Link>

            <div className='block md:hidden'>
              <NavBarMobile />
            </div>

            <div className='hidden md:flex items-center gap-x-2'>
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className='hover:bg-accent px-4 py-2 transition-colors rounded-md hover:text-accent-foreground inline-flex items-center'
                >
                  <link.icon className='w-4 h-4 mr-2' />
                  {link.name}
                </Link>
              ))}
            </div>

            {auth === true ? <NavAuth /> : <NavUnAuth />}
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
}
