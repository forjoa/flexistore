export async function sendContactMessage(data: FormData) {
    'use server'
  const name = data.get('name')
  const email = data.get('email')
  const message = data.get('message')

  console.log(name, email, message)

  return { success: true }
}
