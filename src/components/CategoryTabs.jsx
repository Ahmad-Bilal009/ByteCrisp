function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="category-tabs" role="tablist" aria-label="Pricing categories">
      {categories.map((category) => (
        <button
          key={category.key}
          type="button"
          role="tab"
          aria-selected={active === category.key}
          className={active === category.key ? 'category-tab active' : 'category-tab'}
          onClick={() => onChange(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
