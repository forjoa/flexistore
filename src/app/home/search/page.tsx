'use client'
import Main from '@/components/home/globals/Main'
import Image from 'next/image'
import Link from 'next/link'
import placeholder from '@/assets/placeholder.svg'
import { getCategories, getProducts } from '@/server/utils/getData'
import { useState, useEffect } from 'react'
import { Toaster, toast } from 'sonner'
import { SearchIcon } from '@/assets/icons'

export default function Search() {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { categories } = await getCategories()
        setCategories(categories || [])

        const { products } = await getProducts()
        setProducts(products || [])
      } catch (error) {
        setLoading(false)
        toast.error('Error fetching data')
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <Main>
      <Toaster />
      <div className='grid grid-cols-[280px_1fr] gap-6 p-6'>
        <div className='bg-gray-100/40 dark:bg-gray-800/40 rounded-lg p-6 hidden md:block'>
          <h2 className='text-lg font-semibold mb-4'>Filters</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-sm font-medium mb-2'>Category</h3>
              <div className='space-y-2'>
                {loading && <p>Loading categories...</p>}
                {categories.map((category, index) => (
                  <label
                    key={index}
                    className='flex items-center gap-2 text-sm'
                  >
                    <input
                      type='checkbox'
                      id='category-clothing'
                      name='category'
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className='text-sm font-medium mb-2'>Price</h3>
              <input type='range' max={1000} min={10} />
            </div>
          </div>
        </div>
        <div>
          <div className='bg-gray-100/40 dark:bg-gray-800/40 rounded-lg p-6 mb-6'>
            <form>
              <div className='relative flex items-center'>
                <SearchIcon className='absolute left-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
                <input
                  className='w-full shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 bg-transparent outline-none'
                  placeholder='Search products...'
                  type='search'
                />
              </div>
            </form>
          </div>
          <div className='flex flex-wrap justify-between gap-6'>
            {loading && <p>Loading products...</p>}
            {products.map((product, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-950 rounded-lg shadow-sm hover:shadow-lg transition-shadow w-full md:max-w-[250px]'
              >
                <Link href='#'>
                  <Image
                    alt={product.name}
                    className='w-full h-60 object-cover rounded-t-lg flex-grow-1'
                    src={placeholder}
                  />
                  <div className='p-4'>
                    <h3 className='text-lg font-semibold mb-2'>
                      {product.name}
                    </h3>
                    <p className='text-gray-500 dark:text-gray-400 text-sm mb-2'>
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  )
}
