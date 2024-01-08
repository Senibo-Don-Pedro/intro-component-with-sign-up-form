import Form from './component/Form'

const App = () => {
  return (
    <main className='font-poppins min-h-screen flex justify-center sm:items-center bg'>
      <div className='w-[85%] max-w-screen-lg pt-12 sm:pt-0 flex flex-col sm:flex-row sm:items-center'>
        <div className='text-center md:text-left sm:w-[50%]'>
          <p className='text-3xl sm:text-4xl font-bold text-white mb-6'>
            Learn to code by <br /> watching others
          </p>
          <p className='text-white text-lg mb-10 sm:text-sm sm:w-[88%] font-medium'>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable
          </p>
        </div>
        <div className='sm:w-[50%]'>
          <div className=' bg-accentBlue text-center p-5 rounded-xl mb-7 text-white box '>
            <p>
              <span className='font-bold'>Try it free 7 days</span> then $20/mo.
              thereafter
            </p>
          </div>
          <div className=''>
            <Form />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
