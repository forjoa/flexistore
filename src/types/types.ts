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

interface Categories {
  category_id?: number
  name: string
  created_at?: string
}
