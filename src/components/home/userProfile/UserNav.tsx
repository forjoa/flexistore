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
              className={`py-2 px-4 rounded transition-all hover:bg-gray-800 hover:bg-opacity-80 ${currentRoute === 'userProfile' ? 'bg-gray-800 bg-opacity-60' : ''}`}
            >
              General information
            </Link>
          </li>
          <li>
            <Link
              href='/home/userProfile/orders'
              className={`py-2 px-4 rounded transition-all hover:bg-gray-800 hover:bg-opacity-80 ${currentRoute === 'orders' ? 'bg-gray-800 bg-opacity-60' : ''}`}
            >
              Orders
            </Link>
          </li> 
        </ul>
      </nav>
    </div>
  )
}
