import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import NavAuthMobile from './nav-auth-mobile';
import NavUnAuthMobile from './nav-unauth-mobile';

export default function NavBarMobile() {
  const user = {
    id: 'dbhkjvcivbcicjsycvaiskcaicvsi',
    authenticated: true,
  };

  const auth = user.authenticated;

  return (
    <div className='flex items-center gap-x-2'>
      {auth === true ? <NavAuthMobile /> : <NavUnAuthMobile />}
      {/* TODO add menu functionality for mobile */}
      <Button
        variant={'ghost'}
        size={'icon'}
      >
        <Menu />
      </Button>
    </div>
  );
}
