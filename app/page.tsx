import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='p-24'>
      <div className='space-y-4'>
        <h1 className='text-5xl font-black'>Welcome to Digitycoon</h1>
        <Button
          role='getting-started-button'
          type='button'
          className='bg-brand hover:bg-brand/85 text-brand-foreground'
        >
          Get started
        </Button>
      </div>
    </main>
  );
}
