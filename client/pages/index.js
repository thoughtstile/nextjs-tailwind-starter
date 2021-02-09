import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='bg-gray-100 py-8'>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover md:w-48 animate-pulse'
                  src={`data:image/png;base64,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`}
                  alt='Tailwind Pulsing Icon'
                />
              </div>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Next JS
                </div>
                <a
                  href='#'
                  className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
                >
                  Tailwind CSS + Next.js!
                </a>
                <p className='mt-2 text-gray-500'>
                  A guide designed to get you up and running as quickly as
                  possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
