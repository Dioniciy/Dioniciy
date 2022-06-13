export const selectFilters = (state) => {
    return state.filters
}
export const selectActiveFilters = (state) => {
    return {
        categories: state.filters.categories.filter(filter => filter.isChecked),
        brands: state.filters.brands.filter(filter => filter.isChecked)
    }
}
