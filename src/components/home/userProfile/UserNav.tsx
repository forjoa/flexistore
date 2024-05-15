import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function UserNav() {
  const currentRoute = usePathname().split('/')[usePathname().split('/').length - 1]
  
  return (
    <div className='w-full h-auto my-4'>
      <nav className='h-auto'>
        <ul className='flex h-auto'>
          <li>
            <Link
              href='/home/userProfile'
              className={`py-2 px-4 rounded transition-all hover:bg-white hover:bg-opacity-50 ${currentRoute === 'userProfile' ? 'bg-white bg-opacity-30' : ''}`}
            >
              General information
            </Link>
          </li>
          <li>
            <Link
              href='/home/userProfile/orders'
              className={`py-2 px-4 rounded transition-all hover:bg-white hover:bg-opacity-50 ${currentRoute === 'orders' ? 'bg-white bg-opacity-30' : ''}`}
            >
              Orders
            </Link>
          </li> 
        </ul>
      </nav>
    </div>
  )
}
