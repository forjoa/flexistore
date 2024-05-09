import { SearchIcon } from '@/assets/icons'

export default function Searching({
  searching,
  handleSearch,
}: {
  searching: string
  handleSearch: any
}) {
  return (
    <div className='bg-gray-100/40 dark:bg-gray-800/40 rounded-lg p-6 mb-6'>
      <form className='w-full'>
        <div className='relative flex items-center w-full'>
          <SearchIcon className='absolute left-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
          <input
            className='w-full shadow-none appearance-none pl-8 bg-transparent outline-none'
            placeholder='Search products...'
            type='search'
            value={searching}
            onChange={handleSearch}
          />
        </div>
      </form>
    </div>
  )
}
