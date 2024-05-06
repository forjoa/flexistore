import { sendContactMessage } from '@/server/utils/functions'
import showToaster from '@/server/utils/clientFunctions'

export default function ContactUs() {
  const submitForm = async (data: FormData) => {
    'use server'
    const { success } = await sendContactMessage(data)

    let s = success
    let m = success
      ? 'Message correctly sent!'
      : 'Something went wrong while sending your message'

    showToaster(s, m)
  }

  return (
    <div className='flex h-[80vh] py-[100px] gap-10'>
      <div className='w-1/2 h-full flex flex-col justify-center items-start gap-5'>
        <h1 className='text-5xl font-bold'>Get in touch with us</h1>
        <p>
          Have a question or feedback? We&apos;d love to hear from you. Fill out
          the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <div className='w-1/2'>
        <form
          className='h-full flex flex-col justify-evenly'
          action={submitForm}
        >
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
      </div>
    </div>
  )
}
