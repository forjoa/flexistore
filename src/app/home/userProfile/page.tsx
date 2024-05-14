'use client'
import Main from '@/components/home/globals/Main'
import { useRouter } from 'next/navigation'

export default function UserProfile() {
  const router = useRouter()
  const user: Client = sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user') || '')
    : null

  if (!user) {
    router.push('/home')
    return
  }

  return (
    <Main>
      <p>User profile</p>
    </Main>
  )
}
