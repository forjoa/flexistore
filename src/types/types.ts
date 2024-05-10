interface PresentationData {
  presentation_title?: string
  presentation_slogan?: string
}

interface AboutData {
  about_title?: string
  about_content?: string
}

interface ContactData {
  name: string
  email: string
  message: string
}

interface Category {
  category_id?: number
  name: string
  created_at?: string
}

interface Product {
  product_id: number
  name: string
  description: string
  price: number
  cost: number
  size?: string | null
  stock: number
  weight?: number | null
  created_at: string
  bar_code: string
  category_id: number
  discount_id?: number | null
}

interface Client {
  client_id: number
  name: string
  lastname: string
  address: string
  email: string
  password: string
  phone: string
  created_at: Date
  birth_date: Date
  dni: string
}
