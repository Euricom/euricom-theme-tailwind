import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className='bg-black flex h-screen w-screen items-center justify-center'>
      <h1 className='text-gray-200'>Hello World</h1>
    </div>
  );
}

