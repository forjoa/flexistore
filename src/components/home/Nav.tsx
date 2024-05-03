import Image from 'next/image'
import flexiLogo from '../../../public/flexiLogo.svg'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='flex items-center justify-between fixed top-0 h-[80px] w-full px-10'>
      <Link href={'/home'} className='flex items-center gap-2'>
        <Image src={flexiLogo} alt='Logo' className='w-8' />
        <h1 className='font-bold text-3xl'>FlexiStore</h1>
      </Link>
      <ul className='flex items-center h-full'>
        <li className='h-[60%] hover:bg-gray-800 flex items-center justify-center px-4 transition-all cursor-pointer rounded'>
          <Link href={'/home'}>Home</Link>
        </li>
        <li className='h-[60%] hover:bg-gray-800 flex items-center justify-center px-4 transition-all cursor-pointer rounded'>
          <Link href={'/home/search'}>Search</Link>
        </li>
        <li className='h-[60%] hover:bg-gray-800 flex items-center justify-center px-4 transition-all cursor-pointer rounded'>
          <Link href={'/home/contact'}>Contact</Link>
        </li>
        <li className='h-[60%] bg-white text-black flex items-center justify-center px-4 transition-all cursor-pointer rounded'>
          <Link href={'/home/login'}>Login</Link>
        </li>
        <li className='h-[60%] flex items-center justify-center px-4 transition-all cursor-pointer rounded underline'>
          <Link href={'/home/register'}>Register</Link>
        </li>
      </ul>
    </nav>
  )
}
