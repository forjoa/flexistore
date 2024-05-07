import ContactForm from './ContactForm'

export default function ContactUs() {

  return (
    <div className='flex flex-col mt-16 md:mt-0 md:flex-row md:h-[80vh] md:py-[100px] gap-10'>
      <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-start gap-5'>
        <h1 className='text-5xl font-bold'>Get in touch with us</h1>
        <p>
          Have a question or feedback? We&apos;d love to hear from you. Fill out
          the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <div className='w-full md:w-1/2'>
        <ContactForm />
      </div>
    </div>
  )
}
