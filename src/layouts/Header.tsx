/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useLocation, useNavigate } from 'react-router';

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const pathMathRoute = (route: string) => route === pathname;

  return (
    <div className='sticky top-0 z-40 border-b bg-white shadow-sm'>
      <header className='mx-auto flex max-w-6xl flex-col items-center justify-between space-y-4 p-4 sm:flex-row sm:space-y-0'>
        <p onClick={() => navigate('/')} className='cursor-pointer  py-3 text-sm font-semibold  transition-all'>
          LOGO
        </p>
        <ul className='flex flex-col items-center space-y-1 sm:flex-row sm:space-x-10 sm:space-y-0'>
          <li
            className={`cursor-pointer  py-3 text-sm font-semibold  transition-all duration-300 hover:border-b-[3px]  hover:border-b-red-500  ${
              pathMathRoute('/') ? 'border-b-[3px] border-b-red-500 text-black' : 'text-gray-400'
            }`}
            onClick={() => navigate('/')}
          >
            Home
          </li>
          <li
            className={`cursor-pointer  py-3 text-sm font-semibold transition-all duration-300 hover:border-b-[3px]  hover:border-b-red-500 ${
              pathMathRoute('/offers') ? 'border-b-[3px] border-b-red-500 text-black' : 'text-gray-400'
            }`}
            onClick={() => navigate('/offers')}
          >
            Offers
          </li>
          <li
            className={`cursor-pointer  py-3 text-sm font-semibold  transition-all duration-300 hover:border-b-[3px]  hover:border-b-red-500   ${
              pathMathRoute('/sign-in') ? 'border-b-[3px] border-b-red-500 text-black' : 'text-gray-400'
            }`}
            onClick={() => navigate('/sign-in')}
          >
            Log in
          </li>
          <li
            className={`cursor-pointer   py-3 text-sm font-semibold transition-all duration-300 hover:border-b-[3px]  hover:border-b-red-500   ${
              pathMathRoute('/sign-up') ? 'border-b-[3px] border-b-red-500 text-black' : 'text-gray-400'
            }`}
            onClick={() => navigate('/sign-up')}
          >
            Sign up
          </li>
        </ul>
      </header>
    </div>
  );
}
