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

export async function insertNewClient(client: Client) {
  const { name, lastname, email, password } = client

  try {
    const { error } = await supabase
      .from('clients')
      .insert({ name, lastname, email, password })

    if (error) return { success: false, error: error.details }
  } catch (er: any) {
    return { success: false, error: er as string }
  }

  return { success: true }
}

export async function updateClientInformation(client: Client) {
  const { name, lastname, address, email, phone, birth_date, dni, client_id } = client

  try {
    const { error } = await supabase
      .from('clients')
      .update({ name, lastname, address, email, phone, birth_date, dni })
      .eq('client_id', client_id)
      
    if (error) return { success: false, error: error.details }
  } catch (er: any) {
    return { success: false, error: er as string }
  }

  return { success: true }
}
