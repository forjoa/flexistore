'use client'
import Main from '@/components/home/globals/Main'
import UserInfoCard from '@/components/home/userProfile/UserInfoCard'
import UserNav from '@/components/home/userProfile/UserNav'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

export default function UserProfileLayout({ children } : { children: ReactNode }) {
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
      <UserInfoCard user={user} />
      <UserNav />
      {children}
    </Main>
  )
}
