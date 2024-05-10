'use client'
import { sendContactMessage } from '@/server/utils/functions'
import { FormEvent, FormEventHandler, useState } from 'react'
import { Toaster, toast } from 'sonner'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit: FormEventHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: ContactData = {
      name,
      email,
      message,
    }

    const result = await sendContactMessage(data)

    if (result) {
      toast.success('Message sent correctly!')
      setName('')
      setEmail('')
      setMessage('')
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 bg-gray-950'
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 bg-gray-950'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            placeholder='Enter your message'
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 bg-gray-950'
          ></textarea>
        </div>
        <div className='w-full flex justify-end my-4 md:my-0'>
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
