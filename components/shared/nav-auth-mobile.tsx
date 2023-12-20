import { Bookmark, ShoppingCart } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function NavAuthMobile() {
  return (
    <div className='flex md:hidden items-center gap-x-2'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={'/profile/list'}
              className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            >
              <Bookmark />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>List</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'}>
              <ShoppingCart className='mr-2' />
              <Badge variant={'outline'}>0</Badge>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Empty cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div
        role='profile-image'
        className='w-8 h-8 rounded-full bg-green-500'
      />
    </div>
  );
}
