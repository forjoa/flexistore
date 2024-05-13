const CategoryFilter = ({
  categories,
  filterCategory,
  setFilterCategory,
}: {
  categories: Category[]
  filterCategory: number | undefined
  setFilterCategory: any
}) => {
  return (
    <div>
      <h3 className='text-sm font-medium mb-2'>Category</h3>
      <div className='space-y-2'>
        {categories.length === 0 && <p>Loading categories...</p>}
        {categories.map((category, index) => (
          <label key={index} className='flex items-center gap-2 text-sm cursor-pointer'>
            <input
              type='radio'
              id={`${category.category_id}`}
              name='category'
              onClick={() => setFilterCategory(category.category_id)}
              checked={filterCategory === category.category_id}
              className='appearance-none border-2 border-white h-3 w-3 rounded checked:bg-blue-500 checked:text-blue-500 checked:border-blue-500'
            />
            {category.name}
          </label>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
