'use client';

import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';


export default function Header() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('useEffect in Header');
    const urlParams = new URLSearchParams(searchParams);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    console.log('handleSubmit in Header');
    e.preventDefault();
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    router.push(`/search?${searchQuery}`);
  };
  
  return (
    <header className='bg-green-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link href='/'>
          <h1 className='font-bold font-serif text-2xl flex flex-wrap'>
            <span className='text-red-500'>Zen</span>
            <span className='text-slate-900'>Estate</span>
          </h1>
        </Link>
        <form
          className='bg-slate-100 p-3 rounded-lg flex items-center'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => {
              console.log('onChange in Header');
              setSearchTerm(e.target.value);
            }}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link href='/'>
            <li className='hidden md:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link href='/about'>
            <li className='hidden md:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href='/sign-in'>
              <li className='block text-white bg-blue-700 px-4 py-2 rounded-lg '>
                Sign In
              </li>
            </Link>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
}
