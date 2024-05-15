'use client'
import { useEffect, useState } from 'react'

export default function UserProfile() {
  const [user, setUser] = useState<Client>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(
        window.sessionStorage.getItem('user')
          ? JSON.parse(window.sessionStorage.getItem('user') || '')
          : null
      )
    }
  }, [])

  console.log(user)
  
  return (
    <div className='w-full max-w-2xl shadow-md rounded-lg overflow-hidden block m-auto'>
      <div className='p-4'>
        <p>Update your personal details.</p>
      </div>
      <form className='grid gap-4 p-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <label htmlFor='name' className='block font-medium'>
              Name
            </label>
            <input
              id='name'
              className='w-full border border-gray-800 bg-transparent p-4 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              type='text'
              placeholder='Enter your name'
              value={user?.name}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='lastname' className='block font-medium'>
              Last Name
            </label>
            <input
              id='lastname'
              className='w-full border border-gray-800 bg-transparent p-4 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              type='text'
              placeholder='Enter your last name'
              value={user?.lastname}
            />
          </div>
        </div>
        <div className='space-y-2'>
          <label htmlFor='address' className='block font-medium'>
            Address
          </label>
          <textarea
            id='address'
            className='w-full border border-gray-800 bg-transparent p-4 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 min-h-32'
            placeholder='Enter your address'
            value={user?.address}
          ></textarea>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <label htmlFor='email' className='block font-medium'>
              Email
            </label>
            <input
              id='email'
              className='w-full border border-gray-800 bg-transparent p-4 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              type='email'
              placeholder='Enter your email'
              value={user?.email}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='phone' className='block font-medium'>
              Phone
            </label>
            <input
              id='phone'
              className='w-full border border-gray-800 bg-transparent p-4 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              placeholder='Enter your phone number'
              value={user?.phone}
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <label htmlFor='birth_date' className='block font-medium'>
              Birth Date
            </label>
            <input
              id='birth_date'
              className='w-full border border-gray-800 bg-transparent p-4 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              type='date'
              value={user?.birth_date?.toString()}
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='dni' className='block font-medium'>
              DNI
            </label>
            <input
              id='dni'
              className='w-full border border-gray-800 bg-transparent p-4 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              placeholder='Enter your DNI'
              value={user?.dni}
            />
          </div>
        </div>
        <div className='px-4 py-3'>
          <input
            type='submit'
            value={'Save changes'}
            className='ml-auto px-4 py-2 bg-blue-500 text-white rounded-md font-semibold cursor-pointer'
          />
        </div>
      </form>
    </div>
  )
}
