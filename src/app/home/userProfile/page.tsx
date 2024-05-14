'use client'
import {
  CalendarIcon,
  LocateIcon,
  MailboxIcon,
  PhoneIcon,
} from '@/assets/icons'
import Main from '@/components/home/globals/Main'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function UserProfile() {
  const [user, setUser] = useState<Client>()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = window.sessionStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        router.push('/home')
      }
    }
  }, [router])

  return (
    <Main>
      <div className='border rounded border-gray-800 p-8 flex items-center justify-around md:flex-row flex-col gap-4 md:gap-0'>
        <div className='flex flex-col items-center justify-between gap-2'>
          <div className='rounded-full bg-gray-900 h-16 w-16 grid place-items-center'>
            {user?.name?.charAt(0).toUpperCase()}
            {user?.lastname?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p>
              {user?.name} {user?.lastname}
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='flex gap-2'>
            <MailboxIcon />
            {user?.email}
          </p>
          <p className='flex gap-2'>
            <PhoneIcon />
            {user?.phone ? user.phone : 'No phone provided'}
          </p>
          <p className='flex gap-2'>
            <LocateIcon />
            {user?.address ? user.address : 'No address provided'}
          </p>
          <p className='flex gap-2'>
            <CalendarIcon />
            {user?.birth_date
              ? user.birth_date.toDateString()
              : 'Birth date not provided'}
          </p>
        </div>
      </div>
    </Main>
  )
}
