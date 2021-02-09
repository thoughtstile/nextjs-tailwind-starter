function App() {
  return (
    <div className='bg-gray-100 py-14'>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <img
              className='h-48 w-full object-cover md:w-48 animate-pulse'
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png`}
              alt='React Pulsing Icon'
            />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              React
            </div>
            <a
              href='#'
              className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
            >
              Tailwind CSS + Create-React-App!
            </a>
            <p className='mt-2 text-gray-500'>
              A guide designed to get you up and running as quickly as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
