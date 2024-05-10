'use client'
import Footer from '@/components/home/globals/Footer'
import Main from '@/components/home/globals/Main'
import { insertNewClient } from '@/server/utils/functions'
import Link from 'next/link'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'

const RegistrationForm = () => {
  const [newClient, setNewClient] = useState<Client>({
    name: '',
    lastname: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewClient({
      ...newClient,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { success, error } = await insertNewClient(newClient)

    success ? toast.success('User created correctly!') : toast.error(error)

    setNewClient({
      name: '',
      lastname: '',
      email: '',
      password: '',
    })
  }

  return (
    <Main>
      <Toaster />
      <main className='flex w-full h-[calc(100vh-200px)] items-center justify-center'>
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-md border border-gray-900 p-8 flex flex-col gap-4 rounded'
        >
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>Register</h2>
            <p className='text-gray-400'>
              Please fill in the form to create a new account.
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                placeholder='John'
                required
                type='text'
                value={newClient.name}
                onChange={handleChange}
                className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 bg-gray-950'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='lastname'>Last Name</label>
              <input
                id='lastname'
                placeholder='Doe'
                required
                type='text'
                value={newClient.lastname}
                onChange={handleChange}
                className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 bg-gray-950'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                placeholder='john.doe@example.com'
                required
                type='email'
                autoComplete='username'
                value={newClient.email}
                onChange={handleChange}
                className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 bg-gray-950'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                required
                type='password'
                autoComplete='new-password'
                value={newClient.password}
                onChange={handleChange}
                className='p-4 rounded focus:outline-none focus:ring focus:border-blue-500 bg-gray-950'
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full bg-white text-black py-2 px-4 rounded cursor-pointer transition-all hover:opacity-50'
          >
            Register
          </button>
          <div className='w-full flex flex-col items-end'>
            <p>If you already have an account</p>
            <Link href='/home/login' className='underline text-blue-500'>
              Login
            </Link>
          </div>
        </form>
      </main>
      <Footer />
    </Main>
  )
}

export default RegistrationForm
