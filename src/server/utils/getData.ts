import { supabase } from '../database/connection'

export const getPresentationData = async (): Promise<{ data: PresentationData | null }> => {
  const { data, error } = await supabase.from('general_data').select('presentation_title, presentation_slogan').eq('id', 1)

  if (error) return { data: null }
 
  return { data: data[0] }
}

export const getAboutData = async (): Promise<{ data: AboutData | null }> => {
  const { data, error } = await supabase.from('general_data').select('about_title, about_content').eq('id', 1)

  if (error) return { data: null }

  return { data: data[0] }

}

export const getCategories = async (): Promise<{ categories: Categories[] | null}> =>{
  const { data, error } = await supabase.from('categories').select('*').neq('category_id', 0)

  if (error) return { categories: null }

  return { categories: data }
}
