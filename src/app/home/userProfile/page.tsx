'use client'
import { updateClientInformation } from '@/server/utils/functions'
import { FormEvent, useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'

export default function UserProfile() {
  const [user, setUser] = useState<Client>({
    name: '',
    lastname: '',
    address: '',
    email: '',
    phone: '',
    birth_date: undefined,
    dni: '',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = window.sessionStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
  }, [])

  const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { id, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }))
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    const { success, error } = await updateClientInformation(user)

    if (success) {
      if (typeof window !== 'undefined') {
        toast.success('Information updated correctly')

        setTimeout(() => {
          window.sessionStorage.setItem('user', JSON.stringify(user))
          window.location.reload()
        }, 3000)
      }
    } else {
      toast.error(error)
    }
  }

  return (
    <div className='w-full max-w-2xl shadow-md rounded-lg overflow-hidden block m-auto'>
      <Toaster />
      <div className='p-4'>
        <p>Update your personal details.</p>
      </div>
      <form className='grid gap-4 p-4' onSubmit={handleSubmitForm}>
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
              value={user.name}
              onChange={handleInputChange}
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
              value={user.lastname}
              onChange={handleInputChange}
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
            value={user.address}
            onChange={handleInputChange}
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
              value={user.email}
              onChange={handleInputChange}
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
              value={user.phone}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              value={user.dni}
              onChange={handleInputChange}
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
