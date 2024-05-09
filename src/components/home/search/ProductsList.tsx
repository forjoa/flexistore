import Image from 'next/image'
import Link from 'next/link'
import placeholder from '@/assets/placeholder.svg'

const ProductList = ({
  products,
  searching,
  filterCategory,
}: {
  products: Product[]
  searching: string
  filterCategory: number | undefined
}) => {
  return (
    <div className='flex flex-wrap justify-between gap-6'>
      {products.length === 0 && <p>Loading products...</p>}
      {products
        .filter(
          (product) =>
            (product.name.toLowerCase().includes(searching.toLowerCase()) ||
              !searching) &&
            (filterCategory === 0 || product.category_id === filterCategory)
        )
        .map((product, index) => (
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
                <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                <p className='text-gray-500 dark:text-gray-400 text-sm mb-2'>
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default ProductList
