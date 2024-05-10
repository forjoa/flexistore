import arrow from '@/assets/arrow-narrow-up.svg'
import Image from 'next/image'

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={handleClick}
      className='fixed bottom-5 right-5 px-5 py-2.5 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 focus:outline-none transition-all'
    >
      <Image src={arrow} alt='Arrow' />
    </button>
  )
}

export default ScrollToTopButton
