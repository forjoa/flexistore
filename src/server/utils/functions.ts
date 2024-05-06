import { supabase } from '../database/connection'

export async function sendContactMessage(data: FormData) {
  'use server'
  const name = data.get('name')
  const email = data.get('email')
  const message = data.get('message')

  try {
    const { error } = await supabase
      .from('contact_messages')
      .insert({ name: name, email: email, message: message })

    if (error) return { success: false }

  } catch (er: any) {
    return { success: false }
  }

  return { success: true }
}
