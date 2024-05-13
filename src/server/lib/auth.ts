import { supabase } from '../database/connection'

export async function login(client: Client) {
  const { email, password } = client

  try {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('email', email)
      .limit(1)

    if (error) {
      return { success: false, error: error.details }
    }

    if (!data || data.length === 0) {
      return { success: false, error: `User doesn't exist` }
    }

    if (data[0]?.password !== password) {
      return { success: false, error: 'Incorrect password' }
    }

    return { success: true, user: data[0] }
  } catch (error: any) {
    console.error('Login error:', error.message)
    return { success: false, error: 'An error occurred during login' }
  }
}
