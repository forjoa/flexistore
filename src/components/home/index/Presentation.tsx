import Image from 'next/image'
import placeholder from '@/assets/placeholder.svg'
import Link from 'next/link'

export default function Presentation() {
  return (
    <div className='flex h-[80vh] py-[100px] gap-10'>
      <div className='w-1/2 h-full flex flex-col justify-center items-start gap-5'>
        <h1 className='text-7xl font-bold'>Flexible e-commerce</h1>
        <p>
          Add your own color palette, your own text and your own information.
        </p>
        <Link
          href={'/home/search'}
          className='w-auto bg-white text-black py-2 px-4 rounded'
        >
          Shop now
        </Link>
      </div>
      <div className='w-1/2'>
        <Image
          src={placeholder}
          alt='Placeholder image'
          className='h-full aspect-auto object-cover rounded'
        />
      </div>
    </div>
  )
}
