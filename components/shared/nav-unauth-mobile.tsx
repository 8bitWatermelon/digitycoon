import Link from 'next/link';
import { buttonVariants } from '../ui/button';

export default function NavUnAuthMobile() {
  return (
    <div className='flex md:hidden items-center gap-x-2'>
      <Link
        href={'/sign-in'}
        className={buttonVariants({ variant: 'outline' })}
      >
        Sign in
      </Link>
      <Link
        href={'/sign-in'}
        className={buttonVariants({})}
      >
        Sign up
      </Link>
    </div>
  );
}
