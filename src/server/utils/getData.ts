import { supabase } from '../database/connection'

export const getPresentationData = async (): Promise<{ data: PresentationData | null }> => {
  const { data, error } = await supabase.from('general_data').select('*').eq('id', 1)

  if (error) return { data: null }
 
  return { data: data[0] }
}
