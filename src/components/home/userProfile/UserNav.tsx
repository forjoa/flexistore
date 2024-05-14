import Link from 'next/link'

export default function UserNav() {
  return (
    <div className='w-full h-auto my-4'>
      <nav className='h-auto'>
        <ul className='flex h-auto'>
          <li>
            <Link
              href='/home/userProfile'
              className='py-2 px-4 rounded transition-all hover:bg-white hover:bg-opacity-50'
            >
              General information
            </Link>
          </li>
          <li>
            <Link
              href='/home/userProfile/orders'
              className='py-2 px-4 rounded transition-all hover:bg-white hover:bg-opacity-50'
            >
              Orders
            </Link>
          </li> 
        </ul>
      </nav>
    </div>
  )
}
