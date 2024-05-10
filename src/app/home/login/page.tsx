import Footer from '@/components/home/globals/Footer'
import Main from '@/components/home/globals/Main'
import Link from 'next/link'

export default function Login() {
  return (
    <Main>
      <main className='flex w-full h-[calc(100vh-200px)] items-center justify-center '>
        <form className='w-full max-w-md border border-gray-900 p-8 flex flex-col gap-4 rounded'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>Login</h2>
            <p className='text-gray-400'>
              Enter your email and password to access your account.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                placeholder='m@example.com'
                required
                type='email'
                autoComplete='username'
                className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 bg-gray-950'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                required
                type='password'
                autoComplete='current-password'
                className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 bg-gray-950'
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full bg-white text-black py-2 px-4 rounded cursor-pointer transition-all hover:opacity-50'
          >
            Sign in
          </button>
          <div className='w-full flex flex-col items-end'>
            <p>If you don&apos;t have an account</p>
            <Link href={'/home/register'} className='underline text-blue-500'>
              Register
            </Link>
          </div>
        </form>
      </main>
      <Footer />
    </Main>
  )
}
