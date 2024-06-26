import Image from 'next/image'
import placeholder from '@/assets/placeholder.svg'
import Link from 'next/link'
import { getPresentationData } from '@/server/utils/getData'

export default async function Presentation() {
  const { data } = await getPresentationData()

  return (
    <div className='flex flex-col gap-5 md:flex-row md:h-[80vh] md:py-[100px] md:gap-10'>
      <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-start gap-5'>
        <h1 className='text-5xl md:text-7xl font-bold'>{data?.presentation_title}</h1>
        <p>{data?.presentation_slogan}</p>
        <Link
          href={'/home/search'}
          className='w-auto bg-white text-black py-2 px-4 rounded'
        >
          Shop now
        </Link>
      </div>
      <div className='w-full md:w-1/2'>
        <Image
          src={placeholder}
          alt='Placeholder image'
          className='h-full aspect-auto object-cover rounded'
        />
      </div>
    </div>
  )
}
