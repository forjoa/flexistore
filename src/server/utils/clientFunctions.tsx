'use client'
import { Toaster, toast } from 'sonner'
import { ReactNode } from 'react'

export default function showToaster(s: boolean, m: string): ReactNode {
    if (s) {
      toast.success(m)
    } else {
      toast.error(m)
    }
    return <Toaster richColors />
  }