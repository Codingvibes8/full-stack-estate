import Link from 'next/link';
import About from './about/page';
export default function Home() {
  return (
   
    <>
 
      
      <div className='relative bg-hamstead bg-cover bg-center bg-fixed flex flex-col gap-6 p-28 px-8 md:px-16 min-h-screen max-w-6xl mx-auto md:items-center'>
        <div className='absolute inset-0 w-full h-full bg-black/70'></div>
        <div className='relative z-10'>
          <h1 className='text-slate-100 font-bold text-3xl lg:text-6xl'>
            Find your next <span className='text-slate-500'>perfect</span>
            <br />
            place with ease
          </h1>
          <div className='text-gray-100 text-xs sm:text-sm mt-4'>
            Sahand Estate is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
          </div>
          <Link
            href={'/search'}
            className='mt-6 inline-block bg-blue-700 px-6 py-3 rounded-lg text-xs sm:text-sm text-blue-100 font-bold hover:underline'
          >
            Let&apos;s get started...
          </Link>
        </div>
      </div>

    
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
       
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-200'>
                Recent Offers
              </h2>
              <Link
                className='text-sm text-blue-300 hover:underline'
                href={'/'}
              >
                Show more listings
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              offerListings
            </div>
          </div>
        
 
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-200'>
                Recent places for rent
              </h2>
              <Link
                className='text-sm text-blue-100 hover:underline'
                href={'/'}
              >
                Show more places for rent
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              rentListings
            </div>
          </div>
        
       
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-200'>
                Recent places for sale
              </h2>
              <Link
                className='text-sm text-blue-100 hover:underline'
                href={'/'}
              >
                Show more places for sale
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              saleListings
            </div>
          </div>
      
      </div>
    
    <About/>
    
    </>
  );
}