const filterByParentSlug = (categories, slug) => {
  // for categories
  // filter by parent category slug
  let matchedCategories = []
  if (Array.isArray(categories)) {
    categories.forEach(category => {
      if (category.parent && category.parent.slug === slug) {
        matchedCategories.push(category)
      }
    })
  }
  // returns array of macthed category objects
  return matchedCategories
}

/**
 * @method
 * @memberof ecomUtils
 * @name filterByParentSlug
 * @description Filter categories list by parent category slug.
 * @param {array} categories - List of category objects
 * @param {string} slug - Parent category slug value
 * @returns {array}
 *
 * @example
 * // Full object ref.: https://developers.e-com.plus/docs/api/#/store/categories/
 * const categories = []
 * categories.push({ name: 'PCs', slug: 'pcs', parent: { name: 'Info', slug: 'info' } })
 * categories.push({ name: 'Shirts', slug: 'shirts', parent: { name: 'Clothes', slug: 'clothes' } })
 * categories.push({ name: 'Info', slug: 'info' })
 * ecomUtils.filterByParentSlug(categories, 'info')
 * // => [ { name: 'PCs', slug: 'pcs', parent: { name: 'Info', slug: 'info' } } ]
 *
 * @example
 * // Importing this method standalone
 * import filterByParentSlug from '@ecomplus/utils/dist/methods/filterByParentSlug'
 */

export default filterByParentSlug
