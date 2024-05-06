import Image from 'next/image'
import placeholder from '@/assets/placeholder.svg'

export default function AboutUs() {
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
        <h1 className='text-5xl font-bold'>About our e-commerce</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
          debitis veritatis tempore, cum in pariatur necessitatibus optio nam
          corrupti omnis natus, quasi consequatur fuga doloribus ad, nostrum
          odio asperiores officiis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Blanditiis sunt corporis, perferendis deleniti
          cumque suscipit, voluptate accusantium dolorem est consectetur quasi.
          Explicabo fuga officiis nostrum aspernatur, amet optio voluptatibus
          maiores!
        </p>
      </div>
    </div>
  )
}
