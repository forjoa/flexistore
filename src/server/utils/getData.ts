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

export const getCategories = async (): Promise<{ categories: Category[] | null}> =>{
  const { data, error } = await supabase.from('categories').select('*').neq('category_id', 0)

  if (error) return { categories: null }

  return { categories: data }
}

export const getProducts = async (): Promise<{ products: Product[] | null}> => {
  const { data, error } = await supabase.from('products').select('*').neq('product_id', 0)

  if (error) return { products: null }

  return { products: data }
}
