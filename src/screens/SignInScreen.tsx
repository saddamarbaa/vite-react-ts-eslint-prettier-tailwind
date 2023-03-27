/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Button from 'components/Button';

export default function SignInScreen() {
  return (
    <section className='py-20'>
      <h1 className='mt-6 text-center text-3xl font-bold'>Sign In</h1>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-center px-6 py-12'>
        <div className='w-full max-w-md'>
          <form className='flex w-full flex-col space-y-5'>
            <div>
              <input
                className='w-full appearance-none rounded border border-gray-400 bg-white p-3  leading-tight shadow transition duration-300 hover:border-gray-500  focus:outline-none'
                type='text'
                id='email'
                placeholder='Email'
              />
            </div>
            <div>
              <div>
                <input
                  className='w-full appearance-none rounded border border-gray-400 bg-white p-3  leading-tight shadow transition duration-300 hover:border-gray-500  focus:outline-none'
                  placeholder='Password'
                  type='password'
                />
              </div>
            </div>
            <div className='flex flex-row flex-wrap items-center justify-between space-y-2 whitespace-nowrap text-sm sm:space-y-0 sm:text-base'>
              <p>
                Don't have a account?{' '}
                <Link
                  to='/sign-up'
                  className='ml-1 text-red-600 transition duration-200 ease-in-out hover:text-red-700'
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to='/forgot-password'
                  className='text-blue-700 transition duration-200 ease-in-out hover:text-blue-800'
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <Button>Sign In</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
