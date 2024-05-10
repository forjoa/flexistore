import registered from '@/assets/registered.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='py-4 border-t border-gray-900'>
      <div className='flex gap-2'>
        <Image src={registered} alt='Registered icon' />
        <p>All rights reserved to Flexistore</p>
      </div>
    </footer>
  )
}
