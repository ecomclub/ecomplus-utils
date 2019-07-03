const alphabeticalSort = list => {
  if (Array.isArray(list)) {
    // try to sort by name or title
    return list.sort((a, b) => {
      if (a && b) {
        if (a.name) {
          // products, categories, brand...
          return a.name < b.name ? -1 : 1
        } else if (a.title) {
          // grids
          return a.title < b.title ? -1 : 1
        }
      }
      // fallback
      return a < b ? -1 : 1
    })
  }

  if (typeof list === 'object' && list !== null) {
    // suppose to be a 'list all' request body
    return alphabeticalSort(list.results)
  }
  console.error(new Error('`list` should be an array'))
  // always return an array
  return []
}

/**
 * @method
 * @memberof ecomUtils
 * @name alphabeticalSort
 * @description Sort list of objects alphabetically by name ot title property.
 * @param {array|object} list - Array of objects (products, brands...) or list body with 'results'
 * @returns {array}
 *
 * @example
 * // TODO
 *
 * @example
 * // Importing this method standalone
 * import alphabeticalSort from '@ecomplus/utils/dist/methods/alphabetical-sort'
 */

export default alphabeticalSort