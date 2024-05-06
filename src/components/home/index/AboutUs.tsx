import Image from 'next/image'
import placeholder from '@/assets/placeholder.svg'
import { getAboutData } from '@/server/utils/getData'

export default async function AboutUs() {
  const { data } = await getAboutData()

  return (
    <div className='flex h-[80vh] py-[100px] gap-10'>
      <div className='w-1/2'>
        <Image
          src={placeholder}
          alt='Placeholder image'
          className='h-full aspect-auto object-cover rounded'
        />
      </div>
      <div className='w-1/2 h-full flex flex-col justify-center items-start gap-5'>
        <h1 className='text-5xl font-bold'>{data?.about_title}</h1>
        <p>
          {data?.about_content}
        </p>
      </div>
    </div>
  )
}
