import Link from 'next/link';
import React from 'react';

export function Nav() {
  return <div className='bg-gray-900 p-4 flex gap-4'>
    <Link href="/">Home</Link>
    <Link href="/suspense-example">Suspense Example</Link>
    <Link href="/parallel-example">Parallel Example</Link>
  </div>;
}