import { supabase } from '../database/connection'

export async function sendContactMessage(data: ContactData) {
  const { name, email, message } = data

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
