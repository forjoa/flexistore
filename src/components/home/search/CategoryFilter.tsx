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
          <label key={index} className='flex items-center gap-2 text-sm'>
            <input
              type='radio'
              id={`${category.category_id}`}
              name='category'
              onClick={() => setFilterCategory(category.category_id)}
              checked={filterCategory === category.category_id}
            />
            {category.name}
          </label>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
