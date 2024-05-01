import { redirect } from 'next/navigation'

export default function C() {
  if (typeof window !== 'undefined') {
    redirect('/home')
  }

  return <></>
}
