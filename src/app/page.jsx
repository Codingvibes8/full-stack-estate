import Link from 'next/link';

export default function Home() {
  return (
   
    <>
 
      
      <div className='relative bg-hamstead bg-cover bg-center bg-fixed flex flex-col gap-6 p-28 px-8 md:px-16 min-h-screen max-w-6xl mx-auto md:items-center'>
        <div className='absolute inset-0 w-full h-full bg-black/70'></div>
        <div className='relative z-20'>
          <h1 className='text-white font-bold text-5xl lg:text-7xl mb-10'>
            Find your next <span className='text-yellow-300'>perfect</span>
            <br />
            place with ease
          </h1>
          <div className='text-white text-lg sm:text-xl mt-4 font-serif'>
          ZenEstate is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
          </div>
          <Link
            href={'/'}
            className='mt-6 inline-block bg-blue-700 px-6 py-3 rounded-lg text-xs sm:text-sm text-blue-100 font-bold hover:underline'
          >
            Let&apos;s get started...
          </Link>
        </div>
      </div>

    
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 bg-slate-200'>
       
          <div className='text-slate-800'>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold'>
                Recent Offers
              </h2>
              <Link
                className='text-sm  hover:underline'
                href={'/'}
              >
                Show more listings
              </Link>
            </div>
            <div className='flex flex-wrap gap-4 '>
              offerListings
            </div>
          </div>
        
 
          <div className='text-slate-800'>
            <div className=''>
              <h2 className='text-2xl font-semibold '>
                Recent places for rent
              </h2>
              <Link
                className='text-sm hover:underline'
                href={'/'}
              >
                Show more places for rent
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              rentListings
            </div>
          </div>
        
       
          <div className='text-slate-800'>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold '>
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
    
 
    
    </>
  );
}