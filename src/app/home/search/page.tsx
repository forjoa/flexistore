'use client'
import Main from '@/components/home/globals/Main'
import { getCategories, getProducts } from '@/server/utils/getData'
import { useState, useEffect, ChangeEvent } from 'react'
import { Toaster, toast } from 'sonner'
import ProductList from '@/components/home/search/ProductsList'
import CategoryFilter from '@/components/home/search/CategoryFilter'
import Searching from '@/components/home/search/Searching'
import Footer from '@/components/home/index/Footer'

export default function Search() {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [searching, setSearching] = useState<string>('')
  const [filterCategory, setFilterCategory] = useState<number | undefined>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { categories } = await getCategories()
        setCategories([
          { category_id: 0, name: 'All' },
          ...(categories as Array<Category>),
        ])

        const { products } = await getProducts()
        setProducts(products || [])
      } catch (error) {
        toast.error('Error fetching data')
      }
    }

    fetchData()
  }, [])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearching(e.target.value)
  }

  return (
    <Main>
      <Toaster />
      <div className='grid grid-cols-[280px_1fr] gap-6 p-6'>
        <div className='bg-gray-100/40 dark:bg-gray-800/40 rounded-lg p-6 hidden md:block'>
          <h2 className='text-lg font-semibold mb-4'>Filters</h2>
          <div className='space-y-6'>
            <CategoryFilter
              categories={categories}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
            />
          </div>
        </div>
        <div>
          <Searching 
            searching={searching} 
            handleSearch={handleSearch} 
          />
          <ProductList
            products={products}
            searching={searching}
            filterCategory={filterCategory}
          />
        </div>
      </div>
      <Footer />
    </Main>
  )
}
