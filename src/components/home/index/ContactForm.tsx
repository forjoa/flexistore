'use client'
import { sendContactMessage } from '@/server/utils/functions'
import { FormEvent, FormEventHandler } from 'react'
import { Toaster, toast } from 'sonner'

export default function ContactForm() {
  const onSubmit: FormEventHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: ContactData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement).entries()
    ) as unknown as ContactData

    const result = await sendContactMessage(data)

    if (result) {
        toast.success('Message sent correctly!')
    } else {
        toast.error('Something went wrong while sending the message')
    }
  }

  return (
    <>
      <Toaster />
      <form className='h-full flex flex-col justify-evenly' onSubmit={onSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            autoComplete='name'
            id='name'
            className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 text-black'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            autoComplete='email'
            id='email'
            className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 text-black'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            placeholder='Enter your message'
            id='message'
            className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 text-black'
          ></textarea>
        </div>
        <div>
          <input
            type='submit'
            value='Send message'
            className='bg-white text-black py-2 px-4 rounded cursor-pointer transition-all hover:opacity-50'
          />
        </div>
      </form>
    </>
  )
}
