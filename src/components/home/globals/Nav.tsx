'use client'
import { useState } from 'react'
import Image from 'next/image'
import flexiLogo from '../../../../public/flexiLogo.svg'
import close from '@/assets/x.svg'
import userIcon from '@/assets/user.svg'
import logoutIcon from '@/assets/logout.svg'
import Link from 'next/link'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const user: Client = window.sessionStorage.getItem('user')
    ? JSON.parse(window.sessionStorage.getItem('user') || '')
    : null

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem('user')
      window.location.reload()
    }
  }

  return (
    <nav className='fixed top-0 left-0 z-10 flex w-full items-center justify-between bg-black bg-opacity-50 px-10 py-4 backdrop-blur-xl md:bg-transparent'>
      <Link href='/home' className='flex items-center gap-2'>
        <Image src={flexiLogo} alt='Logo' className='h-8 w-8' />
        <h1 className='text-3xl font-bold'>FlexiStore</h1>
      </Link>
      <div
        className='burger-menu cursor-pointer md:hidden'
        onClick={toggleMenu}
      >
        <div className='mb-1 h-1 w-6 rounded-full bg-white'></div>
        <div className='mb-1 h-1 w-6 rounded-full bg-white'></div>
      </div>
      <ul
        className={`
          fixed top-0 right-0 z-10 h-screen w-full max-w-xs bg-black text-white transition-transform flex flex-col justify-evenly p-16 gap-10
          ${
            menuOpen
              ? 'translate-x-0'
              : 'translate-x-full md:-translate-x-48 md:flex md:items-center md:bg-transparent md:p-0 md:flex-row md:h-full md:gap-4'
          }
        `}
      >
        <li className='h-[60%] w-full cursor-pointer rounded px-4 py-2 transition-all hover:bg-gray-700 md:mb-0 md:h-auto md:bg-transparent md:px-4 grid place-items-center'>
          <Link href='/home'>Home</Link>
        </li>
        <li className='h-[60%] w-full cursor-pointer rounded px-4 py-2 transition-all hover:bg-gray-700 md:mb-0 md:h-auto md:bg-transparent md:px-4 grid place-items-center'>
          <Link href='/home/search'>Search</Link>
        </li>
        <li className='h-[60%] w-full cursor-pointer rounded px-4 py-2 transition-all hover:bg-gray-700 md:mb-0 md:h-auto md:bg-transparent md:px-4 grid place-items-center'>
          <Link href='/home/contact'>Contact</Link>
        </li>
        {user == null || user == undefined ? (
          <>
            <li className='h-[60%] w-full cursor-pointer rounded bg-white px-4 text-black transition-all hover:opacity-50 md:mb-0 md:h-auto md:px-4 md:py-2 grid place-items-center'>
              <Link href='/home/login'>Login</Link>
            </li>
            <li className='h-[60%] w-full cursor-pointer rounded px-4 py-2 underline transition-all hover:bg-gray-200 md:h-auto md:px-4 grid place-items-center'>
              <Link href='/home/register'>Register</Link>
            </li>
          </>
        ) : (
          <>
            <li className='h-[60%] w-full cursor-pointer rounded bg-white px-4 text-black transition-all hover:opacity-50 md:mb-0 md:h-auto md:px-6 md:py-2 flex justify-center items-center'>
              <Link
                href='/home/userProfile'
                className='flex justify-center items-center'
              >
                <Image src={userIcon} alt='User icon' />
                Joaquin
              </Link>
            </li>
            <li
              onClick={logout}
              className='h-[60%] w-full cursor-pointer rounded px-4 py-2 transition-all hover:bg-red-500 hover:bg-opacity-50 md:mb-0 md:h-auto md:bg-transparent md:px-6 flex justify-center items-center text-red-600 '
            >
              <Image src={logoutIcon} alt='Logout icon' />
              Exit
            </li>
          </>
        )}
      </ul>
      {menuOpen && (
        <button
          className='absolute top-5 right-5 z-50 text-white text-lg'
          onClick={toggleMenu}
        >
          <Image src={close} alt='Close icon' />
        </button>
      )}
    </nav>
  )
}
